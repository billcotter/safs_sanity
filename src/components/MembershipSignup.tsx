'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  AlertCircle,
  CheckCircle,
  CreditCard,
  Loader2,
  Star,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface MembershipTier {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  popular?: boolean;
}

const membershipTiers: MembershipTier[] = [
  {
    id: 'individual',
    name: 'Individual',
    price: 50,
    description: 'Perfect for individual film enthusiasts',
    benefits: [
      'Priority ticket access',
      '20% discount on tickets',
      'Monthly newsletter',
      'Member-only events',
    ],
  },
  {
    id: 'family',
    name: 'Family',
    price: 85,
    description: 'Great for families and small groups',
    benefits: [
      'All Individual benefits',
      'Up to 4 family members',
      '30% discount on tickets',
      'Family movie nights',
    ],
    popular: true,
  },
  {
    id: 'patron',
    name: 'Patron',
    price: 150,
    description: 'For serious film supporters',
    benefits: [
      'All Family benefits',
      'VIP seating at all events',
      'Exclusive filmmaker meetups',
      'Recognition in programs',
    ],
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 500,
    description: 'One-time payment for lifetime membership',
    benefits: [
      'All Patron benefits',
      'Lifetime membership',
      'Founding member status',
      'Special recognition',
    ],
  },
];

