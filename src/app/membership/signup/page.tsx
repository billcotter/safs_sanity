import { MembershipSignup } from '@/components/MembershipSignup'
import { PageBanner } from '@/components/PageBanner'

export default function MembershipSignupPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageBanner
        title="Join SAFS"
        subtitle="Complete your membership application"
      />

      <div className="container mx-auto px-4 py-12">
        <MembershipSignup />
      </div>
    </div>
  )
}
