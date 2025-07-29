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
      venue: 'venue',
    },
    prepare({ title, datetime, venue }) {
      return {
        title: title || 'Film Screening',
        subtitle: `${new Date(datetime).toLocaleDateString()} at ${venue}`,
      }
    },
  },
})
