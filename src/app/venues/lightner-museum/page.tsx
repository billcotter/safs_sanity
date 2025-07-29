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
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function LightnerMuseumPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Lightner Museum"
        subtitle="Historic elegance meets cinematic art"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="The Lightner Museum, housed in the former Alcazar Hotel built by Henry Flagler, provides a stunning backdrop for our most prestigious film events and cultural screenings."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Venue Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                About the Lightner Museum
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                The Lightner Museum, located in the heart of historic St.
                Augustine, is housed in the former Alcazar Hotel, a magnificent
                building constructed by Henry Flagler in 1888. This
                architectural masterpiece provides an elegant and intimate
                setting for our special film screenings and cultural events.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed mb-6">
                With its ornate Spanish Renaissance Revival architecture, the
                museum's grand halls and intimate screening rooms offer a unique
                cinematic experience that combines the beauty of historic
                preservation with the magic of cinema. Our screenings here are
                carefully curated to complement the museum's cultural
                significance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-ocean-blue text-white">
                  <Users className="mr-2 h-4 w-4" />
                  200 seats
                </Badge>
                <Badge
                  variant="outline"
                  className="border-ocean-blue text-ocean-blue"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Premium Venue
                </Badge>
                <Badge
                  variant="outline"
                  className="border-sandstone text-sandstone-dark"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Special Events
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Lightner Museum exterior"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Historic Alcazar Hotel
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
                75 King St
                <br />
                St. Augustine, FL 32084
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Phone</h3>
              <a
                href="tel:(904) 824-2874"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                (904) 824-2874
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Email</h3>
              <a
                href="mailto:info@lightnermuseum.org"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                info@lightnermuseum.org
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Website</h3>
              <a
                href="https://lightnermuseum.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                lightnermuseum.org
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
                  alt="Lightner Museum interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Grand Hall</h3>
                  <p className="text-white/80 text-sm">Main screening area</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Lightner Museum courtyard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Courtyard</h3>
                  <p className="text-white/80 text-sm">
                    Pre-screening gatherings
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Lightner Museum entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Entrance</h3>
                  <p className="text-white/80 text-sm">Historic facade</p>
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
                  75 King St, St. Augustine, FL 32084
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Experience Cinema at the Lightner Museum
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Join us for special screenings in this historic venue. The Lightner
            Museum provides an unforgettable setting for our most prestigious
            film events and cultural programs.
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
