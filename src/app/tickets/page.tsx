import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { tmdbService, type TMDBMovie } from '@/lib/tmdb'
import {
  ArrowRight,
  Calendar,
  Clock,
  CreditCard,
  Crown,
  MapPin,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

interface Showing {
  id: number
  date: string
  time: string
  venue: string
  price: number
  memberPrice: number
  availableSeats: number
}

interface MovieWithShowings extends TMDBMovie {
  showings: Showing[]
}

// Generate sample showings for movies
function generateShowings(movieId: number): Showing[] {
  const venues = [
    'Flagler College Auditorium',
    'St. Augustine Amphitheatre',
    'Lightner Museum',
    'St. Augustine City Hall',
  ]

  const times = ['2:00 PM', '7:30 PM', '8:00 PM']

  // Generate only 1 showing per movie
  const daysFromNow = Math.floor(Math.random() * 30) + 1
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)

  return [
    {
      id: movieId * 100,
      date: date.toISOString().split('T')[0],
      time: times[Math.floor(Math.random() * times.length)],
      venue: venues[Math.floor(Math.random() * venues.length)],
      price: Math.floor(Math.random() * 8) + 10, // $10-17
      memberPrice: Math.floor(Math.random() * 5) + 6, // $6-10
      availableSeats: Math.floor(Math.random() * 50) + 20, // 20-69 seats
    },
  ]
}

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default async function TicketsPage() {
  // Fetch movies from TMDB
  let movies: MovieWithShowings[] = []
  let carouselMovies: MovieWithShowings[] = []

  try {
    // Get popular movies from TMDB
    const popularMovies = await tmdbService.getPopularMovies(1)

    // Transform TMDB movies to our format with showings (only 2 main cards)
    movies = popularMovies.results.slice(0, 2).map((movie) => ({
      ...movie,
      showings: generateShowings(movie.id),
    }))

    // Get additional movies for carousel (5 more)
    carouselMovies = popularMovies.results.slice(2, 7).map((movie) => ({
      ...movie,
      showings: generateShowings(movie.id),
    }))
  } catch (error) {
    console.error('Error fetching TMDB movies:', error)
    // Fallback to empty array if TMDB fails
    movies = []
    carouselMovies = []
  }

  return (
    <div className="min-h-screen bg-sandstone">
      {/* Hero Section with Member Promotion */}
      <div className="bg-gradient-to-b from-charcoal to-charcoal-dark text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Get Your Tickets
            </h1>
            <p className="text-lg text-sandstone/90 max-w-2xl mx-auto mb-6">
              Experience the best of cinema in the nation's oldest city
            </p>
          </div>

          {/* Member Promotion Card */}
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <Crown className="h-6 w-6 text-yellow-400 mr-2" />
                      <h2 className="text-2xl font-serif font-bold text-white">
                        Become a Member
                      </h2>
                    </div>
                    <p className="text-sandstone/90 text-base mb-3 max-w-md">
                      Save up to 40% on tickets, get priority booking, and enjoy
                      exclusive member-only events.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <div className="flex items-center gap-2 text-sandstone">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">Priority booking</span>
                      </div>
                      <div className="flex items-center gap-2 text-sandstone">
                        <CreditCard className="h-4 w-4" />
                        <span className="text-sm">40% off tickets</span>
                      </div>
                      <div className="flex items-center gap-2 text-sandstone">
                        <Star className="h-4 w-4" />
                        <span className="text-sm">Exclusive events</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-3">
                      <div className="text-3xl font-bold text-white">$75</div>
                      <div className="text-sandstone text-sm">per year</div>
                    </div>
                    <Link href="/membership">
                      <Button
                        size="default"
                        className="bg-white text-ocean-blue hover:bg-sandstone font-semibold px-6 py-2"
                      >
                        Join Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Movie Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-3">
              Upcoming Screenings
            </h2>
            <p className="text-charcoal/70">
              Browse our selection of films and book your tickets
            </p>
          </div>

          {movies.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-charcoal/70 text-lg">
                Loading movies from TMDB...
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {movies.map((movie: MovieWithShowings) => (
                <Card
                  key={movie.id}
                  className="overflow-hidden shadow-lg border-0 bg-white"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Movie Poster */}
                    <div className="lg:w-48 flex-shrink-0">
                      <img
                        src={tmdbService.getPosterUrl(
                          movie.poster_path,
                          'w342'
                        )}
                        alt={movie.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                          {movie.title} (
                          {tmdbService.getYearFromDate(movie.release_date)})
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="font-semibold">
                              {tmdbService.formatVoteAverage(
                                movie.vote_average
                              )}
                            </span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs px-2 py-1"
                          >
                            {movie.overview.length > 100
                              ? 'Feature Film'
                              : 'Short Film'}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-xs px-2 py-1"
                          >
                            {movie.adult ? 'R' : 'PG'}
                          </Badge>
                        </div>
                        <p className="text-base text-charcoal/80 mb-3 leading-relaxed line-clamp-2">
                          {movie.overview}
                        </p>
                        <p className="text-sm text-charcoal/70 font-medium">
                          Released:{' '}
                          {new Date(movie.release_date).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </p>
                      </div>

                      {/* Strapi Content Field */}
                      <div className="mb-4 p-4 bg-sandstone/30 rounded-lg shadow-sm">
                        <h4 className="text-sm font-semibold text-charcoal/80 mb-2">
                          Special Notes
                        </h4>
                        <p className="text-sm text-charcoal/70 leading-relaxed">
                          This screening features a special introduction by
                          local film historian Dr. Sarah Mitchell. Q&A session
                          to follow the film. Refreshments available in the
                          lobby.
                        </p>
                      </div>

                      {/* Single Showing */}
                      {movie.showings.map((showing: Showing) => (
                        <div
                          key={showing.id}
                          className="flex flex-col lg:flex-row lg:items-center justify-between p-4 bg-gradient-to-r from-sandstone/20 to-sandstone/10 rounded-lg border border-sandstone/30"
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-3 lg:mb-0">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-ocean-blue" />
                              <span className="font-semibold text-sm">
                                {new Date(showing.date).toLocaleDateString(
                                  'en-US',
                                  {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric',
                                  }
                                )}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-ocean-blue" />
                              <span className="text-sm font-medium">
                                {showing.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-ocean-blue" />
                              <span className="text-sm">{showing.venue}</span>
                            </div>
                            <Badge
                              variant="outline"
                              className="text-xs px-2 py-1"
                            >
                              {showing.availableSeats} seats left
                            </Badge>
                          </div>

                          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                            <div className="text-center lg:text-right">
                              <div className="text-2xl font-bold text-charcoal">
                                ${showing.price}
                              </div>
                              <div className="text-sm text-ocean-blue font-semibold">
                                Members: ${showing.memberPrice}
                              </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <Button
                                size="default"
                                variant="outline"
                                className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-4 py-2 text-sm font-semibold"
                                asChild
                              >
                                <Link
                                  href={`/film/${slugifyTitle(movie.title)}`}
                                >
                                  Details
                                </Link>
                              </Button>
                              <Button
                                size="default"
                                className="bg-ocean-blue hover:bg-ocean-blue-dark text-white px-4 py-2 text-sm font-semibold"
                                asChild
                              >
                                <Link
                                  href={`/purchase?movieId=${
                                    movie.id
                                  }&title=${encodeURIComponent(
                                    movie.title
                                  )}&poster=${encodeURIComponent(
                                    tmdbService.getPosterUrl(
                                      movie.poster_path,
                                      'w342'
                                    )
                                  )}&date=${encodeURIComponent(
                                    showing.date
                                  )}&time=${encodeURIComponent(
                                    showing.time
                                  )}&venue=${encodeURIComponent(
                                    showing.venue
                                  )}&rating=${encodeURIComponent(
                                    tmdbService.formatVoteAverage(
                                      movie.vote_average
                                    )
                                  )}&genre=${encodeURIComponent(
                                    movie.overview.length > 100
                                      ? 'Feature Film'
                                      : 'Short Film'
                                  )}&runtime=${encodeURIComponent(
                                    tmdbService.formatRuntime(
                                      movie.vote_average * 10
                                    )
                                  )}`}
                                >
                                  <CreditCard className="mr-2 h-4 w-4" />
                                  Purchase Ticket
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Carousel Section */}
          {carouselMovies.length > 0 && (
            <div className="mt-12">
              <div className="text-center mb-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  More Films
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Discover additional screenings and events
                </p>
              </div>

              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {carouselMovies.map((movie: MovieWithShowings) => (
                    <CarouselItem
                      key={movie.id}
                      className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <Card className="overflow-hidden shadow-md border-0 bg-white">
                        <div className="aspect-[2/3] relative">
                          <img
                            src={tmdbService.getPosterUrl(
                              movie.poster_path,
                              'w185'
                            )}
                            alt={movie.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <h4 className="text-white font-semibold text-sm line-clamp-2">
                              {movie.title}
                            </h4>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="h-3 w-3 text-yellow-400" />
                              <span className="text-white text-xs">
                                {tmdbService.formatVoteAverage(
                                  movie.vote_average
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-3">
                          <div className="space-y-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white text-xs"
                              asChild
                            >
                              <Link href={`/film/${slugifyTitle(movie.title)}`}>
                                Details
                              </Link>
                            </Button>
                            <Button
                              size="sm"
                              className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white text-xs"
                              asChild
                            >
                              <Link
                                href={`/purchase?movieId=${
                                  movie.id
                                }&title=${encodeURIComponent(
                                  movie.title
                                )}&poster=${encodeURIComponent(
                                  tmdbService.getPosterUrl(
                                    movie.poster_path,
                                    'w185'
                                  )
                                )}&date=${encodeURIComponent(
                                  movie.showings[0]?.date || ''
                                )}&time=${encodeURIComponent(
                                  movie.showings[0]?.time || ''
                                )}&venue=${encodeURIComponent(
                                  movie.showings[0]?.venue || ''
                                )}&rating=${encodeURIComponent(
                                  tmdbService.formatVoteAverage(
                                    movie.vote_average
                                  )
                                )}&genre=${encodeURIComponent(
                                  movie.overview.length > 100
                                    ? 'Feature Film'
                                    : 'Short Film'
                                )}&runtime=${encodeURIComponent(
                                  tmdbService.formatRuntime(
                                    movie.vote_average * 10
                                  )
                                )}`}
                              >
                                Purchase Ticket
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
