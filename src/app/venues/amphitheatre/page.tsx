import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
  Sun,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function AmphitheatrePage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="St. Augustine Amphitheatre"
        subtitle="Cinema under the stars"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="Experience the magic of outdoor cinema at the St. Augustine Amphitheatre. Our summer screenings under the stars provide a unique and memorable way to enjoy films in the beautiful Florida weather."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Venue Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                About the Amphitheatre
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                The St. Augustine Amphitheatre offers a truly unique cinematic
                experience with outdoor screenings under the stars. This
                beautiful venue, nestled in a natural setting, provides the
                perfect backdrop for our summer film series and special outdoor
                events.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed mb-6">
                With its large capacity and natural amphitheater design, the
                venue creates an intimate yet spacious atmosphere for film
                lovers. The gentle sea breeze and starry skies enhance the
                cinematic experience, making every screening a special event.
                Our outdoor screenings are particularly popular during the
                warmer months, offering a refreshing alternative to traditional
                indoor venues.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-ocean-blue text-white">
                  <Users className="mr-2 h-4 w-4" />
                  4,000 seats
                </Badge>
                <Badge
                  variant="outline"
                  className="border-ocean-blue text-ocean-blue"
                >
                  <Sun className="mr-2 h-4 w-4" />
                  Outdoor Venue
                </Badge>
                <Badge
                  variant="outline"
                  className="border-sandstone text-sandstone-dark"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Summer Series
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="St. Augustine Amphitheatre"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Outdoor Cinema Experience
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Address</h3>
              <p className="text-sm text-charcoal/70">
                1340C A1A S<br />
                St. Augustine, FL 32080
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
              <a
                href="tel:(904) 209-0367"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                (904) 209-0367
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Email</h3>
              <a
                href="mailto:info@stamphitheatre.com"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                info@stamphitheatre.com
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Website</h3>
              <a
                href="https://stamphitheatre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                stamphitheatre.com
              </a>
            </Card>
          </div>
        </div>

        {/* Venue Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Venue Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Amphitheatre stage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Main Stage</h3>
                  <p className="text-white/80 text-sm">
                    Large projection screen
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Amphitheatre seating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Seating Area</h3>
                  <p className="text-white/80 text-sm">
                    Natural amphitheater design
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Amphitheatre entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Entrance</h3>
                  <p className="text-white/80 text-sm">Natural surroundings</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Location
          </h2>
          <Card className="p-6">
            <div className="aspect-video bg-sandstone/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-ocean-blue mx-auto mb-4" />
                <p className="text-charcoal/70 mb-2">
                  Interactive map coming soon
                </p>
                <p className="text-sm text-charcoal/60">
                  1340C A1A S, St. Augustine, FL 32080
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Experience Outdoor Cinema at the Amphitheatre
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Join us for unforgettable outdoor screenings under the stars. The
            Amphitheatre offers a unique cinematic experience that combines the
            magic of film with the beauty of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/now-playing">
                <Calendar className="mr-2 h-5 w-5" />
                View Upcoming Screenings
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/venues">
                <MapPin className="mr-2 h-5 w-5" />
                View All Venues
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
