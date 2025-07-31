'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sparkles, Film, Ticket, Heart, Users, ArrowRight } from 'lucide-react'

export default function WelcomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/dashboard')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8">
        {/* Welcome Header */}
        <div className="text-center">
          <Sparkles className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to SAFS!
          </h1>
          <p className="text-xl text-gray-600">
            Hi {session?.user?.name?.split(' ')[0] || 'there'}! 👋
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Redirecting to your dashboard in {countdown} seconds...
          </p>
        </div>
        
        {/* Welcome Card */}
        <div className="bg-white rounded-xl shadow-lg px-8 py-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              You're all set! 🎉
            </h2>
            <p className="text-gray-600">
              Your account has been created successfully. 
              Welcome to the St. Augustine Film Society community!
            </p>
          </div>
          
          {/* Feature Highlights */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-medium text-gray-900 text-center mb-6">
              What you can do now:
            </h3>
            <div className="grid gap-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <Film className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-blue-900">Discover Films</p>
                  <p className="text-sm text-blue-700">Browse current and upcoming screenings</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <Ticket className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900">Book Tickets</p>
                  <p className="text-sm text-green-700">Reserve your seats for screenings</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-red-50 rounded-lg">
                <Heart className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-900">Save Favorites</p>
                  <p className="text-sm text-red-700">Create your personal film watchlist</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <Users className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-900">Join Community</p>
                  <p className="text-sm text-purple-700">Connect with fellow film enthusiasts</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="space-y-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <div className="text-center">
              <button
                onClick={() => router.push('/')}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Or explore the site first
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 