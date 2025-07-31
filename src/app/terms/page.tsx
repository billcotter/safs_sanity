import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Card } from '@/components/ui/card'
import { FileText, Shield, Users, CreditCard } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-sandstone">
      <PageBanner
        title="Terms of Service"
        subtitle="Our terms and conditions for using our services"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-ocean-blue" />
              <h1 className="text-3xl font-serif font-bold text-charcoal">
                Terms of Service
              </h1>
            </div>
            <p className="text-charcoal/70 leading-relaxed">
              These Terms of Service govern your use of the St. Augustine Film Society website and services. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              <strong>Last updated:</strong> December 2024
            </p>
          </Card>

          {/* Acceptance of Terms */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Acceptance of Terms
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              By accessing and using the St. Augustine Film Society website, mobile applications, and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-charcoal/70 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </Card>

          {/* Use License */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Use License
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on the St. Augustine Film Society website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-charcoal/70">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </Card>

          {/* Membership Terms */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Membership Terms
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Membership Eligibility
                </h3>
                <p className="text-charcoal/70">
                  Membership is open to individuals 18 years of age or older. By becoming a member, you agree to provide accurate and complete information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Membership Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Priority access to screenings and events</li>
                  <li>Member discounts on tickets and merchandise</li>
                  <li>Exclusive member-only events and screenings</li>
                  <li>Newsletter and communication updates</li>
                  <li>Voting rights on film programming (where applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Membership Termination
                </h3>
                <p className="text-charcoal/70">
                  We reserve the right to terminate or suspend membership for violations of these terms, inappropriate behavior, or failure to comply with venue policies.
                </p>
              </div>
            </div>
          </Card>

          {/* Ticket Purchase and Refunds */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Ticket Purchase and Refunds
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Ticket Sales
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Tickets are sold on a first-come, first-served basis</li>
                  <li>All sales are final unless otherwise specified</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Member discounts apply only to active members</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Refund Policy
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Refunds are available up to 24 hours before the event</li>
                  <li>No refunds for no-shows or late arrivals</li>
                  <li>Event cancellations will result in full refunds</li>
                  <li>Processing fees are non-refundable</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Code of Conduct */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Code of Conduct
              </h2>
            </div>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              We are committed to providing a safe, welcoming, and inclusive environment for all members and guests. By attending our events, you agree to:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-charcoal/70">
              <li>Treat all attendees, staff, and volunteers with respect</li>
              <li>Follow venue rules and safety guidelines</li>
              <li>Refrain from disruptive behavior during screenings</li>
              <li>Respect the property and facilities of our venues</li>
              <li>Not engage in harassment, discrimination, or inappropriate conduct</li>
            </ul>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Intellectual Property
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              The content on this website, including but not limited to text, graphics, images, logos, and software, is the property of the St. Augustine Film Society and is protected by copyright laws.
            </p>
            
            <p className="text-charcoal/70 leading-relaxed">
              You may not reproduce, distribute, or create derivative works from this content without our express written permission.
            </p>
          </Card>

          {/* Disclaimer */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Disclaimer
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              The materials on the St. Augustine Film Society website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <p className="text-charcoal/70 leading-relaxed">
              Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </Card>

          {/* Limitations */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Limitations
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              In no event shall the St. Augustine Film Society or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <p className="text-charcoal/70 leading-relaxed">
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </Card>

          {/* Governing Law */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Governing Law
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the State of Florida and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </Card>

          {/* Changes to Terms */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Changes to Terms
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
            
            <p className="text-charcoal/70 leading-relaxed">
              We will notify members of significant changes via email or through our website.
            </p>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Contact Us
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            
            <div className="space-y-2 text-charcoal/70">
              <p><strong>Email:</strong> legal@safs.org</p>
              <p><strong>Phone:</strong> (904) 123-4567</p>
              <p><strong>Address:</strong> St. Augustine Film Society, 123 King Street, St. Augustine, FL 32084</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 