import { client } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (email) {
      // Get specific member by email
      const member = await client.fetch(
        `*[_type == "member" && email == $email][0] {
          _id,
          name,
          email,
          phone,
          membershipTier,
          membershipStatus,
          joinDate,
          renewalDate,
          stripeCustomerId,
          favoriteGenres,
          favoriteFilms[]->{
            _id,
            title,
            slug
          },
          preferredVenues[]->{
            _id,
            name,
            slug
          },
          bio,
          profilePhoto,
          emailOptIn,
          publicProfile
        }`,
        { email }
      )

      if (!member) {
        return NextResponse.json({ error: 'Member not found' }, { status: 404 })
      }

      return NextResponse.json(member)
    }

    // Get all members (for admin purposes)
    const members = await client.fetch(
      `*[_type == "member"] | order(joinDate desc) {
        _id,
        name,
        email,
        membershipTier,
        membershipStatus,
        joinDate,
        renewalDate
      }`
    )

    return NextResponse.json(members)
  } catch (error) {
    console.error('Error fetching members:', error)
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      membershipTier,
      stripeCustomerId,
      favoriteGenres = [],
      bio = '',
      emailOptIn = true,
      publicProfile = false,
    } = body

    // Validate required fields
    if (!name || !email || !membershipTier) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if member already exists
    const existingMember = await client.fetch(
      `*[_type == "member" && email == $email][0]`,
      { email }
    )

    if (existingMember) {
      return NextResponse.json(
        { error: 'Member already exists with this email' },
        { status: 409 }
      )
    }

    // Calculate renewal date (1 year from now)
    const joinDate = new Date().toISOString().split('T')[0]
    const renewalDate = new Date()
    renewalDate.setFullYear(renewalDate.getFullYear() + 1)
    const renewalDateString = renewalDate.toISOString().split('T')[0]

    // Create new member
    const member = {
      _type: 'member',
      name,
      email,
      phone,
      membershipTier,
      membershipStatus: 'active',
      joinDate,
      renewalDate: renewalDateString,
      stripeCustomerId,
      favoriteGenres,
      bio,
      emailOptIn,
      publicProfile,
      paymentHistory: [
        {
          date: joinDate,
          amount: getMembershipPrice(membershipTier),
          description: `Initial ${membershipTier} membership payment`,
          stripePaymentId: stripeCustomerId,
        },
      ],
    }

    const result = await client.create(member)

    return NextResponse.json({
      success: true,
      memberId: result._id,
      message: 'Member created successfully',
    })
  } catch (error) {
    console.error('Error creating member:', error)
    return NextResponse.json(
      { error: 'Failed to create member' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { memberId, updates } = body

    if (!memberId) {
      return NextResponse.json(
        { error: 'Member ID is required' },
        { status: 400 }
      )
    }

    const result = await client.patch(memberId).set(updates).commit()

    return NextResponse.json({
      success: true,
      message: 'Member updated successfully',
      member: result,
    })
  } catch (error) {
    console.error('Error updating member:', error)
    return NextResponse.json(
      { error: 'Failed to update member' },
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
