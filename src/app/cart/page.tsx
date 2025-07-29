import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Calendar,
  Clock,
  CreditCard,
  MapPin,
  Trash2,
  Users,
} from 'lucide-react'
import Link from 'next/link'

interface CartPageProps {
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

export default function CartPage({ searchParams }: CartPageProps) {
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

  const ticketPrice = 12
  const memberPrice = 8
  const quantity = 2 // Default quantity
  const subtotal = ticketPrice * quantity
  const tax = subtotal * 0.07 // 7% tax
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Shopping Cart"
        subtitle="Review your tickets before checkout"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-charcoal">
                    Your Tickets
                  </CardTitle>
                </CardHeader>
                <CardContent>
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

                    {/* Movie Details */}
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                        {movieData.title} ({movieData.year})
                      </h3>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold">
                            {movieData.rating}/10
                          </span>
                        </div>
                        <Badge variant="secondary">{movieData.genre}</Badge>
                        <Badge variant="outline">R</Badge>
                      </div>

                      <div className="space-y-2 text-sm text-charcoal/70 mb-4">
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

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-4 mb-4">
                        <label className="text-sm font-medium text-charcoal">
                          Quantity:
                        </label>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            -
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {quantity}
                          </span>
                          <Button variant="outline" size="sm">
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Member Promotion */}
              <Card className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-8 w-8 text-ocean-blue mt-1" />
                    <div>
                      <h3 className="text-lg font-serif font-bold text-ocean-blue mb-2">
                        Become a Member & Save
                      </h3>
                      <p className="text-charcoal/70 mb-3">
                        Join SAFS today and save up to 40% on all tickets, plus
                        get priority booking and exclusive member events.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-ocean-blue">
                            $45
                          </div>
                          <div className="text-sm text-charcoal/60">
                            per year
                          </div>
                        </div>
                        <Button
                          asChild
                          size="sm"
                          className="bg-ocean-blue hover:bg-ocean-blue-dark"
                        >
                          <Link href="/membership">Join Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-charcoal">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">
                        Tickets ({quantity})
                      </span>
                      <span className="font-semibold">${ticketPrice} each</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Subtotal</span>
                      <span className="font-semibold">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Tax (7%)</span>
                      <span className="font-semibold">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-charcoal">
                          Total
                        </span>
                        <span className="text-lg font-bold text-charcoal">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white"
                      asChild
                    >
                      <Link
                        href={`/checkout?movieId=${
                          movieData.id
                        }&title=${encodeURIComponent(
                          movieData.title
                        )}&quantity=${quantity}&total=${total.toFixed(2)}`}
                      >
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                      asChild
                    >
                      <Link href="/tickets">Continue Shopping</Link>
                    </Button>
                  </div>

                  <div className="text-xs text-charcoal/60 text-center">
                    <p>Secure checkout powered by Stripe</p>
                    <p>Your payment information is encrypted and secure</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
