import Link from 'next/link'

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Content Management Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Manage your St. Augustine Film Society content
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Sanity Studio
            </h2>
            <p className="text-gray-600 mb-6">
              Access your content management system to create and edit films,
              pages, and showings.
            </p>

            <div className="space-y-4">
              <Link
                href="http://localhost:3333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Open Sanity Studio
              </Link>

              <div className="text-sm text-gray-500 mt-4">
                <p>If the studio doesn&apos;t open automatically, you can:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>Click the button above</li>
                  <li>
                    Or manually visit:{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      http://localhost:3333
                    </code>
                  </li>
                  <li>
                    Or run:{' '}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      pnpm studio
                    </code>{' '}
                    in your terminal
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Available Content Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Films</h3>
                <p className="text-sm text-gray-600">
                  Add movie titles, posters, years, and descriptions
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Pages</h3>
                <p className="text-sm text-gray-600">
                  Create content pages with rich text
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Showings</h3>
                <p className="text-sm text-gray-600">
                  Schedule film screenings with venues and dates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
