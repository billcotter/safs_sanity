import { useQuery } from '@tanstack/react-query'

interface PeopleSearchParams {
  page: number
  limit: number
  search?: string
  sortBy: 'name' | 'birthDate' | 'roles'
  sortOrder: 'asc' | 'desc'
  role?: string
}

interface Person {
  _id: string
  name: string
  slug: { current: string }
  profileImage?: any
  birthDate?: string
  deathDate?: string
  birthPlace?: string
  nationality?: string
  roles?: string[]
  awards?: any[]
  featuredWork?: {
    title: string
    slug: { current: string }
  }
}

interface PeopleResponse {
  people: Person[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

interface UsePeopleOptions {
  searchParams: PeopleSearchParams
  enabled?: boolean
}

export function usePeople({ searchParams, enabled = true }: UsePeopleOptions) {
  return useQuery({
    queryKey: ['people', searchParams],
    queryFn: async (): Promise<PeopleResponse> => {
      const params = new URLSearchParams()

      Object.entries(searchParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value))
        }
      })

      const response = await fetch(`/api/people?${params.toString()}`)

      if (!response.ok) {
        throw new Error('Failed to fetch people data')
      }

      return response.json()
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}
