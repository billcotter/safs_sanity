import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Download,
  Film,
  Gift,
  Mail,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function MembershipSuccessPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Welcome to SAFS!"
        subtitle="Your membership has been activated successfully"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Membership', href: '/membership' },
            { label: 'Success' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <Card className="p-8 text-center mb-8 border-2 border-green-200 bg-green-50">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-serif font-bold text-charcoal mb-4">
              Welcome to the St. Augustine Film Society!
            </h1>
            <p className="text-lg text-charcoal/70 mb-6">
              Your membership has been activated and you're now part of our
              vibrant film community. You'll receive a confirmation email with
              your member details shortly.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-charcoal/60">
              <span>Order #SAFS-{Date.now().toString().slice(-6)}</span>
              <span>•</span>
              <span>
                Active until{' '}
                {new Date(
                  Date.now() + 365 * 24 * 60 * 60 * 1000
                ).toLocaleDateString()}
              </span>
            </div>
          </Card>

          {/* What's Next */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Book Your First Screening
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Browse our upcoming screenings and reserve your seats with
                member priority access.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-ocean-blue hover:bg-ocean-blue-dark"
              >
                <Link href="/screenings">
                  View Screenings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Gift className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Member Benefits
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Enjoy discounts, priority access, and exclusive member-only
                events.
              </p>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
              >
                <Link href="/membership">
                  View Benefits
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Join the Community
              </h3>
              <p className="text-sm text-charcoal/70 mb-4">
                Connect with fellow film enthusiasts and stay updated on events.
              </p>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>

          {/* Member Information */}
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
              Your Member Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Member Benefits
                </h3>
                <ul className="space-y-2 text-sm text-charcoal/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Priority ticket access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Member discounts on tickets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Exclusive member events
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Monthly newsletter
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2">
                  Important Dates
                </h3>
                <div className="space-y-2 text-sm text-charcoal/70">
                  <div className="flex justify-between">
                    <span>Join Date:</span>
                    <span>{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Renewal Date:</span>
                    <span>
                      {new Date(
                        Date.now() + 365 * 24 * 60 * 60 * 1000
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Member Status:</span>
                    <span className="text-green-600 font-semibold">Active</span>
                  </div>
                </div>
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
                <Film className="h-6 w-6" />
                <span>Browse Screenings</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto p-4 flex-col gap-2"
            >
              <Link href="/events">
                <Calendar className="h-6 w-6" />
                <span>View Events</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto p-4 flex-col gap-2"
            >
              <Link href="/about">
                <Users className="h-6 w-6" />
                <span>About SAFS</span>
              </Link>
            </Button>
          </div>

          {/* Additional Information */}
          <Card className="p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
            <h2 className="text-xl font-serif font-bold text-charcoal mb-4">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-ocean-blue" />
                  Email Confirmation
                </h3>
                <p className="text-sm text-charcoal/70">
                  You'll receive a welcome email with your member details, login
                  credentials, and information about upcoming events.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-2 flex items-center gap-2">
                  <Download className="h-4 w-4 text-ocean-blue" />
                  Member Card
                </h3>
                <p className="text-sm text-charcoal/70">
                  Your digital member card will be available in your account.
                  Show it at screenings for member benefits.
                </p>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <p className="text-charcoal/70 mb-4">
              Questions about your membership? Contact us at{' '}
              <a
                href="mailto:membership@safs.org"
                className="text-ocean-blue hover:underline"
              >
                membership@safs.org
              </a>
            </p>
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
