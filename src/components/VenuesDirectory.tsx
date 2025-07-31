'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useVenues } from '@/lib/hooks/useVenues'
import { urlForImage } from '@/sanity/lib/image'
import { Building, Calendar, Loader2, MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ArchivePagination } from './ArchivePagination'
import { ArchiveSearch } from './ArchiveSearch'
import { ArchiveSort } from './ArchiveSort'

export function VenuesDirectory() {
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 12,
    search: '',
    sortBy: 'name' as 'name' | 'established' | 'capacity',
    sortOrder: 'asc' as 'asc' | 'desc',
    venueType: '' as string,
  })

  const { data, isLoading, error } = useVenues({ searchParams })

  const handleSearchChange = (search: string) => {
    setSearchParams((prev) => ({ ...prev, search, page: 1 }))
  }

  const handleSortChange = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    setSearchParams((prev) => ({
      ...prev,
      sortBy: sortBy as any,
      sortOrder,
      page: 1,
    }))
  }

  const handleVenueTypeChange = (venueType: string) => {
    setSearchParams((prev) => ({ ...prev, venueType, page: 1 }))
  }

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => ({ ...prev, page }))
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-charcoal mb-2">
          Error loading venues
        </h3>
        <p className="text-charcoal/70">
          There was an error loading the venues data. Please try again.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Search and Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <div className="max-w-md">
          <ArchiveSearch
            value={searchParams.search || ''}
            onChange={handleSearchChange}
            placeholder="Search by venue name or location..."
          />
        </div>

        {/* Sort and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <ArchiveSort
            sortBy={searchParams.sortBy}
            sortOrder={searchParams.sortOrder}
            onSortChange={handleSortChange}
          />

          {/* Venue Type Filter */}
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={searchParams.venueType === '' ? 'secondary' : 'outline'}
              className="cursor-pointer"
              onClick={() => handleVenueTypeChange('')}
            >
              All Types
            </Badge>
            {[
              'historic-theater',
              'modern-cinema',
              'community-center',
              'outdoor-venue',
              'museum',
              'university',
            ].map((type) => (
              <Badge
                key={type}
                variant={
                  searchParams.venueType === type ? 'secondary' : 'outline'
                }
                className="cursor-pointer capitalize"
                onClick={() => handleVenueTypeChange(type)}
              >
                {type.replace('-', ' ')}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {data && (
          <div className="text-sm text-charcoal/70">
            Showing {(data.pagination.page - 1) * data.pagination.limit + 1} to{' '}
            {Math.min(
              data.pagination.page * data.pagination.limit,
              data.pagination.total
            )}{' '}
            of {data.pagination.total} venues
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-ocean-blue" />
          <span className="ml-2 text-charcoal">Loading venues...</span>
        </div>
      )}

      {/* Venues Grid */}
      {data && data.venues.length > 0 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.venues.map((venue: any) => (
              <Card
                key={venue._id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] relative">
                  <img
                    src={
                      venue.heroImage
                        ? urlForImage(venue.heroImage).url()
                        : '/placeholder-venue.jpg'
                    }
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-ocean-blue text-sandstone capitalize">
                      {venue.venueType?.replace('-', ' ') || 'Venue'}
                    </Badge>
                  </div>
                  {venue.established && (
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-charcoal text-white">
                        Est. {venue.established}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-2">
                    {venue.name}
                  </h3>
                  <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                    {venue.address && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">
                          {venue.address.street}, {venue.address.city}
                        </span>
                      </div>
                    )}
                    {venue.capacity && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{venue.capacity} seats</span>
                      </div>
                    )}
                    {venue.established && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Established {venue.established}</span>
                      </div>
                    )}
                    {venue.totalScreenings && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{venue.totalScreenings} screenings hosted</span>
                      </div>
                    )}
                  </div>
                  {venue.amenities && venue.amenities.length > 0 && (
                    <div className="flex gap-1 mb-3">
                      {venue.amenities.slice(0, 2).map((amenity: string) => (
                        <Badge
                          key={amenity}
                          variant="outline"
                          className="text-xs"
                        >
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <Link href={`/venues/${venue.slug.current}`}>
                        <Building className="h-3 w-3 mr-1" />
                        Details
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark text-sandstone font-semibold transition-colors duration-200"
                    >
                      <Link href={`/venues/${venue.slug.current}`}>
                        <Calendar className="h-3 w-3 mr-1" />
                        Screenings
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <ArchivePagination
            currentPage={data.pagination.page}
            totalPages={data.pagination.totalPages}
            onPageChange={handlePageChange}
            className="mt-8"
          />
        </div>
      )}

      {/* No Results */}
      {data && data.venues.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-charcoal mb-2">
            No venues found
          </h3>
          <p className="text-charcoal/70">
            Try adjusting your search terms or filters to find what you're
            looking for.
          </p>
        </div>
      )}
    </div>
  )
}
