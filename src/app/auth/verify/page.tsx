import { CheckCircle, Mail, ArrowRight, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export default function VerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Success Header */}
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Thank You!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We've sent you a verification email
          </p>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-lg px-6 py-8">
          <div className="text-center mb-6">
            <Mail className="mx-auto h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Check Your Email
            </h3>
            <p className="text-gray-600">
              We've sent a secure login link to your email address. 
              Click the link in the email to access your dashboard.
            </p>
          </div>
          
          {/* What Happens Next */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-blue-500" />
              What happens next?
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Click the login link</strong> in your email
                </p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Welcome screen</strong> will greet you (first time only)
                </p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Your personal dashboard</strong> will open automatically
                </p>
              </div>
              <div className="flex items-start">
                <ArrowRight className="h-4 w-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  <strong>Start exploring</strong> films and booking tickets
                </p>
              </div>
            </div>
          </div>
          
          {/* Security Note */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <Shield className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="text-sm font-medium text-blue-900">Secure Login</h5>
                <p className="text-sm text-blue-700 mt-1">
                  We use magic links for secure, password-free authentication. 
                  The link expires in 24 hours for your security.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="text-center text-sm text-gray-500">
          <p className="mb-2">Didn't receive an email?</p>
          <div className="space-x-2">
            <span>Check your spam folder or</span>
            <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
              try again
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 