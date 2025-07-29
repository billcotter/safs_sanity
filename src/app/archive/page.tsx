'use client'

import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  MapPin,
  Star,
} from 'lucide-react'
import Link from 'next/link'

interface Film {
  id: string
  title: string
  year: number
  director: string
  genre: string[]
  country: string
  language: string
  runtime: string
  rating: number
  posterUrl: string
  screeningDate: string
  venue: string
  description: string
}

// Mock data for past screenings
const pastFilms: Film[] = [
  {
    id: '1',
    title: 'The Grand Budapest Hotel',
    year: 2014,
    director: 'Wes Anderson',
    genre: ['Comedy', 'Drama'],
    country: 'USA',
    language: 'English',
    runtime: '99 min',
    rating: 8.1,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-01-15',
    venue: 'Flagler College Auditorium',
    description:
      'A legendary concierge at a famous European hotel between the wars becomes a trusted friend and mentor to a young employee.',
  },
  {
    id: '2',
    title: 'Parasite',
    year: 2019,
    director: 'Bong Joon-ho',
    genre: ['Thriller', 'Drama'],
    country: 'South Korea',
    language: 'Korean',
    runtime: '132 min',
    rating: 8.6,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-01-22',
    venue: 'Lightner Museum',
    description:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  },
  {
    id: '3',
    title: 'La La Land',
    year: 2016,
    director: 'Damien Chazelle',
    genre: ['Musical', 'Romance'],
    country: 'USA',
    language: 'English',
    runtime: '128 min',
    rating: 8.0,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-02-05',
    venue: 'St. Augustine Amphitheatre',
    description: 'A jazz pianist falls for an aspiring actress in Los Angeles.',
  },
  {
    id: '4',
    title: 'The Shape of Water',
    year: 2017,
    director: 'Guillermo del Toro',
    genre: ['Fantasy', 'Romance'],
    country: 'USA',
    language: 'English',
    runtime: '123 min',
    rating: 7.3,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-02-12',
    venue: 'Flagler College Auditorium',
    description:
      'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature.',
  },
  {
    id: '5',
    title: 'Roma',
    year: 2018,
    director: 'Alfonso Cuarón',
    genre: ['Drama'],
    country: 'Mexico',
    language: 'Spanish',
    runtime: '135 min',
    rating: 7.7,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-02-19',
    venue: 'Lightner Museum',
    description:
      "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
  },
  {
    id: '6',
    title: 'Moonlight',
    year: 2016,
    director: 'Barry Jenkins',
    genre: ['Drama'],
    country: 'USA',
    language: 'English',
    runtime: '111 min',
    rating: 7.4,
    posterUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
    screeningDate: '2024-03-05',
    venue: 'Flagler College Auditorium',
    description:
      'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.',
  },
]

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Film Archive"
        subtitle="Past screenings and cinematic memories"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="Explore our rich history of film screenings. From classic masterpieces to contemporary gems, discover the diverse cinematic experiences we've shared with our community."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-charcoal/60">
            <li>
              <Link
                href="/"
                className="hover:text-ocean-blue transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-charcoal">Archive</span>
            </li>
          </ol>
        </nav>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              Past Screenings
            </h2>
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="thriller">Thriller</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="musical">Musical</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <MapPin className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Venue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Venues</SelectItem>
                  <SelectItem value="flagler">Flagler College</SelectItem>
                  <SelectItem value="lightner">Lightner Museum</SelectItem>
                  <SelectItem value="amphitheatre">Amphitheatre</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Film Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {pastFilms.map((film) => (
            <Card
              key={film.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={film.posterUrl}
                  alt={film.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-ocean-blue text-white">
                    <Star className="mr-1 h-3 w-3" />
                    {film.rating}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-serif font-bold text-lg text-charcoal mb-2 line-clamp-2">
                  {film.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-charcoal/70 mb-2">
                  <span>{film.year}</span>
                  <span>•</span>
                  <span>{film.runtime}</span>
                </div>

                <p className="text-sm text-charcoal/70 mb-3 line-clamp-2">
                  {film.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-charcoal/60">
                    <MapPin className="h-3 w-3" />
                    <span>{film.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal/60">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {new Date(film.screeningDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {film.genre.map((g) => (
                    <Badge
                      key={g}
                      variant="outline"
                      className="text-xs border-sandstone text-sandstone-dark"
                    >
                      {g}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-charcoal/60">
                  <span>{film.director}</span>
                  <span>{film.country}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
          </div>
          <Button variant="outline" size="sm">
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Discover More Cinema
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Our archive represents just a fraction of the cinematic experiences
            we've shared. Join us for current screenings and become part of our
            ongoing film journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/now-playing">
                <Calendar className="mr-2 h-5 w-5" />
                View Current Films
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/membership">
                <Star className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
