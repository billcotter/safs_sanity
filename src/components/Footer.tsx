'use client';

import { Button } from '@/components/ui/safs-button';
import { Input } from '@/components/ui/input';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-charcoal text-white'>
      {/* St. Augustine Color Banner */}
      <div className='bg-gradient-to-r from-ocean-blue via-sandstone to-terracotta h-1'></div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='md:col-span-1'>
            <div className='mb-4'>
              <div className='text-center md:text-left'>
                <div className='text-sandstone font-serif text-xl font-semibold leading-tight mb-2'>
                  St. Augustine
                </div>
                <div className='text-sandstone-dark font-serif text-lg leading-tight'>
                  Film Society
                </div>
              </div>
            </div>
            <p className='text-sandstone/80 mb-6 max-w-md'>
              Celebrating cinema in the nation&apos;s oldest city. Join us for
              screenings, discussions, and special events throughout the year.
            </p>
            <div className='flex flex-wrap gap-3'>
              <Button
                asChild
                variant='outline'
                size='sm'
                className='border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white'
              >
                <Link href='/signup'>Join</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='sm'
                className='border-terracotta text-terracotta hover:bg-terracotta hover:text-white'
              >
                <Link href='/donations'>Donate</Link>
              </Button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className='text-sandstone font-semibold mb-4'>Stay Updated</h3>
            <p className='text-sandstone/80 text-sm mb-4'>
              Subscribe to our newsletter for the latest screenings, events, and
              film news.
            </p>
            <form className='space-y-3'>
              <div>
                <label
                  htmlFor='newsletter-email'
                  className='text-sandstone/80 text-sm'
                >
                  Email Address
                </label>
                <Input
                  id='newsletter-email'
                  type='email'
                  placeholder='Enter your email'
                  className='mt-1 bg-charcoal-light border-sandstone/30 text-white placeholder:text-sandstone/50 focus:border-ocean-blue'
                />
              </div>
              <Button
                type='submit'
                size='sm'
                className='w-full bg-ocean-blue hover:bg-ocean-blue-dark'
              >
                <Send className='mr-2 h-4 w-4' />
                Subscribe
              </Button>
            </form>
            <p className='text-sandstone/60 text-xs mt-2'>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

          {/* Contact Address & Social Media */}
          <div>
            <h3 className='text-sandstone font-semibold mb-4'>
              Contact & Follow
            </h3>

            {/* Contact Address */}
            <div className='mb-6'>
              <div className='space-y-3'>
                <div className='flex items-start space-x-3'>
                  <MapPin className='h-5 w-5 text-ocean-blue flex-shrink-0 mt-0.5' />
                  <div>
                    <p className='text-sandstone font-medium'>
                      St. Augustine Film Society
                    </p>
                    <p className='text-sandstone/80 text-sm'>123 King Street</p>
                    <p className='text-sandstone/80 text-sm'>
                      St. Augustine, FL 32084
                    </p>
                  </div>
                </div>
                <div className='flex items-center space-x-3'>
                  <Mail className='h-5 w-5 text-ocean-blue flex-shrink-0' />
                  <a
                    href='mailto:info@safs.org'
                    className='text-sandstone/80 hover:text-sandstone transition-colors'
                  >
                    info@safs.org
                  </a>
                </div>
                <div className='flex items-center space-x-3'>
                  <Phone className='h-5 w-5 text-ocean-blue flex-shrink-0' />
                  <a
                    href='tel:+19041234567'
                    className='text-sandstone/80 hover:text-sandstone transition-colors'
                  >
                    (904) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className='text-sandstone font-semibold mb-3'>Follow Us</h4>
              <div className='flex space-x-3'>
                <Button
                  asChild
                  variant='ghost'
                  size='sm'
                  className='text-sandstone/80 hover:text-ocean-blue hover:bg-sandstone/10'
                >
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Facebook'
                  >
                    <Facebook className='h-5 w-5' />
                  </a>
                </Button>
                <Button
                  asChild
                  variant='ghost'
                  size='sm'
                  className='text-sandstone/80 hover:text-ocean-blue hover:bg-sandstone/10'
                >
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'
                  >
                    <Instagram className='h-5 w-5' />
                  </a>
                </Button>
                <Button
                  asChild
                  variant='ghost'
                  size='sm'
                  className='text-sandstone/80 hover:text-ocean-blue hover:bg-sandstone/10'
                >
                  <a
                    href='https://twitter.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Twitter'
                  >
                    <Twitter className='h-5 w-5' />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-charcoal-light mt-8 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <div className='text-sandstone/60 text-sm'>
              © {currentYear} St. Augustine Film Society. All rights reserved.
            </div>
            <div className='flex flex-wrap gap-4 text-sm'>
              <Button
                asChild
                variant='ghost'
                size='sm'
                className='text-sandstone/60 hover:text-sandstone'
              >
                <Link href='/privacy'>Privacy Policy</Link>
              </Button>
              <Button
                asChild
                variant='ghost'
                size='sm'
                className='text-sandstone/60 hover:text-sandstone'
              >
                <Link href='/terms'>Terms of Service</Link>
              </Button>
              <Button
                asChild
                variant='ghost'
                size='sm'
                className='text-sandstone/60 hover:text-sandstone'
              >
                <Link href='/accessibility'>Accessibility</Link>
              </Button>
            </div>
          </div>

          {/* Website Maintainer Credit */}
          <div className='text-center mt-4 pt-4 border-t border-charcoal-light'>
            <p className='text-sandstone/40 text-xs'>
              Website maintained by{' '}
              <a
                href='https://wildbill.io'
                target='_blank'
                rel='noopener noreferrer'
                className='text-ocean-blue hover:text-ocean-blue-dark transition-colors'
              >
                wildbill.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
