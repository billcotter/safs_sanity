import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Download,
  Mail,
  MapPin,
  Star,
  Ticket,
} from 'lucide-react'
import Link from 'next/link'

export default function TicketSuccessPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Tickets Confirmed!"
        subtitle="Your tickets have been successfully purchased"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Screenings', href: '/screenings' },
            { label: 'Success' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <Card className="p-8 text-center mb-8 border-2 border-green-200 bg-green-50">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-charcoal mb-4">
              Tickets Purchased Successfully!
            </h1>
            <p className="text-lg text-charcoal/70 mb-6">
              Your tickets have been confirmed and you'll receive a confirmation
              email shortly. Please arrive 15 minutes before the screening time.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-charcoal/60">
              <span>Order #TIX-{Date.now().toString().slice(-6)}</span>
              <span>•</span>
              <span>Payment confirmed</span>
            </div>
          </Card>

          {/* Ticket Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
                Screening Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-ocean-blue" />
                  <div>
                    <p className="font-semibold text-charcoal">
                      Friday, December 15, 2024
                    </p>
                    <p className="text-sm text-charcoal/70">7:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-ocean-blue" />
                  <div>
                    <p className="font-semibold text-charcoal">
                      Lightner Museum
                    </p>
                    <p className="text-sm text-charcoal/70">
                      75 King Street, St. Augustine, FL
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Ticket className="h-5 w-5 text-ocean-blue" />
                  <div>
                    <p className="font-semibold text-charcoal">2 tickets</p>
                    <p className="text-sm text-charcoal/70">
                      General admission
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
                Payment Summary
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Price (2 tickets):</span>
                  <span>$30.00</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Member Discount (30%):</span>
                  <span>-$9.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg text-ocean-blue">
                  <span>Total:</span>
                  <span>$21.00</span>
                </div>
                <div className="text-sm text-green-600">
                  You saved $9.00 with your membership!
                </div>
              </div>
            </Card>
          </div>

          {/* What's Next */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Mail className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Email Confirmation
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Check your email for ticket details and venue information.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Download className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Digital Tickets
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Your tickets are available in your member account.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Star className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Member Benefits
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Enjoy priority seating and member-only events.
              </p>
            </Card>
          </div>

          {/* Important Information */}
          <Card className="p-6 mb-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
              Important Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-ocean-blue" />
                  Arrival Time
                </h3>
                <p className="text-sm text-charcoal/70">
                  Please arrive 15 minutes before the screening time. Doors open
                  30 minutes before showtime.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ocean-blue" />
                  Venue Information
                </h3>
                <p className="text-sm text-charcoal/70">
                  Free parking available. The venue is wheelchair accessible.
                  Refreshments available for purchase.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button
              asChild
              variant="outline"
              className="h-auto p-4 flex-col gap-2"
            >
              <Link href="/screenings">
                <Calendar className="h-6 w-6" />
                <span>Browse More Screenings</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto p-4 flex-col gap-2"
            >
              <Link href="/membership">
                <Star className="h-6 w-6" />
                <span>Member Dashboard</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto p-4 flex-col gap-2"
            >
              <Link href="/about">
                <ArrowRight className="h-6 w-6" />
                <span>About SAFS</span>
              </Link>
            </Button>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/30 border-2 border-ocean-blue/30">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Enjoy Your Screening!
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Thank you for supporting the St. Augustine Film Society. We look
                forward to seeing you at the screening!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-ocean-blue hover:bg-ocean-blue-dark"
                >
                  <Link href="/">Return to Homepage</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                >
                  <Link href="/screenings">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    View More Screenings
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
