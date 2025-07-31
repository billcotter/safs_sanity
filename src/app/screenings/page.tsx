import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Calendar, Clock, ExternalLink, Film, MapPin } from 'lucide-react'
import Link from 'next/link'

interface Screening {
  _id: string
  film: {
    _id: string
    title: string
    slug: { current: string }
    poster: any
    tmdbId: number
  }
  datetime: string
  venue: string
  venueAddress: string
  ticketPrice: string
  ticketLink: string
  capacity: number
  soldOut: boolean
  specialNotes: any[]
}

// Get screenings from Sanity
async function getScreenings(): Promise<Screening[]> {
  const screeningsQuery = `*[_type == "screening"] | order(datetime asc) {
    _id,
    film->{
      _id,
      title,
      slug,
      poster,
      tmdbId
    },
    datetime,
    venue,
    venueAddress,
    ticketPrice,
    ticketLink,
    capacity,
    soldOut,
    specialNotes
  }`

  try {
    const screenings = await client.fetch(screeningsQuery)
    return screenings
  } catch (error) {
    console.error('Error fetching screenings:', error)
    return []
  }
}

// Get TMDB data for a film
async function getTMDBData(tmdbId: number) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  if (!apiKey) return null

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching TMDB data:', error)
    return null
  }
}

// Group screenings by month
const groupScreeningsByMonth = (screenings: Screening[]) => {
  const grouped: { [key: string]: Screening[] } = {}

  screenings.forEach((screening) => {
    const date = new Date(screening.datetime)
    const monthKey = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    })

    if (!grouped[monthKey]) {
      grouped[monthKey] = []
    }
    grouped[monthKey].push(screening)
  })

  // Sort screenings within each month by date
  Object.keys(grouped).forEach((month) => {
    grouped[month].sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    )
  })

  return grouped
}

export default async function ScreeningsPage() {
  const screenings = await getScreenings()

  // Get TMDB data for each film (in parallel)
  const screeningsWithTMDB = await Promise.all(
    screenings.map(async (screening) => {
      const tmdbData = screening.film.tmdbId
        ? await getTMDBData(screening.film.tmdbId)
        : null
      return { ...screening, tmdbData }
    })
  )

  const groupedScreenings = groupScreeningsByMonth(screeningsWithTMDB)
  const sortedMonths = Object.keys(groupedScreenings).sort((a, b) => {
    const dateA = new Date(a)
    const dateB = new Date(b)
    return dateA.getTime() - dateB.getTime()
  })

  return (
    <>
      <PageBanner
        title="Screenings Calendar"
        subtitle="Upcoming film screenings and events"
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Screenings' }]} />

        {/* Filter Options */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="cursor-pointer">
                All Venues
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Flagler College
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Lightner Museum
              </Badge>
              <Badge variant="outline" className="cursor-pointer">
                Amphitheatre
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Calendar View
              </Button>
            </div>
          </div>
        </div>

        {/* Screenings by Month */}
        {sortedMonths.length > 0 ? (
          <div className="space-y-8">
            {sortedMonths.map((month) => (
              <div key={month}>
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  {month}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedScreenings[month].map((screening) => (
                    <Card
                      key={screening._id}
                      className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="flex">
                        {/* Film Poster */}
                        <div className="w-1/3">
                          <div className="aspect-[2/3] relative">
                            <img
                              src={
                                screening.film.poster
                                  ? urlForImage(screening.film.poster).url()
                                  : screening.tmdbData?.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${screening.tmdbData.poster_path}`
                                  : '/placeholder-poster.jpg'
                              }
                              alt={screening.film.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-ocean-blue text-white text-xs">
                                {screening.tmdbData?.vote_average?.toFixed(1) ||
                                  'N/A'}
                                /10
                              </Badge>
                            </div>
                          </div>
                        </div>

                        {/* Screening Details */}
                        <div className="w-2/3 p-4">
                          <h3 className="font-semibold text-charcoal mb-2 line-clamp-2">
                            {screening.film.title}
                          </h3>
                          <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>
                                {new Date(
                                  screening.datetime
                                ).toLocaleDateString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>
                                {new Date(
                                  screening.datetime
                                ).toLocaleTimeString('en-US', {
                                  hour: 'numeric',
                                  minute: '2-digit',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span className="line-clamp-1">
                                {screening.venue}
                              </span>
                            </div>
                          </div>
                          {screening.tmdbData?.genres && (
                            <div className="flex gap-1 mb-3">
                              {screening.tmdbData.genres
                                .slice(0, 2)
                                .map((genre: any) => (
                                  <Badge
                                    key={genre.id}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {genre.name}
                                  </Badge>
                                ))}
                            </div>
                          )}
                          {screening.ticketPrice && (
                            <p className="text-sm text-charcoal/70 mb-3">
                              {screening.ticketPrice}
                            </p>
                          )}
                          <div className="flex gap-2">
                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="flex-1"
                            >
                              <Link
                                href={`/films/${screening.film.slug.current}`}
                              >
                                <Film className="h-3 w-3 mr-1" />
                                Film Details
                              </Link>
                            </Button>
                            {screening.ticketLink ? (
                              <Button
                                asChild
                                size="sm"
                                className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark text-sandstone font-semibold transition-colors duration-200"
                              >
                                <Link href={screening.ticketLink}>
                                  <ExternalLink className="h-3 w-3 mr-1" />
                                  {screening.soldOut ? 'Sold Out' : 'Tickets'}
                                </Link>
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                className="flex-1 bg-gray-400 cursor-not-allowed"
                                disabled
                              >
                                Tickets TBA
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="h-12 w-12 text-charcoal/30 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              No upcoming screenings
            </h3>
            <p className="text-charcoal/70">
              Check back soon for new screenings and events.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
