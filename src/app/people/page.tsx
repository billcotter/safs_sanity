import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PeopleDirectory } from '@/components/PeopleDirectory'

export default function PeoplePage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-b border-ocean-blue/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-4">
              Film Professionals
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Discover the directors, actors, writers, and other talented
              individuals who have shaped the world of cinema.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: 'People' }]} />
        <PeopleDirectory />
      </div>
    </>
  )
}
