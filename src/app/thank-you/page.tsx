import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Home,
  Mail,
  MapPin,
  Ticket,
} from 'lucide-react'
import Link from 'next/link'

interface ThankYouPageProps {
  searchParams: {
    movieId?: string
    title?: string
    quantity?: string
    total?: string
  }
}

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const movieId = searchParams.movieId || '1'
  const title = searchParams.title || 'The Grand Budapest Hotel'
  const quantity = parseInt(searchParams.quantity || '2')
  const total = parseFloat(searchParams.total || '25.68')

  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Thank You!"
        subtitle="Your tickets have been purchased successfully"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <Card className="mb-8 border-2 border-green-200 bg-green-50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-2">
                Payment Successful!
              </h2>
              <p className="text-charcoal/70 mb-4">
                Your tickets have been purchased and confirmed. You'll receive
                an email confirmation shortly.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
                <span>Order #SAFS-{Date.now().toString().slice(-6)}</span>
                <span>•</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Ticket Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-serif text-charcoal flex items-center gap-2">
                <Ticket className="h-6 w-6 text-ocean-blue" />
                Your Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Movie Poster */}
                <div className="w-32 h-48 bg-sandstone/20 rounded-lg flex items-center justify-center overflow-hidden">
                  <span className="text-charcoal/60 text-sm">Poster</span>
                </div>

                {/* Movie Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                    {title}
                  </h3>
                  <div className="space-y-2 text-sm text-charcoal/70 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-ocean-blue" />
                      <span>Friday, December 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-ocean-blue" />
                      <span>7:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-ocean-blue" />
                      <span>Flagler College Auditorium</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-ocean-blue/20 text-ocean-blue"
                    >
                      {quantity} {quantity === 1 ? 'Ticket' : 'Tickets'}
                    </Badge>
                    <Badge variant="outline">General Admission</Badge>
                  </div>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-sandstone/30 rounded-lg p-4">
                <h4 className="font-semibold text-charcoal mb-2">
                  Important Information
                </h4>
                <ul className="text-sm text-charcoal/70 space-y-1">
                  <li>• Please arrive 15 minutes before the screening</li>
                  <li>• Bring a valid ID for ticket verification</li>
                  <li>• No refunds or exchanges</li>
                  <li>• Food and drinks available in the lobby</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white"
              asChild
            >
              <Link href={`/film/${movieId}`}>
                <Ticket className="mr-2 h-4 w-4" />
                View Film Details
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
              asChild
            >
              <Link href="/tickets">Browse More Films</Link>
            </Button>
          </div>

          {/* Additional Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="p-4">
                <Mail className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                <h4 className="font-semibold text-charcoal mb-1">
                  Email Confirmation
                </h4>
                <p className="text-xs text-charcoal/70">
                  Check your email for tickets and details
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <Download className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                <h4 className="font-semibold text-charcoal mb-1">
                  Download Tickets
                </h4>
                <p className="text-xs text-charcoal/70">
                  Save tickets to your device
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-4">
                <Home className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
                <h4 className="font-semibold text-charcoal mb-1">
                  Return Home
                </h4>
                <p className="text-xs text-charcoal/70">
                  Back to SAFS homepage
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Member Promotion */}
          <Card className="mt-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-serif font-bold text-ocean-blue mb-2">
                Enjoy Your First Film?
              </h3>
              <p className="text-charcoal/70 mb-4">
                Become a SAFS member and save up to 40% on all future tickets,
                plus get priority booking and exclusive member events.
              </p>
              <Button
                asChild
                className="bg-ocean-blue hover:bg-ocean-blue-dark"
              >
                <Link href="/membership">Join SAFS Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
