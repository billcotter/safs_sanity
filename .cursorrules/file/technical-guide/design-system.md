---
title: Design System Specifications
description: Complete visual design system for St. Augustine Film Society website
version: 1.0
created: 2025-01-01
updated: 2025-01-01
author: Design Team
tags: [design-system, colors, typography, components, accessibility]
---

# St. Augustine Film Society - Design System

## Color Palette & Implementation

### Primary Brand Colors

```css
:root {
  --color-sandstone: #f4e4bc; /* Main background and light text */
  --color-terracotta: #e07a5f; /* Hero sections and accent elements */
  --color-ocean-blue: #3d5a80; /* Featured films section and icons */
  --color-ochre: #f2cc8f; /* Star ratings, awards, highlights */
  --color-charcoal: #2d3436; /* Text content and dark sections */
}
```

### Usage Guidelines

- **Sandstone**: Primary backgrounds, light text on dark backgrounds
- **Terracotta**: Call-to-action buttons, hover states, hero accents
- **Ocean Blue**: Navigation elements, icons, featured content sections
- **Ochre**: Star ratings, awards, special highlights, success states
- **Charcoal**: Body text, headings, dark content areas

## Typography Hierarchy

### Headings

```css
h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--color-charcoal);
} /* 56px - Page titles */
h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-charcoal);
} /* 40px - Section titles */
h3 {
  font-size: 1.875rem;
  font-weight: semibold;
  color: var(--color-charcoal);
} /* 30px - Card titles */
h4 {
  font-size: 1.5rem;
  font-weight: semibold;
  color: var(--color-charcoal);
} /* 24px - Subsections */
h5 {
  font-size: 1.25rem;
  font-weight: medium;
  color: var(--color-charcoal);
} /* 20px - Minor headings */
```

### Body Text

```css
.text-body {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-charcoal);
} /* 16px - Standard body */
.text-small {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-charcoal/80);
} /* 14px - Metadata */
.text-caption {
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--color-charcoal/70);
} /* 12px - Captions */
```

## Icon System (Lucide React Only)

### Navigation Icons

- **Play**: Video/film playback actions
- **Heart**: Favorites, liked content
- **Ticket**: Ticketing, purchases
- **Users**: Community, membership

### Content Icons

- **Film**: Movie-related actions
- **Star**: Ratings, reviews (use Ochre color)
- **Camera**: Photography, behind-the-scenes
- **BookOpen**: Information, details
- **Award**: Achievements, highlights

### Contact & Social Icons

- **MapPin**: Location, venues
- **Phone**: Contact information
- **Mail**: Email communications
- **Home**: Homepage navigation
- **Facebook, Twitter, Instagram**: Social media links

## Component Specifications

### Medium Film Cards

**Dimensions**: 320px × 450px
**Background**: Sandstone with subtle shadow
**Hover Effect**: translateY(-4px) with shadow increase

#### Card Structure

```
┌─────────────────────────┐
│     Poster Image        │  ← 2:3 aspect ratio
│    (240px height)       │
├─────────────────────────┤
│ Title (18px, bold)      │  ← Charcoal color
│ Genre Tags + Rating     │  ← Ocean Blue badges, Ochre stars
│ Runtime | Year | MPAA   │  ← 12px metadata
│                         │
│ Brief synopsis...       │  ← 14px, line-clamp-3
│                         │
│ [Film Details] [Action] │  ← Terracotta + Ocean Blue buttons
└─────────────────────────┘
```

#### Button Combinations

- **Now Playing Cards**: "Film Details" + "Purchase Tickets"
- **Archive Cards**: "Film Details" + "Film Event"

### Button Styles

```css
/* Primary Button (Terracotta) */
.btn-primary {
  background: var(--color-terracotta);
  color: var(--color-sandstone);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 200ms ease;
}

.btn-primary:hover {
  background: var(--color-terracotta-hover);
  transform: translateY(-1px);
}

/* Secondary Button (Ocean Blue) */
.btn-secondary {
  background: transparent;
  color: var(--color-ocean-blue);
  border: 2px solid var(--color-ocean-blue);
  padding: 10px 22px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 200ms ease;
}

.btn-secondary:hover {
  background: var(--color-ocean-blue);
  color: var(--color-sandstone);
}
```

### Badge Components

```css
.badge-genre {
  background: var(--color-ocean-blue);
  color: var(--color-sandstone);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.badge-rating {
  background: var(--color-ochre);
  color: var(--color-charcoal);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
```

## Responsive Design Specifications

### Breakpoints

- **Mobile**: < 768px (1-2 cards per row)
- **Tablet**: 768px - 1023px (2-3 cards per row)
- **Desktop**: ≥ 1024px (3-4 cards per row)

### Card Grid Layout

```css
.card-grid {
  display: grid;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Interactive States

### Hover Effects

- **Cards**: Lift effect with shadow enhancement
- **Buttons**: Color transitions with subtle lift
- **Images**: Gentle scale (1.05x) with overlay
- **Links**: Color transition to hover variant

### Focus States

```css
.focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Loading States

- **Skeleton Cards**: Gray gradient pulse animation
- **Image Loading**: Blur-to-clear transition
- **Button Loading**: Spinner with disabled state

## Accessibility Requirements

### Color Contrast

- **Primary Text**: 4.5:1 minimum ratio
- **Secondary Text**: 3:1 minimum ratio
- **Interactive Elements**: 3:1 minimum ratio

### Focus Management

- Visible focus indicators on all interactive elements
- Logical tab order through card content
- Skip links for keyboard navigation

### Screen Reader Support

```html
<!-- Example card accessibility -->
<article role="article" aria-labelledby="film-title-123">
  <h3 id="film-title-123">Film Title</h3>
  <div aria-label="Film rating: 4 out of 5 stars">
    <span aria-hidden="true">★★★★☆</span>
  </div>
  <p aria-label="Runtime: 120 minutes, Genre: Drama">120 min | Drama</p>
  <button aria-describedby="film-title-123">View Film Details</button>
</article>
```

## Animation Guidelines

### Transition Timing

- **Hover Effects**: 200ms ease
- **Focus States**: 150ms ease
- **Page Transitions**: 300ms ease-in-out
- **Loading States**: 1.5s ease-in-out infinite

### Transform Effects

```css
/* Card hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(45, 52, 54, 0.15);
}

/* Button hover */
.button:hover {
  transform: translateY(-1px);
}

/* Image hover */
.image:hover {
  transform: scale(1.05);
}
```

## Error States & Fallbacks

### Missing Images

- **Fallback Posters**: `/images/fallback/no-poster.jpg`
- **Alt Text**: Descriptive, not "image" or "poster"
- **Error Handling**: Graceful degradation with retry logic

### Loading Failures

- **Error Messages**: User-friendly, non-technical
- **Retry Options**: Visual retry buttons when appropriate
- **Graceful Degradation**: Show available content, hide failed sections

## Implementation Checklist

### Every Card Component Must Include:

- [ ] Proper aspect ratio maintenance (2:3 for posters)
- [ ] Hover effects with smooth transitions
- [ ] Focus indicators for accessibility
- [ ] Loading skeleton while data fetches
- [ ] Error handling with fallback images
- [ ] Screen reader support with ARIA labels
- [ ] Responsive behavior across all breakpoints
- [ ] Consistent button styling and interactions

### Every Page Must Include:

- [ ] Consistent color usage throughout
- [ ] Proper typography hierarchy
- [ ] Accessible navigation and focus management
- [ ] Loading states for async content
- [ ] Error boundaries for component failures
- [ ] Responsive design across all devices
- [ ] Proper icon usage with semantic meaning
