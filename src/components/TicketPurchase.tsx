'use client';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/safs-button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  AlertCircle,
  Calendar,
  CheckCircle,
  CreditCard,
  Loader2,
  MapPin,
  Star,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Screening {
  _id: string;
  datetime: string;
  ticketPrice: number;
  film: {
    title: string;
    poster: any;
  };
  venue: {
    name: string;
    address: string;
  };
}

interface Member {
  _id: string;
  name: string;
  membershipTier: string;
  membershipStatus: string;
}

interface TicketPurchaseProps {
  screening: Screening;
  member?: Member;
}

export function TicketPurchase({ screening, member }: TicketPurchaseProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const basePrice = screening.ticketPrice || 15;
  const discountPercentage = getMemberDiscount(member?.membershipTier || '');
  const discountAmount = (basePrice * discountPercentage) / 100;
  const finalPrice = basePrice - discountAmount;
  const totalPrice = finalPrice * quantity;
  const totalDiscount = discountAmount * quantity;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handlePurchase = async () => {
    if (!member) {
      setError('You must be a member to purchase tickets');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Create payment intent
      const paymentResponse = await fetch('/api/membership/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: totalPrice,
          description: `${quantity} ticket(s) for ${screening.film.title}`,
          memberId: member._id,
        }),
      });

      if (!paymentResponse.ok) {
        throw new Error('Failed to create payment intent');
      }

      const paymentData = await paymentResponse.json();

      // Create ticket
      const ticketResponse = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          memberId: member._id,
          screeningId: screening._id,
          quantity,
          stripePaymentId: paymentData.paymentIntentId,
        }),
      });

      if (!ticketResponse.ok) {
        throw new Error('Failed to create ticket');
      }

      setSuccess(true);

      // Redirect to success page
      setTimeout(() => {
        router.push(`/tickets/success?ticketId=${paymentData.paymentIntentId}`);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  if (success) {
    return (
      <div className='max-w-2xl mx-auto text-center'>
        <CheckCircle className='h-16 w-16 text-green-500 mx-auto mb-4' />
        <h2 className='text-2xl font-bold text-charcoal mb-2'>
          Tickets Purchased!
        </h2>
        <p className='text-charcoal/70'>
          Your tickets have been confirmed. You'll receive a confirmation email
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto'>
      <Breadcrumbs
        items={[
          { label: 'Screenings', href: '/screenings' },
          { label: screening.film.title },
          { label: 'Purchase Tickets' },
        ]}
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Screening Details */}
        <div>
          <Card className='p-6 mb-6'>
            <h2 className='text-2xl font-serif font-bold text-charcoal mb-4'>
              {screening.film.title}
            </h2>

            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <Calendar className='h-5 w-5 text-ocean-blue' />
                <div>
                  <p className='font-semibold text-charcoal'>
                    {formatDate(screening.datetime)}
                  </p>
                  <p className='text-sm text-charcoal/70'>
                    {formatTime(screening.datetime)}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <MapPin className='h-5 w-5 text-ocean-blue' />
                <div>
                  <p className='font-semibold text-charcoal'>
                    {screening.venue.name}
                  </p>
                  <p className='text-sm text-charcoal/70'>
                    {screening.venue.address}
                  </p>
                </div>
              </div>

              {member && (
                <div className='flex items-center gap-3'>
                  <Star className='h-5 w-5 text-ocean-blue' />
                  <div>
                    <p className='font-semibold text-charcoal'>
                      Member Benefits Applied
                    </p>
                    <p className='text-sm text-charcoal/70'>
                      {member.membershipTier.charAt(0).toUpperCase() +
                        member.membershipTier.slice(1)}{' '}
                      Member
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {!member && (
            <Card className='p-6 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30'>
              <h3 className='text-lg font-semibold text-charcoal mb-3'>
                Become a Member for Discounts
              </h3>
              <p className='text-sm text-charcoal/70 mb-4'>
                Members receive up to 50% off tickets and priority access to
                screenings.
              </p>
              <Button href='/membership' variant='primary' icon={Star}>
                Join SAFS
              </Button>
            </Card>
          )}
        </div>

        {/* Purchase Form */}
        <div>
          <Card className='p-6'>
            <h3 className='text-xl font-bold text-charcoal mb-6'>
              Purchase Tickets
            </h3>

            {error && (
              <div className='mb-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
                <div className='flex items-center gap-2 text-red-700'>
                  <AlertCircle className='h-4 w-4' />
                  {error}
                </div>
              </div>
            )}

            <div className='space-y-6'>
              {/* Quantity Selection */}
              <div>
                <Label className='text-charcoal font-semibold mb-2 block'>
                  Number of Tickets
                </Label>
                <div className='flex items-center gap-4'>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className='text-xl font-bold text-charcoal min-w-[3rem] text-center'>
                    {quantity}
                  </span>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className='space-y-3'>
                <h4 className='font-semibold text-charcoal'>
                  Pricing Breakdown
                </h4>

                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span>Base Price (per ticket):</span>
                    <span>${basePrice.toFixed(2)}</span>
                  </div>

                  {member && discountPercentage > 0 && (
                    <div className='flex justify-between text-green-600'>
                      <span>Member Discount ({discountPercentage}%):</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className='flex justify-between font-semibold'>
                    <span>Final Price (per ticket):</span>
                    <span>${finalPrice.toFixed(2)}</span>
                  </div>

                  <div className='border-t pt-2 flex justify-between text-lg font-bold text-ocean-blue'>
                    <span>
                      Total ({quantity} ticket{quantity > 1 ? 's' : ''}):
                    </span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>

                  {member && totalDiscount > 0 && (
                    <div className='text-sm text-green-600'>
                      You saved ${totalDiscount.toFixed(2)} with your
                      membership!
                    </div>
                  )}
                </div>
              </div>

              {/* Purchase Button */}
              <Button
                onClick={handlePurchase}
                disabled={loading || !member}
                variant='primary'
                size='lg'
                fullWidth
                loading={loading}
                icon={loading ? undefined : CreditCard}
              >
                {loading
                  ? 'Processing...'
                  : member
                  ? 'Purchase Tickets'
                  : 'Login to Purchase'}
              </Button>

              {!member && (
                <p className='text-sm text-charcoal/60 text-center'>
                  You must be a member to purchase tickets
                </p>
              )}
            </div>
          </Card>

          {/* Member Benefits */}
          {member && (
            <Card className='p-4 mt-4 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20'>
              <h4 className='font-semibold text-charcoal mb-2 flex items-center gap-2'>
                <Star className='h-4 w-4 text-ocean-blue' />
                Member Benefits
              </h4>
              <ul className='text-sm text-charcoal/70 space-y-1'>
                <li>• Priority seating at all screenings</li>
                <li>• {discountPercentage}% discount on tickets</li>
                <li>• Access to member-only events</li>
                <li>• Monthly newsletter with exclusive content</li>
              </ul>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function getMemberDiscount(membershipTier: string): number {
  const discounts = {
    individual: 20,
    family: 30,
    patron: 40,
    lifetime: 50,
  };
  return discounts[membershipTier as keyof typeof discounts] || 0;
}
