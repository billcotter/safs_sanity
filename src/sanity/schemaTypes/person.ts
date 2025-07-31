export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
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
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text biography with formatting',
    },
    {
      name: 'birthDate',
      title: 'Birth Date',
      type: 'date',
    },
    {
      name: 'deathDate',
      title: 'Death Date',
      type: 'date',
      description: 'Leave empty if person is still alive',
    },
    {
      name: 'birthPlace',
      title: 'Birth Place',
      type: 'string',
      description: 'City, Country format',
    },
    {
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Primary portrait photo',
    },
    {
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'context',
              type: 'string',
              title: 'Context',
              description: 'On set, premiere, award ceremony, etc.',
            },
          ],
        },
      ],
    },
    {
      name: 'roles',
      title: 'Primary Roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Director', value: 'director' },
          { title: 'Actor', value: 'actor' },
          { title: 'Writer', value: 'writer' },
          { title: 'Producer', value: 'producer' },
          { title: 'Cinematographer', value: 'cinematographer' },
          { title: 'Editor', value: 'editor' },
          { title: 'Composer', value: 'composer' },
        ],
      },
    },
    {
      name: 'featuredWork',
      title: 'Featured Work',
      type: 'reference',
      to: [{ type: 'film' }],
      description: 'Film to showcase in banner',
    },
    {
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'award', type: 'string', title: 'Award Name' },
            { name: 'year', type: 'number', title: 'Year' },
            { name: 'category', type: 'string', title: 'Category' },
            {
              name: 'film',
              type: 'reference',
              to: [{ type: 'film' }],
              title: 'Associated Film',
            },
          ],
        },
      ],
    },
    {
      name: 'externalLinks',
      title: 'External Links',
      type: 'object',
      fields: [
        { name: 'imdb', type: 'url', title: 'IMDB Profile' },
        { name: 'wikipedia', type: 'url', title: 'Wikipedia Page' },
        { name: 'website', type: 'url', title: 'Official Website' },
        {
          name: 'social',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'platform', type: 'string', title: 'Platform' },
                { name: 'url', type: 'url', title: 'URL' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'isActive',
      title: 'Still Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'roles',
      media: 'profileImage',
    },
    prepare(selection: any) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle ? subtitle.join(', ') : 'No roles specified',
        media,
      }
    },
  },
}
