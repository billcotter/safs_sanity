import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Calendar, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

const venues = [
  {
    name: 'Lightner Museum',
    slug: 'lightner-museum',
    description:
      'Historic venue in the heart of downtown St. Augustine, perfect for intimate film screenings and cultural events.',
    capacity: 150,
    address: '75 King Street, St. Augustine, FL 32084',
    type: 'Historic Museum',
    image: '🏛️',
  },
  {
    name: 'Flagler College Auditorium',
    slug: 'flagler-college-auditorium',
    description:
      'Beautiful historic auditorium on the Flagler College campus, perfect for larger film screenings and special events.',
    capacity: 300,
    address: '74 King Street, St. Augustine, FL 32084',
    type: 'Academic Venue',
    image: '🎓',
  },
  {
    name: 'St. Augustine Amphitheatre',
    slug: 'st-augustine-amphitheatre',
    description:
      'Outdoor venue perfect for special film screenings under the stars and large community events.',
    capacity: 500,
    address: '1340 A1A South, St. Augustine, FL 32080',
    type: 'Outdoor Venue',
    image: '🌙',
  },
  {
    name: 'Corazon Cinema & Café',
    slug: 'corazon-cinema-cafe',
    description:
      'Independent cinema and café in downtown St. Augustine, perfect for intimate screenings and film discussions.',
    capacity: 80,
    address: '36 Granada Street, St. Augustine, FL 32084',
    type: 'Independent Cinema',
    image: '🎭',
  },
];

export default function VenuesPage() {
  return (
    <div className='min-h-screen bg-sandstone'>
      {/* Hero Section */}
      <div className='bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30'>
        <div className='container mx-auto px-4 py-16'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4'>
              Our Venues
            </h1>
            <p className='text-xl text-charcoal/70 max-w-3xl mx-auto'>
              Discover the diverse venues where the St. Augustine Film Society
              brings cinema to life. From historic museums to outdoor
              amphitheaters, each venue offers a unique cinematic experience.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-12'>
        <Breadcrumbs items={[{ label: 'Venues' }]} />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {venues.map((venue) => (
            <Link
              key={venue.slug}
              href={`/venues/${venue.slug}`}
              className='group'
            >
              <div className='bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden'>
                {/* Venue Image */}
                <div className='aspect-video bg-sandstone-dark flex items-center justify-center'>
                  <div className='text-6xl'>{venue.image}</div>
                </div>

                {/* Venue Info */}
                <div className='p-6'>
                  <div className='mb-3'>
                    <h3 className='text-xl font-serif font-semibold text-charcoal group-hover:text-ocean-blue transition-colors mb-2'>
                      {venue.name}
                    </h3>
                    <span className='inline-block px-2 py-1 bg-ocean-blue/10 text-ocean-blue text-xs rounded'>
                      {venue.type}
                    </span>
                  </div>

                  <p className='text-charcoal/70 mb-4 line-clamp-3'>
                    {venue.description}
                  </p>

                  <div className='space-y-2 text-sm text-charcoal/60'>
                    <div className='flex items-center space-x-2'>
                      <MapPin className='h-4 w-4' />
                      <span className='line-clamp-1'>{venue.address}</span>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <Users className='h-4 w-4' />
                      <span>Capacity: {venue.capacity} seats</span>
                    </div>
                  </div>

                  <div className='mt-4 pt-4 border-t border-charcoal/10'>
                    <span className='text-ocean-blue text-sm font-medium group-hover:text-ocean-blue-dark transition-colors'>
                      Learn more →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className='mt-16 bg-white rounded-lg p-8 shadow-sm'>
          <h2 className='text-2xl font-serif font-semibold text-charcoal mb-6 text-center'>
            About Our Venues
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-lg font-semibold text-charcoal mb-3'>
                Diverse Settings
              </h3>
              <p className='text-charcoal/70 mb-4'>
                Our venues range from intimate independent cinemas to grand
                historic auditoriums, each offering a unique atmosphere for film
                screenings. Whether you prefer the cozy atmosphere of a café
                cinema or the grandeur of a historic museum, we have a venue to
                match your cinematic preferences.
              </p>
              <p className='text-charcoal/70'>
                Each venue is carefully selected to provide excellent viewing
                experiences with state-of-the-art projection and sound systems,
                ensuring that every screening is a memorable event.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-charcoal mb-3'>
                Accessibility
              </h3>
              <p className='text-charcoal/70 mb-4'>
                All our venues are committed to providing accessible experiences
                for all film society members. We work closely with each venue to
                ensure that screenings are accessible to everyone in our
                community.
              </p>
              <p className='text-charcoal/70'>
                From parking accommodations to seating arrangements, we strive
                to make every screening an inclusive experience for all
                attendees.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-12 text-center'>
          <div className='bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 rounded-lg p-8'>
            <h3 className='text-xl font-serif font-semibold text-charcoal mb-4'>
              Join Us for Screenings
            </h3>
            <p className='text-charcoal/70 mb-6 max-w-2xl mx-auto'>
              Experience the magic of cinema in these beautiful venues. Check
              our upcoming events to see what's playing at each location.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/events'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue-dark transition-colors'
              >
                <Calendar className='h-5 w-5' />
                View Upcoming Events
              </Link>
              <Link
                href='/membership'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 border border-ocean-blue text-ocean-blue rounded-lg hover:bg-ocean-blue hover:text-white transition-colors'
              >
                Join Film Society
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
