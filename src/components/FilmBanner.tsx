'use client'

import { Calendar, Clock, Star } from 'lucide-react'

interface FilmBannerProps {
  film: any
  tmdbData: any
}

export function FilmBanner({ film, tmdbData }: FilmBannerProps) {
  // Get background image URL
  let backgroundImage = '/api/placeholder/1920/600'

  if (tmdbData?.backdrop_path) {
    backgroundImage = `https://image.tmdb.org/t/p/original${tmdbData.backdrop_path}`
  } else if (film.poster) {
    // Use poster as fallback if no backdrop
    if (typeof film.poster === 'object' && film.poster._ref) {
      // This would need Sanity image URL builder, but for now use placeholder
      backgroundImage = '/api/placeholder/1920/600'
    } else if (typeof film.poster === 'string') {
      backgroundImage = film.poster
    }
  }

  return (
    <div
      className="relative h-96 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-playfair">
              {film.title}
            </h1>

            {/* One sentence description */}
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              {tmdbData?.overview
                ? tmdbData.overview.split('.')[0] + '.'
                : film.synopsis
                ? film.synopsis.split('.')[0] + '.'
                : 'A compelling cinematic experience that explores the human condition through the lens of storytelling.'}
            </p>

            {/* Basic metadata */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              {film.releaseYear && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{film.releaseYear}</span>
                </div>
              )}

              {film.runtime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{film.runtime} min</span>
                </div>
              )}

              {film.director && (
                <div className="flex items-center gap-2">
                  <span>Directed by {film.director}</span>
                </div>
              )}

              {tmdbData?.vote_average && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{tmdbData.vote_average.toFixed(1)}</span>
                </div>
              )}

              {film.mpaaRating && (
                <div className="px-2 py-1 border border-white/30 rounded text-sm">
                  {film.mpaaRating}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
