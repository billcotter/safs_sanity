import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'collection',
  title: 'Film Collection',
  type: 'document',
  icon: () => '📚',
  fields: [
    defineField({
      name: 'name',
      title: 'Collection Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'curatedBy',
      title: 'Curated By',
      type: 'string',
      description: 'Person or organization who curated this collection',
    }),
    defineField({
      name: 'collectionType',
      title: 'Collection Type',
      type: 'string',
      options: {
        list: [
          { title: 'Retrospective', value: 'retrospective' },
          { title: 'Film Festival', value: 'festival' },
          { title: 'Director Spotlight', value: 'director-spotlight' },
          { title: 'Genre Series', value: 'genre-series' },
          { title: 'Seasonal', value: 'seasonal' },
          { title: 'Educational', value: 'educational' },
          { title: 'Community Choice', value: 'community-choice' },
          { title: 'Anniversary Series', value: 'anniversary' },
          { title: 'Local Filmmaker', value: 'local-filmmaker' },
        ],
      },
    }),
    defineField({
      name: 'featuredFilms',
      title: 'Featured Films',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'film' }] }],
      description: 'Key films that represent this collection',
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'startDate',
      title: 'Collection Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'Collection End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
          { title: 'Sandstone', value: 'sandstone' },
          { title: 'Charcoal', value: 'charcoal' },
        ],
      },
      initialValue: 'terracotta',
    }),
    defineField({
      name: 'collectionsOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order for displaying collections',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Currently Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'collectionType',
      media: 'featuredImage',
      curatedBy: 'curatedBy',
    },
    prepare(selection) {
      const { title, subtitle, media, curatedBy } = selection;
      const typeLabels = {
        retrospective: 'Retrospective',
        festival: 'Film Festival',
        'director-spotlight': 'Director Spotlight',
        'genre-series': 'Genre Series',
        seasonal: 'Seasonal',
        educational: 'Educational',
        'community-choice': 'Community Choice',
        anniversary: 'Anniversary Series',
        'local-filmmaker': 'Local Filmmaker',
      };

      return {
        title: title,
        subtitle: `${
          typeLabels[subtitle as keyof typeof typeLabels] || subtitle
        }${curatedBy ? ` • Curated by ${curatedBy}` : ''}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'collectionsOrder', direction: 'asc' }],
    },
    {
      title: 'Start Date (Newest)',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Collection Type',
      name: 'typeAsc',
      by: [
        { field: 'collectionType', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
  ],
});
