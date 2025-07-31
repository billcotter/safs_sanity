# SAFS Authentication System Setup

## Overview

The St. Augustine Film Society website now includes a complete authentication system with:

- ✅ Email-based authentication (magic links)
- ✅ Protected dashboard with user management
- ✅ Integration with Sanity CMS member records
- ✅ Complete user flow: signup → verification → welcome → dashboard

## Environment Variables Required

Add these to your `.env.local` file:

```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Email Configuration (Gmail example)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-gmail-app-password
EMAIL_FROM="St. Augustine Film Society <noreply@safs.org>"

# Optional: Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Sanity (existing)
NEXT_PUBLIC_SANITY_PROJECT_ID=rqfiyt6m
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
```

## Email Setup Instructions

### Gmail Setup (Recommended for Development)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. Use the generated password as `EMAIL_SERVER_PASSWORD`

### Production Email Services

For production, consider using:

- **SendGrid**: Professional email delivery
- **Resend**: Modern email API
- **Postmark**: Transactional email service

## User Flow

### New User Registration:

1. User visits `/auth/signup`
2. Enters name and email
3. Redirected to `/auth/verify` (thank you page)
4. Clicks email magic link
5. Goes to `/auth/welcome` (first-time only)
6. Redirected to `/dashboard`

### Returning User Login:

1. User visits `/auth/signin`
2. Enters email
3. Clicks email magic link
4. Directly goes to `/dashboard`

## Dashboard Features

### Protected Routes

- `/dashboard` - Main dashboard overview
- `/dashboard/profile` - User profile management
- `/dashboard/tickets` - Ticket history
- `/dashboard/favorites` - Favorite films
- `/dashboard/membership` - Membership details
- `/dashboard/settings` - Account settings

### Features Implemented

- ✅ User authentication with NextAuth.js
- ✅ Email magic link authentication
- ✅ Protected dashboard layout
- ✅ User profile management
- ✅ Membership integration with Sanity
- ✅ Responsive design with SAFS brand colors
- ✅ Loading states and error handling

## Sanity Integration

The authentication system automatically:

1. **Creates member records** in Sanity when users sign up
2. **Updates session data** with membership information
3. **Tracks login activity** and user preferences
4. **Manages membership tiers** and status

### Member Schema Fields

- `email` - User's email address
- `name` - User's full name
- `joinDate` - When they joined
- `membershipTier` - Current membership level
- `membershipStatus` - Active/inactive status
- `emailOptIn` - Email preferences
- `publicProfile` - Privacy settings
- `isFirstLogin` - First-time user flag

## Testing the System

1. **Start the development server:**

   ```bash
   pnpm dev
   ```

2. **Test the signup flow:**

   - Visit `http://localhost:3000/auth/signup`
   - Enter test email and name
   - Check email for magic link
   - Click link to complete registration

3. **Test the dashboard:**
   - Should redirect to `/dashboard` after login
   - All dashboard pages should be accessible
   - User menu should show profile options

## Troubleshooting

### Common Issues

1. **Email not sending:**

   - Check email server credentials
   - Verify Gmail app password is correct
   - Check spam folder for test emails

2. **Dashboard not loading:**

   - Ensure NEXTAUTH_SECRET is set
   - Check Sanity API token is valid
   - Verify environment variables are loaded

3. **Session not persisting:**
   - Check NEXTAUTH_URL is correct
   - Verify cookies are enabled
   - Check browser console for errors

### Debug Mode

Add this to your `.env.local` for debugging:

```bash
NEXTAUTH_DEBUG=true
```

## Security Considerations

- ✅ Magic links expire after 24 hours
- ✅ Session management with secure cookies
- ✅ CSRF protection enabled
- ✅ Environment variables for sensitive data
- ✅ Sanity integration with proper authentication

## Next Steps

1. **Set up email service** for production
2. **Configure Google OAuth** (optional)
3. **Add payment integration** for membership tiers
4. **Implement ticket booking** system
5. **Add admin dashboard** for user management

## Files Created/Modified

### New Files:

- `src/app/dashboard/layout.tsx` - Protected dashboard layout
- `src/app/dashboard/page.tsx` - Dashboard overview
- `src/app/dashboard/profile/page.tsx` - Profile management
- `src/app/dashboard/tickets/page.tsx` - Ticket history
- `src/app/dashboard/membership/page.tsx` - Membership details
- `src/app/dashboard/favorites/page.tsx` - Favorite films
- `src/app/dashboard/settings/page.tsx` - Account settings
- `src/components/DashboardHeader.tsx` - Dashboard header
- `src/components/DashboardSidebar.tsx` - Dashboard navigation
- `src/types/next-auth.d.ts` - TypeScript declarations

### Existing Files (Already Implemented):

- `src/app/auth/signin/page.tsx` - Login page
- `src/app/auth/signup/page.tsx` - Registration page
- `src/app/auth/verify/page.tsx` - Email verification page
- `src/app/auth/welcome/page.tsx` - Welcome page
- `src/app/api/auth/[...nextauth]/route.ts` - NextAuth configuration

The authentication system is now complete and ready for testing!
