import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Globe, Mail, MapPin, Phone, Users } from 'lucide-react'
import Link from 'next/link'

export default function CorazonCinemaCafePage() {
  return (
    <div className="min-h-screen bg-sandstone">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs
            items={[
              { label: 'Venues', href: '/venues' },
              { label: 'Corazon Cinema & Café' },
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Corazon Cinema & Café
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Independent cinema and café in downtown St. Augustine, perfect for
              intimate screenings and film discussions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <div className="aspect-video bg-sandstone-dark rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎭</div>
                  <p className="text-charcoal/60">
                    Corazon Cinema & Café Image
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                About the Venue
              </h2>
              <div className="prose prose-charcoal max-w-none">
                <p className="text-lg text-charcoal/80 mb-4">
                  Corazon Cinema & Café is St. Augustine's premier independent
                  cinema, offering a unique blend of film screenings and café
                  culture. Located in the heart of downtown, this intimate venue
                  provides a cozy atmosphere for film society events and special
                  screenings.
                </p>
                <p className="text-lg text-charcoal/80 mb-4">
                  The venue features a state-of-the-art projection system and
                  comfortable seating, making it perfect for classic film
                  presentations, independent cinema screenings, and post-film
                  discussions. The attached café serves delicious refreshments
                  and creates a welcoming environment for film enthusiasts to
                  gather before and after screenings.
                </p>
                <p className="text-lg text-charcoal/80">
                  Corazon Cinema & Café is committed to showcasing diverse films
                  and fostering community through cinema. The venue regularly
                  hosts film society events, director Q&As, and special
                  screenings that celebrate the art of filmmaking.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Venue Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-ocean-blue" />
                  <span className="text-charcoal">Seating Capacity: 80</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🎬</div>
                  <span className="text-charcoal">Digital Projection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🔊</div>
                  <span className="text-charcoal">Premium Sound System</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">☕</div>
                  <span className="text-charcoal">Café & Refreshments</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">♿</div>
                  <span className="text-charcoal">Accessible Venue</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🅿️</div>
                  <span className="text-charcoal">Street Parking</span>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Past Film Society Events
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm opacity-60">
                  <h3 className="font-semibold text-charcoal mb-2">
                    Coming soon...
                  </h3>
                  <p className="text-charcoal/70">
                    Stay tuned for upcoming screenings at this intimate venue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-charcoal mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">
                    36 Granada Street, St. Augustine, FL 32084
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">(904) 679-5736</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">
                    info@corazoncinema.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-ocean-blue" />
                  <a
                    href="https://corazoncinema.com"
                    className="text-ocean-blue hover:text-ocean-blue-dark"
                  >
                    corazoncinema.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-charcoal mb-4">Venue Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Monday - Thursday</span>
                  <span className="text-charcoal">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Friday - Saturday</span>
                  <span className="text-charcoal">11:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Sunday</span>
                  <span className="text-charcoal">12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  href="/archive"
                  className="block text-ocean-blue hover:text-ocean-blue-dark transition-colors"
                >
                  View Past Screenings
                </Link>
                <Link
                  href="/events"
                  className="block text-ocean-blue hover:text-ocean-blue-dark transition-colors"
                >
                  Upcoming Events
                </Link>
                <Link
                  href="/membership"
                  className="block text-ocean-blue hover:text-ocean-blue-dark transition-colors"
                >
                  Join Film Society
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
