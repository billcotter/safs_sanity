---
title: Technical Implementation Guide
description: Complete technical specifications for St. Augustine Film Society website
version: 1.0
created: 2025-01-01
updated: 2025-01-01
author: Development Team
tags: [nextjs, react, technical, implementation, cursor-ai]
---

# St. Augustine Film Society - Technical Implementation Guide

> **For Cursor AI Development**  
> This document provides complete technical specifications for implementing the St. Augustine Film Society website with robust error handling, performance optimization, and accessibility compliance.

## Technology Stack

- **Framework**: NextJS 15
- **CMS**: Sanity
- **API**: TMDB (The Movie Database)
- **Database**: Supabase
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Color System (CSS Custom Properties)

```css
:root {
  /* Primary Brand Colors */
  --color-sandstone: #f4e4bc;
  --color-terracotta: #e07a5f;
  --color-ocean-blue: #3d5a80;
  --color-ochre: #f2cc8f;
  --color-charcoal: #2d3436;

  /* Semantic State Colors */
  --color-error: #c0392b;
  --color-success: #27ae60;
  --color-warning: #f39c12;
  --color-info: var(--color-ocean-blue);

  /* Interactive States */
  --color-terracotta-hover: #d66a4a;
  --color-ocean-blue-hover: #2e4a6b;
  --color-sandstone-hover: #f0deb0;

  /* Neutral System */
  --color-gray-100: #f8f9fa;
  --color-gray-200: #e9ecef;
  --color-gray-300: #dee2e6;
  --color-gray-400: #ced4da;
  --color-gray-500: #adb5bd;
  --color-gray-600: #6c757d;

  /* Accessibility */
  --color-focus: #4c8ef7;
  --color-disabled: var(--color-gray-400);
}
```

## Universal Breadcrumb System

### Implementation Requirements

- **Position**: Between navigation and page banner (sticky top-[80px])
- **Height**: 48px fixed
- **Background**: Sandstone with subtle border
- **Typography**: 14px Charcoal

### Breadcrumb Component Template

```jsx
// components/Breadcrumb.jsx
import { Home, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Breadcrumb({ breadcrumbs = [] }) {
  if (breadcrumbs.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-sandstone border-b border-gray-200 px-4 py-3 sticky top-[80px] z-40"
    >
      <ol className="flex items-center space-x-2 max-w-6xl mx-auto">
        <li>
          <Link
            href="/"
            className="text-ocean-blue hover:text-ocean-blue-hover transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href || index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-charcoal font-medium" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-ocean-blue hover:text-ocean-blue-hover transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

### Breadcrumb Patterns by Page

```javascript
// utils/breadcrumbs.js
export const getBreadcrumbs = (pathname, params = {}) => {
  const patterns = {
    '/': [],
    '/now-playing': [{ label: 'Now Playing', href: '/now-playing' }],
    '/archive': [{ label: 'Archive', href: '/archive' }],
    '/films/[slug]': [
      {
        label: params.isArchive ? 'Archive' : 'Now Playing',
        href: params.isArchive ? '/archive' : '/now-playing',
      },
      { label: params.filmTitle },
    ],
    '/events/[id]': [
      { label: 'Archive', href: '/archive' },
      { label: params.filmTitle, href: `/films/${params.filmSlug}` },
      { label: params.eventDate },
    ],
    '/about': [{ label: 'About', href: '/about' }],
    '/venues': [{ label: 'Venues', href: '/venues' }],
    '/venues/[slug]': [
      { label: 'Venues', href: '/venues' },
      { label: params.venueName },
    ],
    '/membership': [{ label: 'Membership', href: '/membership' }],
    '/sponsorship': [{ label: 'Sponsorship', href: '/sponsorship' }],
    '/search': [
      { label: 'Search', href: '/search' },
      { label: `"${params.query}"` },
    ],
  }

  return patterns[pathname] || []
}
```

## Error Handling & Fallback System

### API Failure Handlers

```javascript
// utils/apiHandlers.js
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

  async withRetry(apiCall, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        return await apiCall()
      } catch (error) {
        if (i === retries - 1) throw error
        await new Promise((resolve) =>
          setTimeout(resolve, this.retryConfig.delay * (i + 1))
        )
      }
    }
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
  },
}
```

### Loading Skeleton Components

```jsx
// components/skeletons/CardSkeleton.jsx
export function CardSkeleton() {
  return (
    <div className="w-80 h-[450px] bg-gray-100 rounded-lg animate-pulse">
      <div className="h-64 bg-gray-200 rounded-t-lg" />
      <div className="p-4 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="flex space-x-2 mt-4">
          <div className="h-10 bg-gray-200 rounded flex-1" />
          <div className="h-10 bg-gray-200 rounded flex-1" />
        </div>
      </div>
    </div>
  )
}

