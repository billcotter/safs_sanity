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
      name: 'releaseYear',
      title: 'Release Year',
      type: 'number',
      description: 'Year the film was released',
    }),
    defineField({
      name: 'runtime',
      title: 'Runtime (minutes)',
      type: 'number',
      description: 'Film duration in minutes',
    }),
    defineField({
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Film genres',
    }),
    defineField({
      name: 'rating',
      title: 'Content Rating',
      type: 'string',
      description: 'MPAA rating or similar',
    }),
    defineField({
      name: 'imdbRating',
      title: 'IMDB Rating',
      type: 'number',
      description: 'IMDB rating out of 10',
    }),
    // Person references
    defineField({
      name: 'directors',
      title: 'Directors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Film directors',
    }),
    defineField({
      name: 'actors',
      title: 'Actors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Main actors and actresses',
    }),
    defineField({
      name: 'writers',
      title: 'Writers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Screenwriters and script writers',
    }),
    defineField({
      name: 'cinematographers',
      title: 'Cinematographers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Director of photography',
    }),
    defineField({
      name: 'producers',
      title: 'Producers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Film producers',
    }),
    defineField({
      name: 'composers',
      title: 'Composers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Music composers',
    }),
    // SAFS-specific fields
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'poster',
      tmdbId: 'tmdbId',
      directors: 'directors',
    },
    prepare({ title, media, tmdbId, directors }) {
      const directorNames =
        directors?.map((d: any) => d.name).join(', ') || 'No director'
      return {
        title: title || 'Untitled Film',
        subtitle: `${directorNames} • ${
          tmdbId ? `TMDB ID: ${tmdbId}` : 'No TMDB ID'
        }`,
        media,
      }
    },
  },
})
