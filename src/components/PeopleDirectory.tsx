'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { usePeople } from '@/lib/hooks/usePeople'
import { urlForImage } from '@/sanity/lib/image'
import { Calendar, Film, Loader2, MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ArchivePagination } from './ArchivePagination'
import { ArchiveSearch } from './ArchiveSearch'
import { ArchiveSort } from './ArchiveSort'

export function PeopleDirectory() {
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 12,
    search: '',
    sortBy: 'name' as 'name' | 'birthDate' | 'roles',
    sortOrder: 'asc' as 'asc' | 'desc',
    role: '' as string,
  })

  const { data, isLoading, error } = usePeople({ searchParams })

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

  const handleRoleChange = (role: string) => {
    setSearchParams((prev) => ({ ...prev, role, page: 1 }))
  }

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => ({ ...prev, page }))
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-charcoal mb-2">
          Error loading people
        </h3>
        <p className="text-charcoal/70">
          There was an error loading the people data. Please try again.
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
            placeholder="Search by name, role, or nationality..."
          />
        </div>

        {/* Sort and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <ArchiveSort
            sortBy={searchParams.sortBy}
            sortOrder={searchParams.sortOrder}
            onSortChange={handleSortChange}
          />

          {/* Role Filter */}
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={searchParams.role === '' ? 'secondary' : 'outline'}
              className="cursor-pointer"
              onClick={() => handleRoleChange('')}
            >
              All Roles
            </Badge>
            {[
              'director',
              'actor',
              'writer',
              'producer',
              'cinematographer',
              'composer',
            ].map((role: string) => (
              <Badge
                key={role}
                variant={searchParams.role === role ? 'secondary' : 'outline'}
                className="cursor-pointer capitalize"
                onClick={() => handleRoleChange(role)}
              >
                {role}
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
            of {data.pagination.total} film professionals
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-ocean-blue" />
          <span className="ml-2 text-charcoal">Loading people...</span>
        </div>
      )}

      {/* People Grid */}
      {data && data.people.length > 0 && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.people.map((person: any) => (
              <Card
                key={person._id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={
                      person.profileImage
                        ? urlForImage(person.profileImage).url()
                        : '/placeholder-person.jpg'
                    }
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-ocean-blue text-sandstone">
                      {person.roles?.[0] || 'Film Professional'}
                    </Badge>
                  </div>
                  {person.featuredWork && (
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-charcoal text-white">
                        {person.featuredWork.title}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-2">
                    {person.name}
                  </h3>
                  <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                    {person.birthDate && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {person.deathDate
                            ? `${new Date(
                                person.birthDate
                              ).getFullYear()} - ${new Date(
                                person.deathDate
                              ).getFullYear()}`
                            : `b. ${new Date(person.birthDate).getFullYear()}`}
                        </span>
                      </div>
                    )}
                    {person.birthPlace && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{person.birthPlace}</span>
                      </div>
                    )}
                    {person.nationality && (
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{person.nationality}</span>
                      </div>
                    )}
                    {person.awards && person.awards.length > 0 && (
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>{person.awards.length} awards</span>
                      </div>
                    )}
                  </div>
                  {person.roles && person.roles.length > 0 && (
                    <div className="flex gap-1 mb-3">
                      {person.roles.slice(0, 2).map((role) => (
                        <Badge
                          key={role}
                          variant="outline"
                          className="text-xs capitalize"
                        >
                          {role}
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
                      <Link href={`/people/${person.slug.current}`}>
                        <Film className="h-3 w-3 mr-1" />
                        Profile
                      </Link>
                    </Button>
                    {person.featuredWork && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark text-sandstone font-semibold transition-colors duration-200"
                      >
                        <Link
                          href={`/films/${person.featuredWork.slug.current}`}
                        >
                          Featured Work
                        </Link>
                      </Button>
                    )}
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
      {data && data.people.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-charcoal mb-2">
            No people found
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
