import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { membershipTier, email, name, phone } = body

    // Validate required fields
    if (!membershipTier || !email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get membership price
    const price = getMembershipPrice(membershipTier)
    const description = `${
      membershipTier.charAt(0).toUpperCase() + membershipTier.slice(1)
    } Membership - St. Augustine Film Society`

    // Create Stripe customer
    const customer = await stripe.customers.create({
      email,
      name,
      phone,
      metadata: {
        membershipTier,
        source: 'safs_website',
      },
    })

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100, // Convert to cents
      currency: 'usd',
      customer: customer.id,
      description,
      metadata: {
        membershipTier,
        customerId: customer.id,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      customerId: customer.id,
      amount: price,
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
}

function getMembershipPrice(tier: string): number {
  const prices = {
    individual: 50,
    family: 85,
    patron: 150,
    lifetime: 500,
  }
  return prices[tier as keyof typeof prices] || 50
}
