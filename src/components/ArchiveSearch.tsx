'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearchTracking } from '@/lib/analytics/hooks'
import { useDebounce } from '@/lib/hooks/useDebounce'
import { Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'

interface ArchiveSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function ArchiveSearch({
  value,
  onChange,
  placeholder = 'Search films...',
}: ArchiveSearchProps) {
  const [searchValue, setSearchValue] = useState(value)
  const debouncedSearchValue = useDebounce(searchValue, 300)
  const { trackSearch } = useSearchTracking()

  useEffect(() => {
    onChange(debouncedSearchValue)

    // Track search queries
    if (debouncedSearchValue && debouncedSearchValue !== value) {
      trackSearch(debouncedSearchValue, 0, { context: 'archive' })
    }
  }, [debouncedSearchValue, onChange, trackSearch, value])

  const handleClear = () => {
    setSearchValue('')
    onChange('')
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="pl-10 pr-10 bg-white border-charcoal/20 focus:border-ocean-blue focus:ring-ocean-blue/20"
        />
        {searchValue && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-charcoal/50 hover:text-charcoal"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
