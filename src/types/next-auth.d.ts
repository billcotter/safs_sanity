import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      membership?: {
        _id: string
        name: string
        membershipTier: string
        membershipStatus: string
        joinDate: string
        renewalDate?: string
        isFirstLogin: boolean
        ticketCount: number
        favoriteCount: number
      }
    }
  }

  interface User {
    id?: string
    name?: string | null
    email?: string | null
    image?: string | null
  }
}
