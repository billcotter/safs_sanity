import { AnalyticsData } from '@/lib/analytics/types'
import { NextRequest, NextResponse } from 'next/server'

// In a real implementation, you'd store this in a database
// For now, we'll log it and could send to external services
const analyticsStore: AnalyticsData[] = []

export async function POST(request: NextRequest) {
  try {
    const data: AnalyticsData = await request.json()

    // Validate required fields
    if (!data.timestamp || !data.sessionId || !data.event) {
      return NextResponse.json(
        { error: 'Missing required analytics fields' },
        { status: 400 }
      )
    }

    // Store analytics data
    analyticsStore.push(data)

    // In production, you might:
    // 1. Store in database (PostgreSQL, MongoDB, etc.)
    // 2. Send to external analytics service (Google Analytics, Mixpanel, etc.)
    // 3. Process for real-time insights
    // 4. Trigger alerts for unusual patterns

    // Log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Data:', {
        event: data.event,
        sessionId: data.sessionId,
        page: data.page,
        properties: data.properties,
      })
    }

    // Example: Send to external service
    // await sendToAnalyticsService(data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing analytics data:', error)
    return NextResponse.json(
      { error: 'Failed to process analytics data' },
      { status: 500 }
    )
  }
}

// Analytics insights endpoint
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') || 'overview'
    const limit = parseInt(searchParams.get('limit') || '50')

    switch (type) {
      case 'popular-people':
        return getPopularPeople(limit)
      case 'popular-venues':
        return getPopularVenues(limit)
      case 'search-insights':
        return getSearchInsights(limit)
      case 'cross-link-patterns':
        return getCrossLinkPatterns(limit)
      case 'performance-metrics':
        return getPerformanceMetrics()
      default:
        return getOverview()
    }
  } catch (error) {
    console.error('Error generating analytics insights:', error)
    return NextResponse.json(
      { error: 'Failed to generate insights' },
      { status: 500 }
    )
  }
}

// Analytics insight functions
function getPopularPeople(limit: number) {
  const peopleViews = analyticsStore
    .filter((data) => data.event === 'person_page_view')
    .reduce((acc, data) => {
      const slug = data.properties.slug
      acc[slug] = (acc[slug] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const popularPeople = Object.entries(peopleViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([slug, views]) => ({ slug, views }))

  return NextResponse.json({ popularPeople })
}

function getPopularVenues(limit: number) {
  const venueViews = analyticsStore
    .filter((data) => data.event === 'venue_page_view')
    .reduce((acc, data) => {
      const slug = data.properties.slug
      acc[slug] = (acc[slug] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const popularVenues = Object.entries(venueViews)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([slug, views]) => ({ slug, views }))

  return NextResponse.json({ popularVenues })
}

function getSearchInsights(limit: number) {
  const searchQueries = analyticsStore
    .filter((data) => data.event === 'search_query')
    .map((data) => ({
      query: data.properties.query,
      results: data.properties.results,
      timestamp: data.timestamp,
    }))
    .slice(-limit)

  const popularSearches = searchQueries.reduce((acc, search) => {
    acc[search.query] = (acc[search.query] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return NextResponse.json({
    recentSearches: searchQueries,
    popularSearches: Object.entries(popularSearches)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([query, count]) => ({ query, count })),
  })
}

function getCrossLinkPatterns(limit: number) {
  const crossLinks = analyticsStore
    .filter((data) => data.event === 'cross_link_navigation')
    .map((data) => ({
      from: data.properties.from,
      to: data.properties.to,
      type: data.properties.type,
      timestamp: data.timestamp,
    }))
    .slice(-limit)

  const linkPatterns = crossLinks.reduce((acc, link) => {
    const key = `${link.from}->${link.to}`
    acc[key] = (acc[key] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return NextResponse.json({
    recentCrossLinks: crossLinks,
    popularLinkPatterns: Object.entries(linkPatterns)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([pattern, count]) => ({ pattern, count })),
  })
}

function getPerformanceMetrics() {
  const pageLoadTimes = analyticsStore
    .filter((data) => data.event === 'page_load_time')
    .map((data) => ({
      page: data.properties.page,
      loadTime: data.properties.loadTime,
    }))

  const avgLoadTimes = pageLoadTimes.reduce((acc, metric) => {
    acc[metric.page] = acc[metric.page] || []
    acc[metric.page].push(metric.loadTime)
    return acc
  }, {} as Record<string, number[]>)

  const performanceMetrics = Object.entries(avgLoadTimes).map(
    ([page, times]) => ({
      page,
      averageLoadTime: times.reduce((a, b) => a + b, 0) / times.length,
      minLoadTime: Math.min(...times),
      maxLoadTime: Math.max(...times),
      sampleCount: times.length,
    })
  )

  return NextResponse.json({ performanceMetrics })
}

function getOverview() {
  const totalEvents = analyticsStore.length
  const uniqueSessions = new Set(analyticsStore.map((data) => data.sessionId))
    .size
  const eventTypes = analyticsStore.reduce((acc, data) => {
    acc[data.event] = (acc[data.event] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return NextResponse.json({
    totalEvents,
    uniqueSessions,
    eventTypes,
    dataPoints: analyticsStore.length,
  })
}
