// St. Augustine image management for SAFS
export const staugustineImageCategories = {
  about: [
    '/images/staugustine/about/historic-district.jpg',
    '/images/staugustine/about/cultural-heritage.jpg',
    '/images/staugustine/about/community-gathering.jpg',
    '/images/staugustine/about/flagler-college.jpg',
    '/images/staugustine/about/lightner-museum.jpg',
  ],
  venues: [
    '/images/staugustine/venues/historic-theater.jpg',
    '/images/staugustine/venues/cultural-center.jpg',
    '/images/staugustine/venues/outdoor-screening.jpg',
    '/images/staugustine/venues/amphitheater.jpg',
    '/images/staugustine/venues/community-hall.jpg',
  ],
  membership: [
    '/images/staugustine/community/film-enthusiasts.jpg',
    '/images/staugustine/community/social-events.jpg',
    '/images/staugustine/community/member-benefits.jpg',
    '/images/staugustine/community/discussion-group.jpg',
    '/images/staugustine/community/film-festival.jpg',
  ],
  sponsorship: [
    '/images/staugustine/business/cultural-district.jpg',
    '/images/staugustine/business/partnership.jpg',
    '/images/staugustine/business/community-support.jpg',
    '/images/staugustine/business/local-businesses.jpg',
    '/images/staugustine/business/arts-community.jpg',
  ],
  default: [
    '/images/staugustine/general/lighthouse.jpg',
    '/images/staugustine/general/castle.jpg',
    '/images/staugustine/general/streets.jpg',
    '/images/staugustine/general/bridge-of-lions.jpg',
    '/images/staugustine/general/plaza-mayor.jpg',
  ],
}

export async function getStAugustineImage(
  category: keyof typeof staugustineImageCategories = 'default',
  specific?: string
): Promise<string> {
  if (specific) {
    const exists = await imageExists(specific)
    if (exists) return specific
  }

  const images =
    staugustineImageCategories[category] || staugustineImageCategories.default
  return images[Math.floor(Math.random() * images.length)]
}

export function getDefaultBackground(pageType: string): string {
  const defaults: Record<string, string> = {
    'now-playing': '/images/fallback/cinema-backdrop.jpg',
    archive: '/images/fallback/film-archive.jpg',
    about: '/images/staugustine/general/lighthouse.jpg',
    venues: '/images/staugustine/general/castle.jpg',
    membership: '/images/staugustine/general/streets.jpg',
    sponsorship: '/images/staugustine/general/lighthouse.jpg',
  }

  return defaults[pageType] || '/images/staugustine/general/lighthouse.jpg'
}

async function imageExists(src: string): Promise<boolean> {
  try {
    const response = await fetch(src, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}

// Fallback images for different content types
export const fallbackImages = {
  poster: '/images/fallback/no-poster.jpg',
  backdrop: '/images/fallback/generic-cinema.jpg',
  venue: '/images/fallback/venue-placeholder.jpg',
  person: '/images/fallback/person-placeholder.jpg',
  event: '/images/fallback/event-placeholder.jpg',
}

// Image optimization settings
export const imageSettings = {
  poster: {
    width: 320,
    height: 480,
    quality: 85,
  },
  backdrop: {
    width: 1920,
    height: 1080,
    quality: 80,
  },
  thumbnail: {
    width: 150,
    height: 225,
    quality: 75,
  },
}
