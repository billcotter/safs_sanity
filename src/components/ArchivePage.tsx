'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useArchive } from '@/lib/hooks/useArchive'
import { ArchiveSearchParams } from '@/lib/schemas/archive'
import { Loader2 } from 'lucide-react'
import { useCallback, useState } from 'react'
import { ArchiveCard } from './ArchiveCard'
import { ArchiveSearch } from './ArchiveSearch'

export function ArchivePage() {
  const [searchParams, setSearchParams] = useState<ArchiveSearchParams>({
    page: 1,
    limit: 12,
    search: '',
    sortBy: 'datetime',
    sortOrder: 'desc',
  })

  const { data, isLoading, error } = useArchive({ searchParams })

  const handleSearchChange = useCallback((search: string) => {
    setSearchParams((prev) => ({ ...prev, search, page: 1 }))
  }, [])

  const handleSortChange = useCallback((value: string) => {
    setSearchParams((prev) => ({
      ...prev,
      sortBy: value as 'datetime' | 'title' | 'venue' | 'attendance',
      page: 1,
    }))
  }, [])

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-charcoal mb-2">
            Error loading archive
          </h3>
          <p className="text-charcoal/70">
            There was an error loading the archive data. Please try again.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Header */}
      <div className="mb-8 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-charcoal mb-4">
            Film Archive
          </h2>
          <p className="text-charcoal/70">
            Browse our past film screenings and events. Each card links to the
            full film detail page.
          </p>
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="max-w-md">
            <ArchiveSearch
              value={searchParams.search || ''}
              onChange={handleSearchChange}
              placeholder="Search films, directors, or venues..."
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-charcoal/70">Sort by:</span>
            <Select
              value={searchParams.sortBy}
              onValueChange={handleSortChange}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="datetime">Date</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="venue">Venue</SelectItem>
                <SelectItem value="attendance">Attendance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-ocean-blue" />
          <span className="ml-2 text-charcoal">Loading archive...</span>
        </div>
      )}

      {/* Films Grid */}
      {data && data.screenings.length > 0 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.screenings.map((screening) => (
              <ArchiveCard key={screening._id} screening={screening} />
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-sm text-charcoal/60">
            Showing {data.screenings.length} of {data.pagination.total} past
            screenings
          </div>
        </div>
      )}

      {/* No Results */}
      {data && data.screenings.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-charcoal mb-2">
            No past screenings found
          </h3>
          <p className="text-charcoal/70">
            {searchParams.search
              ? `No screenings match "${searchParams.search}"`
              : 'No past screenings are available in the archive yet.'}
          </p>
        </div>
      )}
    </div>
  )
}
