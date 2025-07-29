import { PageBanner } from '@/components/PageBanner'
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
import { Calendar, Clock, MapPin, Star, Ticket } from 'lucide-react'
import Link from 'next/link'

interface Movie {
  id: number
  title: string
  year: number
  genre: string
  director: string
  country: string
  runtime: string
  rating: string
  description: string
  imageUrl: string
  showingDate: string
  venue: string
  price: number
  memberPrice: number
}

const nowPlayingMovies: Movie[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Comedy, Drama',
    director: 'Wes Anderson',
    country: 'USA',
    runtime: '99 min',
    rating: '8.1',
    description:
      'A legendary concierge at a famous European hotel between the wars becomes a trusted friend and mentor to a young employee.',
    imageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    showingDate: 'Friday, December 15, 2024',
    venue: 'Flagler College Auditorium',
    price: 12,
    memberPrice: 8,
  },
  {
    id: 2,
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller, Drama',
    director: 'Bong Joon-ho',
    country: 'South Korea',
    runtime: '132 min',
    rating: '8.6',
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    imageUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop',
    showingDate: 'Saturday, December 16, 2024',
    venue: 'St. Augustine Amphitheatre',
    price: 12,
    memberPrice: 8,
  },
]

const upcomingMovies: Movie[] = [
  {
    id: 3,
    title: 'La La Land',
    year: 2016,
    genre: 'Musical, Romance',
    director: 'Damien Chazelle',
    country: 'USA',
    runtime: '128 min',
    rating: '8.0',
    description: 'A jazz pianist falls for an aspiring actress in Los Angeles.',
    imageUrl:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop',
    showingDate: 'Sunday, December 17, 2024',
    venue: 'Lightner Museum',
    price: 12,
    memberPrice: 8,
  },
  {
    id: 4,
    title: 'Amélie',
    year: 2001,
    genre: 'Romance, Comedy',
    director: 'Jean-Pierre Jeunet',
    country: 'France',
    runtime: '122 min',
    rating: '8.3',
    description:
      'Amélie, an innocent and naive girl in Paris, with her own sense of justice, decides to help those around her.',
    imageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    showingDate: 'Monday, December 18, 2024',
    venue: 'Flagler College Auditorium',
    price: 12,
    memberPrice: 8,
  },
  {
    id: 5,
    title: 'The Shape of Water',
    year: 2017,
    genre: 'Drama, Fantasy',
    director: 'Guillermo del Toro',
    country: 'USA',
    runtime: '123 min',
    rating: '7.3',
    description:
      'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature.',
    imageUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop',
    showingDate: 'Tuesday, December 19, 2024',
    venue: 'St. Augustine Amphitheatre',
    price: 12,
    memberPrice: 8,
  },
]

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function NowPlayingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Now Playing"
        subtitle="Current and upcoming screenings"
        strapiMessage="Don't miss our special holiday screenings! Members receive priority access and discounted tickets. Join us for these exceptional films in our historic venues."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Special Announcements */}
        <div className="mb-8 p-6 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif font-bold text-charcoal mb-3">
            Special Announcements
          </h2>
          <p className="text-base text-charcoal/70 leading-relaxed">
            Join us for our special "Cinema Under the Stars" series this month!
            Every Friday evening, we'll be screening classic films in our
            outdoor amphitheater. Bring your own blankets and chairs.
            Refreshments and snacks available.
          </p>
        </div>

        {/* Featured Films - Two Horizontal Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
            Featured Films
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nowPlayingMovies.map((movie) => (
              <Card
                key={movie.id}
                className="overflow-hidden shadow-lg border-0 bg-white"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Movie Poster */}
                  <div className="lg:w-48 flex-shrink-0">
                    <img
                      src={movie.imageUrl}
                      alt={movie.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>

                  {/* Movie Details */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                        {movie.title} ({movie.year})
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="font-semibold">
                            {movie.rating}/10
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {movie.genre}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          R
                        </Badge>
                      </div>
                      <p className="text-base text-charcoal/80 mb-3 leading-relaxed line-clamp-2">
                        {movie.description}
                      </p>
                      <p className="text-sm text-charcoal/70 font-medium">
                        Director: {movie.director} • {movie.country} •{' '}
                        {movie.runtime}
                      </p>
                    </div>

                    {/* Showing Details */}
                    <div className="mb-4 p-4 bg-gradient-to-r from-sandstone/20 to-sandstone/10 rounded-lg border border-sandstone/30">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-3 lg:mb-0">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-ocean-blue" />
                            <span className="font-semibold text-sm">
                              {movie.showingDate}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-ocean-blue" />
                            <span className="text-sm font-medium">7:30 PM</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-ocean-blue" />
                            <span className="text-sm">{movie.venue}</span>
                          </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-3">
                          <div className="text-center lg:text-right">
                            <div className="text-2xl font-bold text-charcoal">
                              ${movie.price}
                            </div>
                            <div className="text-sm text-ocean-blue font-semibold">
                              Members: ${movie.memberPrice}
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
                                  movie.imageUrl
                                )}&date=${encodeURIComponent(
                                  movie.showingDate
                                )}&time=${encodeURIComponent(
                                  '7:30 PM'
                                )}&venue=${encodeURIComponent(
                                  movie.venue
                                )}&rating=${encodeURIComponent(
                                  movie.rating
                                )}&genre=${encodeURIComponent(
                                  movie.genre
                                )}&runtime=${encodeURIComponent(
                                  movie.runtime
                                )}`}
                              >
                                <Ticket className="mr-2 h-4 w-4" />
                                Purchase Ticket
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Films Carousel */}
        <div className="mb-8">
          <h3 className="text-xl font-serif font-bold text-charcoal mb-6">
            Upcoming Films
          </h3>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {upcomingMovies.map((movie) => (
                <CarouselItem
                  key={movie.id}
                  className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <Card className="overflow-hidden shadow-md border-0 bg-white">
                    <div className="aspect-[2/3] relative">
                      <img
                        src={movie.imageUrl}
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
                            {movie.rating}
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
                              movie.imageUrl
                            )}&date=${encodeURIComponent(
                              movie.showingDate
                            )}&time=${encodeURIComponent(
                              '7:30 PM'
                            )}&venue=${encodeURIComponent(
                              movie.venue
                            )}&rating=${encodeURIComponent(
                              movie.rating
                            )}&genre=${encodeURIComponent(
                              movie.genre
                            )}&runtime=${encodeURIComponent(movie.runtime)}`}
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

        {/* Member Promotion */}
        <div className="p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 rounded-lg border-2 border-ocean-blue/30">
          <h3 className="text-lg font-serif font-bold text-ocean-blue mb-2">
            Become a SAFS Member
          </h3>
          <p className="text-charcoal/70 mb-4">
            Join SAFS today and save up to 40% on all tickets, plus get priority
            booking and exclusive member events.
          </p>
          <Button asChild className="bg-ocean-blue hover:bg-ocean-blue-dark">
            <Link href="/membership">Join Now - $45/year</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
