import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CreditCard, Film, Gift, Heart, Star, Users } from 'lucide-react'

export default function DonationsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Donations"
        subtitle="Support the St. Augustine Film Society"
        strapiMessage="Your generous donations help us bring world-class cinema to St. Augustine. This year, we're raising funds to restore our historic screening equipment and expand our educational programs. Every contribution makes a difference in our community."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Impact Statement - Strapi Content */}
        <div className="mb-12 p-8 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Your Support Makes a Difference
          </h2>
          <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
            Every donation helps us bring exceptional cinema to St. Augustine
            and supports our mission of fostering a vibrant film culture in our
            community. Your generosity enables us to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-ocean-blue/10 rounded-lg">
                <Film className="h-5 w-5 text-ocean-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Curate Quality Films
                </h3>
                <p className="text-sm text-charcoal/70">
                  License independent and international films that wouldn't
                  otherwise reach our community
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-ocean-blue/10 rounded-lg">
                <Users className="h-5 w-5 text-ocean-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Educational Programs
                </h3>
                <p className="text-sm text-charcoal/70">
                  Host filmmaker Q&As, workshops, and educational screenings for
                  students and community members
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-ocean-blue/10 rounded-lg">
                <Heart className="h-5 w-5 text-ocean-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">
                  Accessibility
                </h3>
                <p className="text-sm text-charcoal/70">
                  Provide free and reduced-price screenings for underserved
                  community members
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Levels - Strapi Content */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-sandstone/30">
            <h3 className="text-lg font-bold text-charcoal mb-2">Friend</h3>
            <div className="text-2xl font-bold text-ocean-blue mb-4">$25</div>
            <ul className="space-y-2 mb-6 text-sm text-charcoal/70">
              <li>• Recognition in our newsletter</li>
              <li>• Thank you card</li>
              <li>• Film Society sticker</li>
            </ul>
            <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
              <CreditCard className="mr-2 h-4 w-4" />
              Donate $25
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-sandstone/30">
            <h3 className="text-lg font-bold text-charcoal mb-2">Supporter</h3>
            <div className="text-2xl font-bold text-ocean-blue mb-4">$50</div>
            <ul className="space-y-2 mb-6 text-sm text-charcoal/70">
              <li>• All Friend benefits</li>
              <li>• Name on donor wall</li>
              <li>• Free screening pass</li>
            </ul>
            <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
              <CreditCard className="mr-2 h-4 w-4" />
              Donate $50
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-ocean-blue relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ocean-blue">
              Popular
            </Badge>
            <h3 className="text-lg font-bold text-charcoal mb-2">Patron</h3>
            <div className="text-2xl font-bold text-ocean-blue mb-4">$100</div>
            <ul className="space-y-2 mb-6 text-sm text-charcoal/70">
              <li>• All Supporter benefits</li>
              <li>• VIP event invitations</li>
              <li>• Film Society tote bag</li>
            </ul>
            <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
              <CreditCard className="mr-2 h-4 w-4" />
              Donate $100
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-sandstone/30">
            <h3 className="text-lg font-bold text-charcoal mb-2">Benefactor</h3>
            <div className="text-2xl font-bold text-ocean-blue mb-4">$250+</div>
            <ul className="space-y-2 mb-6 text-sm text-charcoal/70">
              <li>• All Patron benefits</li>
              <li>• Private screening invitation</li>
              <li>• Tax-deductible donation</li>
            </ul>
            <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark">
              <CreditCard className="mr-2 h-4 w-4" />
              Donate $250
            </Button>
          </div>
        </div>

        {/* Impact Stories - Strapi Content */}
        <div className="mb-12 p-8 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
            Stories of Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-ocean-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">
                    Student Film Program
                  </h3>
                  <p className="text-sm text-charcoal/60">
                    Funded by your donations
                  </p>
                </div>
              </div>
              <p className="text-base text-charcoal/70 leading-relaxed">
                "Thanks to donor support, we were able to provide free film
                workshops to 150 local high school students this year. Many
                discovered their passion for filmmaking and went on to pursue
                film studies in college."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-ocean-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">
                    Accessibility Initiative
                  </h3>
                  <p className="text-sm text-charcoal/60">
                    Made possible by donors
                  </p>
                </div>
              </div>
              <p className="text-base text-charcoal/70 leading-relaxed">
                "Your donations helped us install hearing assistance devices and
                provide audio descriptions for visually impaired patrons, making
                cinema accessible to everyone in our community."
              </p>
            </div>
          </div>
        </div>

        {/* Special Campaign - Strapi Content */}
        <div className="p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Matching Gift Challenge
          </h2>
          <p className="text-lg text-charcoal/70 mb-4">
            A generous anonymous donor has pledged to match all donations up to
            $10,000 this month! Your $50 donation becomes $100, your $100
            becomes $200. Double your impact today.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-3xl font-bold text-ocean-blue">$7,250</div>
            <div className="text-sm text-charcoal/60">
              raised of $10,000 goal
            </div>
          </div>
          <Button size="lg" className="bg-ocean-blue hover:bg-ocean-blue-dark">
            <Gift className="mr-2 h-5 w-5" />
            Double Your Donation
          </Button>
        </div>
      </div>
    </div>
  )
}
