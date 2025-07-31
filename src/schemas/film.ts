import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'film',
  title: 'Film',
  type: 'document',
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
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tmdbId',
      title: 'TMDB Movie ID',
      type: 'number',
      description: 'The Movie Database ID (e.g., 238 for The Godfather)',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'poster',
      title: 'Movie Poster',
      type: 'image',
      description: 'Will auto-populate from TMDB if left empty',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'synopsis',
      title: 'Synopsis',
      type: 'text',
      description: 'Will auto-populate from TMDB if left empty',
      rows: 4,
    }),
    defineField({
      name: 'memberNotes',
      title: 'SAFS Member Notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Special notes for film society members',
    }),
    defineField({
      name: 'discussionTopics',
      title: 'Discussion Topics',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Topics for post-screening discussion',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Film',
      type: 'boolean',
      description: 'Show prominently on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'stillImages',
      title: 'Still Images',
      type: 'array',
      of: [{ type: 'image' }],
      description: 'Screenshots and stills from the film for the detail page',
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
      tmdbId: 'tmdbId',
    },
    prepare({ title, media, tmdbId }) {
      return {
        title: title || 'Untitled Film',
        subtitle: tmdbId ? `TMDB ID: ${tmdbId}` : 'No TMDB ID',
        media,
      }
    },
  },
})
