// TMDB API integration
export interface TMDBMovie {
  id: number
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  runtime: number
  vote_average: number
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
  name: string
  character: string
  profile_path: string | null
}

export interface TMDBCrewMember {
  name: string
  job: string
  profile_path: string | null
}

export interface TMDBVideo {
  key: string
  name: string
  site: string
  type: string
}

export async function fetchTMDBMovie(tmdbId: number): Promise<TMDBMovie> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  if (!apiKey) {
    throw new Error('TMDB API key not configured')
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&append_to_response=credits,videos`
  )

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`)
  }

  return response.json()
}

export function getTMDBImageUrl(path: string, size: string = 'w500'): string {
  return `https://image.tmdb.org/t/p/${size}${path}`
}
