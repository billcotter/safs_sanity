'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Award, Calendar, Globe, MapPin, Star, Users } from 'lucide-react'

interface PersonBioProps {
  person: any
  tmdbData: any
}

export function PersonBio({ person, tmdbData }: PersonBioProps) {
  const isDirector =
    person.known_for_department === 'Directing' ||
    tmdbData?.known_for_department === 'Directing'

  return (
    <div className="person-bio-column space-y-6">
      {/* Profile Image */}
      <div className="profile-image-container">
        <div className="w-48 h-48 mx-auto">
          <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-ocean-blue/20 to-terracotta/20 border-4 border-ocean-blue/30">
            {person.profile_path ? (
              <img
                src={
                  person.profile_path.startsWith('http')
                    ? person.profile_path
                    : `/images/placeholder-person.jpg`
                }
                alt={`${person.name} profile`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {isDirector ? (
                  <Users className="w-16 h-16 text-ocean-blue" />
                ) : (
                  <Star className="w-16 h-16 text-terracotta" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <Card className="p-6 bg-white border-ocean-blue/20">
        <h3 className="text-xl font-serif font-bold text-ocean-blue mb-4">
          Personal Information
        </h3>

        <div className="space-y-3">
          {person.birthday && (
            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-ocean-blue" />
              <div>
                <span className="text-sm font-semibold text-charcoal">
                  Birthday:
                </span>
                <span className="text-sm text-charcoal-light ml-2">
                  {new Date(person.birthday).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
          )}

          {person.place_of_birth && (
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-ocean-blue" />
              <div>
                <span className="text-sm font-semibold text-charcoal">
                  Birthplace:
                </span>
                <span className="text-sm text-charcoal-light ml-2">
                  {person.place_of_birth}
                </span>
              </div>
            </div>
          )}

          {person.popularity && (
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4 text-yellow-400" />
              <div>
                <span className="text-sm font-semibold text-charcoal">
                  Popularity:
                </span>
                <span className="text-sm text-charcoal-light ml-2">
                  {person.popularity.toFixed(1)}
                </span>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            {isDirector ? (
              <Users className="w-4 h-4 text-ocean-blue" />
            ) : (
              <Star className="w-4 h-4 text-terracotta" />
            )}
            <div>
              <span className="text-sm font-semibold text-charcoal">
                Profession:
              </span>
              <span className="text-sm text-charcoal-light ml-2">
                {isDirector ? 'Director' : 'Actor'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Biography */}
      <Card className="p-6 bg-white border-ocean-blue/20">
        <h3 className="text-xl font-serif font-bold text-ocean-blue mb-4">
          Biography
        </h3>

        <div className="prose prose-sm max-w-none">
          <p className="text-charcoal leading-relaxed">
            {person.biography ||
              'A talented individual in the film industry whose work has contributed to the art of cinema. Their performances and creative vision have left a lasting impact on audiences worldwide.'}
          </p>
        </div>
      </Card>

      {/* Awards & Recognition */}
      <Card className="p-6 bg-gradient-to-r from-ochre/10 to-terracotta/10 border-ochre/30">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-6 w-6 text-ochre" />
          <h3 className="text-xl font-serif font-bold text-charcoal">
            Awards & Recognition
          </h3>
        </div>

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

          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="bg-ochre/20 border-ochre/30 text-ochre"
            >
              Cannes Film Festival
            </Badge>
            <span className="text-sm text-charcoal-light">Palme d'Or</span>
          </div>
        </div>
      </Card>

      {/* External Links */}
      {person.imdb_id && (
        <Card className="p-6 bg-white border-ocean-blue/20">
          <h3 className="text-xl font-serif font-bold text-ocean-blue mb-4">
            External Links
          </h3>

          <div className="space-y-3">
            <a
              href={`https://www.imdb.com/name/${person.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ocean-blue hover:text-ocean-blue-dark transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">IMDb Profile</span>
            </a>

            {person.homepage && (
              <a
                href={person.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ocean-blue hover:text-ocean-blue-dark transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Official Website</span>
              </a>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
