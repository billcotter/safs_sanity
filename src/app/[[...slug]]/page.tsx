import { HeroCarousel } from '@/components/HeroCarousel'
import { MovieSlider } from '@/components/MovieSlider'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { AlertCircle, Calendar, Film, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Fallback home page component for when Sanity is not configured
async function FallbackHomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Announcement Box - From Sanity */}
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Special Announcement
              </h3>
              <p className="text-charcoal/70 mb-3">
                Join us this Saturday for an exclusive member-only screening of
                "Cinema Paradiso" with a special introduction by film historian
                Dr. Sarah Mitchell. Free refreshments included.
              </p>
              <div className="flex items-center gap-2 text-sm text-charcoal/60">
                <Calendar className="h-4 w-4" />
                <span>Saturday, December 21st at 7:00 PM</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Up and Coming Section - Two Horizontal Cards */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
          Up and Coming
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Film Card 1 - Horizontal */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="aspect-[2/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
                    alt="Parasite"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-4">
                <h3 className="font-semibold text-charcoal mb-2">Parasite</h3>
                <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2019</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>South Korea</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Bong Joon-ho</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <Link href="/film/parasite">Details</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <Link href="/purchase?film=parasite">Purchase Ticket</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Film Card 2 - Horizontal */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <div className="aspect-[2/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
                    alt="The French Dispatch"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-4">
                <h3 className="font-semibold text-charcoal mb-2">
                  The French Dispatch
                </h3>
                <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>2021</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>USA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Wes Anderson</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1"
                  >
                    <Link href="/film/the-french-dispatch">Details</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark"
                  >
                    <Link href="/purchase?film=the-french-dispatch">
                      Purchase Ticket
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Message from Film Society - Sanity Text */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-sandstone/20 to-ocean-blue/10 border-0 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">
                A Message from the Film Society
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed max-w-3xl mx-auto">
                Welcome to the St. Augustine Film Society, where we celebrate
                the art of cinema in our historic community. Our mission is to
                bring exceptional films from around the world to our vibrant
                city, creating meaningful cultural experiences that inspire,
                educate, and entertain. Join us in discovering stories that
                connect us all through the universal language of film.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Become a Member Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Become a Member Today
              </h3>
              <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Join our community of film enthusiasts and enjoy exclusive
                benefits, priority access to screenings, and special member-only
                events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-ocean-blue hover:bg-ocean-blue-dark"
                >
                  <Link href="/membership">
                    <Users className="mr-2 h-5 w-5" />
                    Join Now - $45/year
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Past Movies Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Previously Screened Films
          </h2>
          <p className="text-charcoal/70 mb-6">
            Explore our rich history of exceptional films
          </p>
        </div>

        {/* Movie Slider Component */}
        <MovieSlider />

        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
          >
            <Link href="/archive">
              <Film className="mr-2 h-5 w-5" />
              View Our Complete Archive
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

interface PageProps {
  params: Promise<{ slug?: string[] }>
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const slug = resolvedParams.slug ? resolvedParams.slug.join('/') : 'home'

  console.log('Fetching page for slug:', slug)

  // If this is not the home page, throw 404 immediately
  if (slug !== 'home') {
    console.log('Page not found, throwing 404')
    notFound()
  }

  // Check if Sanity is configured
  const isSanityConfigured =
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-project-id'

  console.log('Sanity configured:', isSanityConfigured)
  console.log('Sanity project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

  if (!isSanityConfigured) {
    console.log('Using fallback homepage with HeroCarousel')
    return <FallbackHomePage />
  }

  console.log('Using Sanity homepage')

  // Original Sanity-based home page
  try {
    // Fetch the home page content
    const page = await client.fetch(
      `*[_type == "page" && slug.current == "home"][0]`
    )

    if (!page) {
      console.log('No home page found in Sanity, using fallback')
      return <FallbackHomePage />
    }

    console.log('Using Sanity homepage')
    return (
      <>
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Announcement Box - From Sanity */}
        <div className="container mx-auto px-4 py-8">
          <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-400">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Special Announcement
                </h3>
                <p className="text-charcoal/70 mb-3">
                  {page.description ||
                    'Join us for exclusive screenings and special events.'}
                </p>
                <div className="flex items-center gap-2 text-sm text-charcoal/60">
                  <Calendar className="h-4 w-4" />
                  <span>Check our events calendar for upcoming screenings</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Up and Coming Section - Two Horizontal Cards */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Up and Coming
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Film Card 1 - Horizontal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="aspect-[2/3] relative">
                    <img
                      src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
                      alt="Parasite"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-4">
                  <h3 className="font-semibold text-charcoal mb-2">Parasite</h3>
                  <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>2019</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>South Korea</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>Bong Joon-ho</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <Link href="/film/parasite">Details</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark"
                    >
                      <Link href="/purchase?film=parasite">
                        Purchase Ticket
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Film Card 2 - Horizontal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="aspect-[2/3] relative">
                    <img
                      src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop"
                      alt="The Grand Budapest Hotel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-4">
                  <h3 className="font-semibold text-charcoal mb-2">
                    The Grand Budapest Hotel
                  </h3>
                  <div className="space-y-1 text-sm text-charcoal/70 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>2014</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>United States</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>Wes Anderson</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="flex-1"
                    >
                      <Link href="/film/grand-budapest-hotel">Details</Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-ocean-blue hover:bg-ocean-blue-dark"
                    >
                      <Link href="/purchase?film=grand-budapest-hotel">
                        Purchase Ticket
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Message from the Film Society */}
        <div className="container mx-auto px-4 py-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-400">
            <div className="flex items-start gap-4">
              <Film className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Message from the Film Society
                </h3>
                <p className="text-charcoal/70 mb-3">
                  {page.message ||
                    'Welcome to the St. Augustine Film Society. We are dedicated to bringing the finest independent and international cinema to our community. Join us for thought-provoking screenings, engaging discussions, and unforgettable cinematic experiences.'}
                </p>
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Become a Member Section */}
        <div className="container mx-auto px-4 py-8">
          <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400">
            <div className="text-center">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Become a Member
              </h2>
              <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
                Join the St. Augustine Film Society and enjoy exclusive benefits
                including priority ticket access, member-only screenings, and
                special events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Link href="/membership">Join Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Past Screenings Carousel */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              Past Screenings
            </h2>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/archive">View All</Link>
            </Button>
          </div>
          <MovieSlider />
        </div>
      </>
    )
  } catch (error) {
    console.error('Error fetching page:', error)
    return <FallbackHomePage />
  }
}
