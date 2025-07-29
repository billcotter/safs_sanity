import { Button } from '@/components/ui/button'
import { Film, Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-ocean-blue opacity-20">404</h1>
        </div>

        {/* Empty Deck Chair and Megaphone Illustration */}
        <div className="mb-12 relative">
          <div className="flex justify-center items-center space-x-16">
            {/* Empty Deck Chair/Stool */}
            <div className="relative">
              {/* Chair Base */}
              <div className="w-16 h-8 bg-sandstone-dark rounded-t-lg border-2 border-charcoal"></div>
              {/* Chair Back */}
              <div className="w-2 h-12 bg-sandstone-dark border-2 border-charcoal absolute left-0 top-0"></div>
              {/* Chair Seat */}
              <div className="w-12 h-2 bg-sandstone-dark border-2 border-charcoal absolute left-2 top-6"></div>
              {/* Chair Legs */}
              <div className="w-1 h-4 bg-charcoal absolute left-2 bottom-0"></div>
              <div className="w-1 h-4 bg-charcoal absolute right-2 bottom-0"></div>
              <div className="w-1 h-4 bg-charcoal absolute left-2 top-8"></div>
              <div className="w-1 h-4 bg-charcoal absolute right-2 top-8"></div>

              {/* Empty Space - No Director */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-dashed border-charcoal/30 rounded-full"></div>
              </div>
            </div>

            {/* Megaphone */}
            <div className="relative">
              {/* Megaphone Body */}
              <div className="w-8 h-12 bg-ocean-blue rounded-l-full border-2 border-charcoal relative">
                {/* Megaphone Handle */}
                <div className="absolute -right-2 top-8 w-4 h-2 bg-charcoal rounded-full"></div>
                {/* Megaphone Opening */}
                <div className="absolute left-0 top-0 w-8 h-8 bg-ocean-blue rounded-l-full border-2 border-charcoal"></div>
                {/* Sound Waves */}
                <div className="absolute -left-2 top-2 w-4 h-4 border-2 border-charcoal/40 rounded-full"></div>
                <div className="absolute -left-4 top-4 w-6 h-6 border-2 border-charcoal/30 rounded-full"></div>
                <div className="absolute -left-6 top-6 w-8 h-8 border-2 border-charcoal/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Film Reel in Background */}
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <div className="w-24 h-24 border-4 border-charcoal rounded-full">
              <div className="w-16 h-16 bg-cream rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-charcoal rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-charcoal rounded-full absolute bottom-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-charcoal rounded-full absolute top-1/2 left-2 transform -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-charcoal rounded-full absolute top-1/2 right-2 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
            Scene Not Found
          </h2>
          <p className="text-lg text-charcoal/70 max-w-md mx-auto">
            The director has left the set and the megaphone is silent. This page
            doesn't exist in our film.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-ocean-blue hover:bg-ocean-blue-dark text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
          >
            <Link href="/current-films">
              <Film className="mr-2 h-5 w-5" />
              View Current Films
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-charcoal/70 hover:text-charcoal hover:bg-sandstone/20"
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-charcoal/70 hover:text-charcoal hover:bg-sandstone/20"
          >
            <Link href="/events">Events</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-charcoal/70 hover:text-charcoal hover:bg-sandstone/20"
          >
            <Link href="/membership">Membership</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-charcoal/70 hover:text-charcoal hover:bg-sandstone/20"
          >
            <Link href="/archive">Archive</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
