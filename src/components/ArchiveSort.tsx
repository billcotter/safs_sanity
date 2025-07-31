'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowUpDown, Calendar, Film, MapPin, Users } from 'lucide-react'

interface ArchiveSortProps {
  sortBy: string
  sortOrder: 'asc' | 'desc'
  onSortChange: (sortBy: string, sortOrder: 'asc' | 'desc') => void
}

const sortOptions = [
  { value: 'datetime', label: 'Date', icon: Calendar },
  { value: 'title', label: 'Film Title', icon: Film },
  { value: 'venue', label: 'Venue', icon: MapPin },
  { value: 'attendance', label: 'Attendance', icon: Users },
]

export function ArchiveSort({
  sortBy,
  sortOrder,
  onSortChange,
}: ArchiveSortProps) {
  const handleSortChange = (value: string) => {
    onSortChange(value, sortOrder)
  }

  const toggleSortOrder = () => {
    onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc')
  }

  const currentSortOption = sortOptions.find(
    (option) => option.value === sortBy
  )
  const IconComponent = currentSortOption?.icon || ArrowUpDown

  return (
    <div className="flex items-center gap-2">
      <Select value={sortBy} onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px] border-charcoal/20 focus:border-ocean-blue focus:ring-ocean-blue/20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => {
            const Icon = option.icon
            return (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {option.label}
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="sm"
        onClick={toggleSortOrder}
        className="border-charcoal/20 text-charcoal hover:bg-ocean-blue hover:text-sandstone"
      >
        <ArrowUpDown className="h-4 w-4" />
        {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
      </Button>
    </div>
  )
}