// components/skeletons/BannerSkeleton.jsx
export function BannerSkeleton() {
  return (
    <div className="h-[60vh] bg-gray-200 animate-pulse relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300/60 to-gray-300/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-12 bg-gray-300 rounded w-64 mx-auto" />
          <div className="h-6 bg-gray-300 rounded w-96 mx-auto" />
          <div className="flex space-x-4 justify-center mt-6">
            <div className="h-12 bg-gray-300 rounded w-32" />
            <div className="h-12 bg-gray-300 rounded w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Performance Configuration

### Next.js Configuration

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'cdn.sanity.io'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400, // 24 hours
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'recharts'],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Caching Strategy

```javascript
// lib/cache.js
export const cacheConfig = {
  tmdb: {
    filmDetails: 3600000, // 1 hour
    searchResults: 1800000, // 30 minutes
    popularFilms: 21600000, // 6 hours
  },

  sanity: {
    staticContent: 86400000, // 24 hours
    events: 3600000, // 1 hour
    nowPlaying: 1800000, // 30 minutes
  },

  images: {
    posters: 604800000, // 7 days
    staugustine: 2592000000, // 30 days
  },
}

// Simple memory cache implementation
class MemoryCache {
  constructor() {
    this.cache = new Map()
  }

  set(key, value, ttl) {
    const expiresAt = Date.now() + ttl
    this.cache.set(key, { value, expiresAt })
  }

  get(key) {
    const item = this.cache.get(key)
    if (!item) return null

    if (Date.now() > item.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }
}

export const cache = new MemoryCache()
```

## Robust Film Card Component

```jsx
// components/FilmCard.jsx
import { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Star, Film, Ticket, Camera } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CardSkeleton } from '@/components/skeletons/CardSkeleton'
import { cn } from '@/lib/utils'

export default function FilmCard({
  film,
  type = 'nowPlaying',
  isLoading = false,
  className,
}) {
  const [imageError, setImageError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  if (isLoading) return <CardSkeleton />

  const handleImageError = () => {
    if (retryCount < 2) {
      setRetryCount((prev) => prev + 1)
      // Retry after delay
      setTimeout(() => setImageError(false), 1000)
    } else {
      setImageError(true)
    }
  }

  const posterSrc = imageError
    ? '/images/fallback/no-poster.jpg'
    : film.posterUrl || '/images/fallback/no-poster.jpg'

  const isArchive = type === 'archive'

  return (
    <Card
      className={cn(
        'w-80 h-[450px] bg-sandstone shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group',
        className
      )}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <AspectRatio ratio={2 / 3}>
          <Image
            src={posterSrc}
            alt={`${film.title || 'Unknown Film'} poster`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={handleImageError}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
          />
        </AspectRatio>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />

        {/* Archive Badge */}
        {isArchive && (
          <div className="absolute top-2 right-2 bg-charcoal/80 text-sandstone px-2 py-1 rounded text-xs">
            Archive
          </div>
        )}
      </CardHeader>

      <CardContent className="p-4 space-y-3 flex-1">
        <h3 className="text-lg font-bold text-charcoal line-clamp-2 min-h-[3.5rem]">
          {film.title || 'Title Unavailable'}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          {film.genres?.slice(0, 2).map((genre, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-ocean-blue text-sandstone text-xs"
            >
              {genre}
            </Badge>
          ))}

          {film.rating && (
            <div className="flex items-center text-ochre ml-auto">
              <Star className="w-4 h-4 fill-current" />
              <span className="ml-1 text-sm font-medium">{film.rating}</span>
            </div>
          )}
        </div>

        <div className="text-xs text-charcoal/70 space-x-3">
          {film.runtime && <span>{film.runtime} min</span>}
          {film.year && <span>{film.year}</span>}
          {film.mpaaRating && <span>{film.mpaaRating}</span>}
        </div>

        <p className="text-sm text-charcoal/80 line-clamp-3 min-h-[4.5rem]">
          {film.synopsis || 'Synopsis not available at this time.'}
        </p>

        {/* Screen Reader Content */}
        <span className="sr-only">
          {film.rating && `Film rating: ${film.rating} out of 5 stars.`}
          {film.runtime && ` Runtime: ${film.runtime} minutes.`}
          {film.genres && ` Genres: ${film.genres.join(', ')}.`}
        </span>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button
          variant="default"
          size="sm"
          className="bg-terracotta hover:bg-terracotta-hover text-sandstone flex-1 focus:ring-2 focus:ring-terracotta focus:ring-offset-2"
          asChild
        >
          <Link href={`/films/${film.slug}`}>
            <Film className="w-4 h-4 mr-2" />
            Film Details
          </Link>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-sandstone flex-1 focus:ring-2 focus:ring-ocean-blue focus:ring-offset-2"
          asChild
          disabled={isArchive && !film.hasEvent}
        >
          <Link
            href={isArchive ? `/events/${film.eventId}` : `/tickets/${film.id}`}
          >
            {isArchive ? (
              <>
                <Camera className="w-4 h-4 mr-2" />
                Film Event
              </>
            ) : (
              <>
                <Ticket className="w-4 h-4 mr-2" />
                Purchase Tickets
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
```

## Enhanced Page Banner Component

```jsx
// components/PageBanner.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BannerSkeleton } from '@/components/skeletons/BannerSkeleton'
import { cn } from '@/lib/utils'

export default function PageBanner({
  pageType,
  title,
  subtitle,
  ctaButtons = [],
  customBackground = null,
  className,
}) {
  const [backgroundImage, setBackgroundImage] = useState(null)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    loadBackgroundImage()
  }, [pageType, customBackground])

  const loadBackgroundImage = async () => {
    try {
      setImageLoading(true)
      let imageSrc

      switch (pageType) {
        case 'now-playing':
          imageSrc = await getFeaturedFilmBackdrop()
          break
        case 'archive':
          imageSrc = await getLastFilmStill()
          break
        default:
          imageSrc = customBackground || getStAugustineImage(pageType)
      }

      // Preload image to verify it exists
      const img = new Image()
      img.onload = () => {
        setBackgroundImage(imageSrc)
        setImageError(false)
        setImageLoading(false)
      }
      img.onerror = () => {
        setBackgroundImage(getDefaultBackground(pageType))
        setImageError(true)
        setImageLoading(false)
      }
      img.src = imageSrc
    } catch (error) {
      console.error('Banner image loading failed:', error)
      setBackgroundImage(getDefaultBackground(pageType))
      setImageError(true)
      setImageLoading(false)
    }
  }

  if (imageLoading) return <BannerSkeleton />

  return (
    <section
      className={cn('relative h-[60vh] w-full overflow-hidden', className)}
    >
      {/* Background Image with Error Handling */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${title} banner background`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          onError={() => setImageError(true)}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/30" />

        {/* Error State Overlay */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-blue/80 to-charcoal/80" />
        )}
      </div>

      {/* Banner Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sandstone drop-shadow-lg">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg md:text-xl text-sandstone/90 max-w-2xl mx-auto drop-shadow-md">
              {subtitle}
            </p>
          )}

          {/* Error Message for Failed Dynamic Content */}
          {imageError &&
            (pageType === 'now-playing' || pageType === 'archive') && (
              <p className="text-sm text-sandstone/70 italic">
                {pageType === 'now-playing'
                  ? 'Featured film image unavailable'
                  : 'Archive image unavailable'}
              </p>
            )}

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'default'}
                  size="lg"
                  className={cn(
                    'min-w-[140px] shadow-lg transition-all duration-200',
                    button.variant === 'default'
                      ? 'bg-terracotta hover:bg-terracotta-hover text-sandstone focus:ring-2 focus:ring-terracotta focus:ring-offset-2'
                      : 'bg-transparent border-2 border-sandstone text-sandstone hover:bg-sandstone hover:text-charcoal focus:ring-2 focus:ring-sandstone focus:ring-offset-2',
                    button.className
                  )}
                  asChild
                >
                  <Link href={button.href}>
                    {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                    {button.text}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
```

## St. Augustine Image Management

```javascript
// lib/staugustineImages.js
export const staugustineImageCategories = {
  about: [
    '/images/staugustine/about/historic-district.jpg',
    '/images/staugustine/about/cultural-heritage.jpg',
    '/images/staugustine/about/community-gathering.jpg',
  ],
  venues: [
    '/images/staugustine/venues/historic-theater.jpg',
    '/images/staugustine/venues/cultural-center.jpg',
    '/images/staugustine/venues/outdoor-screening.jpg',
  ],
  membership: [
    '/images/staugustine/community/film-enthusiasts.jpg',
    '/images/staugustine/community/social-events.jpg',
    '/images/staugustine/community/member-benefits.jpg',
  ],
  sponsorship: [
    '/images/staugustine/business/cultural-district.jpg',
    '/images/staugustine/business/partnership.jpg',
    '/images/staugustine/business/community-support.jpg',
  ],
  default: [
    '/images/staugustine/general/lighthouse.jpg',
    '/images/staugustine/general/castle.jpg',
    '/images/staugustine/general/streets.jpg',
  ],
}

export function getStAugustineImage(category = 'default', specific = null) {
  if (specific && imageExists(specific)) return specific

  const images =
    staugustineImageCategories[category] || staugustineImageCategories.default
  return images[Math.floor(Math.random() * images.length)]
}

export function getDefaultBackground(pageType) {
  const defaults = {
    'now-playing': '/images/fallback/cinema-backdrop.jpg',
    archive: '/images/fallback/film-archive.jpg',
    about: '/images/staugustine/general/lighthouse.jpg',
    venues: '/images/staugustine/general/castle.jpg',
    membership: '/images/staugustine/general/streets.jpg',
    sponsorship: '/images/staugustine/general/lighthouse.jpg',
  }

  return defaults[pageType] || '/images/staugustine/general/lighthouse.jpg'
}

async function imageExists(src) {
  try {
    const response = await fetch(src, { method: 'HEAD' })
    return response.ok
  } catch {
    return false
  }
}
```

## Accessibility Implementation

### Focus Management Styles

```css
/* globals.css */
.focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-charcoal);
  color: var(--color-sandstone);
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 1000;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Screen Reader Components

