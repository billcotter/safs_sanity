'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the new authentication system
    router.replace('/auth/signup')
  }, [router])

  return (
    <div className="min-h-screen bg-sandstone flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ocean-blue mx-auto mb-4"></div>
        <p className="text-charcoal/70">Redirecting to sign up...</p>
      </div>
    </div>
  )
}
