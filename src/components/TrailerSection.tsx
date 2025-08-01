'use client';

import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import { ExternalLink, Play } from 'lucide-react';
import { useState } from 'react';

interface TrailerSectionProps {
  trailer: any;
}

export function TrailerSection({ trailer }: TrailerSectionProps) {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!trailer) {
    return (
      <section className='trailer-section col-span-full'>
        <Card className='p-8 bg-gradient-to-r from-ocean-blue/5 to-sandstone/20 border-2 border-ocean-blue/30'>
          <div className='text-center'>
            <h2 className='text-2xl font-serif font-bold text-ocean-blue mb-4'>
              Trailer
            </h2>
            <p className='text-charcoal/70 mb-6'>
              Trailer not available at this time
            </p>
            <div className='w-full h-64 bg-sandstone/30 rounded-lg flex items-center justify-center'>
              <div className='text-center'>
                <Play className='h-16 w-16 text-ocean-blue/50 mx-auto mb-4' />
                <p className='text-charcoal/60'>Trailer Coming Soon</p>
              </div>
            </div>
          </div>
        </Card>
      </section>
    );
  }

  const getTrailerUrl = () => {
    if (trailer.site === 'YouTube') {
      return `https://www.youtube.com/embed/${trailer.key}`;
    } else if (trailer.site === 'Vimeo') {
      return `https://player.vimeo.com/video/${trailer.key}`;
    }
    return null;
  };

  const trailerUrl = getTrailerUrl();

  return (
    <section className='trailer-section col-span-full'>
      <Card className='p-8 bg-gradient-to-r from-ocean-blue/5 to-sandstone/20 border-2 border-ocean-blue/30'>
        <div className='mb-6'>
          <h2 className='text-2xl font-serif font-bold text-ocean-blue mb-2'>
            Trailer
          </h2>
          <p className='text-charcoal/70'>
            Watch the official trailer for this film
          </p>
        </div>

        {showTrailer && trailerUrl ? (
          <div className='relative'>
            <div className='aspect-video w-full'>
              <iframe
                src={trailerUrl}
                title={`${trailer.name} Trailer`}
                className='w-full h-full rounded-lg'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              />
            </div>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => setShowTrailer(false)}
              className='absolute top-2 right-2 bg-white/90 hover:bg-white'
            >
              Close
            </Button>
          </div>
        ) : (
          <div className='relative'>
            <div className='aspect-video w-full bg-sandstone/30 rounded-lg overflow-hidden'>
              {trailerUrl ? (
                <div className='relative w-full h-full'>
                  <img
                    src={`https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`}
                    alt='Trailer thumbnail'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0 bg-black/30 flex items-center justify-center'>
                    <Button
                      variant='primary'
                      size='lg'
                      onClick={() => setShowTrailer(true)}
                      icon={Play}
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='text-center'>
                    <Play className='h-16 w-16 text-ocean-blue/50 mx-auto mb-4' />
                    <p className='text-charcoal/60'>Trailer Not Available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {trailerUrl && !showTrailer && (
          <div className='mt-4 text-center'>
            <Button
              variant='outline'
              size='sm'
              href={trailerUrl}
              icon={ExternalLink}
              className='external-link'
            >
              Watch on {trailer.site}
            </Button>
          </div>
        )}
      </Card>
    </section>
  );
}
