'use client'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: '/films', label: 'Now Playing' },
    { href: '/events', label: 'Events' },
    { href: '/archive', label: 'Archive' },
    { href: '/about', label: 'About' },
    { href: '/membership', label: 'Membership' },
  ]

  return (
    <header className="bg-sandstone border-b border-sandstone-dark/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-center">
              <div className="text-ocean-blue font-serif text-lg font-semibold leading-tight">
                St. Augustine
              </div>
              <div className="text-charcoal font-serif text-sm leading-tight">
                Film Society
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'text-charcoal hover:text-ocean-blue transition-colors'
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
              >
                <Link href="/donations">Donate</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-ocean-blue hover:bg-ocean-blue-dark text-white"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-5 w-5 text-charcoal" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-sandstone">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-center">
                      <div className="text-ocean-blue font-serif text-lg font-semibold leading-tight">
                        St. Augustine
                      </div>
                      <div className="text-charcoal font-serif text-sm leading-tight">
                        Film Society
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2"
                    >
                      <X className="h-5 w-5 text-charcoal" />
                    </Button>
                  </div>

                  {/* Mobile Menu Items */}
                  <nav className="flex-1">
                    <div className="space-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-charcoal hover:text-ocean-blue transition-colors py-2 text-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className="border-t border-sandstone-dark/20 pt-6 space-y-3">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                    >
                      <Link href="/donations">Donate</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-white"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
