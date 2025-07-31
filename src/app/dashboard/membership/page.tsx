'use client'

import {
  Award,
  Calendar,
  CreditCard,
  Gift,
  Star,
  Ticket,
  Users,
} from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function MembershipPage() {
  const { data: session } = useSession()
  const user = session?.user
  const membership = user?.membership

  const membershipTiers = [
    {
      name: 'Basic',
      price: '$25/year',
      features: [
        'Access to all screenings',
        'Member newsletter',
        'Event notifications',
      ],
      current: membership?.membershipTier === 'basic',
    },
    {
      name: 'Premium',
      price: '$50/year',
      features: [
        'All Basic benefits',
        'Priority seating',
        'Exclusive events',
        'Member-only screenings',
      ],
      current: membership?.membershipTier === 'premium',
    },
    {
      name: 'Patron',
      price: '$100/year',
      features: [
        'All Premium benefits',
        'Meet & greets',
        'Behind-the-scenes access',
        'Voting rights',
      ],
      current: membership?.membershipTier === 'patron',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">Membership</h1>
        <p className="text-charcoal/70">
          Manage your St. Augustine Film Society membership
        </p>
      </div>

      {/* Current Membership Status */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Current Membership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <Star className="h-8 w-8 text-ochre mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Membership Tier</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.membershipTier || 'None'}
            </p>
          </div>

          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <Calendar className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Member Since</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.joinDate
                ? new Date(membership.joinDate).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>

          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <Award className="h-8 w-8 text-terracotta mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Status</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.membershipStatus || 'N/A'}
            </p>
          </div>
        </div>

        {membership?.membershipTier === 'none' && (
          <div className="mt-6 p-4 bg-ocean-blue/10 border border-ocean-blue/20 rounded-lg">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-ocean-blue mr-2" />
              <p className="text-ocean-blue font-medium">Ready to join?</p>
            </div>
            <p className="text-ocean-blue/80 text-sm mt-1">
              Become a member to unlock exclusive benefits and support
              independent cinema in St. Augustine.
            </p>
            <Link
              href="/membership"
              className="inline-block mt-3 px-4 py-2 text-sm font-medium text-sandstone bg-ocean-blue hover:bg-ocean-blue-dark rounded-md transition-colors"
            >
              View Membership Options
            </Link>
          </div>
        )}
      </div>

      {/* Membership Benefits */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Membership Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Ticket className="h-6 w-6 text-ocean-blue mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">
              Access to All Screenings
            </h3>
            <p className="text-sm text-charcoal/70">
              Attend any of our film screenings and events
            </p>
          </div>

          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Gift className="h-6 w-6 text-terracotta mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">
              Member Discounts
            </h3>
            <p className="text-sm text-charcoal/70">
              Save on tickets and merchandise
            </p>
          </div>

          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Calendar className="h-6 w-6 text-ochre mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">
              Exclusive Events
            </h3>
            <p className="text-sm text-charcoal/70">
              Special screenings and meet & greets
            </p>
          </div>

          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Users className="h-6 w-6 text-ocean-blue mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">
              Community Access
            </h3>
            <p className="text-sm text-charcoal/70">
              Connect with fellow film enthusiasts
            </p>
          </div>

          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Award className="h-6 w-6 text-terracotta mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">Voting Rights</h3>
            <p className="text-sm text-charcoal/70">
              Help choose our film programming
            </p>
          </div>

          <div className="p-4 border border-sandstone-dark rounded-lg">
            <Star className="h-6 w-6 text-ochre mb-2" />
            <h3 className="font-semibold text-charcoal mb-1">
              Behind-the-Scenes
            </h3>
            <p className="text-sm text-charcoal/70">
              Exclusive content and insights
            </p>
          </div>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Membership Tiers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 rounded-lg border-2 ${
                tier.current
                  ? 'border-ocean-blue bg-ocean-blue/5'
                  : 'border-sandstone-dark'
              }`}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-charcoal">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-ocean-blue">
                  {tier.price}
                </p>
                {tier.current && (
                  <span className="inline-block mt-2 px-2 py-1 text-xs font-medium text-sandstone bg-ocean-blue rounded">
                    Current Plan
                  </span>
                )}
              </div>

              <ul className="space-y-2">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-charcoal/70"
                  >
                    <div className="h-1.5 w-1.5 bg-ocean-blue rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {!tier.current && (
                <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-sandstone bg-ocean-blue hover:bg-ocean-blue-dark rounded-md transition-colors">
                  Upgrade to {tier.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Payment Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Payment Information
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div className="flex items-center">
              <CreditCard className="h-5 w-5 text-charcoal/60 mr-3" />
              <div>
                <p className="font-medium text-charcoal">Payment Method</p>
                <p className="text-sm text-charcoal/60">
                  No payment method on file
                </p>
              </div>
            </div>
            <button className="px-3 py-1 text-sm font-medium text-ocean-blue hover:text-ocean-blue-dark transition-colors">
              Add Payment Method
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Next Billing Date</p>
              <p className="text-sm text-charcoal/60">
                {membership?.renewalDate
                  ? new Date(membership.renewalDate).toLocaleDateString()
                  : 'No active subscription'}
              </p>
            </div>
            <button className="px-3 py-1 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors">
              View Billing History
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
