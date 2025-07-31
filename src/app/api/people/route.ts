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
    const role = searchParams.get('role') || ''

    // Build GROQ query with filters
    let filters = ['_type == "person"']

    if (search) {
      filters.push(
        `name match "*${search}*" || nationality match "*${search}*"`
      )
    }

    if (role) {
      filters.push(`"${role}" in roles`)
    }

    const filterString = filters.join(' && ')

    // Build sort string
    let sortString = ''
    switch (sortBy) {
      case 'birthDate':
        sortString = `birthDate ${sortOrder}`
        break
      case 'roles':
        sortString = `roles[0] ${sortOrder}`
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

    // Get paginated people
    const peopleQuery = `*[${filterString}] | order(${sortString}) [${skip}...${
      skip + limit
    }] {
      _id,
      name,
      slug,
      profileImage,
      birthDate,
      deathDate,
      birthPlace,
      nationality,
      roles,
      awards,
      "featuredWork": featuredWork->{
        title,
        slug
      }
    }`

    const people = await client.fetch(peopleQuery)

    // Build response
    const response = {
      people,
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
    console.error('Error in people API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch people data' },
      { status: 500 }
    )
  }
}
