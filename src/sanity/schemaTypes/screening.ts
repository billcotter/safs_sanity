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
      name: 'datetime',
      title: 'Date & Time',
      type: 'datetime',
      description: 'When the screening takes place',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: { type: 'venue' },
      validation: (Rule) => Rule.required(),
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
      description: 'Maximum number of attendees',
    }),
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
      description: 'Check if the screening is sold out',
    }),
    defineField({
      name: 'isPastEvent',
      title: 'Past Event',
      type: 'boolean',
      description:
        'IMPORTANT: Check this box for events that have already occurred. This will make the screening appear in the archive.',
      initialValue: false,
    }),
    defineField({
      name: 'attendance',
      title: 'Expected Attendance',
      type: 'number',
      description: 'Expected number of attendees (for future events)',
    }),
    defineField({
      name: 'actualAttendance',
      title: 'Actual Attendance',
      type: 'number',
      description: 'Number of people who actually attended (for past events)',
    }),
    defineField({
      name: 'specialGuests',
      title: 'Special Guests',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Directors, actors, or other special guests',
    }),
    defineField({
      name: 'guestAppearanceType',
      title: 'Guest Appearance Type',
      type: 'string',
      options: {
        list: [
          { title: 'Q&A Session', value: 'qa' },
          { title: 'Introduction', value: 'introduction' },
          { title: 'Panel Discussion', value: 'panel' },
          { title: 'Meet & Greet', value: 'meet-greet' },
          { title: 'Masterclass', value: 'masterclass' },
        ],
      },
      description: 'Type of guest appearance',
    }),
    defineField({
      name: 'eventPhotos',
      title: 'Event Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            { name: 'photographer', type: 'string', title: 'Photographer' },
          ],
        },
      ],
      description: 'Photos from the screening event (for past events)',
    }),
    defineField({
      name: 'eventNotes',
      title: 'Event Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Rich text notes about the screening event (for past events)',
    }),
    defineField({
      name: 'discussionHighlights',
      title: 'Discussion Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description:
        'Key points from post-screening discussion (for past events)',
    }),
    defineField({
      name: 'guestFeedback',
      title: 'Guest Feedback',
      type: 'text',
      description: 'Feedback or quotes from special guests (for past events)',
    }),
    defineField({
      name: 'specialNotes',
      title: 'Special Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Director intro, Q&A, special format, etc.',
    }),
  ],
  preview: {
    select: {
      title: 'film.title',
      datetime: 'datetime',
      venue: 'venue.name',
      isPastEvent: 'isPastEvent',
    },
    prepare({ title, datetime, venue, isPastEvent }) {
      const status = isPastEvent ? ' (Past Event)' : ' (Upcoming)'
      return {
        title: title || 'Film Screening',
        subtitle: `${new Date(datetime).toLocaleDateString()} at ${
          venue || 'Unknown Venue'
        }${status}`,
      }
    },
  },
})
