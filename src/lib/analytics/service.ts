import { AnalyticsData, AnalyticsEvents, UserJourney } from './types'

class AnalyticsService implements AnalyticsEvents {
  private sessionId: string
  private sessionStartTime: number
  private currentPage: string = ''
  private pageStartTime: number = 0
  private userJourney: UserJourney
  private isDevelopment: boolean

  constructor() {
    this.sessionId = this.generateSessionId()
    this.sessionStartTime = Date.now()
    this.isDevelopment = process.env.NODE_ENV === 'development'

    this.userJourney = {
      sessionId: this.sessionId,
      startTime: new Date().toISOString(),
      pages: [],
      searchQueries: [],
      crossLinkClicks: [],
    }

    // Track page visibility changes
    if (typeof window !== 'undefined') {
      document.addEventListener(
        'visibilitychange',
        this.handleVisibilityChange.bind(this)
      )
      window.addEventListener('beforeunload', this.handlePageUnload.bind(this))
    }
  }

  // Session management
  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  private getReferrer(): string {
    if (typeof window !== 'undefined') {
      return document.referrer || 'direct'
    }
    return 'server'
  }

  private getUserAgent(): string {
    if (typeof window !== 'undefined') {
      return navigator.userAgent
    }
    return 'server'
  }

  // Event tracking
  private trackEvent(
    event: string,
    properties: Record<string, any> = {}
  ): void {
    const analyticsData: AnalyticsData = {
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      page: this.currentPage,
      event,
      properties: {
        ...properties,
        pageLoadTime: Date.now() - this.pageStartTime,
      },
      userAgent: this.getUserAgent(),
      referrer: this.getReferrer(),
    }

    // Send to analytics endpoint
    this.sendAnalyticsData(analyticsData)

    // Log in development
    if (this.isDevelopment) {
      console.log('📊 Analytics Event:', event, properties)
    }
  }

  private async sendAnalyticsData(data: AnalyticsData): Promise<void> {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Failed to send analytics data:', error)
    }
  }

  // Page view tracking
  public startPageView(page: string): void {
    this.currentPage = page
    this.pageStartTime = Date.now()

    // Add to user journey
    this.userJourney.pages.push({
      page,
      timestamp: new Date().toISOString(),
      timeSpent: 0,
      interactions: [],
    })
  }

  public endPageView(): void {
    if (this.userJourney.pages.length > 0) {
      const currentPage =
        this.userJourney.pages[this.userJourney.pages.length - 1]
      currentPage.timeSpent = Date.now() - this.pageStartTime
    }
  }

  // Analytics Events Implementation
  public personPageView(slug: string, referrer: string): void {
    this.trackEvent('person_page_view', { slug, referrer })
  }

  public venuePageView(slug: string, referrer: string): void {
    this.trackEvent('venue_page_view', { slug, referrer })
  }

  public filmPageView(slug: string, referrer: string): void {
    this.trackEvent('film_page_view', { slug, referrer })
  }

  public archivePageView(filters: any): void {
    this.trackEvent('archive_page_view', { filters })
  }

  public filmographyExploration(person: string, films: string[]): void {
    this.trackEvent('filmography_exploration', {
      person,
      films,
      filmCount: films.length,
    })
  }

  public venueInterestTracking(venue: string, timeSpent: number): void {
    this.trackEvent('venue_interest_tracking', { venue, timeSpent })
  }

  public crossLinkNavigation(from: string, to: string, type: string): void {
    this.trackEvent('cross_link_navigation', { from, to, type })

    // Add to user journey
    this.userJourney.crossLinkClicks.push({
      from,
      to,
      type,
      timestamp: new Date().toISOString(),
    })
  }

  public searchQuery(query: string, results: number, filters: any): void {
    this.trackEvent('search_query', { query, results, filters })

    // Add to user journey
    this.userJourney.searchQueries.push({
      query,
      timestamp: new Date().toISOString(),
      results,
    })
  }

  public filterUsage(filterType: string, value: string, context: string): void {
    this.trackEvent('filter_usage', { filterType, value, context })
  }

  public sortUsage(sortBy: string, sortOrder: string, context: string): void {
    this.trackEvent('sort_usage', { sortBy, sortOrder, context })
  }

  public paginationUsage(page: number, context: string): void {
    this.trackEvent('pagination_usage', { page, context })
  }

  public relatedContentClick(
    sourceType: string,
    sourceId: string,
    targetType: string,
    targetId: string
  ): void {
    this.trackEvent('related_content_click', {
      sourceType,
      sourceId,
      targetType,
      targetId,
    })
  }

  public featuredWorkClick(personId: string, filmId: string): void {
    this.trackEvent('featured_work_click', { personId, filmId })
  }

  public screeningHistoryClick(venueId: string, filmId: string): void {
    this.trackEvent('screening_history_click', { venueId, filmId })
  }

  public pageLoadTime(page: string, loadTime: number): void {
    this.trackEvent('page_load_time', { page, loadTime })
  }

  public imageLoadTime(imageType: string, loadTime: number): void {
    this.trackEvent('image_load_time', { imageType, loadTime })
  }

  public apiResponseTime(endpoint: string, responseTime: number): void {
    this.trackEvent('api_response_time', { endpoint, responseTime })
  }

  // Session management
  private handleVisibilityChange(): void {
    if (document.hidden) {
      this.endPageView()
    } else {
      this.startPageView(this.currentPage)
    }
  }

  private handlePageUnload(): void {
    this.endPageView()
    this.userJourney.endTime = new Date().toISOString()

    // Send final session data
    this.sendAnalyticsData({
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      page: this.currentPage,
      event: 'session_end',
      properties: {
        sessionDuration: Date.now() - this.sessionStartTime,
        totalPages: this.userJourney.pages.length,
        totalSearches: this.userJourney.searchQueries.length,
        totalCrossLinks: this.userJourney.crossLinkClicks.length,
      },
      userAgent: this.getUserAgent(),
      referrer: this.getReferrer(),
    })
  }

  // Utility methods
  public getSessionId(): string {
    return this.sessionId
  }

  public getUserJourney(): UserJourney {
    return { ...this.userJourney }
  }
}

// Create singleton instance
export const analytics = new AnalyticsService()
