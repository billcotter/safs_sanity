import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'filmTag',
  title: 'Film Tag',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'name',
      title: 'Tag Name',
      type: 'string',
      validation: (Rule) => Rule.required().max(30),
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
      name: 'category',
      title: 'Tag Category',
      type: 'string',
      options: {
        list: [
          { title: 'Era/Decade', value: 'era' },
          { title: 'Film Style', value: 'style' },
          { title: 'Theme/Subject', value: 'theme' },
          { title: 'Awards/Recognition', value: 'award' },
          { title: 'Special Collection', value: 'collection' },
          { title: 'Cultural Origin', value: 'origin' },
          { title: 'Technical Aspect', value: 'technical' },
          { title: 'Screening Format', value: 'format' },
          { title: 'Audience', value: 'audience' },
          { title: 'Festival Circuit', value: 'festival' },
          { title: 'Educational', value: 'educational' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
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
      initialValue: 'ochre',
    }),
    defineField({
      name: 'isFeature',
      title: 'Featured Tag',
      type: 'boolean',
      description: 'Show prominently in filters',
      initialValue: false,
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
      subtitle: 'category',
      description: 'description',
    },
    prepare(selection) {
      const { title, subtitle, description } = selection;
      const categoryLabels = {
        era: 'Era',
        style: 'Style',
        theme: 'Theme',
        award: 'Award',
        collection: 'Collection',
        origin: 'Origin',
        technical: 'Technical',
        format: 'Format',
        audience: 'Audience',
        festival: 'Festival',
        educational: 'Educational',
      };
      return {
        title: title,
        subtitle: `${
          categoryLabels[subtitle as keyof typeof categoryLabels]
        } • ${description}`,
      };
    },
  },
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'isFeature', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
});
