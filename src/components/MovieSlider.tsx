'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Info, Ticket } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Movie {
  id: number
  title: string
  year: number
  genre: string
  director: string
  country: string
  runtime: string
  imageUrl: string
}

const placeholderMovies: Movie[] = [
  {
    id: 1,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Comedy, Drama',
    director: 'Wes Anderson',
    country: 'USA',
    runtime: '99 min',
    imageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller, Drama',
    director: 'Bong Joon-ho',
    country: 'South Korea',
    runtime: '132 min',
    imageUrl:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'La La Land',
    year: 2016,
    genre: 'Musical, Romance',
    director: 'Damien Chazelle',
    country: 'USA',
    runtime: '128 min',
    imageUrl:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Amélie',
    year: 2001,
    genre: 'Romance, Comedy',
    director: 'Jean-Pierre Jeunet',
    country: 'France',
    runtime: '122 min',
    imageUrl:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
  },
]

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function MovieSlider() {
  const [api, setApi] = useState<any>()

  return (
    <div className="relative bg-gradient-to-b from-sandstone-dark to-sandstone py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">
            Featured Films
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Discover exceptional cinema from around the world
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {placeholderMovies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative">
                    <div className="aspect-[16/9] bg-gradient-to-br from-ocean-blue to-terracotta relative overflow-hidden">
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Movie Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-serif font-bold mb-2">
                          {movie.title}
                        </h3>
                        <div className="text-sm text-white/90 space-y-1 mb-4">
                          <p>
                            {movie.year} • {movie.genre}
                          </p>
                          <p>Director: {movie.director}</p>
                          <p>
                            {movie.country} • {movie.runtime}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-charcoal transition-all duration-200"
                            asChild
                          >
                            <Link href={`/film/${slugifyTitle(movie.title)}`}>
                              <Info className="h-4 w-4 mr-1" />
                              Details
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-ocean-blue hover:bg-ocean-blue-dark text-white transition-all duration-200"
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
                                ''
                              )}&time=${encodeURIComponent(
                                ''
                              )}&venue=${encodeURIComponent(
                                ''
                              )}&rating=${encodeURIComponent(
                                '8.0'
                              )}&genre=${encodeURIComponent(
                                movie.genre
                              )}&runtime=${encodeURIComponent(movie.runtime)}`}
                            >
                              <Ticket className="h-4 w-4 mr-1" />
                              Purchase Ticket
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg" />
        </Carousel>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {placeholderMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="w-3 h-3 rounded-full bg-charcoal/30 hover:bg-charcoal/60 transition-colors duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
