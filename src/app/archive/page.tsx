'use client'

import { ArchivePage } from '@/components/ArchivePage'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export default function ArchivePageRoute() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Film Archive
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Relive our past screenings and memorable cinematic experiences
              from the St. Augustine Film Society.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'Archive' }]} />
        <ArchivePage />
      </div>
    </>
  )
}
