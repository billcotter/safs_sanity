import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'screening',
  title: 'Screening',
  type: 'document',
  fields: [
    defineField({
      name: 'film',
      title: 'Film',
      type: 'reference',
      to: { type: 'film' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tmdbId',
      title: 'TMDB Movie ID',
      type: 'number',
      description: 'The Movie Database ID for additional metadata (optional)',
    }),
    defineField({
      name: 'datetime',
      title: 'Date & Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      initialValue: 'Historic Marion Theatre',
    }),
    defineField({
      name: 'venueAddress',
      title: 'Venue Address',
      type: 'text',
      initialValue: '50 S Magnolia Ave, St. Augustine, FL 32084',
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'string',
      placeholder: '$12 General / $10 Members',
    }),
    defineField({
      name: 'ticketLink',
      title: 'Ticket Purchase Link',
      type: 'url',
    }),
    defineField({
      name: 'capacity',
      title: 'Venue Capacity',
      type: 'number',
      initialValue: 100,
    }),
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'attendance',
      title: 'Actual Attendance',
      type: 'number',
      description: 'Number of people who attended (for past screenings)',
    }),
    defineField({
      name: 'isPastEvent',
      title: 'Past Event',
      type: 'boolean',
      description: 'Check if this is a past screening for archive',
      initialValue: false,
    }),
    defineField({
      name: 'specialNotes',
      title: 'Special Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Director intro, Q&A, special format, etc.',
    }),
    defineField({
      name: 'eventPhotos',
      title: 'Event Photos',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Photos from the actual screening event',
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'discussionHighlights',
      title: 'Discussion Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key points from post-screening discussion',
    }),
  ],
  preview: {
    select: {
      title: 'film.title',
      datetime: 'datetime',
      venue: 'venue',
      isPastEvent: 'isPastEvent',
    },
    prepare({ title, datetime, venue, isPastEvent }) {
      const date = new Date(datetime)
      const status = isPastEvent ? 'Past Event' : 'Upcoming'
      return {
        title: title || 'Film Screening',
        subtitle: `${date.toLocaleDateString()} at ${venue} (${status})`,
      }
    },
  },
})
