export default {
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich description of the venue and its history',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', type: 'string', title: 'Street Address' },
        { name: 'city', type: 'string', title: 'City' },
        { name: 'state', type: 'string', title: 'State' },
        { name: 'zipCode', type: 'string', title: 'ZIP Code' },
        {
          name: 'country',
          type: 'string',
          title: 'Country',
          initialValue: 'USA',
        },
      ],
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint',
      description: 'For map integration',
    },
    {
      name: 'capacity',
      title: 'Seating Capacity',
      type: 'number',
    },
    {
      name: 'established',
      title: 'Year Established',
      type: 'number',
    },
    {
      name: 'venueType',
      title: 'Venue Type',
      type: 'string',
      options: {
        list: [
          { title: 'Historic Theater', value: 'historic-theater' },
          { title: 'Modern Cinema', value: 'modern-cinema' },
          { title: 'Community Center', value: 'community-center' },
          { title: 'Outdoor Venue', value: 'outdoor-venue' },
          { title: 'Museum', value: 'museum' },
          { title: 'University', value: 'university' },
        ],
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main venue photograph',
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Caption' },
            {
              name: 'photographer',
              type: 'string',
              title: 'Photographer Credit',
            },
          ],
        },
      ],
    },
    {
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Parking, accessibility, concessions, etc.',
    },
    {
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', type: 'string', title: 'Phone Number' },
        { name: 'email', type: 'email', title: 'Email' },
        { name: 'website', type: 'url', title: 'Website' },
      ],
    },
    {
      name: 'isActive',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'venueType',
      media: 'heroImage',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle
          ? subtitle
              .replace('-', ' ')
              .replace(/\b\w/g, (l: string) => l.toUpperCase())
          : 'No type specified',
        media,
      }
    },
  },
}
