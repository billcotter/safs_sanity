import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'enhancedScreening',
  title: 'Screening (Enhanced)',
  type: 'document',
  icon: () => '🎭',
  fields: [
    defineField({
      name: 'film',
      title: 'Film',
      type: 'reference',
      to: [{ type: 'enhancedFilm' }],
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
      type: 'reference',
      to: [{ type: 'venue' }],
      validation: (Rule) => Rule.required(),
    }),

    // Ticket Information
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'object',
      fields: [
        {
          name: 'general',
          title: 'General Admission',
          type: 'number',
        },
        {
          name: 'member',
          title: 'Member Price',
          type: 'number',
        },
        {
          name: 'student',
          title: 'Student Price',
          type: 'number',
        },
        {
          name: 'senior',
          title: 'Senior Price',
          type: 'number',
        },
      ],
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
      description: 'Maximum number of attendees',
    }),
    defineField({
      name: 'soldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
    }),

    // Event Type & Special Features
    defineField({
      name: 'screeningType',
      title: 'Screening Type',
      type: 'string',
      options: {
        list: [
          { title: 'Regular Screening', value: 'regular' },
          { title: 'Opening Night', value: 'opening-night' },
          { title: 'Closing Night', value: 'closing-night' },
          { title: 'Special Event', value: 'special-event' },
          { title: 'Members Only', value: 'members-only' },
          { title: 'Fundraiser', value: 'fundraiser' },
          { title: 'Educational', value: 'educational' },
          { title: 'Anniversary Screening', value: 'anniversary' },
        ],
      },
      initialValue: 'regular',
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
    }),

    // Technical & Format Details
    defineField({
      name: 'format',
      title: 'Screening Format',
      type: 'string',
      options: {
        list: [
          { title: '35mm Film', value: '35mm' },
          { title: '16mm Film', value: '16mm' },
          { title: 'Digital 4K', value: 'digital-4k' },
          { title: 'Digital 2K', value: 'digital-2k' },
          { title: 'Digital HD', value: 'digital-hd' },
          { title: '70mm', value: '70mm' },
          { title: 'IMAX', value: 'imax' },
        ],
      },
    }),
    defineField({
      name: 'audioFormat',
      title: 'Audio Format',
      type: 'string',
      options: {
        list: [
          { title: 'Stereo', value: 'stereo' },
          { title: 'Dolby Digital', value: 'dolby-digital' },
          { title: 'Dolby Atmos', value: 'dolby-atmos' },
          { title: 'DTS', value: 'dts' },
          { title: 'THX', value: 'thx' },
        ],
      },
    }),
    defineField({
      name: 'subtitles',
      title: 'Subtitles Available',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Languages for which subtitles are available',
    }),

    // Pre-Event Information
    defineField({
      name: 'preEventNotes',
      title: 'Pre-Event Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Information for attendees before the screening',
    }),
    defineField({
      name: 'specialInstructions',
      title: 'Special Instructions',
      type: 'text',
      description: 'Parking, arrival time, dress code, etc.',
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Event sponsors or partners',
    }),

    // Past Event Data
    defineField({
      name: 'isPastEvent',
      title: 'Past Event',
      type: 'boolean',
      description: 'Mark as past event for archive',
      initialValue: false,
    }),
    defineField({
      name: 'actualAttendance',
      title: 'Actual Attendance',
      type: 'number',
      description: 'Number of people who actually attended',
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
      description: 'Photos from the screening event',
    }),
    defineField({
      name: 'eventNotes',
      title: 'Event Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Notes about how the screening went',
    }),
    defineField({
      name: 'discussionHighlights',
      title: 'Discussion Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key points from post-screening discussion',
    }),
    defineField({
      name: 'audienceReaction',
      title: 'Audience Reaction',
      type: 'text',
      description: 'General audience response and feedback',
    }),
    defineField({
      name: 'guestFeedback',
      title: 'Guest Feedback',
      type: 'text',
      description: 'Quotes or feedback from special guests',
    }),

    // Revenue & Analytics (optional)
    defineField({
      name: 'revenue',
      title: 'Event Revenue',
      type: 'object',
      fields: [
        { name: 'ticketSales', title: 'Ticket Sales', type: 'number' },
        { name: 'concessions', title: 'Concessions', type: 'number' },
        { name: 'donations', title: 'Donations', type: 'number' },
        { name: 'merchandise', title: 'Merchandise', type: 'number' },
      ],
      description: 'Financial information (for past events)',
    }),
  ],

  preview: {
    select: {
      filmTitle: 'film.title',
      datetime: 'datetime',
      venue: 'venue.name',
      isPastEvent: 'isPastEvent',
      screeningType: 'screeningType',
    },
    prepare({ filmTitle, datetime, venue, isPastEvent, screeningType }) {
      const status = isPastEvent ? ' (Past Event)' : ' (Upcoming)';
      const type =
        screeningType && screeningType !== 'regular'
          ? ` [${screeningType.replace('-', ' ').toUpperCase()}]`
          : '';

      return {
        title: filmTitle || 'Unknown Film',
        subtitle: `${new Date(datetime).toLocaleDateString()} at ${
          venue || 'Unknown Venue'
        }${type}${status}`,
      };
    },
  },

  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'datetime', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'datetime', direction: 'asc' }],
    },
    {
      title: 'Venue',
      name: 'venueAsc',
      by: [
        { field: 'venue.name', direction: 'asc' },
        { field: 'datetime', direction: 'desc' },
      ],
    },
  ],
});
