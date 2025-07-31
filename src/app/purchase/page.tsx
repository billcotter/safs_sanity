import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Clock,
  Gift,
  Info,
  MapPin,
  ShoppingCart,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

interface PurchasePageProps {
  searchParams: {
    movieId?: string
    title?: string
    poster?: string
    date?: string
    time?: string
    venue?: string
    rating?: string
    genre?: string
    runtime?: string
  }
}

export default function PurchasePage({ searchParams }: PurchasePageProps) {
  // Default movie data if no params provided
  const movieData = {
    id: searchParams.movieId || '1',
    title: searchParams.title || 'The Grand Budapest Hotel',
    year: '2014',
    poster: searchParams.poster || '/api/placeholder/300/450',
    rating: searchParams.rating || '8.1',
    genre: searchParams.genre || 'Comedy',
    runtime: searchParams.runtime || '99 minutes',
    date: searchParams.date || 'Friday, December 15, 2024',
    time: searchParams.time || '7:30 PM',
    venue: searchParams.venue || 'Flagler College Auditorium',
    description:
      "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
  }

  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Purchase Tickets"
        subtitle={`Secure your seats for ${movieData.title}`}
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Films', href: '/films' },
            { label: movieData.title, href: `/film/${movieData.id}` },
            { label: 'Purchase Tickets' },
          ]}
        />

        {/* Movie Details - Strapi Content */}
        <div className="mb-8 p-6 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif font-bold text-charcoal mb-3">
            Special Screening Information
          </h2>
          <p className="text-base text-charcoal/70 leading-relaxed">
            This screening features a special introduction by local film
            historian Dr. Sarah Mitchell. Q&A session to follow the film.
            Refreshments available in the lobby. Doors open 30 minutes before
            showtime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie Details */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Movie Poster */}
                <div className="w-48 h-72 bg-sandstone/20 rounded-lg flex items-center justify-center overflow-hidden">
                  {movieData.poster.startsWith('http') ? (
                    <img
                      src={movieData.poster}
                      alt={`${movieData.title} poster`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-charcoal/60">Movie Poster</span>
                  )}
                </div>

                {/* Movie Info */}
                <div className="flex-1">
                  <h1 className="text-2xl font-serif font-bold text-charcoal mb-2">
                    {movieData.title} ({movieData.year})
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="font-semibold">
                        {movieData.rating}/10
                      </span>
                    </div>
                    <Badge variant="secondary">{movieData.genre}</Badge>
                    <Badge variant="outline">R</Badge>
                  </div>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">
                    {movieData.description}
                  </p>
                  <div className="space-y-2 text-sm text-charcoal/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-ocean-blue" />
                      <span>{movieData.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-ocean-blue" />
                      <span>
                        {movieData.time} (Runtime: {movieData.runtime})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-ocean-blue" />
                      <span>{movieData.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Purchase Options */}
          <div className="space-y-6">
            {/* Member Promotion */}
            <Card className="p-6 bg-gradient-to-br from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
              <div className="text-center mb-4">
                <Gift className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  Become a Member
                </h3>
                <p className="text-sm text-charcoal/70 mb-4">
                  Save up to 40% on tickets and enjoy exclusive benefits
                </p>
                <Button
                  className="w-full bg-ocean-blue hover:bg-ocean-blue-dark"
                  asChild
                >
                  <Link href="/membership">
                    <Users className="mr-2 h-4 w-4" />
                    Join Now - $45/year
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Ticket Selection */}
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-lg font-bold text-charcoal mb-4">
                Select Tickets
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-sandstone/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      General Admission
                    </h4>
                    <p className="text-sm text-charcoal/60">Standard seating</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-charcoal">$12</div>
                    <div className="text-sm text-ocean-blue">Members: $8</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-sandstone/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Premium Seating
                    </h4>
                    <p className="text-sm text-charcoal/60">
                      Center section, reserved
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-charcoal">$18</div>
                    <div className="text-sm text-ocean-blue">Members: $12</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border-2 border-ocean-blue rounded-lg bg-ocean-blue/5">
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Student/Senior
                    </h4>
                    <p className="text-sm text-charcoal/60">
                      Valid ID required
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-charcoal">$8</div>
                    <div className="text-sm text-ocean-blue">Members: $6</div>
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-6">
                <Button
                  className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white"
                  asChild
                >
                  <Link
                    href={`/cart?movieId=${
                      movieData.id
                    }&title=${encodeURIComponent(
                      movieData.title
                    )}&poster=${encodeURIComponent(
                      movieData.poster
                    )}&date=${encodeURIComponent(
                      movieData.date
                    )}&time=${encodeURIComponent(
                      movieData.time
                    )}&venue=${encodeURIComponent(
                      movieData.venue
                    )}&rating=${encodeURIComponent(
                      movieData.rating
                    )}&genre=${encodeURIComponent(
                      movieData.genre
                    )}&runtime=${encodeURIComponent(movieData.runtime)}`}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Disclaimers - Strapi Content */}
        <div className="mt-12 p-6 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal">Refund Policy</h3>
                  <p className="text-sm text-charcoal/70">
                    Tickets are non-refundable within 24 hours of the screening.
                    Exchanges may be available for other screenings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal">Arrival Time</h3>
                  <p className="text-sm text-charcoal/70">
                    Please arrive 15 minutes before showtime. Late arrivals may
                    not be seated during the film.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal">Accessibility</h3>
                  <p className="text-sm text-charcoal/70">
                    Wheelchair accessible seating available. Hearing assistance
                    devices provided upon request.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-charcoal">
                    Food & Beverages
                  </h3>
                  <p className="text-sm text-charcoal/70">
                    Outside food and beverages not permitted. Concessions
                    available in the lobby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Strapi Content */}
        <div className="mt-8 p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
            Upcoming Events
          </h2>
          <p className="text-base text-charcoal/70 leading-relaxed mb-4">
            Don't miss our upcoming special events! Join us for our annual Film
            Festival next month featuring over 20 independent films, filmmaker
            Q&As, and exclusive networking events. Early bird tickets available
            now.
          </p>
          <Button
            variant="outline"
            className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            asChild
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
