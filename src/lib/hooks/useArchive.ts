import { useQuery } from '@tanstack/react-query'
import { ArchiveSearchParams, ArchiveResponse } from '@/lib/schemas/archive'

interface UseArchiveOptions {
  searchParams: ArchiveSearchParams
  enabled?: boolean
}

export function useArchive({ searchParams, enabled = true }: UseArchiveOptions) {
  return useQuery({
    queryKey: ['archive', searchParams],
    queryFn: async (): Promise<ArchiveResponse> => {
      const params = new URLSearchParams()
      
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, String(value))
        }
      })

      const response = await fetch(`/api/archive?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch archive data')
      }

      return response.json()
    },
    enabled,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
} 