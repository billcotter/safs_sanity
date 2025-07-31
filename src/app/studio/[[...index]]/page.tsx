'use client'

/**
 * This route redirects to the Sanity Studio running on port 3333
 */

import { useEffect } from 'react'

export default function StudioPage() {
  useEffect(() => {
    // Redirect to the Sanity Studio running on port 3333
    window.location.href = 'http://localhost:3333'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          Redirecting to Sanity Studio...
        </h1>
        <p className="text-gray-600">
          If you're not redirected automatically, click the link below:
        </p>
        <a
          href="http://localhost:3333"
          className="text-blue-600 hover:text-blue-800 underline mt-2 inline-block"
        >
          Open Sanity Studio
        </a>
      </div>
    </div>
  )
}
