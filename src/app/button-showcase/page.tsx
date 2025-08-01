import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Ticket,
  Film,
  Star,
  Heart,
  Users,
  Calendar,
  MapPin,
  Award,
  ExternalLink,
  ArrowRight,
  CreditCard,
  Info,
} from 'lucide-react';

export default function SAFSButtonShowcase() {
  return (
    <div className='min-h-screen bg-sandstone py-12'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-charcoal mb-4'>
            SAFS Button System
          </h1>
          <p className='text-lg text-charcoal/70 max-w-3xl mx-auto'>
            Complete button design system following St. Augustine Film Society
            brand guidelines with ocean blue, terracotta, ochre, sandstone, and
            charcoal colors.
          </p>
        </div>

        {/* Button Variants Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {/* Primary Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 bg-ocean-blue rounded-full mr-2'></div>
              Primary Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Ocean blue background, sandstone text. Use for ticket purchases,
              main CTAs, and primary actions.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='primary' size='sm' icon={Ticket}>
                  Buy Tickets
                </Button>
                <Button variant='primary' size='md' icon={CreditCard}>
                  Purchase Membership
                </Button>
                <Button variant='primary' size='lg' icon={Users}>
                  Join SAFS
                </Button>
                <Button variant='primary' size='xl' icon={Heart}>
                  Support Us
                </Button>
              </div>
              <div className='pt-2'>
                <Button variant='primary' size='lg' fullWidth icon={Ticket}>
                  Reserve Premium Seating
                </Button>
              </div>
            </div>
          </Card>

          {/* Secondary Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 bg-terracotta rounded-full mr-2'></div>
              Secondary Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Terracotta background, sandstone text. Use for film details, venue
              info, and secondary actions.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='secondary' size='sm' icon={Film}>
                  Film Details
                </Button>
                <Button variant='secondary' size='md' icon={MapPin}>
                  Venue Info
                </Button>
                <Button variant='secondary' size='lg' icon={Calendar}>
                  Event Details
                </Button>
                <Button variant='secondary' size='xl' icon={Info}>
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Tertiary Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 bg-ochre rounded-full mr-2'></div>
              Tertiary Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Ochre background, charcoal text. Use for highlights, awards,
              ratings, and special features.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='tertiary' size='sm' icon={Star}>
                  5 Stars
                </Button>
                <Button variant='tertiary' size='md' icon={Award}>
                  Award Winner
                </Button>
                <Button variant='tertiary' size='lg' icon={Star}>
                  Featured Film
                </Button>
              </div>
            </div>
          </Card>

          {/* Outline Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 border-2 border-ocean-blue rounded-full mr-2'></div>
              Outline Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Ocean blue border and text, transparent background. Use for subtle
              actions and secondary navigation.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='outline' size='sm' icon={ArrowRight}>
                  Next
                </Button>
                <Button variant='outline' size='md' icon={ExternalLink}>
                  External Link
                </Button>
                <Button variant='outline' size='lg' icon={Info}>
                  More Info
                </Button>
              </div>
            </div>
          </Card>

          {/* Ghost Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 border border-dashed border-ocean-blue rounded-full mr-2'></div>
              Ghost Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Minimal styling with ocean blue text. Use for navigation, subtle
              actions, and close buttons.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='ghost' size='sm'>
                  Skip
                </Button>
                <Button variant='ghost' size='md'>
                  Cancel
                </Button>
                <Button variant='ghost' size='lg'>
                  Back to Top
                </Button>
              </div>
            </div>
          </Card>

          {/* Accent Buttons */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4 flex items-center'>
              <div className='w-4 h-4 bg-charcoal rounded-full mr-2'></div>
              Accent Buttons
            </h3>
            <p className='text-sm text-charcoal/70 mb-6'>
              Charcoal background, sandstone text. Use for dark sections and
              high-contrast areas.
            </p>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='accent' size='sm' icon={Film}>
                  Dark Theme
                </Button>
                <Button variant='accent' size='md' icon={Star}>
                  Premium
                </Button>
                <Button variant='accent' size='lg' icon={Award}>
                  Exclusive
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Interactive Examples */}
        <div className='space-y-8'>
          {/* Film Card Example */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4'>
              Film Card Implementation
            </h3>
            <div className='bg-white rounded-lg p-6 border border-sandstone'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-48 aspect-[2/3] bg-gradient-to-br from-ocean-blue/10 to-terracotta/10 rounded-lg flex items-center justify-center'>
                  <Film className='h-12 w-12 text-ocean-blue/50' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-2xl font-bold text-charcoal mb-2'>
                    Citizen Kane
                  </h4>
                  <p className='text-charcoal/70 mb-4'>
                    Orson Welles • 1941 • Drama
                  </p>
                  <div className='flex flex-wrap gap-3 mb-6'>
                    <Badge
                      variant='outline'
                      className='border-ochre text-ochre'
                    >
                      <Star className='h-3 w-3 mr-1' />
                      9.2 IMDb
                    </Badge>
                    <Badge
                      variant='outline'
                      className='border-terracotta text-terracotta'
                    >
                      Classic
                    </Badge>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <Button
                      variant='primary'
                      size='lg'
                      icon={Ticket}
                      className='sm:w-auto'
                    >
                      Buy Tickets - $12
                    </Button>
                    <Button
                      variant='secondary'
                      size='lg'
                      icon={Film}
                      className='sm:w-auto'
                    >
                      Film Details
                    </Button>
                    <Button
                      variant='outline'
                      size='lg'
                      icon={Heart}
                      className='sm:w-auto'
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Archive Card Example */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4'>
              Archive Card Implementation
            </h3>
            <div className='bg-white rounded-lg p-6 border border-sandstone'>
              <div className='flex gap-4'>
                <div className='w-24 aspect-[2/3] bg-gradient-to-br from-charcoal/10 to-ochre/10 rounded flex items-center justify-center'>
                  <Film className='h-6 w-6 text-charcoal/50' />
                </div>
                <div className='flex-1'>
                  <h4 className='font-bold text-charcoal mb-1'>
                    The 400 Blows
                  </h4>
                  <p className='text-sm text-charcoal/70 mb-2'>
                    François Truffaut • 1959
                  </p>
                  <p className='text-xs text-charcoal/60 mb-3'>
                    Screened March 15, 2024 at The Historic Theatre
                  </p>
                  <div className='flex gap-2'>
                    <Button variant='secondary' size='sm' icon={Film}>
                      Film Details
                    </Button>
                    <Button variant='outline' size='sm' icon={Calendar}>
                      Event Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Loading States */}
          <Card className='p-6'>
            <h3 className='text-xl font-semibold text-charcoal mb-4'>
              Loading States & Interactive Features
            </h3>
            <div className='space-y-4'>
              <div className='flex flex-wrap gap-3'>
                <Button variant='primary' size='md' loading>
                  Processing Payment
                </Button>
                <Button variant='secondary' size='md' icon={Users} loading>
                  Joining Membership
                </Button>
                <Button variant='outline' size='md' disabled>
                  Sold Out
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card className='p-6 mt-8 bg-gradient-to-r from-ocean-blue/5 to-sandstone'>
          <h3 className='text-xl font-semibold text-charcoal mb-4'>
            Usage Guidelines
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-semibold text-charcoal mb-2'>
                Button Hierarchy
              </h4>
              <ul className='text-sm text-charcoal/70 space-y-1'>
                <li>
                  • <strong>Primary</strong>: Main actions (tickets, membership)
                </li>
                <li>
                  • <strong>Secondary</strong>: Secondary actions (details,
                  info)
                </li>
                <li>
                  • <strong>Tertiary</strong>: Highlights and awards
                </li>
                <li>
                  • <strong>Outline</strong>: Subtle actions and navigation
                </li>
                <li>
                  • <strong>Ghost</strong>: Minimal interactions
                </li>
                <li>
                  • <strong>Accent</strong>: Dark theme and contrast areas
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold text-charcoal mb-2'>
                Accessibility
              </h4>
              <ul className='text-sm text-charcoal/70 space-y-1'>
                <li>• All buttons have proper focus states</li>
                <li>• High contrast ratios maintained</li>
                <li>• Loading states with visual feedback</li>
                <li>• Icon + text for better comprehension</li>
                <li>• Keyboard navigation support</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
