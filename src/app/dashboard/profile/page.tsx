'use client'

import { Calendar, Mail, Save, Star, User } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function ProfilePage() {
  const { data: session } = useSession()
  const user = session?.user
  const membership = user?.membership
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    emailOptIn: membership?.emailOptIn || true,
    publicProfile: membership?.publicProfile || false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement profile update logic
    setIsEditing(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">
          Profile Settings
        </h1>
        <p className="text-charcoal/70">
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Form */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-charcoal">
            Personal Information
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 text-sm font-medium text-ocean-blue hover:text-ocean-blue-dark transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full pl-10 pr-3 py-2 border border-sandstone-dark rounded-md disabled:bg-sandstone-light disabled:text-charcoal/60 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full pl-10 pr-3 py-2 border border-sandstone-dark rounded-md disabled:bg-sandstone-light disabled:text-charcoal/60 focus:outline-none focus:ring-2 focus:ring-ocean-blue focus:border-ocean-blue"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Member Since
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
                <input
                  type="text"
                  value={
                    membership?.joinDate
                      ? new Date(membership.joinDate).toLocaleDateString()
                      : 'N/A'
                  }
                  disabled
                  className="w-full pl-10 pr-3 py-2 border border-sandstone-dark rounded-md bg-sandstone-light text-charcoal/60"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Membership Status
              </label>
              <div className="relative">
                <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal/40" />
                <input
                  type="text"
                  value={membership?.membershipStatus || 'N/A'}
                  disabled
                  className="w-full pl-10 pr-3 py-2 border border-sandstone-dark rounded-md bg-sandstone-light text-charcoal/60"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailOptIn"
                checked={formData.emailOptIn}
                onChange={(e) =>
                  setFormData({ ...formData, emailOptIn: e.target.checked })
                }
                disabled={!isEditing}
                className="h-4 w-4 text-ocean-blue focus:ring-ocean-blue border-sandstone-dark rounded"
              />
              <label
                htmlFor="emailOptIn"
                className="ml-2 text-sm text-charcoal"
              >
                Receive email updates about new films and events
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="publicProfile"
                checked={formData.publicProfile}
                onChange={(e) =>
                  setFormData({ ...formData, publicProfile: e.target.checked })
                }
                disabled={!isEditing}
                className="h-4 w-4 text-ocean-blue focus:ring-ocean-blue border-sandstone-dark rounded"
              />
              <label
                htmlFor="publicProfile"
                className="ml-2 text-sm text-charcoal"
              >
                Allow my profile to be visible to other members
              </label>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-sandstone bg-ocean-blue hover:bg-ocean-blue-dark rounded-md transition-colors flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Membership Information */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Membership Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <Star className="h-8 w-8 text-ochre mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Membership Tier</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.membershipTier || 'None'}
            </p>
          </div>

          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <Calendar className="h-8 w-8 text-ocean-blue mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Member Since</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.joinDate
                ? new Date(membership.joinDate).getFullYear()
                : 'N/A'}
            </p>
          </div>

          <div className="text-center p-4 bg-sandstone-light rounded-lg">
            <User className="h-8 w-8 text-terracotta mx-auto mb-2" />
            <p className="text-sm font-medium text-charcoal">Status</p>
            <p className="text-lg font-bold text-charcoal">
              {membership?.membershipStatus || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
