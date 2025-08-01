import { urlForImage } from '@/sanity/lib/image';
import { Button } from '@/components/ui/safs-button';
import { Archive, Calendar, Film, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ArchiveCardProps {
  screening: {
    _id: string;
    datetime: string;
    venue?: {
      name: string;
      slug?: { current: string };
    };
    film: {
      _id: string;
      title: string;
      slug: { current: string };
      poster?: any;
      synopsis?: string;
      releaseYear?: number;
      directors?: Array<{ name: string; slug?: { current: string } }>;
    };
    actualAttendance?: number;
    soldOut?: boolean;
  };
}

export function ArchiveCard({ screening }: ArchiveCardProps) {
  const { film, venue, datetime, actualAttendance, soldOut } = screening;

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
      {/* Film Poster */}
      <div className='relative'>
        <Link href={`/films/${film.slug.current}`}>
          <div className='aspect-[2/3] relative'>
            {film.poster ? (
              <Image
                src={urlForImage(film.poster).width(300).height(450).url()}
                alt={film.title}
                fill
                className='object-cover'
              />
            ) : (
              <div className='w-full h-full bg-sandstone-dark flex items-center justify-center'>
                <Film className='h-12 w-12 text-charcoal/40' />
              </div>
            )}
          </div>
        </Link>

        {/* Archive Badge */}
        <div className='absolute top-2 left-2'>
          <span className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-ocean-blue text-sandstone'>
            <Archive className='h-3 w-3 mr-1' />
            Archived
          </span>
        </div>

        {/* Sold Out Badge */}
        {soldOut && (
          <div className='absolute top-2 right-2'>
            <span className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-terracotta text-white'>
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-4'>
        {/* Film Title & Year */}
        <Link
          href={`/films/${film.slug.current}`}
          className='block hover:text-ocean-blue transition-colors'
        >
          <h3 className='font-semibold text-lg mb-1 text-charcoal'>
            {film.title}
          </h3>
          {film.releaseYear && (
            <p className='text-sm text-charcoal/70 mb-2'>{film.releaseYear}</p>
          )}
        </Link>

        {/* Directors */}
        {film.directors && film.directors.length > 0 && (
          <div className='mb-2'>
            <p className='text-sm text-charcoal/80'>
              Directed by{' '}
              {film.directors.map((director, index) => (
                <span key={director.slug?.current || index}>
                  {director.slug?.current ? (
                    <Link
                      href={`/people/${director.slug.current}`}
                      className='text-ocean-blue hover:text-ocean-blue-dark hover:underline'
                    >
                      {director.name}
                    </Link>
                  ) : (
                    <span>{director.name}</span>
                  )}
                  {index < (film.directors?.length || 0) - 1 && ', '}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Synopsis Preview */}
        {film.synopsis && (
          <p className='text-sm text-charcoal/70 mb-3 line-clamp-2'>
            {film.synopsis}
          </p>
        )}

        {/* Screening Details */}
        <div className='border-t border-charcoal/10 pt-3 mt-3 space-y-1'>
          <div className='flex items-center text-sm text-charcoal/70'>
            <Calendar className='h-4 w-4 mr-2 flex-shrink-0' />
            {new Date(datetime).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </div>

          <div className='flex items-center text-sm text-charcoal/70'>
            <MapPin className='h-4 w-4 mr-2 flex-shrink-0' />
            {venue ? (
              venue.slug?.current ? (
                <Link
                  href={`/venues/${venue.slug.current}`}
                  className='hover:text-ocean-blue transition-colors truncate'
                >
                  {venue.name}
                </Link>
              ) : (
                <span>{venue.name}</span>
              )
            ) : (
              <span className='text-charcoal/50'>Venue TBD</span>
            )}
          </div>

          {actualAttendance && (
            <div className='flex items-center text-sm text-charcoal/70'>
              <Users className='h-4 w-4 mr-2 flex-shrink-0' />
              {actualAttendance} attendees
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className='mt-4'>
          <div className='flex gap-2'>
            <Button
              variant='secondary'
              size='sm'
              icon={Film}
              href={`/films/${film.slug.current}`}
              className='flex-1'
            >
              Film Details
            </Button>
            <Button
              variant='outline'
              size='sm'
              icon={Calendar}
              href={`/events/${film.slug.current}`}
              className='flex-1'
            >
              Film Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
