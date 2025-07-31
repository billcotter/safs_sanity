import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar, Film, MapPin, Users } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner with St. Augustine Bridge */}
      <div
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=600&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              About the St. Augustine Film Society
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Celebrating cinema in the nation's oldest city
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>St. Augustine, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>Since 2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strapi Message Box */}
      <div className="bg-sandstone/10 border-l-4 border-sandstone">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-charcoal/80 leading-relaxed">
              Welcome to the St. Augustine Film Society! We are passionate about
              bringing the best of cinema to our historic community. Our mission
              is to enrich cultural life through diverse film programming and
              engaging events that celebrate both local and international
              cinema.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Mission Statement with St. Augustine Street Image */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-sandstone/30 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed mb-4">
                The St. Augustine Film Society is dedicated to celebrating the
                art of cinema and fostering a vibrant film culture in our
                historic community. We curate exceptional films that inspire,
                educate, and entertain audiences of all ages.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Through our diverse programming, we showcase independent films,
                classic masterpieces, and international cinema, creating
                meaningful cultural experiences that bring our community
                together.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Historic St. Augustine streets"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Historic St. Augustine
              </div>
            </div>
          </div>
        </div>

        {/* History with Fort Castillo de San Marcos */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Castillo de San Marcos"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-charcoal">
                Castillo de San Marcos
              </div>
            </div>
            <div className="p-8 bg-sandstone/30 rounded-lg shadow-sm order-1 lg:order-2">
              <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
                Our History
              </h2>
              <p className="text-base text-charcoal/70 leading-relaxed mb-4">
                Founded in 2015 by a group of passionate film enthusiasts, the
                St. Augustine Film Society began as a small gathering of friends
                sharing their love of cinema. What started as monthly screenings
                in local venues has grown into a thriving cultural institution
                serving thousands of film lovers throughout Northeast Florida.
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed">
                Our screenings take place in historic venues throughout the
                city, from the Lightner Museum to the Flagler College
                Auditorium, creating a unique blend of cinematic art and
                architectural heritage.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 p-8 bg-sandstone/30 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                  alt="Sarah Mitchell"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Sarah Mitchell
                </h3>
                <p className="text-sm text-charcoal/60 mb-2">
                  Executive Director
                </p>
                <p className="text-base text-charcoal/70">
                  Sarah brings over 15 years of experience in film programming
                  and arts administration. She holds a Master's degree in Film
                  Studies from the University of Florida and has curated film
                  festivals across the Southeast.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Michael Chen
                </h3>
                <p className="text-sm text-charcoal/60 mb-2">
                  Programming Director
                </p>
                <p className="text-base text-charcoal/70">
                  Michael oversees our film selection and special events. With a
                  background in independent film distribution, he ensures our
                  programming represents diverse voices and perspectives from
                  around the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values with St. Augustine Architecture */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-ocean-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-ocean-blue" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-charcoal/70">
                We believe great cinema should be accessible to everyone,
                regardless of background or economic means.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="h-8 w-8 text-terracotta" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Diversity
              </h3>
              <p className="text-sm text-charcoal/70">
                Our programming celebrates diverse voices and perspectives from
                around the world, fostering understanding and empathy.
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sandstone/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-sandstone-dark" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">
                Community
              </h3>
              <p className="text-sm text-charcoal/70">
                We foster connections through shared cinematic experiences,
                building a stronger, more engaged community in St. Augustine.
              </p>
            </Card>
          </div>
        </div>

        {/* Venues Section with St. Augustine Images */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-6 text-center">
            Our Venues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Lightner Museum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Lightner Museum</h3>
                  <p className="text-white/80 text-sm">
                    Historic venue for special screenings
                  </p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="Flagler College"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Flagler College</h3>
                  <p className="text-white/80 text-sm">
                    Main auditorium for regular screenings
                  </p>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
                  alt="St. Augustine Amphitheatre"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">Amphitheatre</h3>
                  <p className="text-white/80 text-sm">
                    Outdoor screenings under the stars
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-ocean-blue/10 to-sandstone/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Become a member and be part of St. Augustine's vibrant film culture.
            Enjoy exclusive screenings, special events, and connect with fellow
            film enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ocean-blue hover:bg-ocean-blue-dark"
            >
              <Link href="/membership">
                <Users className="mr-2 h-5 w-5" />
                Become a Member
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
            >
              <Link href="/now-playing">
                <Film className="mr-2 h-5 w-5" />
                View Current Screenings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
