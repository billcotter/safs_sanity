import { PageBanner } from '@/components/PageBanner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Globe, Mail, MapPin, Phone, Users } from 'lucide-react'
import Link from 'next/link'

interface Venue {
  id: string
  name: string
  slug: string
  description: string
  address: string
  phone: string
  email: string
  website: string
  imageUrl: string
  capacity: string
  type: string
}

const venues: Venue[] = [
  {
    id: 'lightner-museum',
    name: 'Lightner Museum',
    slug: 'lightner-museum',
    description:
      'A historic venue in the heart of St. Augustine, the Lightner Museum provides an elegant setting for special screenings and cultural events.',
    address: '75 King St, St. Augustine, FL 32084',
    phone: '(904) 824-2874',
    email: 'info@lightnermuseum.org',
    website: 'https://lightnermuseum.org',
    imageUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    capacity: '200 seats',
    type: 'Historic Museum',
  },
  {
    id: 'flagler-college',
    name: 'Flagler College Auditorium',
    slug: 'flagler-college',
    description:
      'Our primary screening venue featuring state-of-the-art projection equipment in a beautiful historic setting.',
    address: '74 King St, St. Augustine, FL 32084',
    phone: '(904) 829-6481',
    email: 'events@flagler.edu',
    website: 'https://flagler.edu',
    imageUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    capacity: '350 seats',
    type: 'College Auditorium',
  },
  {
    id: 'amphitheatre',
    name: 'St. Augustine Amphitheatre',
    slug: 'amphitheatre',
    description:
      'Experience cinema under the stars at our outdoor amphitheatre, perfect for summer screenings and special events.',
    address: '1340C A1A S, St. Augustine, FL 32080',
    phone: '(904) 209-0367',
    email: 'info@stamphitheatre.com',
    website: 'https://stamphitheatre.com',
    imageUrl:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    capacity: '4,000 seats',
    type: 'Outdoor Amphitheatre',
  },
]

export default function VenuesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Our Venues"
        subtitle="Historic locations for exceptional cinema experiences"
        backgroundImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop"
        strapiMessage="Each of our venues offers a unique cinematic experience, from the elegant halls of the Lightner Museum to the open-air magic of the Amphitheatre. Discover the perfect setting for your next film adventure."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue) => (
            <Card
              key={venue.id}
              className="overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 relative">
                <img
                  src={venue.imageUrl}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-ocean-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {venue.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">
                  {venue.name}
                </h3>

                <p className="text-charcoal/70 mb-4 leading-relaxed">
                  {venue.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <Users className="h-4 w-4 text-ocean-blue" />
                    <span>{venue.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-charcoal/70">
                    <MapPin className="h-4 w-4 text-ocean-blue" />
                    <span className="text-xs">{venue.address}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <a
                    href={`tel:${venue.phone}`}
                    className="flex items-center gap-1 text-xs text-charcoal/60 hover:text-ocean-blue transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    {venue.phone}
                  </a>
                  <a
                    href={`mailto:${venue.email}`}
                    className="flex items-center gap-1 text-xs text-charcoal/60 hover:text-ocean-blue transition-colors"
                  >
                    <Mail className="h-3 w-3" />
                    Email
                  </a>
                  <a
                    href={venue.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-charcoal/60 hover:text-ocean-blue transition-colors"
                  >
                    <Globe className="h-3 w-3" />
                    Website
                  </a>
                </div>

                <Button
                  asChild
                  className="w-full bg-ocean-blue hover:bg-ocean-blue-dark"
                >
                  <Link href={`/venues/${venue.slug}`}>
                    <Calendar className="mr-2 h-4 w-4" />
                    View Venue Details
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-sandstone/20 to-ocean-blue/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Plan Your Visit
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Each venue offers a unique atmosphere and experience. Check our
            current screenings to see which venue is hosting your next favorite
            film.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/now-playing">
                <Calendar className="mr-2 h-5 w-5" />
                View Current Screenings
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/membership">
                <Users className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
