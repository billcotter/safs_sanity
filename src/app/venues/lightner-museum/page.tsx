import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Globe, Mail, MapPin, Phone, Users } from 'lucide-react'
import Link from 'next/link'

export default function LightnerMuseumPage() {
  return (
    <div className="min-h-screen bg-sandstone">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs
            items={[
              { label: 'Venues', href: '/venues' },
              { label: 'Lightner Museum' },
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Lightner Museum
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Historic venue in the heart of downtown St. Augustine, perfect for
              intimate film screenings and cultural events.
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
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-charcoal/60">Lightner Museum Image</p>
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
                  The Lightner Museum, housed in the former Alcazar Hotel built
                  by Henry Flagler in 1888, provides a stunning backdrop for
                  film screenings and cultural events. The museum's elegant
                  architecture and rich history create an immersive atmosphere
                  for cinematic experiences.
                </p>
                <p className="text-lg text-charcoal/80 mb-4">
                  Located in the heart of historic downtown St. Augustine, the
                  Lightner Museum offers intimate screening spaces with
                  excellent acoustics and comfortable seating. The venue is
                  perfect for classic film presentations, documentary
                  screenings, and special cultural events.
                </p>
                <p className="text-lg text-charcoal/80">
                  The museum's commitment to preserving history and culture
                  aligns perfectly with the St. Augustine Film Society's mission
                  to celebrate cinema and bring meaningful films to our
                  community.
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
                  <span className="text-charcoal">Seating Capacity: 150</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🎬</div>
                  <span className="text-charcoal">Professional Projection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🔊</div>
                  <span className="text-charcoal">
                    High-Quality Sound System
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🅿️</div>
                  <span className="text-charcoal">Parking Available</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">♿</div>
                  <span className="text-charcoal">Accessible Venue</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">☕</div>
                  <span className="text-charcoal">Refreshments Available</span>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="mb-8">
              <h2 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Past Film Society Events
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-charcoal mb-2">
                    Key Largo (1948)
                  </h3>
                  <p className="text-charcoal/70 mb-2">
                    Classic film noir starring Humphrey Bogart and Lauren Bacall
                  </p>
                  <p className="text-sm text-charcoal/60">
                    July 8, 2025 • 150 attendees
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm opacity-60">
                  <h3 className="font-semibold text-charcoal mb-2">
                    More events coming soon...
                  </h3>
                  <p className="text-charcoal/70">
                    Stay tuned for upcoming screenings at this historic venue
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
                    75 King Street, St. Augustine, FL 32084
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">(904) 824-2874</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">
                    info@lightnermuseum.org
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-ocean-blue" />
                  <a
                    href="https://lightnermuseum.org"
                    className="text-ocean-blue hover:text-ocean-blue-dark"
                  >
                    lightnermuseum.org
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-charcoal mb-4">Museum Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Monday - Friday</span>
                  <span className="text-charcoal">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Saturday</span>
                  <span className="text-charcoal">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Sunday</span>
                  <span className="text-charcoal">10:00 AM - 4:00 PM</span>
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
