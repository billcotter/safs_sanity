// Banner image management for SAFS pages
export interface BannerImageConfig {
  src: string
  alt: string
  fallback?: string
}

// St. Augustine image collection
const stAugustineImages = [
  '/images/staugustine/historic-district.jpg',
  '/images/staugustine/castillo-de-san-marcos.jpg',
  '/images/staugustine/flagler-college.jpg',
  '/images/staugustine/lighthouse.jpg',
  '/images/staugustine/narrow-streets.jpg',
  '/images/staugustine/plaza-mayor.jpg',
  '/images/staugustine/fort-street.jpg',
  '/images/staugustine/bridge-of-lions.jpg',
]

// Page-specific banner configurations
export const pageBannerConfigs = {
  'now-playing': {
    title: 'Now Playing',
    subtitle: "Experience Cinema at St. Augustine's Premier Film Society",
    ctaButtons: [
      {
        text: 'View Films',
        href: '/films',
        variant: 'primary' as const,
      },
      {
        text: 'Purchase Tickets',
        href: '/tickets',
        variant: 'secondary' as const,
      },
    ],
    // Will be dynamically set based on featured film
    getBackgroundImage: async () => {
      // TODO: Implement TMDB API integration for featured film backdrop
      return {
        src: '/images/staugustine/cinema-hero.jpg',
        alt: 'St. Augustine Film Society Cinema Experience',
      }
    },
  },
  archive: {
    title: 'Film Archive',
    subtitle: 'Celebrating Our Cinematic Journey Through St. Augustine',
    ctaButtons: [
      {
        text: 'Browse Archive',
        href: '/archive',
        variant: 'primary' as const,
      },
      {
        text: 'View Events',
        href: '/events',
        variant: 'secondary' as const,
      },
    ],
    getBackgroundImage: async () => {
      // TODO: Implement Sanity query for most recent archived film
      return {
        src: '/images/staugustine/archive-hero.jpg',
        alt: 'Film Archive - St. Augustine Film Society',
      }
    },
  },
  about: {
    title: 'About Our Society',
    subtitle: "Bringing Cinematic Excellence to America's Oldest City",
    ctaButtons: [
      {
        text: 'Our Mission',
        href: '/about#mission',
        variant: 'primary' as const,
      },
      {
        text: 'Join Us',
        href: '/membership',
        variant: 'secondary' as const,
      },
    ],
    getBackgroundImage: async () => {
      return {
        src: '/images/staugustine/about-hero.jpg',
        alt: 'St. Augustine Film Society - About Our Community',
        fallback:
          stAugustineImages[
            Math.floor(Math.random() * stAugustineImages.length)
          ],
      }
    },
  },
  venues: {
    title: 'Our Venues',
    subtitle: 'Historic Settings for Contemporary Cinema',
    ctaButtons: [
      {
        text: 'View Locations',
        href: '/venues',
        variant: 'primary' as const,
      },
      {
        text: 'Plan Your Visit',
        href: '/venues#planning',
        variant: 'secondary' as const,
      },
    ],
    getBackgroundImage: async () => {
      return {
        src: '/images/staugustine/venues-hero.jpg',
        alt: 'St. Augustine Film Society Venues',
        fallback:
          stAugustineImages[
            Math.floor(Math.random() * stAugustineImages.length)
          ],
      }
    },
  },
  membership: {
    title: 'Join Our Community',
    subtitle: "Become Part of St. Augustine's Film Society Family",
    ctaButtons: [
      {
        text: 'View Plans',
        href: '/membership#plans',
        variant: 'primary' as const,
      },
      {
        text: 'Sign Up Today',
        href: '/membership#signup',
        variant: 'secondary' as const,
      },
    ],
    getBackgroundImage: async () => {
      return {
        src: '/images/staugustine/membership-hero.jpg',
        alt: 'Join St. Augustine Film Society Community',
        fallback:
          stAugustineImages[
            Math.floor(Math.random() * stAugustineImages.length)
          ],
      }
    },
  },
  sponsorship: {
    title: 'Partner With Us',
    subtitle: 'Support Cinema Culture in Historic St. Augustine',
    ctaButtons: [
      {
        text: 'Sponsor Packages',
        href: '/sponsorship#packages',
        variant: 'primary' as const,
      },
      {
        text: 'Contact Us',
        href: '/sponsorship#contact',
        variant: 'secondary' as const,
      },
    ],
    getBackgroundImage: async () => {
      return {
        src: '/images/staugustine/sponsorship-hero.jpg',
        alt: 'Partner with St. Augustine Film Society',
        fallback:
          stAugustineImages[
            Math.floor(Math.random() * stAugustineImages.length)
          ],
      }
    },
  },
}

export type PageType = keyof typeof pageBannerConfigs

export function getPageBannerConfig(pageType: PageType) {
  return pageBannerConfigs[pageType]
}

export function getRandomStAugustineImage(
  category: string = 'general'
): BannerImageConfig {
  const image =
    stAugustineImages[Math.floor(Math.random() * stAugustineImages.length)]
  return {
    src: image,
    alt: `St. Augustine ${category} - Historic City Scene`,
  }
}

// Fallback image for any missing banner images
export const fallbackBannerImage: BannerImageConfig = {
  src: '/images/staugustine/historic-district.jpg',
  alt: 'St. Augustine Historic District',
}
