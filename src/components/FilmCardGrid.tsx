import { FilmCard } from './FilmCard'
import { CardSkeleton } from './skeletons/CardSkeleton'

interface FilmCardGridProps {
  films: Array<{
    _id: string
    title: string
    slug: { current: string }
    poster?: any
    synopsis?: string
    releaseYear?: number
    runtime?: number
    genres?: string[]
    rating?: string
    imdbRating?: number
    directors?: Array<{ name: string; slug?: { current: string } }>
  }>
  screenings?: Array<{
    _id: string
    datetime: string
    venue?: {
      name: string
      slug?: { current: string }
    }
    actualAttendance?: number
    soldOut?: boolean
    ticketPrice?: number
  }>
  type: 'now-playing' | 'archive'
  loading?: boolean
  error?: string | null
  className?: string
}

export function FilmCardGrid({
  films,
  screenings,
  type,
  loading = false,
  error = null,
  className,
}: FilmCardGridProps) {
  if (loading) {
    return (
      <div
        className={`
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
          ${className || ''}
        `}
      >
        {[...Array(8)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="error-state rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2">Unable to Load Films</h3>
          <p className="text-sm">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary mt-4"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  if (!films || films.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-sandstone-light rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-charcoal">
            No Films Available
          </h3>
          <p className="text-sm text-charcoal/70">
            {type === 'archive'
              ? 'No archived films found at this time.'
              : 'No films are currently playing.'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
        ${className || ''}
      `}
    >
      {films.map((film, index) => {
        const screening = screenings?.[index]

        return (
          <FilmCard
            key={film._id}
            film={film}
            screening={screening}
            type={type}
          />
        )
      })}
    </div>
  )
}
