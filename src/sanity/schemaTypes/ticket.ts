import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ticket',
  title: 'Ticket',
  type: 'document',
  fields: [
    defineField({
      name: 'member',
      title: 'Member',
      type: 'reference',
      to: [{ type: 'member' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'screening',
      title: 'Screening',
      type: 'reference',
      to: [{ type: 'screening' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quantity',
      title: 'Number of Tickets',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    }),
    defineField({
      name: 'discountApplied',
      title: 'Member Discount Applied',
      type: 'number',
      description: 'Amount saved with membership',
    }),
    defineField({
      name: 'purchaseDate',
      title: 'Purchase Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Confirmed', value: 'confirmed' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      initialValue: 'confirmed',
    }),
    defineField({
      name: 'stripePaymentId',
      title: 'Stripe Payment ID',
      type: 'string',
    }),
    defineField({
      name: 'attended',
      title: 'Attended',
      type: 'boolean',
      description: 'Mark as attended after the screening',
    }),
  ],

  preview: {
    select: {
      title: 'member.name',
      subtitle1: 'screening.film.title',
      subtitle2: 'quantity',
      subtitle3: 'totalPrice',
      media: 'screening.film.poster',
    },
    prepare({ title, subtitle1, subtitle2, subtitle3, media }) {
      return {
        title: `${title} - ${subtitle1}`,
        subtitle: `${subtitle2} ticket(s) • $${subtitle3}`,
        media,
      }
    },
  },
})
