import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Calendar,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from 'lucide-react'
import Link from 'next/link'

export default function FlaglerCollegePage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Flagler College Auditorium"
        subtitle="Our premier screening venue in historic St. Augustine"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="The Flagler College Auditorium serves as our primary screening venue, offering state-of-the-art projection equipment in a beautiful historic setting that perfectly complements our film programming."
      />

      <div className="container mx-auto px-4 py-12">
        {/* Venue Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                About Flagler College Auditorium
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-6">
                The Flagler College Auditorium, located in the heart of the
                historic campus, is our primary venue for regular film
                screenings and special events. This beautiful facility combines
                modern technology with the architectural grandeur of the former
                Ponce de Leon Hotel, built by Henry Flagler in 1888.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed mb-6">
                With its excellent acoustics, comfortable seating, and
                state-of-the-art projection and sound systems, the auditorium
                provides an ideal setting for both intimate screenings and
                larger events. The venue's historic charm creates a unique
                atmosphere that enhances the cinematic experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-ocean-blue text-white">
                  <Users className="mr-2 h-4 w-4" />
                  350 seats
                </Badge>
                <Badge
                  variant="outline"
                  className="border-ocean-blue text-ocean-blue"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Primary Venue
                </Badge>
                <Badge
                  variant="outline"
                  className="border-sandstone text-sandstone-dark"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Historic Campus
                </Badge>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Flagler College Auditorium"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Historic Ponce de Leon Hotel
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
                74 King St
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
                href="tel:(904) 829-6481"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                (904) 829-6481
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Email</h3>
              <a
                href="mailto:events@flagler.edu"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                events@flagler.edu
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-charcoal mb-2">Website</h3>
              <a
                href="https://flagler.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-charcoal/70 hover:text-ocean-blue"
              >
                flagler.edu
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
                  alt="Flagler College Auditorium interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Main Auditorium</h3>
                  <p className="text-white/80 text-sm">
                    Primary screening space
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Flagler College campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Campus Grounds</h3>
                  <p className="text-white/80 text-sm">Historic surroundings</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Flagler College entrance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Main Entrance</h3>
                  <p className="text-white/80 text-sm">Grand historic facade</p>
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
                  74 King St, St. Augustine, FL 32084
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Experience Cinema at Flagler College
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Join us for regular screenings in our premier venue. The Flagler
            College Auditorium offers the perfect combination of historic charm
            and modern technology for an exceptional cinematic experience.
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
