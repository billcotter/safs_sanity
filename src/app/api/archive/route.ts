import { client } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

// Get TMDB data for a film
async function getTMDBData(tmdbId: number) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  if (!apiKey) return null

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&append_to_response=credits`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching TMDB data:', error)
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    // Parse search parameters with simple defaults
    const { searchParams } = new URL(request.url)
    
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search') || ''
    const sortBy = searchParams.get('sortBy') || 'datetime'
    const sortOrder = searchParams.get('sortOrder') || 'desc'
    
    // Build GROQ query with filters - ONLY past events
    let filters = [
      '_type == "screening"',
      'isPastEvent == true' // Only past events in archive
    ]
    
    if (search) {
      filters.push(`film->title match "*${search}*"`)
    }

    const filterString = filters.join(' && ')

    // Build sort string - default to reverse chronological
    let sortString = ''
    switch (sortBy) {
      case 'title':
        sortString = `film->title ${sortOrder}`
        break
      case 'venue':
        sortString = `venue->name ${sortOrder}`
        break
      case 'attendance':
        sortString = `actualAttendance ${sortOrder}`
        break
      default:
        sortString = `datetime ${sortOrder}` // Default: newest first
    }

    // Get total count for pagination
    const countQuery = `count(*[${filterString}])`
    const total = await client.fetch(countQuery)

    // Calculate pagination
    const totalPages = Math.ceil(total / limit)
    const skip = (page - 1) * limit

    // Get paginated screenings with clean, simple data structure
    const screeningsQuery = `*[${filterString}] | order(${sortString}) [${skip}...${
      skip + limit
    }] {
      _id,
      datetime,
      soldOut,
      actualAttendance,
      venue->{
        name,
        slug
      },
      film->{
        _id,
        title,
        slug,
        poster,
        synopsis,
        releaseYear,
        directors[]->{
          name,
          slug
        }
      }
    }`

    const screenings = await client.fetch(screeningsQuery)

    // Get TMDB data for each screening
    const screeningsWithTMDB = await Promise.all(
      screenings.map(async (screening: any) => {
        const tmdbId = screening.film?.tmdbId
        const tmdbData = tmdbId ? await getTMDBData(tmdbId) : null
        return { ...screening, tmdbData }
      })
    )

    // Build response
    const response = {
      screenings: screeningsWithTMDB,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
      filters: {
        availableYears: [],
        availableVenues: [],
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error in archive API:', error)
    return NextResponse.json(
      { error: 'Failed to fetch archive data' },
      { status: 500 }
    )
  }
}
