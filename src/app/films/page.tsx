import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FilmCardGrid } from '@/components/FilmCardGrid'
import { PageLayout } from '@/components/PageLayout'
import { UniversalBanner } from '@/components/UniversalBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/safs-button'
import { client } from '@/sanity/lib/client'
import { Calendar, Users } from 'lucide-react'
import Link from 'next/link'

interface CurrentFilm {
  _id: string
  title: string
  slug: { current: string }
  poster: any
  synopsis: string
  releaseYear: number
  runtime: number
  genres: string[]
  rating: string
  imdbRating?: number
  directors: Array<{ name: string; slug: { current: string } }>
  actors: Array<{ name: string; slug: { current: string } }>
  upcomingScreenings: Array<{
    _id: string
    datetime: string
    venue: { name: string; slug: { current: string } }
    ticketPrice?: number
    soldOut: boolean
  }>
}

interface UpcomingFilm {
  _id: string
  title: string
  slug: { current: string }
  poster: any
  synopsis: string
  releaseYear: number
  nextScreening?: {
    datetime: string
    venue: { name: string }
  }
}

// Get current films (with screenings in next 30 days)
async function getCurrentFilms(): Promise<CurrentFilm[]> {
  const currentFilmsQuery = `*[_type == "film" && count(*[_type == "screening" && 
    film._ref == ^._id && 
    datetime >= now() && 
    datetime <= now() + 60*60*24*30
  ]) > 0] | order(_createdAt desc) {
    _id,
    title,
    slug,
    poster,
    synopsis,
    releaseYear,
    runtime,
    genres,
    rating,
    imdbRating,
    directors[]->{name, slug},
    actors[0...3]->{name, slug},
    "upcomingScreenings": *[_type == "screening" && 
      film._ref == ^._id && 
      datetime >= now()
    ] | order(datetime asc) {
      _id,
      datetime,
      venue->{name, slug},
      ticketPrice,
      soldOut
    }
  }`

  try {
    const films = await client.fetch(currentFilmsQuery)
    return films
  } catch (error) {
    console.error('Error fetching current films:', error)
    return []
  }
}

// Get upcoming films (with screenings 30+ days out)
async function getUpcomingFilms(): Promise<UpcomingFilm[]> {
  const upcomingFilmsQuery = `*[_type == "film" && count(*[_type == "screening" && 
    film._ref == ^._id && 
    datetime > now() + 60*60*24*30
  ]) > 0] | order(_createdAt desc)[0...4] {
    _id,
    title,
    slug,
    poster,
    synopsis,
    releaseYear,
    "nextScreening": *[_type == "screening" && 
      film._ref == ^._id
    ] | order(datetime asc)[0] {
      datetime,
      venue->{name}
    }
  }`

  try {
    const films = await client.fetch(upcomingFilmsQuery)
    return films
  } catch (error) {
    console.error('Error fetching upcoming films:', error)
    return []
  }
}

interface FilmsPageProps {
  searchParams: Promise<{ country?: string; genre?: string }>
}

export default async function FilmsPage({ searchParams }: FilmsPageProps) {
  const params = await searchParams
  const { country, genre } = params

  const [currentFilms, upcomingFilms] = await Promise.all([
    getCurrentFilms(),
    getUpcomingFilms(),
  ])

  // Filter films based on query parameters
  const filterFilms = (films: any[]) => {
    return films.filter((film) => {
      if (country && film.country) {
        const filmCountry = film.country.toLowerCase().replace(/\s+/g, '-')
        if (filmCountry !== country.toLowerCase()) return false
      }
      if (genre && film.genres) {
        const filmGenres = film.genres.map((g: string) =>
          g.toLowerCase().replace(/\s+/g, '-')
        )
        if (!filmGenres.includes(genre.toLowerCase())) return false
      }
      return true
    })
  }

  const filteredCurrentFilms = filterFilms(currentFilms)
  const filteredUpcomingFilms = filterFilms(upcomingFilms)

  // Extract screenings for current films
  const currentScreenings = filteredCurrentFilms
    .map((film) => film.upcomingScreenings?.[0] || null)
    .filter(Boolean)

  return (
    <>
      <UniversalBanner pageType="now-playing" />

      <PageLayout>
        <Breadcrumbs items={[{ label: 'Now Playing' }]} />

        {/* Filter Indicator */}
        {(country || genre) && (
          <div className="mb-6 p-4 bg-ocean-blue/10 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-charcoal">
                  Filtered by:
                </span>
                {country && (
                  <Badge variant="outline" className="bg-white">
                    Country:{' '}
                    {country
                      .replace(/-/g, ' ')
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Badge>
                )}
                {genre && (
                  <Badge variant="outline" className="bg-white">
                    Genre:{' '}
                    {genre
                      .replace(/-/g, ' ')
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </Badge>
                )}
              </div>
              <Button asChild size="sm" variant="outline">
                <Link href="/films">Clear Filters</Link>
              </Button>
            </div>
          </div>
        )}

        {/* Current Films Section */}
        {filteredCurrentFilms.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Currently Screening
            </h2>
            <FilmCardGrid
              films={filteredCurrentFilms}
              screenings={currentScreenings}
              type="now-playing"
            />
          </div>
        ) : (
          <div className="mb-12 text-center py-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
              {country || genre
                ? 'No Films Match Your Filters'
                : 'No Films Currently Screening'}
            </h2>
            <p className="text-charcoal/70 mb-6">
              {country || genre
                ? 'Try adjusting your filters or browse all films.'
                : 'Check out our archive for past screenings or browse upcoming films below.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {(country || genre) && (
                <Button asChild variant="outline">
                  <Link href="/films">View All Films</Link>
                </Button>
              )}
              <Button asChild variant="outline">
                <Link href="/archive">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Archive
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Coming Soon Section */}
        {filteredUpcomingFilms.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Coming Soon
            </h2>
            <FilmCardGrid films={filteredUpcomingFilms} type="now-playing" />
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center py-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 rounded-lg">
          <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
            Explore Our Film Collection
          </h3>
          <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Discover our curated selection of cinematic masterpieces, from
            contemporary classics to timeless favorites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-ocean-blue hover:bg-ocean-blue-dark">
              <Link href="/archive">
                <Calendar className="mr-2 h-4 w-4" />
                Browse Archive
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/membership">
                <Users className="mr-2 h-4 w-4" />
                Join SAFS
              </Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
