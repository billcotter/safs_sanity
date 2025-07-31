import { client } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Parse and validate search parameters
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search') || ''
    const sortBy = searchParams.get('sortBy') || 'name'
    const sortOrder = searchParams.get('sortOrder') || 'asc'
    const venueType = searchParams.get('venueType') || ''

    // Build GROQ query with filters
    let filters = ['_type == "venue"']

    if (search) {
      filters.push(
        `name match "*${search}*" || address.city match "*${search}*"`
      )
    }

    if (venueType) {
      filters.push(`venueType == "${venueType}"`)
    }

    const filterString = filters.join(' && ')

    // Build sort string
    let sortString = ''
    switch (sortBy) {
      case 'established':
        sortString = `established ${sortOrder}`
        break
      case 'capacity':
        sortString = `capacity ${sortOrder}`
        break
      default:
        sortString = `name ${sortOrder}`
    }

    // Get total count for pagination
    const countQuery = `count(*[${filterString}])`
    const total = await client.fetch(countQuery)

    // Calculate pagination
    const totalPages = Math.ceil(total / limit)
    const skip = (page - 1) * limit

    // Get paginated venues
    const venuesQuery = `*[${filterString}] | order(${sortString}) [${skip}...${
      skip + limit
    }] {
      _id,
      name,
      slug,
      heroImage,
      established,
      capacity,
      venueType,
      address,
      amenities,
      "totalScreenings": count(*[_type == "screening" && venue._ref == ^._id])
    }`

    const venues = await client.fetch(venuesQuery)

    // Build response
    const response = {
      venues,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in venues API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch venues data' },
      { status: 500 }
    )
  }
}
