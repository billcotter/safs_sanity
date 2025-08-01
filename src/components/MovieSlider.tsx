'use client';

import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Calendar,
  Clock,
  Film,
  Info,
  MapPin,
  Ticket,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  country: string;
  runtime: string;
  imageUrl: string;
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
];

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function MovieSlider() {
  const [api, setApi] = useState<any>();

  return (
    <div className='relative bg-gradient-to-b from-sandstone-dark to-sandstone py-8'>
      <div className='container mx-auto px-4'>
        <Carousel
          setApi={setApi}
          className='w-full max-w-5xl mx-auto'
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {placeholderMovies.map((movie) => (
              <CarouselItem
                key={movie.id}
                className='pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3'
              >
                <Card className='overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white'>
                  <div className='flex flex-col'>
                    <div className='aspect-[2/3] relative overflow-hidden'>
                      <img
                        src={movie.imageUrl}
                        alt={movie.title}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    <div className='p-4'>
                      <h3 className='text-lg font-serif font-bold mb-2 text-charcoal'>
                        {movie.title}
                      </h3>
                      <div className='text-sm text-charcoal/70 space-y-1 mb-4'>
                        <div className='flex items-center gap-1'>
                          <Calendar className='h-3 w-3' />
                          <span>{movie.year}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <MapPin className='h-3 w-3' />
                          <Link
                            href={`/films?country=${movie.country
                              .toLowerCase()
                              .replace(/\s+/g, '-')}`}
                            className='text-ocean-blue hover:underline'
                          >
                            {movie.country}
                          </Link>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Users className='h-3 w-3' />
                          <Link
                            href={`/people/${slugifyTitle(movie.director)}`}
                            className='text-ocean-blue hover:underline'
                          >
                            {movie.director}
                          </Link>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Film className='h-3 w-3' />
                          <div className='flex gap-1'>
                            {movie.genre.split(', ').map((genre, index) => (
                              <span key={genre}>
                                <Link
                                  href={`/films?genre=${genre
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')}`}
                                  className='text-ocean-blue hover:underline text-xs'
                                >
                                  {genre}
                                </Link>
                                {index < movie.genre.split(', ').length - 1 && (
                                  <span className='text-xs'>, </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Clock className='h-3 w-3' />
                          <span>{movie.runtime}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className='flex gap-2'>
                        <Button
                          variant='secondary'
                          size='md'
                          icon={Film}
                          href={`/films/${slugifyTitle(movie.title)}`}
                          className='flex-1'
                        >
                          Film Details
                        </Button>
                        <Button
                          variant='primary'
                          size='md'
                          icon={Ticket}
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
                          className='flex-1'
                        >
                          Buy Tickets
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className='left-4 bg-white/90 hover:bg-white border-0 shadow-lg' />
          <CarouselNext className='right-4 bg-white/90 hover:bg-white border-0 shadow-lg' />
        </Carousel>

        {/* Dots Indicator */}
        <div className='flex justify-center mt-8 space-x-2'>
          {placeholderMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className='w-3 h-3 rounded-full bg-charcoal/30 hover:bg-charcoal/60 transition-colors duration-200'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
