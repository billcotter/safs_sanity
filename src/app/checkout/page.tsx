import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  ArrowLeft,
  Calendar,
  Clock,
  CreditCard,
  Lock,
  MapPin,
  Shield,
} from 'lucide-react'
import Link from 'next/link'

interface CheckoutPageProps {
  searchParams: {
    movieId?: string
    title?: string
    quantity?: string
    total?: string
  }
}

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const movieId = searchParams.movieId || '1'
  const title = searchParams.title || 'The Grand Budapest Hotel'
  const quantity = parseInt(searchParams.quantity || '2')
  const total = parseFloat(searchParams.total || '25.68')

  return (
    <div className="min-h-screen bg-cream">
      <PageBanner title="Checkout" subtitle="Complete your purchase securely" />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Films', href: '/films' },
            { label: title, href: `/film/${movieId}` },
            {
              label: 'Purchase Tickets',
              href: `/purchase?movieId=${movieId}&title=${encodeURIComponent(
                title
              )}`,
            },
            {
              label: 'Cart',
              href: `/cart?movieId=${movieId}&title=${encodeURIComponent(
                title
              )}`,
            },
            { label: 'Checkout' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Form */}
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-charcoal flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-ocean-blue" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-4">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-4">
                      Payment Method
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 border border-ocean-blue/30 rounded-lg bg-ocean-blue/5">
                        <CreditCard className="h-5 w-5 text-ocean-blue" />
                        <div>
                          <div className="font-semibold text-charcoal">
                            Credit or Debit Card
                          </div>
                          <div className="text-sm text-charcoal/70">
                            Secure payment powered by Stripe
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal mb-4">
                      Billing Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" placeholder="123 Main Street" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="St. Augustine" />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input id="state" placeholder="FL" />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" placeholder="32084" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-start gap-3 p-4 bg-sandstone/30 rounded-lg">
                    <Shield className="h-5 w-5 text-ocean-blue mt-0.5" />
                    <div>
                      <div className="font-semibold text-charcoal mb-1">
                        Secure Payment
                      </div>
                      <div className="text-sm text-charcoal/70">
                        Your payment information is encrypted and secure. We use
                        industry-standard SSL encryption to protect your data.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-charcoal">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Movie Details */}
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-charcoal mb-2">
                      {title}
                    </h3>
                    <div className="space-y-1 text-sm text-charcoal/70">
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
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">
                        Tickets ({quantity})
                      </span>
                      <span className="font-semibold">$12.00 each</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Subtotal</span>
                      <span className="font-semibold">
                        ${(12 * quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/70">Tax (7%)</span>
                      <span className="font-semibold">
                        ${(12 * quantity * 0.07).toFixed(2)}
                      </span>
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

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white"
                      asChild
                    >
                      <Link
                        href={`/thank-you?movieId=${movieId}&title=${encodeURIComponent(
                          title
                        )}&quantity=${quantity}&total=${total.toFixed(2)}`}
                      >
                        <Lock className="mr-2 h-4 w-4" />
                        Pay ${total.toFixed(2)}
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                      asChild
                    >
                      <Link
                        href={`/cart?movieId=${movieId}&title=${encodeURIComponent(
                          title
                        )}`}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Cart
                      </Link>
                    </Button>
                  </div>

                  {/* Security Badges */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t">
                    <div className="flex items-center gap-2 text-xs text-charcoal/60">
                      <Shield className="h-4 w-4" />
                      <span>SSL Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal/60">
                      <Lock className="h-4 w-4" />
                      <span>PCI Compliant</span>
                    </div>
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
