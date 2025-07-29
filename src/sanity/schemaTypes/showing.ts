import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'showing',
  title: 'Showing',
  type: 'document',
  fields: [
    defineField({
      name: 'film',
      title: 'Film',
      type: 'reference',
      to: [{ type: 'film' }],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isSpecialEvent',
      title: 'Special Event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'film.title',
      date: 'date',
      venue: 'venue',
    },
    prepare({ title, date, venue }: any) {
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        title: `${title} - ${formattedDate}`,
        subtitle: venue,
      }
    },
  },
})
