'use client'

import { cn } from '@/lib/utils'
import { Heart, Home, Settings, Star, Ticket, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: Home },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'My Tickets', href: '/dashboard/tickets', icon: Ticket },
  { name: 'Favorites', href: '/dashboard/favorites', icon: Heart },
  { name: 'Membership', href: '/dashboard/membership', icon: Star },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-sandstone-dark">
        <div className="flex items-center flex-shrink-0 px-4">
          <h2 className="text-lg font-semibold text-charcoal">Dashboard</h2>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-ocean-blue text-sandstone'
                      : 'text-charcoal/70 hover:bg-sandstone-light hover:text-charcoal'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 flex-shrink-0 h-5 w-5',
                      isActive
                        ? 'text-sandstone'
                        : 'text-charcoal/60 group-hover:text-charcoal'
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
