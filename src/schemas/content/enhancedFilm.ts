import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'enhancedFilm',
  title: 'Film (Enhanced)',
  type: 'document',
  icon: () => '🎬',
  fields: [
    defineField({
      name: 'title',
      title: 'Film Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    // TMDB Integration
    defineField({
      name: 'tmdbId',
      title: 'TMDB ID',
      type: 'number',
      description: 'The Movie Database ID for API sync',
    }),

    // Taxonomy References
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'genre' }] }],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'filmTag' }] }],
    }),
    defineField({
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'collection' }] }],
    }),

    // People
    defineField({
      name: 'director',
      title: 'Director(s)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'cast',
      title: 'Featured Cast',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'person',
              title: 'Actor',
              type: 'reference',
              to: [{ type: 'person' }],
            },
            {
              name: 'character',
              title: 'Character Name',
              type: 'string',
            },
            {
              name: 'order',
              title: 'Billing Order',
              type: 'number',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'writers',
      title: 'Writers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'producers',
      title: 'Producers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'cinematographers',
      title: 'Cinematographers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'composers',
      title: 'Composers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),

    // Film Details
    defineField({
      name: 'year',
      title: 'Release Year',
      type: 'number',
      validation: (Rule) => Rule.min(1888).max(new Date().getFullYear() + 5),
    }),
    defineField({
      name: 'runtime',
      title: 'Runtime (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mpaaRating',
      title: 'MPAA Rating',
      type: 'string',
      options: {
        list: ['G', 'PG', 'PG-13', 'R', 'NC-17', 'Not Rated'],
      },
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country of Origin',
      type: 'string',
    }),

    // Images
    defineField({
      name: 'posterImage',
      title: 'Custom Poster',
      type: 'image',
      description: 'Upload custom poster (overrides TMDB)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backdropImage',
      title: 'Custom Backdrop',
      type: 'image',
      description: 'Upload custom backdrop (overrides TMDB)',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'stillImages',
      title: 'Still Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      description: 'Additional film stills and promotional images',
    }),

    // Society-specific
    defineField({
      name: 'curatorNotes',
      title: 'Curator Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Why this film was selected for our society',
    }),
    defineField({
      name: 'discussionGuide',
      title: 'Discussion Guide',
      type: 'file',
      description: 'PDF discussion guide for post-screening talks',
    }),
    defineField({
      name: 'discussionTopics',
      title: 'Discussion Topics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key topics for post-screening discussion',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Film',
      type: 'boolean',
      description: 'Show prominently on homepage',
      initialValue: false,
    }),

    // Technical Information
    defineField({
      name: 'format',
      title: 'Preferred Screening Format',
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
      name: 'aspectRatio',
      title: 'Aspect Ratio',
      type: 'string',
      description: 'e.g., 1.33:1, 1.85:1, 2.35:1',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      year: 'year',
      director: 'director.0.name',
      media: 'posterImage',
    },
    prepare(selection) {
      const { title, year, director, media } = selection;
      return {
        title: title,
        subtitle: `${year || 'Unknown Year'} • Dir. ${director || 'Unknown'}`,
        media: media,
      };
    },
  },

  orderings: [
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Release Year (Newest)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
});
