// Robust API error handling system for SAFS
export const tmdbErrorHandler = {
  fallbacks: {
    poster: '/images/fallback/no-poster.jpg',
    backdrop: '/images/fallback/generic-cinema.jpg',
    rating: null,
    synopsis: 'Synopsis temporarily unavailable',
  },

  retryConfig: {
    attempts: 3,
    delay: 1000,
    backoffFactor: 2,
  },

  async withRetry<T>(apiCall: () => Promise<T>, retries = 3): Promise<T> {
    for (let i = 0; i < retries; i++) {
      try {
        return await apiCall()
      } catch (error) {
        console.warn(`API call failed (attempt ${i + 1}/${retries}):`, error)
        if (i === retries - 1) throw error
        await new Promise((resolve) =>
          setTimeout(
            resolve,
            this.retryConfig.delay * Math.pow(this.retryConfig.backoffFactor, i)
          )
        )
      }
    }
    throw new Error('All retry attempts failed')
  },

  getFallbackImage(type: 'poster' | 'backdrop'): string {
    return this.fallbacks[type]
  },

  getFallbackRating(): number | null {
    return this.fallbacks.rating
  },

  getFallbackSynopsis(): string {
    return this.fallbacks.synopsis
  },
}

export const sanityErrorHandler = {
  fallbacks: {
    films: [],
    events: [],
    venues: [
      {
        name: 'Main Theater',
        slug: 'main-theater',
        address: 'St. Augustine, FL',
      },
    ],
  },

  errorMessages: {
    general: 'Content temporarily unavailable. Please try again.',
    films: 'Film listings are being updated. Check back soon.',
    events: 'Event information is currently being refreshed.',
    venues: 'Venue information is being updated.',
  },

  getFallbackData(type: keyof typeof this.fallbacks): any[] {
    return this.fallbacks[type] || []
  },

  getErrorMessage(type: keyof typeof this.errorMessages): string {
    return this.errorMessages[type] || this.errorMessages.general
  },
}

// Generic error handler for component-level errors
export const componentErrorHandler = {
  getErrorMessage(error: any): string {
    if (error?.message) {
      return error.message
    }
    if (typeof error === 'string') {
      return error
    }
    return 'Something went wrong. Please try again.'
  },

  logError(error: any, context: string): void {
    console.error(`Error in ${context}:`, error)
    // In production, this would send to error monitoring service
  },
}
