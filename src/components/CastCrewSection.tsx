'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { Award, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface CastCrewSectionProps {
  cast: any[]
  director: any
}

export function CastCrewSection({ cast, director }: CastCrewSectionProps) {
  const [expandedBio, setExpandedBio] = useState<string | null>(null)

  const toggleBio = (id: string) => {
    setExpandedBio(expandedBio === id ? null : id)
  }

  // Helper function to create person slug
  const createPersonSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return (
    <section className="cast-crew-section col-span-full">
      <div className="mb-8">
        <h2 className="text-3xl font-serif font-bold text-ocean-blue mb-2">
          Cast & Crew
        </h2>
        <p className="text-charcoal/70">
          Meet the talented individuals who brought this story to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Director Card */}
        {director && (
          <Card className="p-6 bg-gradient-to-br from-ocean-blue/5 to-sandstone/20 border-ocean-blue/30 hover:border-ocean-blue/50 transition-colors">
            <div className="text-center mb-4">
              {/* Director Headshot */}
              <Link href={`/person/${createPersonSlug(director.name)}`}>
                <div className="w-20 h-20 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-ocean-blue/30 transition-colors cursor-pointer border-2 border-ocean-blue/30 hover:border-ocean-blue/50">
                  {director.profile_path ? (
                    <img
                      src={director.profile_path || '/placeholder-profile.jpg'}
                      alt={director.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Users className="h-10 w-10 text-ocean-blue" />
                  )}
                </div>
              </Link>

              <h3 className="text-lg font-serif font-bold text-ocean-blue">
                <Link
                  href={`/person/${createPersonSlug(director.name)}`}
                  className="hover:text-ocean-blue-dark transition-colors"
                >
                  {director.name}
                </Link>
              </h3>
              <Badge
                variant="secondary"
                className="bg-ocean-blue/20 text-ocean-blue mt-2"
              >
                Director
              </Badge>
            </div>

            <div className="space-y-3">
              <p className="text-charcoal/80 text-sm">
                {expandedBio === 'director'
                  ? director.biography ||
                    'A visionary director known for their unique storytelling approach and artistic vision.'
                  : (
                      director.biography ||
                      'A visionary director known for their unique storytelling approach and artistic vision.'
                    ).substring(0, 100) + '...'}
              </p>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleBio('director')}
                className="text-ocean-blue hover:text-ocean-blue-dark"
              >
                {expandedBio === 'director' ? 'Show Less' : 'Read More'}
              </Button>
            </div>
          </Card>
        )}

        {/* Cast Cards - Show first 3 cast members */}
        {cast?.slice(0, 3).map((member, index) => (
          <Card
            key={member.id}
            className="p-6 bg-white border-sandstone/30 hover:border-terracotta/50 transition-colors"
          >
            <div className="text-center mb-4">
              {/* Actor Headshot */}
              <Link href={`/person/${createPersonSlug(member.name)}`}>
                <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-terracotta/30 transition-colors cursor-pointer border-2 border-terracotta/30 hover:border-terracotta/50">
                  {member.profile_path ? (
                    <img
                      src={member.profile_path || '/placeholder-profile.jpg'}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <Star className="h-10 w-10 text-terracotta" />
                  )}
                </div>
              </Link>

              <h3 className="text-lg font-serif font-bold text-charcoal">
                <Link
                  href={`/person/${createPersonSlug(member.name)}`}
                  className="hover:text-terracotta transition-colors"
                >
                  {member.name}
                </Link>
              </h3>
              <p className="text-sm text-ocean-blue font-semibold mt-1">
                {member.character}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-charcoal/80 text-sm">
                {expandedBio === member.id
                  ? member.biography ||
                    'A talented actor who brings depth and authenticity to their performances.'
                  : (
                      member.biography ||
                      'A talented actor who brings depth and authenticity to their performances.'
                    ).substring(0, 100) + '...'}
              </p>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleBio(member.id)}
                className="text-terracotta hover:text-terracotta-dark"
              >
                {expandedBio === member.id ? 'Show Less' : 'Read More'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Cast Info */}
      {cast && cast.length > 3 && (
        <div className="mt-8">
          <Card className="p-6 bg-gradient-to-r from-sandstone/20 to-ocean-blue/5 border-ocean-blue/20">
            <h3 className="text-lg font-serif font-bold text-ocean-blue mb-4">
              Full Cast
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cast.slice(3, 7).map((member) => (
                <div key={member.id} className="text-center">
                  <Link href={`/person/${createPersonSlug(member.name)}`}>
                    <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-ocean-blue/30 transition-colors cursor-pointer border border-ocean-blue/30 hover:border-ocean-blue/50">
                      {member.profile_path ? (
                        <img
                          src={member.profile_path || '/placeholder-profile.jpg'}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <Users className="h-6 w-6 text-ocean-blue" />
                      )}
                    </div>
                  </Link>
                  <p className="text-sm font-semibold text-charcoal">
                    <Link
                      href={`/person/${createPersonSlug(member.name)}`}
                      className="hover:text-ocean-blue transition-colors"
                    >
                      {member.name}
                    </Link>
                  </p>
                  <p className="text-xs text-ocean-blue">{member.character}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Awards & Recognition */}
      <div className="mt-8">
        <Card className="p-6 bg-gradient-to-r from-ochre/10 to-terracotta/10 border-ochre/30">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-ochre" />
            <h3 className="text-lg font-serif font-bold text-charcoal">
              Awards & Recognition
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-ochre">
                Festival Awards
              </p>
              <p className="text-sm text-charcoal/80">
                Best Director - International Film Festival
              </p>
              <p className="text-sm text-charcoal/80">
                Audience Choice Award - Cinema Society
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-ochre">
                Critical Acclaim
              </p>
              <p className="text-sm text-charcoal/80">
                "A masterpiece of contemporary cinema" - Film Quarterly
              </p>
              <p className="text-sm text-charcoal/80">
                "Revolutionary storytelling" - Cinema Today
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
