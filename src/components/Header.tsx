'use client';

import { Button } from '@/components/ui/safs-button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: '/films', label: 'Now Playing' },
    { href: '/events', label: 'Events' },
    { href: '/archive', label: 'Archive' },
    { href: '/venues', label: 'Venues' },
    { href: '/about', label: 'About' },
    { href: '/membership', label: 'Membership' },
    { href: '/sponsorship', label: 'Sponsorship' },
  ];

  return (
    <header className='bg-sandstone border-b border-sandstone-dark/20 sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex-shrink-0'>
            <div className='text-center'>
              <div className='text-ocean-blue font-serif text-lg font-semibold leading-tight'>
                St. Augustine
              </div>
              <div className='text-charcoal font-serif text-sm leading-tight'>
                Film Society
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
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
            <div className='flex items-center ml-8'>
              <Button href='/signup' variant='primary' size='sm'>
                Login | Signup
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant='ghost' size='sm'>
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='w-80 bg-sandstone'>
                <div className='flex flex-col h-full'>
                  <div className='flex items-center justify-between mb-8'>
                    <div className='text-center'>
                      <div className='text-ocean-blue font-serif text-lg font-semibold leading-tight'>
                        St. Augustine
                      </div>
                      <div className='text-charcoal font-serif text-sm leading-tight'>
                        Film Society
                      </div>
                    </div>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <X className='h-5 w-5' />
                    </Button>
                  </div>

                  {/* Mobile Menu Items */}
                  <nav className='flex-1'>
                    <div className='space-y-4'>
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className='block text-charcoal hover:text-ocean-blue transition-colors py-2 text-lg'
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Auth Buttons */}
                  <div className='border-t border-sandstone-dark/20 pt-6'>
                    <Button href='/signup' variant='primary' fullWidth>
                      Login | Signup
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
