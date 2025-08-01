import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageLayout } from '@/components/PageLayout'
import { UniversalBanner } from '@/components/UniversalBanner'
import { Button } from '@/components/ui/safs-button'
import { Award, Calendar, Heart, Users } from 'lucide-react'
import Link from 'next/link'

export default async function AboutPage() {
  return (
    <>
      <UniversalBanner pageType="about" />

      <PageLayout>
        <Breadcrumbs items={[{ label: 'About' }]} />

        {/* Mission Section */}
        <section id="mission" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              The St. Augustine Film Society is dedicated to bringing cinematic
              excellence to America's oldest city. We curate exceptional films
              that inspire, educate, and entertain our community while
              celebrating the rich cultural heritage of St. Augustine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-sandstone-light rounded-lg">
              <Heart className="w-12 h-12 text-terracotta mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Passion for Cinema
              </h3>
              <p className="text-charcoal/70">
                We believe in the power of film to transform perspectives and
                bring people together.
              </p>
            </div>

            <div className="text-center p-6 bg-sandstone-light rounded-lg">
              <Users className="w-12 h-12 text-ocean-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Community Focus
              </h3>
              <p className="text-charcoal/70">
                Building connections through shared cinematic experiences in our
                historic city.
              </p>
            </div>

            <div className="text-center p-6 bg-sandstone-light rounded-lg">
              <Award className="w-12 h-12 text-ochre mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Cultural Excellence
              </h3>
              <p className="text-charcoal/70">
                Curating films that reflect the artistic and cultural richness
                of our community.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                Founded in the heart of St. Augustine, the Film Society emerged
                from a shared vision of bringing world-class cinema to our
                historic community. What began as a small group of film
                enthusiasts has grown into a vibrant cultural institution.
              </p>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Today, we host regular screenings, special events, and
                educational programs that celebrate the art of filmmaking while
                honoring the unique character of America's oldest city.
              </p>
              <Button asChild variant="primary">
                <Link href="/membership">
                  <Users className="mr-2 h-4 w-4" />
                  Join Our Community
                </Link>
              </Button>
            </div>

            <div className="bg-sandstone-light rounded-lg p-8">
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Key Milestones
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-terracotta rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      2018 - Foundation
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Society established with inaugural screening
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      2020 - Growth
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Expanded to multiple venues across the city
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-ochre rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      2023 - Recognition
                    </h4>
                    <p className="text-sm text-charcoal/70">
                      Awarded for cultural contribution to St. Augustine
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-charcoal mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-charcoal/70">
                Making quality cinema available to all members of our community
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Diversity
              </h3>
              <p className="text-sm text-charcoal/70">
                Celebrating films from around the world and diverse perspectives
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Education
              </h3>
              <p className="text-sm text-charcoal/70">
                Providing context and discussion around the films we screen
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Community
              </h3>
              <p className="text-sm text-charcoal/70">
                Building connections through shared cinematic experiences
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-gradient-to-r from-terracotta/10 to-ochre/10 rounded-lg">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Get Involved
          </h2>
          <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
            Join us in celebrating the art of cinema in America's oldest city.
            Become a member, attend our events, or support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary">
              <Link href="/membership">
                <Users className="mr-2 h-4 w-4" />
                Become a Member
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/events">
                <Calendar className="mr-2 h-4 w-4" />
                View Events
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    </>
  )
}
