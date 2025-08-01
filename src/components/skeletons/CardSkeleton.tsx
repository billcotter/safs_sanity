import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <Card
      className={`
        w-80 h-[450px] bg-sandstone shadow-lg
        ${className || ''}
      `}
    >
      <CardHeader className="p-0">
        <div className="aspect-[2/3] relative">
          <Skeleton className="w-full h-full rounded-t-lg" />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4" />

        {/* Metadata Row Skeleton */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-8" />
        </div>

        {/* Star Rating Skeleton */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-4" />
          ))}
          <Skeleton className="h-4 w-8 ml-1" />
        </div>

        {/* Genre Tags Skeleton */}
        <div className="flex gap-1">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>

        {/* Synopsis Skeleton */}
        <div className="space-y-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 flex-1" />
      </CardFooter>
    </Card>
  )
}
