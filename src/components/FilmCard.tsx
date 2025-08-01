'use client';

import { ScreenReaderOnly } from '@/components/accessibility/ScreenReaderOnly';
import { CardSkeleton } from '@/components/skeletons/CardSkeleton';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/safs-button';
import { tmdbErrorHandler } from '@/lib/apiHandlers';
import { urlForImage } from '@/sanity/lib/image';
import {
  Archive,
  Calendar,
  Film,
  MapPin,
  Star,
  Ticket,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface FilmCardProps {
  film: {
    _id: string;
    title: string;
    slug: { current: string };
    poster?: any;
    synopsis?: string;
    releaseYear?: number;
    runtime?: number;
    genres?: string[];
    rating?: string;
    imdbRating?: number;
    directors?: Array<{ name: string; slug?: { current: string } }>;
  };
  screening?: {
    _id: string;
    datetime: string;
    venue?: {
      name: string;
      slug?: { current: string };
    };
    actualAttendance?: number;
    soldOut?: boolean;
    ticketPrice?: number;
  };
  type: 'now-playing' | 'archive';
  className?: string;
  isLoading?: boolean;
}

export function FilmCard({
  film,
  screening,
  type,
  className,
  isLoading = false,
}: FilmCardProps) {
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const isArchive = type === 'archive';

  if (isLoading) {
    return <CardSkeleton className={className} />;
  }

  const handleImageError = () => {
    if (retryCount < 2) {
      setRetryCount((prev) => prev + 1);
      // Retry after delay
      setTimeout(() => setImageError(false), 1000);
    } else {
      setImageError(true);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const renderStarRating = (rating?: number) => {
    if (!rating) return null;

    const stars = Math.round(rating / 2); // Convert 10-point scale to 5-star
    return (
      <div
        className='flex items-center gap-1'
        aria-label={`Film rating: ${rating.toFixed(1)} out of 10`}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < stars ? 'text-ochre fill-current' : 'text-ochre/30'
            }`}
            aria-hidden='true'
          />
        ))}
        <span className='ml-1 text-sm text-charcoal/70'>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  // Get poster image with fallback
  const posterSrc = imageError
    ? tmdbErrorHandler.getFallbackImage('poster')
    : film.poster
    ? urlForImage(film.poster).width(320).height(480).url()
    : tmdbErrorHandler.getFallbackImage('poster');

  // Get synopsis with fallback
  const synopsis = film.synopsis || tmdbErrorHandler.getFallbackSynopsis();

  return (
    <Card
      className={`
        w-80 h-[450px] bg-sandstone shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1 group
        ${isArchive ? 'opacity-90' : ''}
        ${className || ''}
      `}
      role='article'
      aria-labelledby={`film-title-${film._id}`}
    >
      <CardHeader className='p-0 relative'>
        <div className='aspect-[2/3] relative group'>
          <Image
            src={posterSrc}
            alt={`${film.title} poster`}
            fill
            className='object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300'
            onError={handleImageError}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px'
          />

          {/* Hover Overlay */}
          <div className='absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300' />

          {/* Archive Badge */}
          {isArchive && (
            <div className='absolute top-2 left-2'>
              <Badge className='bg-ocean-blue text-sandstone flex items-center gap-1'>
                <Archive className='h-3 w-3' />
                Archived
              </Badge>
            </div>
          )}

          {/* Sold Out Badge */}
          {screening?.soldOut && (
            <div className='absolute top-2 right-2'>
              <Badge className='bg-terracotta text-sandstone'>Sold Out</Badge>
            </div>
          )}

          {/* Rating Badge */}
          {film.imdbRating && (
            <div className='absolute top-2 right-2'>
              <Badge className='bg-ochre text-charcoal flex items-center gap-1'>
                <Star className='h-3 w-3 fill-current' />
                {film.imdbRating.toFixed(1)}
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className='p-4 space-y-3'>
        {/* Film Title */}
        <Link
          href={`/films/${film.slug.current}`}
          className='block hover:text-ocean-blue transition-colors'
        >
          <h3
            id={`film-title-${film._id}`}
            className='text-lg font-bold text-charcoal line-clamp-2 min-h-[3.5rem]'
          >
            {film.title}
          </h3>
        </Link>

        {/* Metadata Row */}
        <div className='flex items-center gap-2 text-sm text-charcoal/70'>
          {film.releaseYear && <span>{film.releaseYear}</span>}
          {film.runtime && (
            <>
              <span>•</span>
              <span>{film.runtime} min</span>
            </>
          )}
          {film.rating && (
            <>
              <span>•</span>
              <span>{film.rating}</span>
            </>
          )}
        </div>

        {/* Star Rating */}
        {film.imdbRating && (
          <div className='flex items-center justify-between'>
            {renderStarRating(film.imdbRating)}
          </div>
        )}

        {/* Genre Tags */}
        {film.genres && film.genres.length > 0 && (
          <div className='flex flex-wrap gap-1'>
            {film.genres.slice(0, 2).map((genre) => (
              <Badge
                key={genre}
                variant='secondary'
                className='bg-ocean-blue text-sandstone text-xs'
              >
                {genre}
              </Badge>
            ))}
          </div>
        )}

        {/* Synopsis */}
        <p className='text-sm text-charcoal/80 line-clamp-2 min-h-[4.5rem]'>
          {synopsis}
        </p>

        {/* Screening Details (for archive cards) */}
        {isArchive && screening && (
          <div className='border-t border-charcoal/10 pt-3 space-y-2'>
            <div className='flex items-center text-sm text-charcoal/70'>
              <Calendar className='h-4 w-4 mr-2 flex-shrink-0' />
              {formatDate(screening.datetime)} at{' '}
              {formatTime(screening.datetime)}
            </div>

            {screening.venue && (
              <div className='flex items-center text-sm text-charcoal/70'>
                <MapPin className='h-4 w-4 mr-2 flex-shrink-0' />
                {screening.venue.slug?.current ? (
                  <Link
                    href={`/venues/${screening.venue.slug.current}`}
                    className='hover:text-ocean-blue transition-colors truncate'
                  >
                    {screening.venue.name}
                  </Link>
                ) : (
                  <span>{screening.venue.name}</span>
                )}
              </div>
            )}

            {screening.actualAttendance && (
              <div className='flex items-center text-sm text-charcoal/70'>
                <Users className='h-4 w-4 mr-2 flex-shrink-0' />
                {screening.actualAttendance} attendees
              </div>
            )}
          </div>
        )}

        {/* Screen Reader Content */}
        <ScreenReaderOnly>
          {film.imdbRating &&
            `Film rating: ${film.imdbRating.toFixed(1)} out of 10.`}
          {film.runtime && ` Runtime: ${film.runtime} minutes.`}
          {film.genres && ` Genres: ${film.genres.join(', ')}.`}
          {film.releaseYear && ` Released in ${film.releaseYear}.`}
        </ScreenReaderOnly>
      </CardContent>

      <CardFooter className='p-4 pt-0 space-x-2'>
        <Button
          variant='secondary'
          size='sm'
          icon={Film}
          href={`/films/${film.slug.current}`}
          className='flex-1 bg-terracotta hover:bg-terracotta-hover text-sandstone focus:ring-2 focus:ring-terracotta focus:ring-offset-2'
          aria-describedby={`film-title-${film._id}`}
        >
          Film Details
        </Button>

        <Button
          variant='outline'
          size='sm'
          icon={isArchive ? Calendar : Ticket}
          href={
            isArchive
              ? `/events/${film.slug.current}`
              : `/tickets/${film.slug.current}`
          }
          className='flex-1 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-sandstone focus:ring-2 focus:ring-ocean-blue focus:ring-offset-2'
          disabled={isArchive && !screening}
        >
          {isArchive ? 'Film Event' : 'Purchase Tickets'}
        </Button>
      </CardFooter>
    </Card>
  );
}
