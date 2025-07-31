import { FilmDetailPage } from '@/components/FilmDetailPage'
import { client } from '@/lib/sanity'

import { notFound } from 'next/navigation'

interface FilmDetailPageProps {
  params: {
    slug: string
  }
}

// Mock film data for fallback
const mockFilms = {
  '1': {
    _id: '1',
    title: 'The Grand Budapest Hotel',
    slug: { current: '1' },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'A legendary concierge at a famous European hotel between the wars becomes a trusted friend and mentor to a young employee.',
    tmdbId: null,
    director: 'Wes Anderson',
    runtime: 99,
    genres: ['Comedy', 'Drama'],
    releaseYear: 2014,
    mpaaRating: 'R',
    language: 'English',
    country: 'USA',
    screenings: [
      {
        _id: 'screening-1',
        datetime: '2024-12-15T19:30:00Z',
        venue: 'Flagler College Auditorium',
        ticketPrice: 12,
        memberNotes:
          'Special introduction by local film historian Dr. Sarah Mitchell',
        specialEvents: ['Q&A Session', 'Refreshments Available'],
      },
    ],
  },
  '2': {
    _id: '2',
    title: 'Parasite',
    slug: { current: '2' },
    poster:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop',
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    tmdbId: null,
    director: 'Bong Joon-ho',
    runtime: 132,
    genres: ['Thriller', 'Drama'],
    releaseYear: 2019,
    mpaaRating: 'R',
    language: 'Korean',
    country: 'South Korea',
    screenings: [], // No screenings - should not show Purchase Ticket button
  },
  '3': {
    _id: '3',
    title: 'La La Land',
    slug: { current: '3' },
    poster:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop',
    synopsis: 'A jazz pianist falls for an aspiring actress in Los Angeles.',
    tmdbId: null,
    director: 'Damien Chazelle',
    runtime: 128,
    genres: ['Musical', 'Romance'],
    releaseYear: 2016,
    mpaaRating: 'PG-13',
    language: 'English',
    country: 'USA',
    screenings: [
      {
        _id: 'screening-3',
        datetime: '2024-12-17T14:00:00Z',
        venue: 'Lightner Museum',
        ticketPrice: 12,
        memberNotes: 'Sunday matinee with afternoon tea service',
        specialEvents: ['Afternoon Tea', 'Costume Contest'],
      },
    ],
  },
  '552524': {
    _id: '552524',
    title: 'The French Dispatch',
    slug: { current: '552524' },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city.',
    tmdbId: null,
    director: 'Wes Anderson',
    runtime: 108,
    genres: ['Comedy', 'Drama', 'Romance'],
    releaseYear: 2021,
    mpaaRating: 'R',
    language: 'English',
    country: 'USA',
    screenings: [
      {
        _id: 'screening-552524',
        datetime: '2024-12-18T20:00:00Z',
        venue: 'St. Augustine Amphitheatre',
        ticketPrice: 12,
        memberNotes: 'Special screening with wine and cheese reception',
        specialEvents: ['Wine & Cheese Reception', 'Director Q&A'],
      },
    ],
  },
}

// Generate fallback film for any ID not in our data
function generateFallbackFilm(id: string) {
  return {
    _id: id,
    title: `Film ${id}`,
    slug: { current: id },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'A compelling story that explores the human condition through the lens of cinema.',
    tmdbId: null,
    director: 'Unknown Director',
    runtime: 120,
    genres: ['Drama'],
    releaseYear: 2024,
    mpaaRating: 'PG-13',
    language: 'English',
    country: 'USA',
    screenings: [], // No screenings for fallback films
  }
}

