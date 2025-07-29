const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const TMDB_BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL
const TMDB_IMAGE_BASE_URL = process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL

export interface TMDBMovie {
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  genre_ids: number[]
  adult: boolean
  video: boolean
  media_type?: string
}

export interface TMDBGenre {
  id: number
  name: string
}

export interface TMDBMovieDetails extends TMDBMovie {
  runtime: number
  genres: TMDBGenre[]
  production_companies: Array<{
    id: number
    name: string
    logo_path: string | null
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  spoken_languages: Array<{
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string
  budget: number
  revenue: number
}

export interface TMBDPerson {
  id: number
  name: string
  profile_path: string | null
  biography: string
  known_for_department: string
  place_of_birth: string | null
  birthday: string | null
  deathday: string | null
  popularity: number
  imdb_id: string | null
  homepage: string | null
}

export interface TMBDPersonCredits {
  cast: Array<{
    id: number
    title: string
    character: string
    poster_path: string | null
    release_date: string
    vote_average: number
  }>
  crew: Array<{
    id: number
    title: string
    job: string
    department: string
    poster_path: string | null
    release_date: string
    vote_average: number
  }>
}

export interface TMDBResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

class TMDBService {
  private apiKey: string
  private baseUrl: string
  private imageBaseUrl: string

  constructor() {
    if (!TMDB_API_KEY) {
      throw new Error('TMDB API key is not configured')
    }
    if (!TMDB_BASE_URL) {
      throw new Error('TMDB base URL is not configured')
    }
    if (!TMDB_IMAGE_BASE_URL) {
      throw new Error('TMDB image base URL is not configured')
    }

    this.apiKey = TMDB_API_KEY
    this.baseUrl = TMDB_BASE_URL
    this.imageBaseUrl = TMDB_IMAGE_BASE_URL
  }

  private async fetch<T>(endpoint: string): Promise<T> {
    const url = `${this.baseUrl}${endpoint}${
      endpoint.includes('?') ? '&' : '?'
    }api_key=${this.apiKey}`

    // Add timeout to prevent hanging requests
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(url, {
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(
          `TMDB API error: ${response.status} ${response.statusText}`
        )
      }

      return response.json()
    } catch (error) {
      clearTimeout(timeoutId)
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('TMDB API request timed out')
      }
      throw error
    }
  }

  // Get popular movies
  async getPopularMovies(page: number = 1): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetch<TMDBResponse<TMDBMovie>>(`/movie/popular?page=${page}`)
  }

  // Get top rated movies
  async getTopRatedMovies(page: number = 1): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetch<TMDBResponse<TMDBMovie>>(`/movie/top_rated?page=${page}`)
  }

  // Get now playing movies
  async getNowPlayingMovies(
    page: number = 1
  ): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetch<TMDBResponse<TMDBMovie>>(
      `/movie/now_playing?page=${page}`
    )
  }

  // Get upcoming movies
  async getUpcomingMovies(page: number = 1): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetch<TMDBResponse<TMDBMovie>>(`/movie/upcoming?page=${page}`)
  }

  // Get movie details
  async getMovieDetails(movieId: number): Promise<TMDBMovieDetails> {
    return this.fetch<TMDBMovieDetails>(`/movie/${movieId}`)
  }

  // Get movie credits
  async getMovieCredits(movieId: number) {
    return this.fetch(`/movie/${movieId}/credits`)
  }

  // Get movie videos (trailers, etc.)
  async getMovieVideos(movieId: number) {
    return this.fetch(`/movie/${movieId}/videos`)
  }

  // Get person details
  async getPersonDetails(personId: number): Promise<TMBDPerson> {
    return this.fetch<TMBDPerson>(`/person/${personId}`)
  }

  // Get person credits (movies they've worked on)
  async getPersonCredits(personId: number): Promise<TMBDPersonCredits> {
    return this.fetch<TMBDPersonCredits>(`/person/${personId}/movie_credits`)
  }

  // Search for people
  async searchPeople(
    query: string,
    page: number = 1
  ): Promise<TMDBResponse<TMBDPerson>> {
    const encodedQuery = encodeURIComponent(query)
    return this.fetch<TMDBResponse<TMBDPerson>>(
      `/search/person?query=${encodedQuery}&page=${page}`
    )
  }

  // Get genres
  async getGenres() {
    return this.fetch<{ genres: TMDBGenre[] }>('/genre/movie/list')
  }

  // Get movies by genre
  async getMoviesByGenre(
    genreId: number,
    page: number = 1
  ): Promise<TMDBResponse<TMDBMovie>> {
    return this.fetch<TMDBResponse<TMDBMovie>>(
      `/discover/movie?with_genres=${genreId}&page=${page}`
    )
  }

  // Search movies
  async searchMovies(
    query: string,
    page: number = 1
  ): Promise<TMDBResponse<TMDBMovie>> {
    const encodedQuery = encodeURIComponent(query)
    return this.fetch<TMDBResponse<TMDBMovie>>(
      `/search/movie?query=${encodedQuery}&page=${page}`
    )
  }

  // Get image URL
  getImageUrl(path: string, size: string = 'w500'): string {
    if (!path) return ''
    return `${this.imageBaseUrl}/${size}${path}`
  }

  // Get poster URL
  getPosterUrl(path: string, size: string = 'w500'): string {
    return this.getImageUrl(path, size)
  }

  // Get backdrop URL
  getBackdropUrl(path: string, size: string = 'w1280'): string {
    return this.getImageUrl(path, size)
  }

  // Get profile URL
  getProfileUrl(path: string, size: string = 'w185'): string {
    return this.getImageUrl(path, size)
  }

  // Format runtime to hours and minutes
  formatRuntime(minutes: number): string {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  // Format vote average
  formatVoteAverage(voteAverage: number): string {
    return voteAverage.toFixed(1)
  }

  // Get year from release date
  getYearFromDate(dateString: string): number {
    return new Date(dateString).getFullYear()
  }

  // Format birthday
  formatBirthday(birthday: string | null): string {
    if (!birthday) return 'Unknown'
    return new Date(birthday).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
}

// Create singleton instance
export const tmdbService = new TMDBService()

// Export default for convenience
export default tmdbService
