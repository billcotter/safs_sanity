import { PageBanner } from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  CreditCard,
  Gift,
  Quote,
  User,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Join Our Community"
        subtitle="Become part of the St. Augustine Film Society family"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Sign Up Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Sign Up Form */}
            <div>
              <Card className="p-8 bg-white shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Create Your Account
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-charcoal font-semibold"
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-charcoal font-semibold"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-charcoal font-semibold"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="password"
                      className="text-charcoal font-semibold"
                    >
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="confirmPassword"
                      className="text-charcoal font-semibold"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm text-charcoal/70">
                      I agree to the{' '}
                      <Link
                        href="/terms"
                        className="text-ocean-blue hover:underline"
                      >
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/privacy"
                        className="text-ocean-blue hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label
                      htmlFor="newsletter"
                      className="text-sm text-charcoal/70"
                    >
                      Subscribe to our newsletter for updates and special offers
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Create Account
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-charcoal/70">
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="text-ocean-blue hover:underline font-semibold"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Why Join Our Community?
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Connect with fellow film enthusiasts, get early access to
                  screenings, and enjoy exclusive member benefits that enhance
                  your cinematic experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Early Access
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Reserve tickets before general public and get priority
                      seating
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Gift className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Member Discounts
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Save up to 40% on tickets and exclusive merchandise
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Users className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Community Events
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Access to member-only screenings and filmmaker Q&As
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Promotion Card */}
              <Card className="p-6 bg-gradient-to-br from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-charcoal mb-2">
                    Ready to Upgrade?
                  </h4>
                  <p className="text-sm text-charcoal/70 mb-4">
                    Become a full member and unlock all benefits
                  </p>
                  <Button
                    asChild
                    className="bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <Link href="/membership">
                      <CreditCard className="mr-2 h-4 w-4" />
                      View Membership Options
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
              What Our Members Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-6 w-6 text-ocean-blue flex-shrink-0" />
                  <div>
                    <p className="text-charcoal/70 italic mb-3">
                      "Joining the Film Society has introduced me to films I
                      never would have discovered otherwise. The community here
                      is amazing!"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          Maria Rodriguez
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2018
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-6 w-6 text-ocean-blue flex-shrink-0" />
                  <div>
                    <p className="text-charcoal/70 italic mb-3">
                      "The member discounts are fantastic, and the exclusive
                      events make every screening feel special."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          David Chen
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2020
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-6 w-6 text-ocean-blue flex-shrink-0" />
                  <div>
                    <p className="text-charcoal/70 italic mb-3">
                      "I love the Q&A sessions with filmmakers. It's like having
                      a backstage pass to the movie industry!"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          Sarah Mitchell
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Is membership required?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  No, you can attend screenings as a guest, but members enjoy
                  priority access, discounts, and exclusive events.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  How much does membership cost?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Individual membership starts at $45/year, with family and
                  patron options available. See our membership page for details.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Can I cancel my membership?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Yes, you can cancel at any time. Your benefits remain active
                  until the end of your current billing period.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  What types of films do you show?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  We curate independent films, classic masterpieces,
                  international cinema, and documentaries from around the world.
                </p>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/30 border-2 border-ocean-blue/30">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Ready to Join Our Film Community?
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Create your account today and start your journey with the St.
                Augustine Film Society. Experience exceptional cinema in the
                heart of America's oldest city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-ocean-blue hover:bg-ocean-blue-dark"
                >
                  <Link href="/membership">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Explore Membership
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                >
                  <Link href="/about">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Learn More About Us
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