// Function to create pretty URLs from film titles
function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Updated mock films with pretty URLs
const mockFilmsWithSlugs = {
  'the-grand-budapest-hotel': {
    _id: '1',
    title: 'The Grand Budapest Hotel',
    slug: { current: 'the-grand-budapest-hotel' },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'A legendary concierge at a famous European hotel between the wars becomes a trusted friend and mentor to a young employee.',
    tmdbId: null,
    director: 'Wes Anderson',
    runtime: 99,
    genres: ['Comedy', 'Drama'],
    releaseYear: 2014,
    mpaaRating: 'R',
    language: 'English',
    country: 'USA',
    screenings: [
      {
        _id: 'screening-1',
        datetime: '2024-12-15T19:30:00Z',
        venue: 'Flagler College Auditorium',
        ticketPrice: 12,
        memberNotes:
          'Special introduction by local film historian Dr. Sarah Mitchell',
        specialEvents: ['Q&A Session', 'Refreshments Available'],
      },
    ],
  },
  parasite: {
    _id: '2',
    title: 'Parasite',
    slug: { current: 'parasite' },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    tmdbId: null,
    director: 'Bong Joon-ho',
    runtime: 132,
    genres: ['Thriller', 'Drama'],
    releaseYear: 2019,
    mpaaRating: 'R',
    language: 'Korean',
    country: 'South Korea',
    screenings: [], // No screenings - should not show Purchase Ticket button
  },
  'la-la-land': {
    _id: '3',
    title: 'La La Land',
    slug: { current: 'la-la-land' },
    poster:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=450&fit=crop',
    synopsis: 'A jazz pianist falls for an aspiring actress in Los Angeles.',
    tmdbId: null,
    director: 'Damien Chazelle',
    runtime: 128,
    genres: ['Musical', 'Romance'],
    releaseYear: 2016,
    mpaaRating: 'PG-13',
    language: 'English',
    country: 'USA',
    screenings: [], // No screenings - should not show Purchase Ticket button
  },
  'the-french-dispatch': {
    _id: '552524',
    title: 'The French Dispatch',
    slug: { current: 'the-french-dispatch' },
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=450&fit=crop',
    synopsis:
      'A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city.',
    tmdbId: null,
    director: 'Wes Anderson',
    runtime: 108,
    genres: ['Comedy', 'Drama', 'Romance'],
    releaseYear: 2021,
    mpaaRating: 'R',
    language: 'English',
    country: 'USA',
    screenings: [
      {
        _id: 'screening-552524',
        datetime: '2024-12-18T20:00:00Z',
        venue: 'St. Augustine Amphitheatre',
        ticketPrice: 12,
        memberNotes: 'Special screening with wine and cheese reception',
        specialEvents: ['Wine & Cheese Reception', 'Director Q&A'],
      },
    ],
  },
}

export default async function FilmDetailPageRoute({
  params,
}: FilmDetailPageProps) {
  const { slug } = await params

  let film = null

  // First try to fetch from Sanity
  try {
    film = await client.fetch(
      `
      *[_type == "film" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        poster,
        synopsis,
        tmdbId,
        director,
        runtime,
        genres,
        releaseYear,
        mpaaRating,
        language,
        country,
        "screenings": *[_type == "screening" && references(^._id)] {
          _id,
          datetime,
          venue,
          ticketPrice,
          memberNotes,
          specialEvents
        }
      }
      `,
      { slug }
    )
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
  }

  // If not found in Sanity, try mock data with pretty URLs
  if (!film) {
    film = mockFilmsWithSlugs[slug as keyof typeof mockFilmsWithSlugs]
  }

  // If still not found, try legacy numeric IDs
  if (!film) {
    film = mockFilms[slug as keyof typeof mockFilms]
  }

  // If still not found, generate a fallback film
  if (!film) {
    film = generateFallbackFilm(slug)
  }

  if (!film) {
    notFound()
  }

  // For now, we'll use mock TMDB data
  let tmdbData = null
  if (film.tmdbId) {
    // Mock TMDB data
    tmdbData = {
      plot: film.synopsis,
      cast: [],
      director: null,
      trailer: null,
      rating: 8.5,
      runtime: film.runtime,
      poster: film.poster,
      backdrop: film.poster,
    }
  } else {
    // Provide mock cast data for films without TMDB IDs
    tmdbData = {
      plot: film.synopsis,
      cast: [
        {
          id: 1,
          name: 'Song Kang-ho',
          character: 'Ki-taek',
          profile_path: '/images/actors/song-kang-ho.jpg',
          biography:
            'A versatile actor known for his powerful performances in Korean cinema.',
        },
        {
          id: 2,
          name: 'Lee Sun-kyun',
          character: 'Dong-ik',
          profile_path: '/images/actors/lee-sun-kyun.jpg',
          biography:
            'An acclaimed actor with a diverse range of roles in film and television.',
        },
        {
          id: 3,
          name: 'Cho Yeo-jeong',
          character: 'Yeon-gyo',
          profile_path: '/images/actors/cho-yeo-jeong.jpg',
          biography:
            'A talented actress known for her compelling character portrayals.',
        },
      ],
      director: {
        id: 4,
        name: film.director,
        job: 'Director',
        profile_path: '/images/directors/bong-joon-ho.jpg',
        biography:
          'A visionary director known for their unique storytelling approach and artistic vision.',
      },
      trailer: null,
      rating: 8.5,
      runtime: film.runtime,
      poster: film.poster,
      backdrop: film.poster,
    }
  }

  return (
    <FilmDetailPage
      film={film}
      safsContent={film.screenings}
      tmdbData={tmdbData}
    />
  )
}
