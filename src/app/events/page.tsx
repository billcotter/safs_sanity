import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Layout } from '@/components/Layout'
import { PageBanner } from '@/components/PageBanner'

export default function EventsPage() {
  return (
    <>
      <PageBanner
        title="Events"
        subtitle="Join us for screenings, discussions, and special events throughout the year"
        announcement={{
          text: '🎭 Film Festival coming in March! Early bird tickets available now.',
          type: 'success',
        }}
        strapiMessage="Our annual St. Augustine Film Festival is just around the corner! This year's theme celebrates 'Cinema and History' with special screenings at our most historic venues. Early bird tickets are now available for members."
      />

      <Layout>
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={[{ label: 'Events' }]} />

          <div className="text-center py-12">
            <h2 className="text-3xl font-serif font-semibold text-charcoal mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-charcoal/70 mb-8">
              Stay tuned for our exciting lineup of film events and cultural
              programs.
            </p>

            {/* Placeholder for events grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-sandstone-dark/20"
                >
                  <div className="w-full h-48 bg-sandstone-dark flex items-center justify-center">
                    <span className="text-charcoal/60">Event Image {i}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                      Special Event {i}
                    </h3>
                    <p className="text-charcoal/70 mb-2">Date TBD</p>
                    <p className="text-charcoal/70 mb-2">Venue TBD</p>
                    <p className="text-ocean-blue font-semibold">
                      Details Coming Soon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
