import { Skeleton } from '@/components/ui/skeleton'

export function BannerSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`h-[60vh] bg-gray-200 animate-pulse relative ${
        className || ''
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-300/60 to-gray-300/30" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center space-y-6 px-4 max-w-4xl mx-auto">
          {/* Title Skeleton */}
          <Skeleton className="h-12 w-64 mx-auto" />

          {/* Subtitle Skeleton */}
          <Skeleton className="h-6 w-96 mx-auto" />

          {/* CTA Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
