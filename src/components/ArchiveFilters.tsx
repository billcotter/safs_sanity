'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/safs-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X } from 'lucide-react';

interface ArchiveFiltersProps {
  selectedYear?: number;
  selectedVenue?: string;
  availableYears: number[];
  availableVenues: string[];
  onYearChange: (year?: number) => void;
  onVenueChange: (venue?: string) => void;
  onClearFilters: () => void;
}

export function ArchiveFilters({
  selectedYear,
  selectedVenue,
  availableYears,
  availableVenues,
  onYearChange,
  onVenueChange,
  onClearFilters,
}: ArchiveFiltersProps) {
  const hasActiveFilters = selectedYear || selectedVenue;

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center gap-4'>
        {/* Year Filter */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-charcoal'>Year:</span>
          <Select
            value={selectedYear?.toString() || ''}
            onValueChange={(value) =>
              onYearChange(value ? parseInt(value) : undefined)
            }
          >
            <SelectTrigger className='w-[120px] border-charcoal/20 focus:border-ocean-blue focus:ring-ocean-blue/20'>
              <SelectValue placeholder='All Years' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All Years</SelectItem>
              {availableYears.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Venue Filter */}
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-charcoal'>Venue:</span>
          <Select
            value={selectedVenue || ''}
            onValueChange={(value) => onVenueChange(value || undefined)}
          >
            <SelectTrigger className='w-[180px] border-charcoal/20 focus:border-ocean-blue focus:ring-ocean-blue/20'>
              <SelectValue placeholder='All Venues' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=''>All Venues</SelectItem>
              {availableVenues.map((venue) => (
                <SelectItem key={venue} value={venue}>
                  {venue}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant='ghost'
            size='sm'
            onClick={onClearFilters}
            className='text-charcoal/70 hover:text-charcoal'
          >
            <X className='h-4 w-4 mr-1' />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Active Filter Badges */}
      {hasActiveFilters && (
        <div className='flex flex-wrap gap-2'>
          {selectedYear && (
            <Badge
              variant='secondary'
              className='bg-ocean-blue text-sandstone hover:bg-ocean-blue-dark'
            >
              Year: {selectedYear}
              <button
                onClick={() => onYearChange(undefined)}
                className='ml-1 hover:text-sandstone/80'
              >
                <X className='h-3 w-3' />
              </button>
            </Badge>
          )}
          {selectedVenue && (
            <Badge
              variant='secondary'
              className='bg-ocean-blue text-sandstone hover:bg-ocean-blue-dark'
            >
              Venue: {selectedVenue}
              <button
                onClick={() => onVenueChange(undefined)}
                className='ml-1 hover:text-sandstone/80'
              >
                <X className='h-3 w-3' />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
