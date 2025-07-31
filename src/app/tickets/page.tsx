import { Breadcrumbs } from '@/components/Breadcrumbs'
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
import { type TMDBMovie } from '@/lib/tmdb'
import {
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
  // Mock movies data since TMDB service is not available
  const mockMovies: MovieWithShowings[] = [
    {
      id: 1,
      title: 'The Grand Budapest Hotel',
      overview:
        'A legendary concierge at a famous European hotel between the wars becomes a trusted friend and mentor to a young employee.',
      poster_path: '/placeholder-poster.jpg',
      backdrop_path: '/placeholder-backdrop.jpg',
      release_date: '2014-03-07',
      runtime: 99,
      vote_average: 8.1,
      vote_count: 1000,
      genres: [
        { id: 1, name: 'Comedy' },
        { id: 2, name: 'Drama' },
      ],
      credits: { cast: [], crew: [] },
      videos: { results: [] },
      showings: generateShowings(1),
    },
    {
      id: 2,
      title: 'Parasite',
      overview:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      poster_path: '/placeholder-poster.jpg',
      backdrop_path: '/placeholder-backdrop.jpg',
      release_date: '2019-05-30',
      runtime: 132,
      vote_average: 8.6,
      vote_count: 2000,
      genres: [
        { id: 3, name: 'Thriller' },
        { id: 4, name: 'Drama' },
      ],
      credits: { cast: [], crew: [] },
      videos: { results: [] },
      showings: generateShowings(2),
    },
  ]

  const mockCarouselMovies: MovieWithShowings[] = [
    {
      id: 3,
      title: 'La La Land',
      overview: 'A jazz pianist falls for an aspiring actress in Los Angeles.',
      poster_path: '/placeholder-poster.jpg',
      backdrop_path: '/placeholder-backdrop.jpg',
      release_date: '2016-12-09',
      runtime: 128,
      vote_average: 8.0,
      vote_count: 1500,
      genres: [
        { id: 5, name: 'Musical' },
        { id: 6, name: 'Romance' },
      ],
      credits: { cast: [], crew: [] },
      videos: { results: [] },
      showings: generateShowings(3),
    },
    {
      id: 4,
      title: 'Amélie',
      overview:
        'Amélie, an innocent and naive girl in Paris, with her own sense of justice, decides to help those around her.',
      poster_path: '/placeholder-poster.jpg',
      backdrop_path: '/placeholder-backdrop.jpg',
      release_date: '2001-04-25',
      runtime: 122,
      vote_average: 8.3,
      vote_count: 1200,
      genres: [
        { id: 7, name: 'Romance' },
        { id: 8, name: 'Comedy' },
      ],
      credits: { cast: [], crew: [] },
      videos: { results: [] },
      showings: generateShowings(4),
    },
  ]

  const movies = mockMovies
  const carouselMovies = mockCarouselMovies

  return (
    <div className="min-h-screen bg-sandstone">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs items={[{ label: 'Tickets' }]} />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Purchase Tickets
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Reserve your seats for upcoming screenings and special events at
              the St. Augustine Film Society.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Member Benefits Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 rounded-lg border border-ocean-blue/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-6 w-6 text-ocean-blue" />
              <div>
                <h3 className="font-semibold text-charcoal">Member Benefits</h3>
                <p className="text-sm text-charcoal/70">
                  Members save up to 40% on tickets and get priority access
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/membership">Join Now</Link>
            </Button>
          </div>
        </div>

        {/* Featured Screenings */}
        {movies.length > 0 && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">
                Featured Screenings
              </h2>
              <p className="text-charcoal/70">
                Don't miss these upcoming films at our historic venues
              </p>
            </div>

            <div className="space-y-6">
              {movies.map((movie: MovieWithShowings) => (
                <Card
                  key={movie.id}
                  className="overflow-hidden shadow-lg border border-sandstone-dark/20"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Movie Poster */}
                    <div className="lg:w-48 flex-shrink-0">
                      <img
                        src={movie.poster_path || '/placeholder-poster.jpg'}
                        alt={movie.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>

                    {/* Movie Details */}
                    <div className="flex-1 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                          {movie.title} (
                          {new Date(movie.release_date).getFullYear()})
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="font-semibold">
                              {movie.vote_average.toFixed(1)}
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
                            PG
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

                      {/* Special Notes */}
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
                              <span className="text-sm font-medium">
                                {showing.venue}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-ocean-blue" />
                              <span className="text-sm font-medium">
                                {showing.availableSeats} seats available
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button
                              size="default"
                              variant="outline"
                              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-4 py-2 text-sm font-semibold"
                              asChild
                            >
                              <Link href={`/film/${slugifyTitle(movie.title)}`}>
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
                                  movie.poster_path || '/placeholder-poster.jpg'
                                )}&date=${encodeURIComponent(
                                  showing.date
                                )}&time=${encodeURIComponent(
                                  showing.time
                                )}&venue=${encodeURIComponent(
                                  showing.venue
                                )}&rating=${encodeURIComponent(
                                  movie.vote_average.toFixed(1)
                                )}&genre=${encodeURIComponent(
                                  movie.overview.length > 100
                                    ? 'Feature Film'
                                    : 'Short Film'
                                )}&runtime=${encodeURIComponent(
                                  `${Math.round(movie.vote_average * 10)} min`
                                )}`}
                              >
                                <CreditCard className="mr-2 h-4 w-4" />
                                Purchase Ticket
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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
                          src={movie.poster_path || '/placeholder-poster.jpg'}
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
                              {movie.vote_average.toFixed(1)}
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
                                movie.poster_path || '/placeholder-poster.jpg'
                              )}&date=${encodeURIComponent(
                                movie.showings[0]?.date || ''
                              )}&time=${encodeURIComponent(
                                movie.showings[0]?.time || ''
                              )}&venue=${encodeURIComponent(
                                movie.showings[0]?.venue || ''
                              )}&rating=${encodeURIComponent(
                                movie.vote_average.toFixed(1)
                              )}&genre=${encodeURIComponent(
                                movie.overview.length > 100
                                  ? 'Feature Film'
                                  : 'Short Film'
                              )}&runtime=${encodeURIComponent(
                                `${Math.round(movie.vote_average * 10)} min`
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
  )
}
