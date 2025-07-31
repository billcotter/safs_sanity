import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    // Identity
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    // Membership Details
    defineField({
      name: 'membershipTier',
      title: 'Membership Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Individual ($50/year)', value: 'individual' },
          { title: 'Family ($85/year)', value: 'family' },
          { title: 'Patron ($150/year)', value: 'patron' },
          { title: 'Lifetime ($500)', value: 'lifetime' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'membershipStatus',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Expired', value: 'expired' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
      },
      initialValue: 'active',
    }),
    defineField({
      name: 'joinDate',
      title: 'Join Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'renewalDate',
      title: 'Renewal Date',
      type: 'date',
    }),

    // Payment Info
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'paymentHistory',
      title: 'Payment History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', type: 'date', title: 'Payment Date' },
            { name: 'amount', type: 'number', title: 'Amount' },
            { name: 'description', type: 'string', title: 'Description' },
            {
              name: 'stripePaymentId',
              type: 'string',
              title: 'Stripe Payment ID',
            },
          ],
        },
      ],
    }),

    // Preferences & Activity
    defineField({
      name: 'favoriteGenres',
      title: 'Favorite Genres',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Drama',
          'Comedy',
          'Documentary',
          'Horror',
          'Action',
          'Romance',
          'Thriller',
          'Sci-Fi',
          'Historical',
          'International',
        ],
      },
    }),
    defineField({
      name: 'favoriteFilms',
      title: 'Favorite Films',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'film' }] }],
    }),
    defineField({
      name: 'preferredVenues',
      title: 'Preferred Venues',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'venue' }] }],
    }),

    // Profile
    defineField({
      name: 'bio',
      title: 'Member Bio',
      type: 'text',
      description: 'Optional: Share your film interests with the community',
    }),
    defineField({
      name: 'profilePhoto',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),

    // Privacy & Communication
    defineField({
      name: 'emailOptIn',
      title: 'Email Newsletter',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publicProfile',
      title: 'Public Profile',
      type: 'boolean',
      initialValue: false,
      description: 'Allow other members to see your profile',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle1: 'email',
      subtitle2: 'membershipTier',
      media: 'profilePhoto',
    },
    prepare({ title, subtitle1, subtitle2, media }) {
      return {
        title,
        subtitle: `${subtitle1} • ${subtitle2}`,
        media,
      }
    },
  },
})
