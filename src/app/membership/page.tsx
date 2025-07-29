import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  CreditCard,
  Film,
  Gift,
  Heart,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Membership"
        subtitle="Join the St. Augustine Film Society"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="Special offer: New members receive a complimentary ticket to our next screening. Join today and become part of our vibrant film community in the nation's oldest city."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Membership Benefits with St. Augustine Context */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-sandstone/30 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                Why Become a Member?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Star className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Priority Seating
                    </h3>
                    <p className="text-sm text-charcoal/70">
                      Reserve your seats before general public tickets go on
                      sale at our historic venues
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Gift className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Member Discounts
                    </h3>
                    <p className="text-sm text-charcoal/70">
                      Save up to 40% on tickets and exclusive merchandise from
                      local St. Augustine artisans
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Special Events
                    </h3>
                    <p className="text-sm text-charcoal/70">
                      Access to member-only screenings and filmmaker Q&As in our
                      historic venues
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="St. Augustine Film Society members enjoying a screening"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Member Screening Event
              </div>
            </div>
          </div>
        </div>

        {/* Membership Levels with Enhanced Design */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Choose Your Membership Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg border border-sandstone/30 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">
                  Individual
                </h3>
                <div className="text-3xl font-bold text-ocean-blue mb-4">
                  $45<span className="text-lg text-charcoal/60">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Priority ticket access
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    20% discount on tickets
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Monthly newsletter
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Member-only events
                  </li>
                </ul>
                <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Join Now
                </Button>
              </div>
            </Card>

            <Card className="bg-white shadow-lg border-2 border-ocean-blue relative hover:shadow-xl transition-shadow">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ocean-blue">
                Most Popular
              </Badge>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">Family</h3>
                <div className="text-3xl font-bold text-ocean-blue mb-4">
                  $75<span className="text-lg text-charcoal/60">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    All Individual benefits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Up to 4 family members
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    30% discount on tickets
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Family movie nights
                  </li>
                </ul>
                <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Join Now
                </Button>
              </div>
            </Card>

            <Card className="bg-white shadow-lg border border-sandstone/30 hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">Patron</h3>
                <div className="text-3xl font-bold text-ocean-blue mb-4">
                  $150<span className="text-lg text-charcoal/60">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    All Family benefits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    VIP seating at all events
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Exclusive filmmaker meetups
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Star className="h-4 w-4 text-ocean-blue" />
                    Recognition in programs
                  </li>
                </ul>
                <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Join Now
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Member Testimonials with St. Augustine Context */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            What Our Members Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-sandstone/20 to-ocean-blue/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-ocean-blue" />
                </div>
                <div>
                  <p className="text-charcoal/80 mb-3 italic">
                    "The Film Society has enriched our cultural life in St.
                    Augustine. The screenings at the Lightner Museum are magical
                    experiences."
                  </p>
                  <p className="text-sm text-charcoal/60">
                    - Sarah & Tom Martinez, Members since 2018
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-sandstone/20 to-ocean-blue/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                  <Film className="h-6 w-6 text-ocean-blue" />
                </div>
                <div>
                  <p className="text-charcoal/80 mb-3 italic">
                    "As a local filmmaker, I love how the Society brings world
                    cinema to our historic city. The community here is
                    incredible."
                  </p>
                  <p className="text-sm text-charcoal/60">
                    - Michael Chen, Member since 2016
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Venues Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Our Historic Venues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Lightner Museum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Lightner Museum</h3>
                  <p className="text-white/80 text-sm">
                    Historic venue for special screenings
                  </p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Flagler College"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Flagler College</h3>
                  <p className="text-white/80 text-sm">
                    Main auditorium for regular screenings
                  </p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="St. Augustine Amphitheatre"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Amphitheatre</h3>
                  <p className="text-white/80 text-sm">
                    Outdoor screenings under the stars
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Ready to Join Our Film Community?
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Become a member today and experience the magic of cinema in the
            heart of historic St. Augustine. Connect with fellow film
            enthusiasts and support the arts in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/signup">
                <Heart className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/now-playing">
                <Film className="mr-2 h-5 w-5" />
                View Current Screenings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