export function MembershipSignup() {
  const router = useRouter();
  const [selectedTier, setSelectedTier] = useState<string>('individual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    favoriteGenres: [] as string[],
    bio: '',
    emailOptIn: true,
    publicProfile: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenreToggle = (genre: string) => {
    setFormData((prev) => ({
      ...prev,
      favoriteGenres: prev.favoriteGenres.includes(genre)
        ? prev.favoriteGenres.filter((g) => g !== genre)
        : [...prev.favoriteGenres, genre],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Create payment intent
      const paymentResponse = await fetch('/api/membership/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          membershipTier: selectedTier,
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error('Failed to create payment intent');
      }

      const paymentData = await paymentResponse.json();

      // Create member in Sanity
      const memberResponse = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          membershipTier: selectedTier,
          stripeCustomerId: paymentData.customerId,
        }),
      });

      if (!memberResponse.ok) {
        throw new Error('Failed to create member');
      }

      setSuccess(true);

      // Redirect to success page or dashboard
      setTimeout(() => {
        router.push('/membership/success');
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const selectedTierData = membershipTiers.find(
    (tier) => tier.id === selectedTier
  );

  if (success) {
    return (
      <div className='max-w-2xl mx-auto text-center'>
        <CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
        <h2 className='text-2xl font-bold text-charcoal mb-2'>
          Welcome to SAFS!
        </h2>
        <p className='text-charcoal/70'>
          Your membership has been created successfully. You'll receive a
          confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto'>
      <Breadcrumbs
        items={[
          { label: 'Membership', href: '/membership' },
          { label: 'Join Now' },
        ]}
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Membership Tiers */}
        <div>
          <h2 className='text-2xl font-serif font-bold text-charcoal mb-6'>
            Choose Your Membership
          </h2>
          <div className='space-y-4'>
            {membershipTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`p-6 cursor-pointer transition-all ${
                  selectedTier === tier.id
                    ? 'border-2 border-ocean-blue bg-ocean-blue/5'
                    : 'border border-sandstone/30 hover:border-ocean-blue/50'
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                <div className='flex items-start justify-between mb-4'>
                  <div>
                    <div className='flex items-center gap-2 mb-2'>
                      <h3 className='text-xl font-bold text-charcoal'>
                        {tier.name}
                      </h3>
                      {tier.popular && (
                        <Badge className='bg-ocean-blue text-white text-xs'>
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <p className='text-charcoal/70 text-sm mb-2'>
                      {tier.description}
                    </p>
                    <div className='text-2xl font-bold text-ocean-blue'>
                      ${tier.price}
                      <span className='text-sm text-charcoal/60 ml-1'>
                        {tier.id === 'lifetime' ? ' one-time' : '/year'}
                      </span>
                    </div>
                  </div>
                  <div className='w-5 h-5 rounded-full border-2 flex items-center justify-center'>
                    {selectedTier === tier.id && (
                      <div className='w-3 h-3 bg-ocean-blue rounded-full' />
                    )}
                  </div>
                </div>
                <ul className='space-y-2'>
                  {tier.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className='flex items-center gap-2 text-sm text-charcoal/70'
                    >
                      <Star className='h-4 w-4 text-ocean-blue' />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Signup Form */}
        <div>
          <Card className='p-6'>
            <h3 className='text-xl font-bold text-charcoal mb-6'>
              Complete Your Membership
            </h3>

            {error && (
              <div className='mb-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
                <div className='flex items-center gap-2 text-red-700'>
                  <AlertCircle className='h-4 w-4' />
                  {error}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor='name' className='text-charcoal font-semibold'>
                    Full Name *
                  </Label>
                  <Input
                    id='name'
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className='mt-1'
                  />
                </div>
                <div>
                  <Label
                    htmlFor='email'
                    className='text-charcoal font-semibold'
                  >
                    Email Address *
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className='mt-1'
                  />
                </div>
              </div>

              <div>
                <Label htmlFor='phone' className='text-charcoal font-semibold'>
                  Phone Number
                </Label>
                <Input
                  id='phone'
                  type='tel'
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className='mt-1'
                />
              </div>

              <div>
                <Label className='text-charcoal font-semibold mb-2 block'>
                  Favorite Genres
                </Label>
                <div className='grid grid-cols-2 gap-2'>
                  {[
                    'Drama',
                    'Comedy',
                    'Documentary',
                    'Horror',
                    'Action',
                    'Romance',
                    'Thriller',
                    'Sci-Fi',
                    'Historical',
                    'International',
                  ].map((genre) => (
                    <label
                      key={genre}
                      className='flex items-center gap-2 cursor-pointer'
                    >
                      <Checkbox
                        checked={formData.favoriteGenres.includes(genre)}
                        onCheckedChange={() => handleGenreToggle(genre)}
                      />
                      <span className='text-sm text-charcoal/70'>{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor='bio' className='text-charcoal font-semibold'>
                  Bio (Optional)
                </Label>
                <textarea
                  id='bio'
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  rows={3}
                  className='w-full mt-1 p-3 border border-sandstone/30 rounded-lg resize-none'
                  placeholder='Tell us about your film interests...'
                />
              </div>

              <div className='space-y-3'>
                <label className='flex items-center gap-2 cursor-pointer'>
                  <Checkbox
                    checked={formData.emailOptIn}
                    onCheckedChange={(checked) =>
                      handleInputChange('emailOptIn', checked)
                    }
                  />
                  <span className='text-sm text-charcoal/70'>
                    Subscribe to our newsletter for updates and special offers
                  </span>
                </label>

                <label className='flex items-center gap-2 cursor-pointer'>
                  <Checkbox
                    checked={formData.publicProfile}
                    onCheckedChange={(checked) =>
                      handleInputChange('publicProfile', checked)
                    }
                  />
                  <span className='text-sm text-charcoal/70'>
                    Allow other members to see my profile
                  </span>
                </label>
              </div>

              {selectedTierData && (
                <div className='p-4 bg-sandstone/20 rounded-lg'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='font-semibold text-charcoal'>
                      {selectedTierData.name} Membership
                    </span>
                    <span className='text-xl font-bold text-ocean-blue'>
                      ${selectedTierData.price}
                    </span>
                  </div>
                  <p className='text-sm text-charcoal/70'>
                    {selectedTierData.id === 'lifetime'
                      ? 'One-time payment'
                      : 'Annual membership'}
                  </p>
                </div>
              )}

              <Button
                type='submit'
                variant='primary'
                size='lg'
                fullWidth
                disabled={loading || !formData.name || !formData.email}
                loading={loading}
                icon={loading ? undefined : CreditCard}
              >
                {loading ? 'Processing...' : 'Complete Membership'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
