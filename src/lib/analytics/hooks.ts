import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { analytics } from './service'

// Hook for tracking page views
export function usePageView(page: string) {
  const router = useRouter()
  const startTime = useRef<number>(Date.now())

  useEffect(() => {
    analytics.startPageView(page)

    // Track page load time
    const loadTime = Date.now() - startTime.current
    analytics.pageLoadTime(page, loadTime)

    // Track page view with referrer
    const referrer = document.referrer || 'direct'

    switch (page) {
      case 'people':
        // Track people directory view
        analytics.archivePageView({ context: 'people' })
        break
      case 'venues':
        // Track venues directory view
        analytics.archivePageView({ context: 'venues' })
        break
      case 'archive':
        // Track archive view
        analytics.archivePageView({ context: 'archive' })
        break
      default:
        if (page.startsWith('people/')) {
          const slug = page.replace('people/', '')
          analytics.personPageView(slug, referrer)
        } else if (page.startsWith('venues/')) {
          const slug = page.replace('venues/', '')
          analytics.venuePageView(slug, referrer)
        } else if (page.startsWith('films/')) {
          const slug = page.replace('films/', '')
          analytics.filmPageView(slug, referrer)
        }
    }

    return () => {
      analytics.endPageView()
    }
  }, [page])
}

// Hook for tracking search behavior
export function useSearchTracking() {
  const trackSearch = useCallback(
    (query: string, results: number, filters: any) => {
      analytics.searchQuery(query, results, filters)
    },
    []
  )

  const trackFilter = useCallback(
    (filterType: string, value: string, context: string) => {
      analytics.filterUsage(filterType, value, context)
    },
    []
  )

  const trackSort = useCallback(
    (sortBy: string, sortOrder: string, context: string) => {
      analytics.sortUsage(sortBy, sortOrder, context)
    },
    []
  )

  const trackPagination = useCallback((page: number, context: string) => {
    analytics.paginationUsage(page, context)
  }, [])

  return { trackSearch, trackFilter, trackSort, trackPagination }
}

// Hook for tracking cross-link navigation
export function useCrossLinkTracking() {
  const trackCrossLink = useCallback(
    (
      from: string,
      to: string,
      type: 'person' | 'venue' | 'film' | 'screening'
    ) => {
      analytics.crossLinkNavigation(from, to, type)
    },
    []
  )

  const trackFeaturedWork = useCallback((personId: string, filmId: string) => {
    analytics.featuredWorkClick(personId, filmId)
  }, [])

  const trackScreeningHistory = useCallback(
    (venueId: string, filmId: string) => {
      analytics.screeningHistoryClick(venueId, filmId)
    },
    []
  )

  const trackRelatedContent = useCallback(
    (
      sourceType: string,
      sourceId: string,
      targetType: string,
      targetId: string
    ) => {
      analytics.relatedContentClick(sourceType, sourceId, targetType, targetId)
    },
    []
  )

  return {
    trackCrossLink,
    trackFeaturedWork,
    trackScreeningHistory,
    trackRelatedContent,
  }
}

// Hook for tracking content exploration
export function useContentTracking() {
  const trackFilmography = useCallback((person: string, films: string[]) => {
    analytics.filmographyExploration(person, films)
  }, [])

  const trackVenueInterest = useCallback((venue: string, timeSpent: number) => {
    analytics.venueInterestTracking(venue, timeSpent)
  }, [])

  return { trackFilmography, trackVenueInterest }
}

// Hook for tracking performance metrics
export function usePerformanceTracking() {
  const trackImageLoad = useCallback((imageType: string, loadTime: number) => {
    analytics.imageLoadTime(imageType, loadTime)
  }, [])

  const trackApiResponse = useCallback(
    (endpoint: string, responseTime: number) => {
      analytics.apiResponseTime(endpoint, responseTime)
    },
    []
  )

  return { trackImageLoad, trackApiResponse }
}

// Hook for tracking user interactions with time spent
export function useInteractionTracking() {
  const interactionStartTime = useRef<number>(0)
  const currentInteraction = useRef<string>('')

  const startInteraction = useCallback((interactionType: string) => {
    interactionStartTime.current = Date.now()
    currentInteraction.current = interactionType
  }, [])

  const endInteraction = useCallback(() => {
    if (currentInteraction.current && interactionStartTime.current > 0) {
      const timeSpent = Date.now() - interactionStartTime.current

      switch (currentInteraction.current) {
        case 'venue_exploration':
          analytics.venueInterestTracking('unknown', timeSpent)
          break
        case 'person_exploration':
          analytics.filmographyExploration('unknown', [])
          break
        default:
          // Track generic interaction
          analytics.trackEvent('interaction_complete', {
            type: currentInteraction.current,
            timeSpent,
          })
      }

      currentInteraction.current = ''
      interactionStartTime.current = 0
    }
  }, [])

  useEffect(() => {
    return () => {
      endInteraction()
    }
  }, [endInteraction])

  return { startInteraction, endInteraction }
}

// Hook for tracking component visibility and engagement
export function useVisibilityTracking(componentName: string) {
  const isVisible = useRef(false)
  const visibilityStartTime = useRef<number>(0)

  const onVisibilityChange = useCallback(
    (visible: boolean) => {
      if (visible && !isVisible.current) {
        // Component became visible
        isVisible.current = true
        visibilityStartTime.current = Date.now()
        analytics.trackEvent('component_visible', { component: componentName })
      } else if (!visible && isVisible.current) {
        // Component became hidden
        isVisible.current = false
        const timeSpent = Date.now() - visibilityStartTime.current
        analytics.trackEvent('component_hidden', {
          component: componentName,
          timeSpent,
        })
      }
    },
    [componentName]
  )

  return { onVisibilityChange }
}
