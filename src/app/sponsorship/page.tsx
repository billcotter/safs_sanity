import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import {
  Award,
  Building,
  Camera,
  Crown,
  Heart,
  Mail,
  Phone,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';

export default function SponsorshipPage() {
  const sponsorshipTiers = [
    {
      id: 'presenting',
      name: 'Presenting Sponsor',
      price: '$10,000+',
      color: 'from-ochre to-ochre-dark',
      icon: Crown,
      benefits: [
        'Logo prominently featured on all marketing materials',
        'Named presenting sponsor of signature events',
        'VIP reception for 20 guests',
        'Full-page ad in all programs',
        'Social media recognition throughout the year',
        'Custom branded content opportunities',
        'First right of refusal for following year',
      ],
    },
    {
      id: 'platinum',
      name: 'Platinum Sponsor',
      price: '$5,000',
      color: 'from-charcoal to-charcoal-light',
      icon: Award,
      benefits: [
        'Logo on all major promotional materials',
        'VIP reception for 10 guests',
        'Half-page ad in programs',
        'Recognition in all press releases',
        'Social media mentions',
        'Priority event seating',
        'Tax-deductible donation receipt',
      ],
    },
    {
      id: 'gold',
      name: 'Gold Sponsor',
      price: '$2,500',
      color: 'from-ochre-light to-ochre',
      icon: Star,
      benefits: [
        'Logo on select promotional materials',
        'VIP reception for 6 guests',
        'Quarter-page ad in programs',
        'Website recognition',
        'Social media mentions',
        'Reserved event seating',
        'Tax-deductible donation receipt',
      ],
    },
    {
      id: 'silver',
      name: 'Silver Sponsor',
      price: '$1,000',
      color: 'from-ocean-blue to-ocean-blue-dark',
      icon: Camera,
      benefits: [
        'Logo in programs and on website',
        'VIP reception for 4 guests',
        'Business card-sized ad in programs',
        'Social media recognition',
        'Priority ticket purchasing',
        'Tax-deductible donation receipt',
      ],
    },
    {
      id: 'bronze',
      name: 'Bronze Sponsor',
      price: '$500',
      color: 'from-terracotta to-terracotta-dark',
      icon: Heart,
      benefits: [
        'Name listed in programs and on website',
        'VIP reception for 2 guests',
        'Social media recognition',
        'Early ticket access',
        'Tax-deductible donation receipt',
      ],
    },
  ];

  const sponsorshipOpportunities = [
    {
      title: 'Annual Film Festival',
      description:
        'Our signature event featuring independent films, documentaries, and shorts',
      investment: '$2,500 - $10,000',
      audience: '500+ attendees over 3 days',
    },
    {
      title: 'Monthly Screenings',
      description:
        'Regular film screenings with discussions and community engagement',
      investment: '$500 - $2,500',
      audience: '100-150 attendees per event',
    },
    {
      title: 'Educational Programs',
      description: 'Workshops, masterclasses, and film appreciation courses',
      investment: '$1,000 - $5,000',
      audience: 'Students and film enthusiasts',
    },
    {
      title: 'Community Outreach',
      description: 'Free screenings for schools and underserved communities',
      investment: '$500 - $3,000',
      audience: 'Local schools and community groups',
    },
  ];

  return (
    <div className='min-h-screen bg-sandstone'>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Sponsorship', href: '/sponsorship' },
        ]}
      />

      {/* Hero Section */}
      <section className='relative py-16 bg-gradient-to-br from-ocean-blue to-charcoal text-white overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <Image
            src='/images/staugustine/sponsorship-hero.jpg'
            alt='St. Augustine Film Society Sponsorship'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl font-serif font-bold mb-6'>
              Partner with SAFS
            </h1>
            <p className='text-xl mb-8 text-sandstone/90'>
              Join us in celebrating cinema and supporting the arts in America's
              oldest city. Your sponsorship helps bring world-class film
              experiences to our community.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button variant='primary' size='lg' href='#packages'>
                View Sponsorship Packages
              </Button>
              <Button
                variant='outline'
                size='lg'
                href='#contact'
                className='border-white text-white hover:bg-white hover:text-ocean-blue'
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center mb-12'>
            <h2 className='text-4xl font-serif font-bold text-charcoal mb-6'>
              Why Sponsor SAFS?
            </h2>
            <p className='text-lg text-charcoal/80'>
              The St. Augustine Film Society is a cornerstone of cultural life
              in Northeast Florida, bringing together film lovers, artists, and
              community members through the power of cinema.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            <Card className='p-6 text-center bg-white border-ocean-blue/20'>
              <Users className='h-12 w-12 text-ocean-blue mx-auto mb-4' />
              <h3 className='text-xl font-bold text-charcoal mb-3'>
                Community Impact
              </h3>
              <p className='text-charcoal/70'>
                Reach engaged audiences who value arts, culture, and community
                involvement
              </p>
            </Card>
            <Card className='p-6 text-center bg-white border-terracotta/20'>
              <Building className='h-12 w-12 text-terracotta mx-auto mb-4' />
              <h3 className='text-xl font-bold text-charcoal mb-3'>
                Brand Visibility
              </h3>
              <p className='text-charcoal/70'>
                Gain exposure through our events, marketing materials, and
                digital platforms
              </p>
            </Card>
            <Card className='p-6 text-center bg-white border-ochre/20'>
              <Heart className='h-12 w-12 text-ochre mx-auto mb-4' />
              <h3 className='text-xl font-bold text-charcoal mb-3'>
                Cultural Support
              </h3>
              <p className='text-charcoal/70'>
                Demonstrate your commitment to arts education and cultural
                enrichment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section id='packages' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-serif font-bold text-charcoal mb-6'>
              Sponsorship Packages
            </h2>
            <p className='text-lg text-charcoal/80'>
              Choose the sponsorship level that aligns with your goals and
              budget
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
            {sponsorshipTiers.map((tier) => {
              const IconComponent = tier.icon;
              return (
                <Card
                  key={tier.id}
                  className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    tier.id === 'presenting'
                      ? 'lg:col-span-2 xl:col-span-1 border-2 border-ochre'
                      : ''
                  }`}
                >
                  <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-4'>
                      <IconComponent className='h-8 w-8 text-charcoal' />
                      {tier.id === 'presenting' && (
                        <span className='bg-ochre text-charcoal px-2 py-1 rounded text-xs font-bold'>
                          FEATURED
                        </span>
                      )}
                    </div>
                    <h3 className='text-2xl font-bold text-charcoal mb-2'>
                      {tier.name}
                    </h3>
                    <div className='text-3xl font-bold text-ocean-blue mb-6'>
                      {tier.price}
                    </div>

                    <div className='space-y-3 mb-8'>
                      {tier.benefits.map((benefit, index) => (
                        <div key={index} className='flex items-start gap-2'>
                          <div className='w-1.5 h-1.5 bg-terracotta rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-charcoal/80 text-sm'>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant={
                        tier.id === 'presenting' ? 'primary' : 'secondary'
                      }
                      size='lg'
                      fullWidth
                      href='#contact'
                    >
                      Choose {tier.name}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className='py-16 bg-gradient-to-br from-sandstone to-sandstone-light'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-serif font-bold text-charcoal mb-6'>
              Sponsorship Opportunities
            </h2>
            <p className='text-lg text-charcoal/80'>
              Multiple ways to support our mission and connect with our
              community
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {sponsorshipOpportunities.map((opportunity, index) => (
              <Card
                key={index}
                className='p-6 bg-white hover:shadow-lg transition-shadow'
              >
                <h3 className='text-xl font-bold text-charcoal mb-3'>
                  {opportunity.title}
                </h3>
                <p className='text-charcoal/70 mb-4'>
                  {opportunity.description}
                </p>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-ocean-blue font-semibold'>
                    Investment: {opportunity.investment}
                  </span>
                  <span className='text-terracotta font-semibold'>
                    {opportunity.audience}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 bg-charcoal text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl font-serif font-bold mb-6'>
                Ready to Partner with Us?
              </h2>
              <p className='text-lg text-sandstone/90'>
                Let's discuss how your sponsorship can make a meaningful impact
                on our community
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='p-8 bg-white/10 border-white/20'>
                <h3 className='text-xl font-bold mb-6'>
                  Contact Our Sponsorship Team
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <Mail className='h-5 w-5 text-ochre' />
                    <span>sponsorship@staugustinefilmsociety.org</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Phone className='h-5 w-5 text-ochre' />
                    <span>(904) 555-FILM</span>
                  </div>
                </div>
                <div className='mt-8'>
                  <Button
                    variant='primary'
                    size='lg'
                    fullWidth
                    href='mailto:sponsorship@staugustinefilmsociety.org'
                  >
                    Send Email
                  </Button>
                </div>
              </Card>

              <Card className='p-8 bg-white/10 border-white/20'>
                <h3 className='text-xl font-bold mb-6'>
                  Download Sponsorship Kit
                </h3>
                <p className='text-sandstone/80 mb-6'>
                  Get detailed information about our organization, audience
                  demographics, and sponsorship benefits.
                </p>
                <Button
                  variant='outline'
                  size='lg'
                  fullWidth
                  className='border-white text-white hover:bg-white hover:text-charcoal'
                >
                  Download PDF Kit
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
