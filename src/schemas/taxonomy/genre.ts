import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'genre',
  title: 'Film Genre',
  type: 'document',
  icon: () => '🎭',
  fields: [
    defineField({
      name: 'name',
      title: 'Genre Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'parentGenre',
      title: 'Parent Genre',
      type: 'reference',
      to: [{ type: 'genre' }],
      description: 'For sub-genres (e.g., "Film Noir" under "Drama")',
    }),
    defineField({
      name: 'tmdbId',
      title: 'TMDB Genre ID',
      type: 'number',
      description: 'Matching ID from TMDB for API sync',
    }),
    defineField({
      name: 'displayColor',
      title: 'Display Color',
      type: 'string',
      options: {
        list: [
          { title: 'Terracotta', value: 'terracotta' },
          { title: 'Ocean Blue', value: 'ocean-blue' },
          { title: 'Ochre', value: 'ochre' },
          { title: 'Charcoal', value: 'charcoal' },
          { title: 'Sandstone', value: 'sandstone' },
        ],
      },
      initialValue: 'ocean-blue',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      parent: 'parentGenre.name',
    },
    prepare(selection) {
      const { title, subtitle, parent } = selection;
      return {
        title: title,
        subtitle: parent ? `${parent} > ${subtitle}` : subtitle,
      };
    },
  },
  orderings: [
    {
      title: 'Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
