'use client'

import { LogOut, Menu, Settings, User } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

interface DashboardHeaderProps {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    membership?: {
      membershipTier: string
      membershipStatus: string
    }
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <header className="bg-white shadow-sm border-b border-sandstone-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-charcoal">
              SAFS Dashboard
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-charcoal/70 hover:text-charcoal px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Back to Site
            </Link>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 text-charcoal/70 hover:text-charcoal px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <User className="h-5 w-5" />
                <span>{user?.name || 'Account'}</span>
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-sandstone-dark">
                  <div className="px-4 py-2 text-sm text-charcoal/70 border-b border-sandstone-dark">
                    <p className="font-medium text-charcoal">{user?.name}</p>
                    <p className="text-xs text-charcoal/50">{user?.email}</p>
                    {user?.membership && (
                      <p className="text-xs text-ocean-blue mt-1">
                        {user.membership.membershipTier} Member
                      </p>
                    )}
                  </div>

                  <Link
                    href="/dashboard/profile"
                    className="block px-4 py-2 text-sm text-charcoal/70 hover:bg-sandstone-light transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Settings className="inline h-4 w-4 mr-2" />
                    Profile Settings
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-sm text-charcoal/70 hover:bg-sandstone-light transition-colors"
                  >
                    <LogOut className="inline h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal/70 hover:text-charcoal transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-sandstone-light">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-charcoal/70 hover:text-charcoal transition-colors"
            >
              Back to Site
            </Link>
            <Link
              href="/dashboard/profile"
              className="block px-3 py-2 text-base font-medium text-charcoal/70 hover:text-charcoal transition-colors"
            >
              Profile Settings
            </Link>
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal/70 hover:text-charcoal transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
