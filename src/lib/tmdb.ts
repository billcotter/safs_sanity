// TMDB API Integration for SAFS
export interface TMDBMovie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  runtime: number | null
  vote_average: number
  vote_count: number
  genres: { id: number; name: string }[]
  credits: {
    cast: TMDBCastMember[]
    crew: TMDBCrewMember[]
  }
  videos: {
    results: TMDBVideo[]
  }
}

export interface TMDBCastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
  order: number
}

export interface TMDBCrewMember {
  id: number
  name: string
  job: string
  department: string
  profile_path: string | null
}

export interface TMDBVideo {
  id: string
  key: string
  name: string
  site: string
  type: string
  official: boolean
}

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p'

export async function fetchTMDBMovie(
  tmdbId: number
): Promise<TMDBMovie | null> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  if (!apiKey) {
    console.error('TMDB API key not found')
    return null
  }

  try {
    const response = await fetch(
      `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${apiKey}&append_to_response=credits,videos`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    )

    if (!response.ok) {
      console.error(`TMDB API error: ${response.status} ${response.statusText}`)
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching TMDB data:', error)
    return null
  }
}

export function getTMDBImageUrl(
  path: string | null,
  size: string = 'w500'
): string {
  if (!path) return '/placeholder-poster.jpg'
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`
}

export function getTrailerUrl(videos: TMDBVideo[]): string | null {
  const trailer =
    videos.find(
      (video) =>
        video.type === 'Trailer' && video.site === 'YouTube' && video.official
    ) ||
    videos.find((video) => video.type === 'Trailer' && video.site === 'YouTube')

  return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null
}

export function getDirector(crew: TMDBCrewMember[]): TMDBCrewMember | null {
  return crew.find((person) => person.job === 'Director') || null
}

export function getMainCast(
  cast: TMDBCastMember[],
  limit: number = 6
): TMDBCastMember[] {
  return cast.slice(0, limit)
}
