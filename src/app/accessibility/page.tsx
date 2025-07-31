import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Card } from '@/components/ui/card'
import { Accessibility, Eye, Ear, Heart } from 'lucide-react'

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-sandstone">
      <PageBanner
        title="Accessibility"
        subtitle="Making cinema accessible to everyone"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Accessibility' }]} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Accessibility className="h-8 w-8 text-ocean-blue" />
              <h1 className="text-3xl font-serif font-bold text-charcoal">
                Accessibility Statement
              </h1>
            </div>
            <p className="text-charcoal/70 leading-relaxed">
              The St. Augustine Film Society is committed to ensuring that our website, events, and services are accessible to people of all abilities. We believe that cinema should be enjoyed by everyone, regardless of their physical or cognitive abilities.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              <strong>Last updated:</strong> December 2024
            </p>
          </Card>

          {/* Website Accessibility */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Website Accessibility
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Our website is designed to meet WCAG 2.1 AA standards and includes the following accessibility features:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Visual Accessibility
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>High contrast color schemes</li>
                  <li>Resizable text and zoom support</li>
                  <li>Alt text for all images</li>
                  <li>Clear typography and spacing</li>
                  <li>Keyboard navigation support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Screen Reader Support
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Semantic HTML structure</li>
                  <li>ARIA labels and descriptions</li>
                  <li>Proper heading hierarchy</li>
                  <li>Descriptive link text</li>
                  <li>Form labels and instructions</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Venue Accessibility */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Accessibility className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Venue Accessibility
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Physical Accessibility
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Wheelchair-accessible entrances and seating</li>
                  <li>Accessible parking spaces</li>
                  <li>Elevator access where applicable</li>
                  <li>Accessible restrooms</li>
                  <li>Assistance animal friendly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Seating Accommodations
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Reserved accessible seating areas</li>
                  <li>Companion seating available</li>
                  <li>Transfer seating options</li>
                  <li>Clear sight lines for wheelchair users</li>
                  <li>Easy access to exits and facilities</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Audio Accessibility */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Ear className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Audio Accessibility
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Hearing Assistance
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Assistive listening devices available</li>
                  <li>Closed captioning for select screenings</li>
                  <li>Audio description services</li>
                  <li>Sign language interpretation for events</li>
                  <li>Visual alerts and notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Communication Support
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Written materials available</li>
                  <li>Staff trained in communication assistance</li>
                  <li>Email and text-based support</li>
                  <li>Visual schedules and information</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Cognitive Accessibility */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Cognitive Accessibility
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Sensory-Friendly Screenings
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Reduced lighting during screenings</li>
                  <li>Lower volume levels</li>
                  <li>Freedom to move around</li>
                  <li>Quiet spaces available</li>
                  <li>Designated support staff</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Clear Communication
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Simple, clear language</li>
                  <li>Visual schedules and timetables</li>
                  <li>Step-by-step instructions</li>
                  <li>Consistent routines and procedures</li>
                  <li>Patient, understanding staff</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Requesting Accommodations */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Requesting Accommodations
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-6">
              We are happy to provide reasonable accommodations for our events and screenings. To ensure we can meet your needs, please contact us in advance:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Contact Information
                </h3>
                <div className="space-y-2 text-charcoal/70">
                  <p><strong>Email:</strong> accessibility@safs.org</p>
                  <p><strong>Phone:</strong> (904) 123-4567</p>
                  <p><strong>TTY:</strong> (904) 123-4568</p>
                  <p><strong>Advance Notice:</strong> 48 hours preferred</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  What to Include
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Type of accommodation needed</li>
                  <li>Event or screening date</li>
                  <li>Number of people requiring accommodation</li>
                  <li>Contact information</li>
                  <li>Any specific requirements</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Feedback */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Feedback and Suggestions
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-6">
              We welcome feedback on our accessibility efforts. Your input helps us improve our services and ensure we're meeting the needs of all our community members.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Share Your Experience
                </h3>
                <p className="text-charcoal/70">
                  Tell us about your experience with our accessibility features, both positive and areas for improvement.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Suggest Improvements
                </h3>
                <p className="text-charcoal/70">
                  We're always looking for ways to make our services more accessible. Share your ideas with us.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Report Issues
                </h3>
                <p className="text-charcoal/70">
                  If you encounter accessibility barriers on our website or at our events, please let us know immediately.
                </p>
              </div>
            </div>
          </Card>

          {/* Resources */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Additional Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Local Organizations
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Florida Division of Blind Services</li>
                  <li>Florida Association of the Deaf</li>
                  <li>Disability Rights Florida</li>
                  <li>St. Augustine Accessibility Coalition</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  National Resources
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Americans with Disabilities Act (ADA)</li>
                  <li>Web Content Accessibility Guidelines (WCAG)</li>
                  <li>National Association of the Deaf</li>
                  <li>Autism Society of America</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Contact Us
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              For accessibility questions, accommodation requests, or feedback:
            </p>
            
            <div className="space-y-2 text-charcoal/70">
              <p><strong>Email:</strong> accessibility@safs.org</p>
              <p><strong>Phone:</strong> (904) 123-4567</p>
              <p><strong>TTY:</strong> (904) 123-4568</p>
              <p><strong>Address:</strong> St. Augustine Film Society, 123 King Street, St. Augustine, FL 32084</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 