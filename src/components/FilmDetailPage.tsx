'use client'

import { CastCrewSection } from './CastCrewSection'
import { FilmBanner } from './FilmBanner'
import { FilmPosterMeta } from './FilmPosterMeta'
import { PlotSynopsis } from './PlotSynopsis'
import { TrailerSection } from './TrailerSection'

interface FilmDetailPageProps {
  film: any
  safsContent: any[]
  tmdbData: any
}

export function FilmDetailPage({
  film,
  safsContent,
  tmdbData,
}: FilmDetailPageProps) {
  return (
    <div className="film-detail-container bg-sandstone min-h-screen">
      {/* Film Banner with title, background image, and metadata */}
      <FilmBanner film={film} tmdbData={tmdbData} />

      {/* Main content area */}
      <div className="container mx-auto px-4 py-8">
        <div className="film-detail-grid">
          <FilmPosterMeta
            film={film}
            tmdbData={tmdbData}
            safsContent={safsContent}
          />
          <PlotSynopsis content={film.synopsis} tmdbData={tmdbData} />
          <CastCrewSection
            cast={tmdbData?.cast}
            director={tmdbData?.director}
          />
          <TrailerSection trailer={tmdbData?.trailer} />
        </div>
      </div>
    </div>
  )
}
