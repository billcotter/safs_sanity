import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Card } from '@/components/ui/card'
import { Shield, Eye, Lock, Users } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sandstone">
      <PageBanner
        title="Privacy Policy"
        subtitle="How we protect and use your information"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-ocean-blue" />
              <h1 className="text-3xl font-serif font-bold text-charcoal">
                Privacy Policy
              </h1>
            </div>
            <p className="text-charcoal/70 leading-relaxed">
              At the St. Augustine Film Society, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, attend our events, or become a member.
            </p>
            <p className="text-charcoal/70 leading-relaxed mt-4">
              <strong>Last updated:</strong> December 2024
            </p>
          </Card>

          {/* Information We Collect */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Information We Collect
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Membership details and preferences</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Event attendance and ticket purchase history</li>
                  <li>Communication preferences and newsletter subscriptions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Device information and cookies</li>
                  <li>Analytics data to improve our services</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* How We Use Your Information */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                How We Use Your Information
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  To Provide Our Services
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Process membership applications and renewals</li>
                  <li>Handle ticket purchases and reservations</li>
                  <li>Send event confirmations and updates</li>
                  <li>Provide customer support</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  To Improve Your Experience
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Personalize film recommendations</li>
                  <li>Send relevant newsletters and updates</li>
                  <li>Analyze website usage to improve functionality</li>
                  <li>Develop new programs and events</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Information Sharing */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-ocean-blue" />
              <h2 className="text-2xl font-serif font-bold text-charcoal">
                Information Sharing
              </h2>
            </div>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-charcoal/70">
              <li><strong>Service Providers:</strong> With trusted partners who help us operate our website, process payments, and send communications</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Consent:</strong> With your explicit permission for specific purposes</li>
              <li><strong>Business Transfers:</strong> In the event of a merger or acquisition (with notice to members)</li>
            </ul>
          </Card>

          {/* Data Security */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Data Security
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Technical Safeguards
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure payment processing</li>
                  <li>Regular security audits</li>
                  <li>Access controls and authentication</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">
                  Administrative Safeguards
                </h3>
                <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                  <li>Staff training on data protection</li>
                  <li>Limited access to personal information</li>
                  <li>Regular policy reviews</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Your Rights
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              You have the right to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                <li>Access your personal information</li>
                <li>Update or correct your data</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              
              <ul className="list-disc list-inside space-y-2 text-charcoal/70">
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
                <li>File a complaint with authorities</li>
                <li>Contact us with privacy concerns</li>
              </ul>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Cookies and Tracking
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Essential Cookies
                </h3>
                <p className="text-charcoal/70">
                  Required for website functionality, security, and authentication.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-charcoal/70">
                  Help us understand how visitors use our website to improve our services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Preference Cookies
                </h3>
                <p className="text-charcoal/70">
                  Remember your settings and preferences for a personalized experience.
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-white shadow-sm border border-sandstone-dark">
            <h2 className="text-2xl font-serif font-bold text-charcoal mb-6">
              Contact Us
            </h2>
            
            <p className="text-charcoal/70 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="space-y-2 text-charcoal/70">
              <p><strong>Email:</strong> privacy@safs.org</p>
              <p><strong>Phone:</strong> (904) 123-4567</p>
              <p><strong>Address:</strong> St. Augustine Film Society, 123 King Street, St. Augustine, FL 32084</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 