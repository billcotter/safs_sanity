'use client'

import { tmdbService } from '@/lib/tmdb'
import { Calendar, MapPin, Star, Users } from 'lucide-react'

interface PersonBannerProps {
  person: any
  tmdbData: any
}

export function PersonBanner({ person, tmdbData }: PersonBannerProps) {
  // Get background image URL
  let backgroundImage = '/api/placeholder/1920/600'

  if (tmdbData?.profile_path) {
    backgroundImage = tmdbService.getProfileUrl(tmdbData.profile_path, 'w1280')
  } else if (person.profile_path && person.profile_path.startsWith('http')) {
    backgroundImage = person.profile_path
  }

  // Determine if person is actor or director
  const isDirector =
    person.known_for_department === 'Directing' ||
    person.known_for_department === 'Directing' ||
    tmdbData?.known_for_department === 'Directing'

  return (
    <div
      className="relative h-96 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-playfair">
              {person.name}
            </h1>

            {/* Role */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                {isDirector ? (
                  <Users className="w-6 h-6 text-ocean-blue" />
                ) : (
                  <Star className="w-6 h-6 text-terracotta" />
                )}
                <span className="text-lg md:text-xl text-white/90 font-semibold">
                  {isDirector ? 'Director' : 'Actor'}
                </span>
              </div>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-white/80">
              {person.birthday && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{tmdbService.formatBirthday(person.birthday)}</span>
                </div>
              )}

              {person.place_of_birth && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{person.place_of_birth}</span>
                </div>
              )}

              {person.popularity && (
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{person.popularity.toFixed(1)}</span>
                </div>
              )}
            </div>

            {/* Brief bio preview */}
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              {person.biography
                ? person.biography.split('.')[0] + '.'
                : 'A talented individual in the film industry whose work has contributed to the art of cinema.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
