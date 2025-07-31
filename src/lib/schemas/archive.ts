import { z } from 'zod'

export const ArchiveSearchParamsSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(12),
  search: z.string().optional(),
  sortBy: z.enum(['datetime', 'title', 'venue', 'attendance']).default('datetime'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  year: z.coerce.number().optional(),
  venue: z.string().optional(),
})

export const PastScreeningSchema = z.object({
  _id: z.string(),
  film: z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.object({
      current: z.string(),
    }),
    poster: z.any().optional(),
    tmdbId: z.number().optional(),
    synopsis: z.string().optional(),
    releaseYear: z.number().optional(),
    runtime: z.number().optional(),
    genres: z.array(z.string()).optional(),
    rating: z.string().optional(),
    imdbRating: z.number().optional(),
    directors: z.array(z.object({
      _id: z.string(),
      name: z.string(),
      slug: z.object({
        current: z.string(),
      }).optional(),
      profileImage: z.any().optional(),
    })).optional(),
    actors: z.array(z.object({
      _id: z.string(),
      name: z.string(),
      slug: z.object({
        current: z.string(),
      }).optional(),
      profileImage: z.any().optional(),
    })).optional(),
    writers: z.array(z.object({
      _id: z.string(),
      name: z.string(),
      slug: z.object({
        current: z.string(),
      }).optional(),
    })).optional(),
  }),
  datetime: z.string(),
  venue: z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.object({
      current: z.string(),
    }).optional(),
    address: z.string().optional(),
    capacity: z.number().optional(),
    heroImage: z.any().optional(),
  }),
  attendance: z.number().optional(),
  actualAttendance: z.number().optional(),
  capacity: z.number().optional(),
  eventPhotos: z.array(z.object({
    asset: z.any(),
    caption: z.string().optional(),
    photographer: z.string().optional(),
  })).optional(),
  eventNotes: z.array(z.any()).optional(),
  discussionHighlights: z.array(z.string()).optional(),
  guestFeedback: z.string().optional(),
  specialGuests: z.array(z.object({
    _id: z.string(),
    name: z.string(),
    slug: z.object({
      current: z.string(),
    }).optional(),
    profileImage: z.any().optional(),
    roles: z.array(z.string()).optional(),
  })).optional(),
  guestAppearanceType: z.string().optional(),
  specialNotes: z.array(z.any()).optional(),
  tmdbData: z.any().optional(),
})

export const ArchiveResponseSchema = z.object({
  screenings: z.array(PastScreeningSchema),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
  filters: z.object({
    availableYears: z.array(z.number()),
    availableVenues: z.array(z.string()),
  }),
})

export type ArchiveSearchParams = z.infer<typeof ArchiveSearchParamsSchema>
export type PastScreening = z.infer<typeof PastScreeningSchema>
export type ArchiveResponse = z.infer<typeof ArchiveResponseSchema> 