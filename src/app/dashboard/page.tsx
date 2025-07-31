'use client'

import { Calendar, Clock, Film, Heart, Star, Ticket } from 'lucide-react'
import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session } = useSession()
  const user = session?.user
  const membership = user?.membership

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Welcome back, {user?.name?.split(' ')[0] || 'there'}! 👋
        </h1>
        <p className="text-charcoal/70">
          {membership?.membershipTier !== 'none'
            ? `${membership?.membershipTier} Member since ${new Date(
                membership?.joinDate
              ).getFullYear()}`
            : 'Explore films and join our community'}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Ticket className="h-8 w-8 text-ocean-blue mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.ticketCount || 0}
              </p>
              <p className="text-sm text-charcoal/70">Tickets Purchased</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-terracotta mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.favoriteCount || 0}
              </p>
              <p className="text-sm text-charcoal/70">Favorite Films</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-ocean-blue mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.joinDate
                  ? new Date().getFullYear() -
                    new Date(membership.joinDate).getFullYear() +
                    1
                  : 1}
              </p>
              <p className="text-sm text-charcoal/70">Years as Member</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-ochre mr-3" />
            <div>
              <p className="text-2xl font-bold text-charcoal">
                {membership?.membershipStatus === 'active'
                  ? 'Active'
                  : 'Inactive'}
              </p>
              <p className="text-sm text-charcoal/70">Membership Status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Films Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Now Playing
        </h2>
        <div className="text-center py-8 text-charcoal/60">
          <Film className="mx-auto h-12 w-12 mb-4 text-ocean-blue" />
          <p>Current films will appear here</p>
          <p className="text-sm mt-2">
            Connect to your films API to display current screenings
          </p>
        </div>
      </div>

      {/* Upcoming Screenings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Your Upcoming Tickets
        </h2>
        <div className="text-center py-8 text-charcoal/60">
          <Ticket className="mx-auto h-12 w-12 mb-4 text-ocean-blue" />
          <p>Your upcoming tickets will appear here</p>
          <p className="text-sm mt-2">
            Purchase tickets to see them in your dashboard
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center p-3 bg-sandstone-light rounded-lg">
            <Clock className="h-5 w-5 text-charcoal/60 mr-3" />
            <div>
              <p className="text-sm font-medium text-charcoal">
                Account Created
              </p>
              <p className="text-xs text-charcoal/50">
                {membership?.joinDate
                  ? new Date(membership.joinDate).toLocaleDateString()
                  : 'Today'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
