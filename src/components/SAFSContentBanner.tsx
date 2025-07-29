'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Star, Ticket, Users } from 'lucide-react'
import Link from 'next/link'

interface SAFSContentBannerProps {
  safsContent: any[]
}

export function SAFSContentBanner({ safsContent }: SAFSContentBannerProps) {
  if (!safsContent || safsContent.length === 0) {
    return null
  }

  const firstScreening = safsContent[0]

  return (
    <section className="bg-gradient-to-r from-terracotta to-terracotta-dark text-sandstone py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Screening Info */}
          <Card className="bg-terracotta/20 border-terracotta/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-sandstone" />
              <h3 className="text-xl font-serif font-bold text-sandstone">
                Screening Times
              </h3>
            </div>
            <div className="space-y-3">
              {safsContent.map((screening, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sandstone">
                      {new Date(screening.datetime).toLocaleDateString(
                        'en-US',
                        {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        }
                      )}
                    </p>
                    <p className="text-sandstone/80">
                      {new Date(screening.datetime).toLocaleTimeString(
                        'en-US',
                        {
                          hour: 'numeric',
                          minute: '2-digit',
                        }
                      )}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-sandstone text-terracotta"
                  >
                    ${screening.ticketPrice}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>

          {/* Venue Info */}
          <Card className="bg-terracotta/20 border-terracotta/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-sandstone" />
              <h3 className="text-xl font-serif font-bold text-sandstone">
                Venue
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-sandstone font-semibold">
                {firstScreening.venue}
              </p>
              <p className="text-sandstone/80 text-sm">
                Located in the heart of historic St. Augustine
              </p>
              <div className="flex items-center gap-2 text-sm text-sandstone/70">
                <Users className="h-4 w-4" />
                <span>Seating capacity: 150</span>
              </div>
            </div>
          </Card>

          {/* Member Notes */}
          <Card className="bg-terracotta/20 border-terracotta/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-sandstone" />
              <h3 className="text-xl font-serif font-bold text-sandstone">
                Member Benefits
              </h3>
            </div>
            <div className="space-y-3">
              <p className="text-sandstone/90 text-sm">
                {firstScreening.memberNotes ||
                  'SAFS members receive priority seating and discounted tickets.'}
              </p>
              <Button
                asChild
                size="sm"
                className="bg-ocean-blue hover:bg-ocean-blue-dark text-white"
              >
                <Link href="/membership">
                  <Users className="mr-2 h-4 w-4" />
                  Become a Member
                </Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-ocean-blue hover:bg-ocean-blue-dark text-white px-8 py-3"
          >
            <Link
              href={`/purchase?filmId=${
                firstScreening._id
              }&title=${encodeURIComponent(firstScreening.title || 'Film')}`}
            >
              <Ticket className="mr-2 h-5 w-5" />
              Buy Tickets
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
