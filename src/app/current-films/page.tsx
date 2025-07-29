import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Clock, ExternalLink, MapPin, Star } from 'lucide-react'
import Link from 'next/link'

interface Film {
  id: string
  title: string
  year: number
  director: string
  genre: string[]
  runtime: string
  rating: number
  posterUrl: string
  description: string
  venue: {
    name: string
    slug: string
    address: string
  }
  screeningDate: string
  ticketUrl?: string
}

// Mock data for current films
const currentFilms: Film[] = [
  {
    id: '1',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    director: 'Wes Anderson',
    genre: ['Comedy', 'Drama'],
    runtime: '1h 39m',
    rating: 8.1,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      'A legendary concierge at a famous European hotel between the wars becomes a trusted friend to a young employee.',
    venue: {
      name: 'Flagler College Auditorium',
      slug: 'flagler-college',
      address: '74 King St, St. Augustine, FL 32084',
    },
    screeningDate: '2024-01-15',
    ticketUrl: 'https://example.com/tickets/1',
  },
  {
    id: '2',
    title: 'Moonlight',
    year: 2016,
    director: 'Barry Jenkins',
    genre: ['Drama'],
    runtime: '1h 51m',
    rating: 7.4,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.',
    venue: {
      name: 'Lightner Museum',
      slug: 'lightner-museum',
      address: '75 King St, St. Augustine, FL 32084',
    },
    screeningDate: '2024-01-20',
    ticketUrl: 'https://example.com/tickets/2',
  },
  {
    id: '3',
    title: 'Parasite',
    year: 2019,
    director: 'Bong Joon-ho',
    genre: ['Drama', 'Thriller'],
    runtime: '2h 12m',
    rating: 8.6,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    venue: {
      name: 'St. Augustine Amphitheatre',
      slug: 'amphitheatre',
      address: '1340C A1A S, St. Augustine, FL 32080',
    },
    screeningDate: '2024-01-25',
    ticketUrl: 'https://example.com/tickets/3',
  },
  {
    id: '4',
    title: 'The Shape of Water',
    year: 2017,
    director: 'Guillermo del Toro',
    genre: ['Drama', 'Fantasy', 'Romance'],
    runtime: '2h 3m',
    rating: 7.3,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.',
    venue: {
      name: 'Flagler College Auditorium',
      slug: 'flagler-college',
      address: '74 King St, St. Augustine, FL 32084',
    },
    screeningDate: '2024-01-30',
    ticketUrl: 'https://example.com/tickets/4',
  },
  {
    id: '5',
    title: 'La La Land',
    year: 2016,
    director: 'Damien Chazelle',
    genre: ['Comedy', 'Drama', 'Musical'],
    runtime: '2h 8m',
    rating: 8.0,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      'While navigating their careers in Los Angeles, a musician and an actress fall in love while attempting to reconcile their aspirations for the future.',
    venue: {
      name: 'Lightner Museum',
      slug: 'lightner-museum',
      address: '75 King St, St. Augustine, FL 32084',
    },
    screeningDate: '2024-02-05',
    ticketUrl: 'https://example.com/tickets/5',
  },
  {
    id: '6',
    title: 'Get Out',
    year: 2017,
    director: 'Jordan Peele',
    genre: ['Horror', 'Mystery', 'Thriller'],
    runtime: '1h 44m',
    rating: 7.7,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    description:
      "A young African American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    venue: {
      name: 'St. Augustine Amphitheatre',
      slug: 'amphitheatre',
      address: '1340C A1A S, St. Augustine, FL 32080',
    },
    screeningDate: '2024-02-10',
    ticketUrl: 'https://example.com/tickets/6',
  },
]

export default function CurrentFilmsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Current Films"
        subtitle="Now showing at the St. Augustine Film Society"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="Experience the best of independent and classic cinema at our carefully curated selection of current films. Each screening is thoughtfully chosen to inspire, entertain, and provoke meaningful discussion."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-sandstone-dark">
            <li>
              <Link
                href="/"
                className="hover:text-ocean-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-sandstone">/</li>
            <li className="text-ocean-blue font-medium">Current Films</li>
          </ol>
        </nav>

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentFilms.map((film) => (
            <Card
              key={film.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Poster */}
              <div className="relative">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="secondary"
                    className="bg-ocean-blue text-white"
                  >
                    {film.year}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg text-sandstone-dark mb-2 line-clamp-2">
                  {film.title}
                </h3>

                <div className="flex items-center text-sm text-sandstone mb-2">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>{film.rating}/10</span>
                </div>

                <p className="text-sm text-sandstone-dark mb-3 line-clamp-3">
                  {film.description}
                </p>

                {/* Metadata */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-sandstone">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>
                      {new Date(film.screeningDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-sandstone">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{film.runtime}</span>
                  </div>

                  <div className="flex items-center text-xs text-sandstone">
                    <span className="font-medium">Director:</span>
                    <span className="ml-1">{film.director}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {film.genre.map((genre) => (
                      <Badge key={genre} variant="outline" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Venue Link */}
                <div className="mb-4">
                  <Link
                    href={`/venues/${film.venue.slug}`}
                    className="flex items-center text-xs text-ocean-blue hover:text-ocean-blue-dark transition-colors"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    <span className="line-clamp-1">{film.venue.name}</span>
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark text-white"
                  >
                    <Link href={`/films/${film.id}`}>Details</Link>
                  </Button>

                  {film.ticketUrl && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                    >
                      <Link href={film.ticketUrl}>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Films Message */}
        {currentFilms.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-sandstone-dark mb-2">
              No Current Films
            </h3>
            <p className="text-sandstone">
              Check back soon for our upcoming screenings!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
