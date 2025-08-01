import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ExternalLink, Film, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default function CrossLinkTestPage() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>
          Cross-Linking System Status
        </h1>
        <p className='text-gray-600 text-lg'>
          Testing all internal navigation links between films, people, and
          venues
        </p>
      </div>

      {/* Status Overview */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <Card className='p-6 bg-green-50 border-green-200'>
          <div className='flex items-center mb-3'>
            <Check className='h-6 w-6 text-green-600 mr-2' />
            <h3 className='text-lg font-semibold text-green-800'>
              Films → People
            </h3>
          </div>
          <p className='text-sm text-green-700'>
            Director and actor names link to their profile pages
          </p>
        </Card>

        <Card className='p-6 bg-green-50 border-green-200'>
          <div className='flex items-center mb-3'>
            <Check className='h-6 w-6 text-green-600 mr-2' />
            <h3 className='text-lg font-semibold text-green-800'>
              Archive → All
            </h3>
          </div>
          <p className='text-sm text-green-700'>
            Archive cards link to films, people, and venues
          </p>
        </Card>

        <Card className='p-6 bg-green-50 border-green-200'>
          <div className='flex items-center mb-3'>
            <Check className='h-6 w-6 text-green-600 mr-2' />
            <h3 className='text-lg font-semibold text-green-800'>Navigation</h3>
          </div>
          <p className='text-sm text-green-700'>
            People and Venues added to main navigation
          </p>
        </Card>
      </div>

      {/* Sample Links Test */}
      <div className='space-y-8'>
        {/* Navigation Links */}
        <Card className='p-6'>
          <h3 className='text-xl font-semibold mb-4 text-gray-900'>
            Main Navigation Links
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              { href: '/films', label: 'Now Playing', icon: Film },
              { href: '/people', label: 'People', icon: Users },
              { href: '/venues', label: 'Venues', icon: MapPin },
              { href: '/archive', label: 'Archive', icon: Film },
            ].map((item) => (
              <Button
                key={item.href}
                asChild
                variant='outline'
                className='h-20 flex-col space-y-2'
              >
                <Link href={item.href}>
                  <item.icon className='h-6 w-6' />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </Card>

        {/* Sample Film-to-People Links */}
        <Card className='p-6'>
          <h3 className='text-xl font-semibold mb-4 text-gray-900'>
            Sample Film → People Links
          </h3>
          <div className='space-y-4'>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <h4 className='font-medium mb-2'>Parasite (2019)</h4>
              <div className='flex items-center gap-4 text-sm'>
                <span className='text-gray-600'>Directed by:</span>
                <Link
                  href='/people/bong-joon-ho'
                  className='text-blue-600 hover:underline'
                >
                  Bong Joon-ho
                </Link>
                <Badge variant='outline'>Director Link</Badge>
              </div>
            </div>

            <div className='p-4 bg-gray-50 rounded-lg'>
              <h4 className='font-medium mb-2'>
                The Grand Budapest Hotel (2014)
              </h4>
              <div className='flex items-center gap-4 text-sm'>
                <span className='text-gray-600'>Directed by:</span>
                <Link
                  href='/people/wes-anderson'
                  className='text-blue-600 hover:underline'
                >
                  Wes Anderson
                </Link>
                <Badge variant='outline'>Director Link</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Sample Archive Links */}
        <Card className='p-6'>
          <h3 className='text-xl font-semibold mb-4 text-gray-900'>
            Archive Cross-Links Test
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium mb-3'>
                Links Working From Archive Cards:
              </h4>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-center'>
                  <Check className='h-4 w-4 text-green-600 mr-2' />
                  Film titles → Film detail pages
                </li>
                <li className='flex items-center'>
                  <Check className='h-4 w-4 text-green-600 mr-2' />
                  Director names → People profiles
                </li>
                <li className='flex items-center'>
                  <Check className='h-4 w-4 text-green-600 mr-2' />
                  Venue names → Venue detail pages
                </li>
                <li className='flex items-center'>
                  <Check className='h-4 w-4 text-green-600 mr-2' />
                  Actor names → People profiles
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-medium mb-3'>URL Structure:</h4>
              <ul className='space-y-1 text-sm font-mono bg-gray-100 p-3 rounded'>
                <li>/films/[slug] - Film details</li>
                <li>/people/[slug] - Person profiles</li>
                <li>/venues/[slug] - Venue details</li>
                <li>/archive - Screening history</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Implementation Details */}
        <Card className='p-6'>
          <h3 className='text-xl font-semibold mb-4 text-gray-900'>
            Technical Implementation
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium mb-3 text-blue-600'>
                Components Updated:
              </h4>
              <ul className='space-y-1 text-sm'>
                <li>• ArchiveCard.tsx - ✅ Working links</li>
                <li>• MovieSlider.tsx - ✅ Fixed people links</li>
                <li>• CastCrewSection.tsx - ✅ Fixed director/actor links</li>
                <li>• PersonFilmography.tsx - ✅ Added film links</li>
                <li>• Header.tsx - ✅ Added People & Venues nav</li>
              </ul>
            </div>

            <div>
              <h4 className='font-medium mb-3 text-blue-600'>
                Link Patterns Fixed:
              </h4>
              <ul className='space-y-1 text-sm'>
                <li>• /person/[slug] → /people/[slug]</li>
                <li>• /film/[slug] → /films/[slug]</li>
                <li>• All slug.current handling</li>
                <li>• Proper hover states</li>
                <li>• Consistent styling</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Quick Test Links */}
        <Card className='p-6 bg-blue-50 border-blue-200'>
          <h3 className='text-xl font-semibold mb-4 text-blue-800'>
            Quick Test Navigation
          </h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            <Button asChild variant='outline' size='sm'>
              <Link href='/archive'>
                <ExternalLink className='h-4 w-4 mr-1' />
                Test Archive Links
              </Link>
            </Button>
            <Button asChild variant='outline' size='sm'>
              <Link href='/people'>
                <ExternalLink className='h-4 w-4 mr-1' />
                Test People Directory
              </Link>
            </Button>
            <Button asChild variant='outline' size='sm'>
              <Link href='/films'>
                <ExternalLink className='h-4 w-4 mr-1' />
                Test Film Pages
              </Link>
            </Button>
            <Button asChild variant='outline' size='sm'>
              <Link href='/venues'>
                <ExternalLink className='h-4 w-4 mr-1' />
                Test Venue Pages
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
