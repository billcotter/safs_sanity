'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Clock, Info, MapPin, Star, Ticket } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface HeroMovie {
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
  showingDate?: string
  venue?: string
}

const heroMovies: HeroMovie[] = [
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
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop',
    showingDate: 'This Friday, 7:30 PM',
    venue: 'Flagler College Auditorium',
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
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop',
    showingDate: 'Next Saturday, 8:00 PM',
    venue: 'St. Augustine Amphitheatre',
  },
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
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&h=600&fit=crop',
    showingDate: 'Sunday Matinee, 2:00 PM',
    venue: 'Lightner Museum',
  },
]

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function HeroCarousel() {
  const [api, setApi] = useState<any>()

  return (
    <div className="relative bg-gradient-to-b from-charcoal to-charcoal-dark overflow-hidden">
      {/* Hero Carousel */}
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {heroMovies.map((movie) => (
            <CarouselItem key={movie.id} className="md:basis-1/1">
              <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${movie.imageUrl})`,
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                      {/* Movie Info */}
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 bg-ocean-blue/20 backdrop-blur-sm rounded-full px-4 py-2">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span className="text-white font-semibold">
                              {movie.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 bg-charcoal/50 backdrop-blur-sm rounded-full px-4 py-2">
                            <Clock className="h-4 w-4 text-sandstone" />
                            <span className="text-sandstone font-medium">
                              {movie.runtime}
                            </span>
                          </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 leading-tight">
                          {movie.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sandstone">
                          <span className="font-medium">{movie.year}</span>
                          <span>•</span>
                          <span>{movie.genre}</span>
                          <span>•</span>
                          <span>Dir. {movie.director}</span>
                          <span>•</span>
                          <span>{movie.country}</span>
                        </div>

                        <p className="text-lg md:text-xl text-sandstone/90 max-w-2xl mb-8 leading-relaxed">
                          {movie.description}
                        </p>

                        {/* Showing Details */}
                        {movie.showingDate && movie.venue && (
                          <div className="flex items-center gap-2 mb-8 text-sandstone">
                            <MapPin className="h-5 w-5 text-ocean-blue" />
                            <span className="font-medium">
                              {movie.showingDate}
                            </span>
                            <span>•</span>
                            <span>{movie.venue}</span>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className="bg-ocean-blue hover:bg-ocean-blue-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
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
                                movie.showingDate || ''
                              )}&time=${encodeURIComponent(
                                movie.showingDate || ''
                              )}&venue=${encodeURIComponent(
                                movie.venue || ''
                              )}&rating=${encodeURIComponent(
                                movie.rating
                              )}&genre=${encodeURIComponent(
                                movie.genre
                              )}&runtime=${encodeURIComponent(movie.runtime)}`}
                            >
                              <Ticket className="mr-2 h-5 w-5" />
                              Purchase Ticket
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="border-sandstone text-sandstone hover:bg-sandstone hover:text-charcoal font-semibold px-8 py-3 rounded-lg transition-colors"
                            asChild
                          >
                            <Link href={`/film/${slugifyTitle(movie.title)}`}>
                              <Info className="mr-2 h-5 w-5" />
                              Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-charcoal/70 border-charcoal-light text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-charcoal/70 border-charcoal-light text-white" />
      </Carousel>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center text-sandstone/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-sandstone/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-sandstone/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
