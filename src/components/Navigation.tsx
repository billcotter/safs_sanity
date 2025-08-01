'use client';

import { Button } from '@/components/ui/safs-button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { name: 'Now Playing', href: '/films' },
  { name: 'Archive', href: '/archive' },
  { name: 'Venues', href: '/venues' },
  { name: 'About', href: '/about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Sponsorship', href: '/sponsorship' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-sandstone/95 backdrop-blur-sm border-b border-sandstone-dark/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16 md:h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <div className='w-8 h-8 bg-ocean-blue rounded-lg flex items-center justify-center mr-3'>
                <span className='text-sandstone font-bold text-sm'>SAFS</span>
              </div>
              <span className='text-xl font-bold text-charcoal'>
                St. Augustine Film Society
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-ocean-blue text-sandstone'
                        : 'text-charcoal hover:text-ocean-blue hover:bg-sandstone-light'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className='hidden md:block'>
            <Button asChild variant='primary' size='sm'>
              <Link href='/signup'>Login | Signup</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              type='button'
              className='text-charcoal hover:text-ocean-blue p-2'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              {mobileMenuOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-sandstone border-t border-sandstone-dark/30'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    isActive
                      ? 'bg-ocean-blue text-sandstone'
                      : 'text-charcoal hover:text-ocean-blue hover:bg-sandstone-light'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className='pt-4 pb-3 border-t border-sandstone-dark/30'>
              <Button asChild variant='primary' size='sm' className='w-full'>
                <Link href='/signup'>Login | Signup</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