```jsx
// components/accessibility/ScreenReaderOnly.jsx
export function ScreenReaderOnly({ children }) {
  return <span className="sr-only">{children}</span>
}

// components/accessibility/SkipLink.jsx
export function SkipLink({
  href = '#main-content',
  children = 'Skip to content',
}) {
  return (
    <a href={href} className="skip-link">
      {children}
    </a>
  )
}
```

## Security Implementation

### Secure API Client

```javascript
// lib/secureApiClient.js
export class SecureApiClient {
  constructor(baseURL, apiKey) {
    this.baseURL = baseURL
    this.apiKey = apiKey
    this.timeout = 10000
    this.retries = 3
  }

  async request(endpoint, options = {}) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }

      return response.json()
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

// Initialize TMDB client (server-side only)
export const tmdbClient = new SecureApiClient(
  'https://api.themoviedb.org/3',
  process.env.TMDB_API_KEY
)
```

## Critical Implementation Rules

### Error Boundaries

- Wrap all async components in error boundaries
- Provide meaningful fallback UI for all error states
- Log errors to monitoring service (not console in production)

### Performance Requirements

- All images must use Next.js Image component with proper sizing
- Implement lazy loading for all non-critical content
- Use React.memo for expensive re-renders
- Implement proper caching strategies for API calls

### Accessibility Requirements

- All interactive elements must have focus indicators
- All images must have meaningful alt text
- All forms must have proper labels and validation
- Maintain proper heading hierarchy (h1 > h2 > h3...)

### Security Requirements

- Never expose API keys in client-side code
- Sanitize all user inputs
- Implement proper CORS headers
- Use HTTPS for all external requests

### Testing Requirements

- Unit tests for all utility functions
- Integration tests for API error handling
- Accessibility testing with screen readers
- Performance testing for page load times

## File Structure Organization

```
components/
├── accessibility/
│   ├── ScreenReaderOnly.jsx
│   └── SkipLink.jsx
├── skeletons/
│   ├── CardSkeleton.jsx
│   └── BannerSkeleton.jsx
├── Breadcrumb.jsx
├── FilmCard.jsx
└── PageBanner.jsx

lib/
├── cache.js
├── secureApiClient.js
└── staugustineImages.js

utils/
├── apiHandlers.js
└── breadcrumbs.js

styles/
└── globals.css
```

This technical implementation guide provides all necessary code examples, configurations, and requirements for building a robust, accessible, and performant St. Augustine Film Society website.
