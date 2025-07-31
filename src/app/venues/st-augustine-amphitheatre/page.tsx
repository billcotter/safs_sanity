import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Globe, Mail, MapPin, Phone, Users } from 'lucide-react'
import Link from 'next/link'

export default function StAugustineAmphitheatrePage() {
  return (
    <div className="min-h-screen bg-sandstone">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <Breadcrumbs
            items={[
              { label: 'Venues', href: '/venues' },
              { label: 'St. Augustine Amphitheatre' },
            ]}
          />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              St. Augustine Amphitheatre
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Outdoor venue perfect for special film screenings under the stars
              and large community events.
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
                  <div className="text-6xl mb-4">🌙</div>
                  <p className="text-charcoal/60">
                    St. Augustine Amphitheatre Image
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
                  The St. Augustine Amphitheatre offers a unique outdoor setting
                  for film screenings and cultural events. Located in Anastasia
                  State Park, this beautiful venue provides an immersive
                  cinematic experience under the open sky, perfect for special
                  screenings and community gatherings.
                </p>
                <p className="text-lg text-charcoal/80 mb-4">
                  With its natural amphitheater design and state-of-the-art
                  projection and sound systems, the venue can accommodate large
                  audiences while maintaining an intimate atmosphere. The
                  amphitheatre is particularly popular for classic film
                  screenings, outdoor movie nights, and special events that
                  celebrate the magic of cinema in a natural setting.
                </p>
                <p className="text-lg text-charcoal/80">
                  The venue's location near the beach and historic downtown St.
                  Augustine makes it a perfect destination for film society
                  members and visitors looking for a unique cinematic experience
                  in a beautiful outdoor setting.
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
                  <span className="text-charcoal">Seating Capacity: 500</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🎬</div>
                  <span className="text-charcoal">Outdoor Projection</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🔊</div>
                  <span className="text-charcoal">
                    Professional Sound System
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🅿️</div>
                  <span className="text-charcoal">Ample Parking</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🌊</div>
                  <span className="text-charcoal">Beach Proximity</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="h-5 w-5 text-ocean-blue">🍽️</div>
                  <span className="text-charcoal">Concessions Available</span>
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
                    Stay tuned for upcoming outdoor screenings at this beautiful
                    venue
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
                    1340 A1A South, St. Augustine, FL 32080
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">(904) 209-0367</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-ocean-blue" />
                  <span className="text-charcoal/80">
                    info@staugamphitheatre.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-ocean-blue" />
                  <a
                    href="https://staugamphitheatre.com"
                    className="text-ocean-blue hover:text-ocean-blue-dark"
                  >
                    staugamphitheatre.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-charcoal mb-4">Venue Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Monday - Friday</span>
                  <span className="text-charcoal">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Saturday</span>
                  <span className="text-charcoal">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/80">Sunday</span>
                  <span className="text-charcoal">10:00 AM - 4:00 PM</span>
                </div>
                <div className="text-xs text-charcoal/60 mt-2">
                  *Hours may vary for special events
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
