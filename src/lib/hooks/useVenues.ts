import { useQuery } from '@tanstack/react-query'

interface VenuesSearchParams {
  page: number
  limit: number
  search?: string
  sortBy: 'name' | 'established' | 'capacity'
  sortOrder: 'asc' | 'desc'
  venueType?: string
}

interface Venue {
  _id: string
  name: string
  slug: { current: string }
  heroImage?: any
  established?: number
  capacity?: number
  venueType?: string
  address?: {
    street: string
    city: string
    state: string
  }
  totalScreenings?: number
  amenities?: string[]
}

interface VenuesResponse {
  venues: Venue[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

interface UseVenuesOptions {
  searchParams: VenuesSearchParams
  enabled?: boolean
}

export function useVenues({ searchParams, enabled = true }: UseVenuesOptions) {
  return useQuery({
    queryKey: ['venues', searchParams],
    queryFn: async (): Promise<VenuesResponse> => {
      const params = new URLSearchParams()

      Object.entries(searchParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value))
        }
      })

      const response = await fetch(`/api/venues?${params.toString()}`)

      if (!response.ok) {
        throw new Error('Failed to fetch venues data')
      }

      return response.json()
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
