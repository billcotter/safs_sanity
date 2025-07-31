'use client'

import { Bell, Eye, Mail, Shield, Trash2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function SettingsPage() {
  const { data: session } = useSession()
  const user = session?.user
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const [settings, setSettings] = useState({
    emailNotifications: true,
    marketingEmails: false,
    publicProfile: false,
    twoFactorAuth: false,
    darkMode: false,
  })

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <h1 className="text-3xl font-bold text-charcoal mb-2">Settings</h1>
        <p className="text-charcoal/70">
          Manage your account preferences and privacy settings
        </p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-ocean-blue mr-2" />
          <h2 className="text-xl font-semibold text-charcoal">
            Notification Preferences
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Email Notifications</p>
              <p className="text-sm text-charcoal/60">
                Receive notifications about new films and events
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) =>
                  handleSettingChange('emailNotifications', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-charcoal/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-blue"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Marketing Emails</p>
              <p className="text-sm text-charcoal/60">
                Receive promotional content and special offers
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.marketingEmails}
                onChange={(e) =>
                  handleSettingChange('marketingEmails', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-charcoal/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-blue"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <div className="flex items-center mb-4">
          <Shield className="h-5 w-5 text-terracotta mr-2" />
          <h2 className="text-xl font-semibold text-charcoal">
            Privacy Settings
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Public Profile</p>
              <p className="text-sm text-charcoal/60">
                Allow other members to see your profile
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.publicProfile}
                onChange={(e) =>
                  handleSettingChange('publicProfile', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-charcoal/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-blue"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">
                Two-Factor Authentication
              </p>
              <p className="text-sm text-charcoal/60">
                Add an extra layer of security to your account
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactorAuth}
                onChange={(e) =>
                  handleSettingChange('twoFactorAuth', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-charcoal/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-blue"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <div className="flex items-center mb-4">
          <Eye className="h-5 w-5 text-ochre mr-2" />
          <h2 className="text-xl font-semibold text-charcoal">
            Display Settings
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Dark Mode</p>
              <p className="text-sm text-charcoal/60">
                Switch between light and dark themes
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) =>
                  handleSettingChange('darkMode', e.target.checked)
                }
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-charcoal/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ocean-blue/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-charcoal/20 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-blue"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Data Export */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-sandstone-dark">
        <div className="flex items-center mb-4">
          <Mail className="h-5 w-5 text-ocean-blue mr-2" />
          <h2 className="text-xl font-semibold text-charcoal">
            Data Management
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Export My Data</p>
              <p className="text-sm text-charcoal/60">
                Download a copy of your personal data
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-ocean-blue hover:text-ocean-blue-dark transition-colors">
              Export
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-sandstone-light rounded-lg">
            <div>
              <p className="font-medium text-charcoal">Delete Account</p>
              <p className="text-sm text-charcoal/60">
                Permanently delete your account and all data
              </p>
            </div>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors flex items-center"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-charcoal/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-semibold text-charcoal mb-2">
              Delete Account
            </h3>
            <p className="text-charcoal/70 mb-4">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-sandstone bg-red-600 hover:bg-red-700 rounded-md transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
