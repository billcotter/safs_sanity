// Core analytics event types
export interface AnalyticsEvents {
  // Page view tracking
  personPageView: (slug: string, referrer: string) => void
  venuePageView: (slug: string, referrer: string) => void
  filmPageView: (slug: string, referrer: string) => void
  archivePageView: (filters: ArchiveFilters) => void

  // Content exploration tracking
  filmographyExploration: (person: string, films: string[]) => void
  venueInterestTracking: (venue: string, timeSpent: number) => void
  crossLinkNavigation: (from: string, to: string, type: string) => void
  searchQuery: (query: string, results: number, filters: any) => void

  // User interaction tracking
  filterUsage: (filterType: string, value: string, context: string) => void
  sortUsage: (sortBy: string, sortOrder: string, context: string) => void
  paginationUsage: (page: number, context: string) => void

  // Content discovery tracking
  relatedContentClick: (
    sourceType: string,
    sourceId: string,
    targetType: string,
    targetId: string
  ) => void
  featuredWorkClick: (personId: string, filmId: string) => void
  screeningHistoryClick: (venueId: string, filmId: string) => void

  // Performance tracking
  pageLoadTime: (page: string, loadTime: number) => void
  imageLoadTime: (imageType: string, loadTime: number) => void
  apiResponseTime: (endpoint: string, responseTime: number) => void
}

// Filter and context types
export interface ArchiveFilters {
  search?: string
  year?: number
  venue?: string
  sortBy?: string
  sortOrder?: string
}

export interface PersonAnalytics {
  slug: string
  name: string
  roles: string[]
  featuredWork?: string
  totalFilms: number
  viewCount: number
  averageTimeSpent: number
  crossLinkClicks: number
}

export interface VenueAnalytics {
  slug: string
  name: string
  venueType: string
  totalScreenings: number
  viewCount: number
  averageTimeSpent: number
  upcomingScreeningClicks: number
}

export interface FilmAnalytics {
  slug: string
  title: string
  directors: string[]
  viewCount: number
  personLinkClicks: number
  venueLinkClicks: number
}

// Analytics data structure
export interface AnalyticsData {
  timestamp: string
  sessionId: string
  userId?: string
  page: string
  event: string
  properties: Record<string, any>
  userAgent: string
  referrer: string
}

// Performance metrics
export interface PerformanceMetrics {
  pageLoadTimes: Record<string, number[]>
  imageLoadTimes: Record<string, number[]>
  apiResponseTimes: Record<string, number[]>
}

// User journey tracking
export interface UserJourney {
  sessionId: string
  startTime: string
  endTime?: string
  pages: Array<{
    page: string
    timestamp: string
    timeSpent: number
    interactions: string[]
  }>
  searchQueries: Array<{
    query: string
    timestamp: string
    results: number
  }>
  crossLinkClicks: Array<{
    from: string
    to: string
    type: string
    timestamp: string
  }>
}
