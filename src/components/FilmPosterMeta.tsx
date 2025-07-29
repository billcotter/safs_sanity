'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/lib/sanity'
import { tmdbService } from '@/lib/tmdb'
import { Calendar, Clock, MapPin, Star, Ticket } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface FilmPosterMetaProps {
  film: any
  tmdbData: any
  safsContent: any[]
}

export function FilmPosterMeta({
  film,
  tmdbData,
  safsContent,
}: FilmPosterMetaProps) {
  // Handle poster URL - check if it's a Sanity asset or regular URL
  let posterUrl = '/api/placeholder/300/450'

  if (tmdbData?.poster) {
    posterUrl = tmdbService.getPosterUrl(tmdbData.poster, 'w500')
  } else if (film.poster) {
    // Check if it's a Sanity asset (has _ref) or regular URL
    if (typeof film.poster === 'object' && film.poster._ref) {
      posterUrl = urlForImage(film.poster).width(300).height(450).url()
    } else if (typeof film.poster === 'string') {
      posterUrl = film.poster
    }
  }

  // Check if film is currently showing (has screenings)
  const isCurrentlyShowing = safsContent && safsContent.length > 0

  return (
    <div className="poster-meta-column space-y-4">
      {/* Poster */}
      <div className="poster-container">
        <Image
          src={posterUrl}
          alt={`${film.title} poster`}
          width={300}
          height={450}
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Metadata directly under poster - tightly spaced */}
      <div className="space-y-2">
        {film.releaseYear && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Year:</span> {film.releaseYear}
          </div>
        )}

        {film.director && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Director:</span> {film.director}
          </div>
        )}

        {film.runtime && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Runtime:</span> {film.runtime} min
          </div>
        )}

        {film.mpaaRating && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Rating:</span> {film.mpaaRating}
          </div>
        )}

        {film.language && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Language:</span> {film.language}
          </div>
        )}

        {film.country && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Country:</span> {film.country}
          </div>
        )}

        {tmdbData?.vote_average && (
          <div className="text-sm text-charcoal-light">
            <span className="font-semibold">Rating:</span>
            <span className="flex items-center gap-1 ml-1">
              <Star className="w-3 h-3 text-yellow-400" />
              {tmdbData.vote_average.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      {/* Genre tags */}
      {film.genres && film.genres.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {film.genres.map((genre: string, index: number) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-ocean-blue/10 border-ocean-blue/20 text-ocean-blue"
            >
              {genre}
            </Badge>
          ))}
        </div>
      )}

      {/* Screening Information Box - Centered */}
      {isCurrentlyShowing && (
        <div className="bg-ocean-blue/10 border border-ocean-blue/20 rounded-lg p-4 mt-6">
          <h3 className="text-lg font-semibold text-ocean-blue mb-3 text-center">
            Now Showing
          </h3>

          {safsContent.map((screening: any, index: number) => (
            <div
              key={screening._id || index}
              className="text-center mb-4 last:mb-0"
            >
              {/* Date and Time */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-ocean-blue" />
                <span className="text-sm font-medium text-charcoal">
                  {new Date(screening.datetime).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-ocean-blue" />
                <span className="text-sm font-medium text-charcoal">
                  {new Date(screening.datetime).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </span>
              </div>

              {/* Venue */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-ocean-blue" />
                <span className="text-sm font-medium text-charcoal">
                  {screening.venue}
                </span>
              </div>

              {/* Ticket Price */}
              <div className="text-sm text-charcoal-light mb-3">
                ${screening.ticketPrice}
              </div>

              {/* Purchase Ticket Button */}
              <Button
                size="sm"
                className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-semibold w-full"
                asChild
              >
                <Link
                  href={`/purchase?movie=${encodeURIComponent(film.title)}&id=${
                    film._id
                  }&screening=${screening._id}`}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Purchase Ticket
                </Link>
              </Button>

              {/* Member Notes */}
              {screening.memberNotes && (
                <div className="text-xs text-charcoal-light mt-2 italic">
                  {screening.memberNotes}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
