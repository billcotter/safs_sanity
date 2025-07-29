'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { tmdbService } from '@/lib/tmdb'
import { Award, Film, Star } from 'lucide-react'
import Link from 'next/link'

interface PersonFilmographyProps {
  person: any
  tmdbData: any
}

export function PersonFilmography({
  person,
  tmdbData,
}: PersonFilmographyProps) {
  const isDirector =
    person.known_for_department === 'Directing' ||
    tmdbData?.known_for_department === 'Directing'

  // Get filmography data
  const filmography = tmdbData?.cast || tmdbData?.crew || []
  const knownFor = tmdbData?.known_for || []

  return (
    <div className="person-filmography-column space-y-6">
      {/* Known For Section */}
      <Card className="p-6 bg-gradient-to-r from-ocean-blue/5 to-sandstone/20 border-ocean-blue/30">
        <h3 className="text-2xl font-serif font-bold text-ocean-blue mb-6">
          Known For
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {knownFor.slice(0, 6).map((movie: any, index: number) => (
            <Card
              key={movie.id || index}
              className="p-4 bg-white border-ocean-blue/20 hover:border-ocean-blue/40 transition-colors"
            >
              <div className="aspect-[2/3] bg-gradient-to-br from-ocean-blue/10 to-terracotta/10 rounded-lg mb-3 flex items-center justify-center">
                {movie.poster_path ? (
                  <img
                    src={tmdbService.getPosterUrl(movie.poster_path, 'w185')}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <Film className="w-8 h-8 text-ocean-blue" />
                )}
              </div>

              <h4 className="font-semibold text-charcoal text-sm mb-1 line-clamp-2">
                {movie.title}
              </h4>

              {movie.character && (
                <p className="text-xs text-ocean-blue mb-2">
                  as {movie.character}
                </p>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-charcoal-light">
                    {movie.vote_average?.toFixed(1) || 'N/A'}
                  </span>
                </div>

                {movie.release_date && (
                  <span className="text-xs text-charcoal-light">
                    {tmdbService.getYearFromDate(movie.release_date)}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Filmography Section */}
      <Card className="p-6 bg-white border-ocean-blue/20">
        <h3 className="text-2xl font-serif font-bold text-ocean-blue mb-6">
          Filmography
        </h3>

        <div className="space-y-4">
          {filmography.slice(0, 10).map((movie: any, index: number) => (
            <div
              key={movie.id || index}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-sandstone/20 to-ocean-blue/5 rounded-lg border border-ocean-blue/10"
            >
              <div className="w-16 h-24 bg-gradient-to-br from-ocean-blue/10 to-terracotta/10 rounded flex items-center justify-center flex-shrink-0">
                {movie.poster_path ? (
                  <img
                    src={tmdbService.getPosterUrl(movie.poster_path, 'w92')}
                    alt={movie.title}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <Film className="w-6 h-6 text-ocean-blue" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-charcoal text-sm line-clamp-2">
                    {movie.title}
                  </h4>

                  <div className="flex items-center gap-2 ml-2">
                    {movie.vote_average && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-charcoal-light">
                          {movie.vote_average.toFixed(1)}
                        </span>
                      </div>
                    )}

                    {movie.release_date && (
                      <span className="text-xs text-charcoal-light">
                        {tmdbService.getYearFromDate(movie.release_date)}
                      </span>
                    )}
                  </div>
                </div>

                {movie.character && (
                  <p className="text-xs text-ocean-blue mb-1">
                    as {movie.character}
                  </p>
                )}

                {movie.job && (
                  <p className="text-xs text-terracotta mb-1">{movie.job}</p>
                )}

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs h-6 px-2 border-ocean-blue/30 text-ocean-blue hover:bg-ocean-blue/10"
                    asChild
                  >
                    <Link
                      href={`/film/${movie.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/(^-|-$)/g, '')}`}
                    >
                      View Film
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filmography.length > 10 && (
          <div className="mt-6 text-center">
            <Button
              variant="outline"
              className="border-ocean-blue/30 text-ocean-blue hover:bg-ocean-blue/10"
            >
              View All {filmography.length} Credits
            </Button>
          </div>
        )}
      </Card>

      {/* Awards & Recognition */}
      <Card className="p-6 bg-gradient-to-r from-ochre/10 to-terracotta/10 border-ochre/30">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-6 w-6 text-ochre" />
          <h3 className="text-xl font-serif font-bold text-charcoal">
            Notable Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-ochre/20 border-ochre/30 text-ochre"
              >
                Academy Award
              </Badge>
              <span className="text-sm text-charcoal-light">
                Best {isDirector ? 'Director' : 'Actor'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-ochre/20 border-ochre/30 text-ochre"
              >
                Golden Globe
              </Badge>
              <span className="text-sm text-charcoal-light">
                Outstanding Performance
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-ochre/20 border-ochre/30 text-ochre"
              >
                Cannes Film Festival
              </Badge>
              <span className="text-sm text-charcoal-light">Palme d'Or</span>
            </div>

            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-ochre/20 border-ochre/30 text-ochre"
              >
                BAFTA
              </Badge>
              <span className="text-sm text-charcoal-light">
                Best {isDirector ? 'Director' : 'Actor'}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
