import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // For demo purposes, accept any email/password
        if (credentials?.email) {
          return {
            id: `user_${Date.now()}`,
            email: credentials.email,
            name: credentials.email.split('@')[0],
          }
        }
        return null
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('User signing in:', user.email)
      return true
    },

    async session({ session, token }) {
      if (session.user?.email) {
        session.user.id = `user_${Date.now()}`
        session.user.membership = {
          _id: `member_${Date.now()}`,
          name: session.user.name || 'Member',
          membershipTier: 'basic',
          membershipStatus: 'active',
          joinDate: new Date().toISOString().split('T')[0],
          renewalDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
          isFirstLogin: false,
          ticketCount: 0,
          favoriteCount: 0,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify',
    newUser: '/auth/welcome',
  },

  secret: process.env.NEXTAUTH_SECRET || 'your-secret-key-here',
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
