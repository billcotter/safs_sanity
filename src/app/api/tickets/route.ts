import { client } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const memberId = searchParams.get('memberId')
    const screeningId = searchParams.get('screeningId')

    if (memberId) {
      // Get tickets for specific member
      const tickets = await client.fetch(
        `*[_type == "ticket" && member._ref == $memberId] | order(purchaseDate desc) {
          _id,
          quantity,
          totalPrice,
          discountApplied,
          purchaseDate,
          status,
          attended,
          screening->{
            _id,
            datetime,
            film->{
              title,
              poster
            },
            venue->{
              name,
              address
            }
          }
        }`,
        { memberId }
      )

      return NextResponse.json(tickets)
    }

    if (screeningId) {
      // Get tickets for specific screening
      const tickets = await client.fetch(
        `*[_type == "ticket" && screening._ref == $screeningId] | order(purchaseDate desc) {
          _id,
          quantity,
          totalPrice,
          discountApplied,
          purchaseDate,
          status,
          attended,
          member->{
            name,
            email,
            membershipTier
          }
        }`,
        { screeningId }
      )

      return NextResponse.json(tickets)
    }

    // Get all tickets (for admin purposes)
    const tickets = await client.fetch(
      `*[_type == "ticket"] | order(purchaseDate desc) {
        _id,
        quantity,
        totalPrice,
        discountApplied,
        purchaseDate,
        status,
        attended,
        member->{
          name,
          email
        },
        screening->{
          datetime,
          film->{
            title
          }
        }
      }`
    )

    return NextResponse.json(tickets)
  } catch (error) {
    console.error('Error fetching tickets:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tickets' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      memberId,
      screeningId,
      quantity,
      stripePaymentId,
      memberDiscount = 0,
    } = body

    // Validate required fields
    if (!memberId || !screeningId || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get screening details for pricing
    const screening = await client.fetch(
      `*[_type == "screening" && _id == $screeningId][0] {
        _id,
        ticketPrice,
        film->{
          title
        }
      }`,
      { screeningId }
    )

    if (!screening) {
      return NextResponse.json(
        { error: 'Screening not found' },
        { status: 404 }
      )
    }

    // Get member details for discount calculation
    const member = await client.fetch(
      `*[_type == "member" && _id == $memberId][0] {
        _id,
        membershipTier,
        name
      }`,
      { memberId }
    )

    if (!member) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 })
    }

    // Calculate pricing with member discount
    const basePrice = screening.ticketPrice || 15 // Default price
    const discountPercentage = getMemberDiscount(member.membershipTier)
    const discountAmount = (basePrice * discountPercentage) / 100
    const finalPrice = basePrice - discountAmount
    const totalPrice = finalPrice * quantity
    const totalDiscount = discountAmount * quantity

    // Create ticket
    const ticket = {
      _type: 'ticket',
      member: {
        _type: 'reference',
        _ref: memberId,
      },
      screening: {
        _type: 'reference',
        _ref: screeningId,
      },
      quantity,
      totalPrice,
      discountApplied: totalDiscount,
      purchaseDate: new Date().toISOString(),
      status: 'confirmed',
      stripePaymentId,
      attended: false,
    }

    const result = await client.create(ticket)

    return NextResponse.json({
      success: true,
      ticketId: result._id,
      totalPrice,
      discountApplied: totalDiscount,
      message: 'Ticket purchased successfully',
    })
  } catch (error) {
    console.error('Error creating ticket:', error)
    return NextResponse.json(
      { error: 'Failed to create ticket' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { ticketId, updates } = body

    if (!ticketId) {
      return NextResponse.json(
        { error: 'Ticket ID is required' },
        { status: 400 }
      )
    }

    const result = await client.patch(ticketId).set(updates).commit()

    return NextResponse.json({
      success: true,
      message: 'Ticket updated successfully',
      ticket: result,
    })
  } catch (error) {
    console.error('Error updating ticket:', error)
    return NextResponse.json(
      { error: 'Failed to update ticket' },
      { status: 500 }
    )
  }
}

function getMemberDiscount(membershipTier: string): number {
  const discounts = {
    individual: 20,
    family: 30,
    patron: 40,
    lifetime: 50,
  }
  return discounts[membershipTier as keyof typeof discounts] || 0
}
