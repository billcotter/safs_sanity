import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Calendar, Star, Ticket, Users } from 'lucide-react'
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

// Current Film Card Component
function CurrentFilmCard({ film }: { film: CurrentFilm }) {
  const nextScreening = film.upcomingScreenings[0]
  const hasMultipleScreenings = film.upcomingScreenings.length > 1

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  return (
    <Card className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="md:flex">
        {/* Left Side: Poster */}
        <div className="md:w-1/3">
          <Link href={`/films/${film.slug.current}`}>
            <div className="aspect-[2/3] relative group">
              <img
                src={
                  film.poster
                    ? urlForImage(film.poster).width(300).height(450).url()
                    : '/placeholder-poster.jpg'
                }
                alt={film.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {film.imdbRating && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {film.imdbRating.toFixed(1)}
                  </Badge>
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-2/3 p-6">
          {/* Title and basic info */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-charcoal mb-2">
              <Link
                href={`/films/${film.slug.current}`}
                className="hover:text-ocean-blue transition-colors"
              >
                {film.title}
              </Link>
            </h3>
            <div className="flex items-center gap-4 text-sm text-charcoal/70 mb-3">
              <span>{film.releaseYear}</span>
              <span>•</span>
              <span>{film.runtime} min</span>
              {film.rating && (
                <>
                  <span>•</span>
                  <span>{film.rating}</span>
                </>
              )}
            </div>
          </div>

          {/* Directors */}
          {film.directors && film.directors.length > 0 && (
            <div className="mb-3">
              <p className="text-sm text-charcoal/70 mb-1">Directed by</p>
              <div className="flex flex-wrap gap-2">
                {film.directors.map((director) => (
                  <Link
                    key={director.slug.current}
                    href={`/people/${director.slug.current}`}
                    className="text-sm text-ocean-blue hover:underline"
                  >
                    {director.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Genres */}
          {film.genres && film.genres.length > 0 && (
            <div className="mb-3">
              <div className="flex gap-1">
                {film.genres.slice(0, 3).map((genre) => (
                  <Badge key={genre} variant="outline" className="text-xs">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Synopsis */}
          <p className="text-sm text-charcoal/70 mb-4 line-clamp-3">
            {film.synopsis}
          </p>

          {/* Next Screening Section */}
          {nextScreening && (
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-semibold text-charcoal">
                    {formatDate(nextScreening.datetime)} at{' '}
                    {formatTime(nextScreening.datetime)}
                  </p>
                  <Link
                    href={`/venues/${nextScreening.venue.slug.current}`}
                    className="text-sm text-ocean-blue hover:underline"
                  >
                    {nextScreening.venue.name}
                  </Link>
                </div>
                <div className="text-right">
                  {nextScreening.ticketPrice && (
                    <p className="font-semibold text-charcoal">
                      ${nextScreening.ticketPrice}
                    </p>
                  )}
                  {nextScreening.soldOut ? (
                    <Badge className="bg-red-500 text-white">Sold Out</Badge>
                  ) : (
                    <Button
                      size="sm"
                      className="bg-ocean-blue hover:bg-ocean-blue-dark"
                    >
                      <Ticket className="mr-1 h-3 w-3" />
                      Get Tickets
                    </Button>
                  )}
                </div>
              </div>
              {hasMultipleScreenings && (
                <Link
                  href={`/screenings?film=${film.slug.current}`}
                  className="text-sm text-ocean-blue hover:underline"
                >
                  View all showtimes ({film.upcomingScreenings.length})
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

// Upcoming Film Card Component
function UpcomingFilmCard({ film }: { film: UpcomingFilm }) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[2/3] relative">
        <Link href={`/films/${film.slug.current}`}>
          <img
            src={
              film.poster
                ? urlForImage(film.poster).width(250).height(375).url()
                : '/placeholder-poster.jpg'
            }
            alt={film.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <Badge className="absolute top-2 left-2 bg-ocean-blue text-white">
          Coming Soon
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-charcoal mb-1">
          <Link
            href={`/films/${film.slug.current}`}
            className="hover:text-ocean-blue transition-colors"
          >
            {film.title}
          </Link>
        </h3>
        <p className="text-xs text-charcoal/70 mb-2">{film.releaseYear}</p>
        <p className="text-xs text-charcoal/70 line-clamp-2 mb-2">
          {film.synopsis}
        </p>
        {film.nextScreening && (
          <p className="text-xs text-ocean-blue">
            {new Date(film.nextScreening.datetime).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })}{' '}
            at {film.nextScreening.venue.name}
          </p>
        )}
      </div>
    </Card>
  )
}

export default async function FilmsPage() {
  const [currentFilms, upcomingFilms] = await Promise.all([
    getCurrentFilms(),
    getUpcomingFilms(),
  ])

  return (
    <>
      <PageBanner
        title="Now Playing"
        subtitle="Current and upcoming films at St. Augustine Film Society"
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Now Playing' }]} />

        {/* Current Films Section */}
        {currentFilms.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Currently Screening
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentFilms.map((film) => (
                <CurrentFilmCard key={film._id} film={film} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-12 text-center py-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
              No Films Currently Screening
            </h2>
            <p className="text-charcoal/70 mb-6">
              Check out our archive for past screenings or browse upcoming films
              below.
            </p>
            <Button asChild variant="outline">
              <Link href="/archive">
                <Calendar className="mr-2 h-4 w-4" />
                View Archive
              </Link>
            </Button>
          </div>
        )}

        {/* Coming Soon Section */}
        {upcomingFilms.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Coming Soon
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {upcomingFilms.map((film) => (
                <UpcomingFilmCard key={film._id} film={film} />
              ))}
            </div>
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
      </div>
    </>
  )
}
