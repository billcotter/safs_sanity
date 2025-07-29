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
  Lock,
  Quote,
  User,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Welcome Back"
        subtitle="Sign in to your St. Augustine Film Society account"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Login Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Login Form */}
            <div>
              <Card className="p-8 bg-white shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
                  Sign In to Your Account
                </h2>

                <form className="space-y-6">
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
                      placeholder="Enter your password"
                      className="mt-2"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label
                        htmlFor="remember"
                        className="text-sm text-charcoal/70"
                      >
                        Remember me
                      </Label>
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-ocean-blue hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-charcoal/70">
                    Don't have an account?{' '}
                    <Link
                      href="/signup"
                      className="text-ocean-blue hover:underline font-semibold"
                    >
                      Create Account
                    </Link>
                  </p>
                </div>

                {/* Social Login Options */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-sandstone/30" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-charcoal/60">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                      Twitter
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                  Welcome Back to Our Community
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Sign in to access your member benefits, manage your account,
                  and continue your cinematic journey with the St. Augustine
                  Film Society.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Your Reservations
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      View and manage your upcoming screening reservations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Gift className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Member Benefits
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Access your exclusive discounts and special offers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-ocean-blue/10 rounded-lg">
                    <Users className="h-5 w-5 text-ocean-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">
                      Community Access
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Connect with fellow members and join discussions
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Promotion Card */}
              <Card className="p-6 bg-gradient-to-br from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
                <div className="text-center">
                  <h4 className="text-lg font-bold text-charcoal mb-2">
                    Not a Member Yet?
                  </h4>
                  <p className="text-sm text-charcoal/70 mb-4">
                    Join today and unlock exclusive benefits
                  </p>
                  <Button
                    asChild
                    className="bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <Link href="/membership">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Become a Member
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
              What Our Members Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Quote className="h-6 w-6 text-ocean-blue flex-shrink-0" />
                  <div>
                    <p className="text-charcoal/70 italic mb-3">
                      "The member portal makes it so easy to manage my
                      reservations and track my benefits. Everything is just a
                      click away!"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          James Wilson
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2021
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
                      "I love how I can see all my past screenings and get
                      personalized recommendations based on what I've watched."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          Lisa Thompson
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2019
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
                      "The member community is incredible. I've made so many
                      friends who share my passion for independent cinema."
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-ocean-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">
                          Michael Brown
                        </p>
                        <p className="text-xs text-charcoal/60">
                          Member since 2017
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
              Need Help Signing In?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Forgot your password?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Click "Forgot password?" above and we'll send you a reset link
                  to your email address.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Can't access your account?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Contact our support team at support@safs.org or call (904)
                  123-4567 for assistance.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Want to change your password?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  After signing in, go to your account settings to update your
                  password and personal information.
                </p>
              </Card>

              <Card className="p-6 bg-white shadow-lg">
                <h3 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Need to update membership?
                </h3>
                <p className="text-charcoal/70 text-sm">
                  Visit your account dashboard to upgrade your membership or
                  change your billing information.
                </p>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/30 border-2 border-ocean-blue/30">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Ready to Continue Your Film Journey?
              </h2>
              <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Sign in to access your member benefits, manage your
                reservations, and stay connected with our vibrant film
                community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-ocean-blue hover:bg-ocean-blue-dark"
                >
                  <Link href="/tickets">
                    <Calendar className="mr-2 h-5 w-5" />
                    Browse Upcoming Screenings
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
