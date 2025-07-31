import { Breadcrumbs } from '@/components/Breadcrumbs'
import { PageBanner } from '@/components/PageBanner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import {
  Calendar,
  Clock,
  ExternalLink,
  Heart,
  MapPin,
  MessageCircle,
  Play,
  Star,
  User,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

interface Film {
  _id: string
  title: string
  slug: { current: string }
  synopsis: string
  poster: any
  stillImages: any[]
  memberNotes: any[]
  discussionTopics: string[]
  tmdbId: number
  featured: boolean
}

// Get film data from Sanity
async function getFilm(slug: string): Promise<Film | null> {
  const filmQuery = `*[_type == "film" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    synopsis,
    poster,
    stillImages,
    memberNotes,
    discussionTopics,
    tmdbId,
    featured
  }`

  try {
    const film = await client.fetch(filmQuery, { slug })
    return film
  } catch (error) {
    console.error('Error fetching film:', error)
    return null
  }
}

// Get TMDB data for additional film info
async function getTMDBData(tmdbId: number) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY
  if (!apiKey) return null

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${apiKey}&append_to_response=credits`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching TMDB data:', error)
    return null
  }
}

// Get past screenings for this film
async function getPastScreeningsForFilm(filmId: string) {
  const screeningsQuery = `*[_type == "screening" && film._ref == $filmId && isPastEvent == true] | order(datetime desc) {
    _id,
    datetime,
    venue,
    attendance,
    eventPhotos,
    discussionHighlights,
    specialNotes
  }`

  try {
    const screenings = await client.fetch(screeningsQuery, { filmId })
    return screenings
  } catch (error) {
    console.error('Error fetching past screenings:', error)
    return []
  }
}

export default async function FilmPage({ params }: PageProps) {
  const { slug } = await params

  // Get film data from Sanity
  const film = await getFilm(slug)

  if (!film) {
    notFound()
  }

  // Get additional TMDB data if available
  const tmdbData = film.tmdbId ? await getTMDBData(film.tmdbId) : null

  // Get past screenings for this film
  const pastScreenings = await getPastScreeningsForFilm(film._id)

  // Debug logging
  console.log('Film data:', { title: film.title, tmdbId: film.tmdbId })
  console.log(
    'TMDB data:',
    tmdbData
      ? {
          backdrop_path: tmdbData.backdrop_path,
          poster_path: tmdbData.poster_path,
          title: tmdbData.title,
        }
      : 'No TMDB data'
  )

  // Determine background image - check for custom banner first
  const getBackgroundImage = () => {
    // For Pickpocket specifically
    if (film.title.toLowerCase().includes('pickpocket')) {
      return '/images/banners/pickpockrt_1959_robert_bresson.png'
    }

    // Try to find custom banner with different naming patterns
    const possibleBannerPaths = [
      // Pattern: title_year_director.png
      `/images/banners/${film.title.toLowerCase().replace(/\s+/g, '_')}_${
        tmdbData?.release_date?.split('-')[0] || 'unknown'
      }_${
        tmdbData?.credits?.crew
          ?.find((c: any) => c.job === 'Director')
          ?.name?.toLowerCase()
          .replace(/\s+/g, '_') || 'unknown'
      }.png`,
      // Pattern: title_director.png
      `/images/banners/${film.title.toLowerCase().replace(/\s+/g, '_')}_${
        tmdbData?.credits?.crew
          ?.find((c: any) => c.job === 'Director')
          ?.name?.toLowerCase()
          .replace(/\s+/g, '_') || 'unknown'
      }.png`,
      // Pattern: title_year.png
      `/images/banners/${film.title.toLowerCase().replace(/\s+/g, '_')}_${
        tmdbData?.release_date?.split('-')[0] || 'unknown'
      }.png`,
      // Pattern: just title.png
      `/images/banners/${film.title.toLowerCase().replace(/\s+/g, '_')}.png`,
    ]

    // Fall back to still images, then TMDB backdrop
    if (film.stillImages && film.stillImages.length > 0) {
      return urlForImage(film.stillImages[0]).url()
    }

    if (tmdbData?.backdrop_path) {
      return `https://image.tmdb.org/t/p/original${tmdbData.backdrop_path}`
    }

    return undefined
  }

  const backgroundImage = getBackgroundImage()

  console.log('Background image URL:', backgroundImage)

  // Note: To add custom banner images for other films, upload them to:
  // public/images/banners/ with naming pattern:
  // - pickpockrt_1959_robert_bresson.png (title_year_director.png)
  // - film_title_year_director.png
  // - film_title_director.png
  // - film_title_year.png
  // - film_title.png

  return (
    <>
      <PageBanner
        title={film.title}
        subtitle={
          tmdbData
            ? `${tmdbData.release_date?.split('-')[0]} • Directed by ${
                tmdbData.credits?.crew?.find((c: any) => c.job === 'Director')
                  ?.name || 'Unknown'
              }`
            : 'Film Details'
        }
        backgroundImage={backgroundImage}
      />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[{ label: 'Films', href: '/films' }, { label: film.title }]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Metadata and Member Message */}
          <div className="lg:col-span-1 space-y-6">
            {/* Film Poster */}
            <Card className="overflow-hidden">
              <div className="aspect-[2/3] relative">
                <img
                  src={
                    film.poster
                      ? urlForImage(film.poster).url()
                      : tmdbData?.poster_path
                      ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}`
                      : '/placeholder-poster.jpg'
                  }
                  alt={film.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-ocean-blue text-sandstone text-lg px-3 py-1 font-semibold">
                    {tmdbData?.vote_average?.toFixed(1) || 'N/A'}/10
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Metadata Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-ocean-blue" />
                Film Details
              </h3>
              <div className="space-y-4">
                {tmdbData?.release_date && (
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-charcoal/70" />
                    <div>
                      <p className="text-sm text-charcoal/60">Release Year</p>
                      <p className="text-charcoal font-medium">
                        {tmdbData.release_date.split('-')[0]}
                      </p>
                    </div>
                  </div>
                )}
                {tmdbData?.runtime && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-charcoal/70" />
                    <div>
                      <p className="text-sm text-charcoal/60">Runtime</p>
                      <p className="text-charcoal font-medium">
                        {Math.floor(tmdbData.runtime / 60)}h{' '}
                        {tmdbData.runtime % 60}m
                      </p>
                    </div>
                  </div>
                )}
                {tmdbData?.credits?.crew && (
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-charcoal/70" />
                    <div>
                      <p className="text-sm text-charcoal/60">Director</p>
                      <p className="text-charcoal font-medium">
                        {tmdbData.credits.crew.find(
                          (c: any) => c.job === 'Director'
                        )?.name || 'Unknown Director'}
                      </p>
                    </div>
                  </div>
                )}
                {tmdbData?.vote_average && (
                  <div className="flex items-center gap-3">
                    <Star className="h-4 w-4 text-charcoal/70" />
                    <div>
                      <p className="text-sm text-charcoal/60">Rating</p>
                      <p className="text-charcoal font-medium">
                        {tmdbData.vote_average.toFixed(1)}/10
                      </p>
                    </div>
                  </div>
                )}
                {tmdbData?.vote_count && (
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-charcoal/70" />
                    <div>
                      <p className="text-sm text-charcoal/60">Votes</p>
                      <p className="text-charcoal font-medium">
                        {tmdbData.vote_count.toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
                {tmdbData?.genres && (
                  <div>
                    <p className="text-sm text-charcoal/60 mb-2">Genres</p>
                    <div className="flex flex-wrap gap-2">
                      {tmdbData.genres.slice(0, 3).map((genre: any) => (
                        <Badge
                          key={genre.id}
                          variant="outline"
                          className="text-xs"
                        >
                          {genre.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Become a Member Card */}
            <Card className="p-6 bg-gradient-to-br from-ocean-blue/10 to-sandstone/20 border-2 border-ocean-blue/30">
              <div className="text-center">
                <Heart className="h-8 w-8 text-ocean-blue mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  Become a Member
                </h3>
                <p className="text-sm text-charcoal/70 mb-4">
                  Join the St. Augustine Film Society for exclusive benefits,
                  priority ticket access, and member-only events.
                </p>
                <Button
                  asChild
                  className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-sandstone font-semibold transition-colors duration-200"
                >
                  <Link href="/membership">Join Now</Link>
                </Button>
              </div>
            </Card>

            {/* Purchase Tickets Button */}
            <Button className="w-full bg-ocean-blue hover:bg-ocean-blue-dark text-sandstone font-semibold transition-colors duration-200">
              <ExternalLink className="h-4 w-4 mr-2" />
              Purchase Tickets
            </Button>
          </div>

          {/* Right Column - Film Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Synopsis
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                {film.synopsis ||
                  tmdbData?.overview ||
                  'Synopsis not available.'}
              </p>
            </Card>

            {/* Cast & Crew with Images */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-ocean-blue" />
                Cast & Crew
              </h3>

              {/* Cast Section */}
              {tmdbData?.credits?.cast && tmdbData.credits.cast.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium text-charcoal mb-3">Cast</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tmdbData.credits.cast.slice(0, 6).map((actor: any) => (
                      <div key={actor.id} className="text-center">
                        <div className="aspect-square relative overflow-hidden rounded-lg mb-2">
                          {actor.profile_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                              alt={actor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                              <User className="h-8 w-8 text-gray-500" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm font-medium text-charcoal truncate">
                          {actor.name}
                        </p>
                        <p className="text-xs text-charcoal/60 truncate">
                          {actor.character}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Crew Section */}
              {tmdbData?.credits?.crew && (
                <div>
                  <h4 className="font-medium text-charcoal mb-3">Crew</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tmdbData.credits.crew
                      .filter((c: any) =>
                        [
                          'Director',
                          'Writer',
                          'Screenplay',
                          'Producer',
                        ].includes(c.job)
                      )
                      .slice(0, 4)
                      .map((crew: any) => (
                        <div
                          key={crew.id}
                          className="flex items-center gap-3 p-3 bg-sandstone/20 rounded-lg"
                        >
                          <div className="w-10 h-10 bg-ocean-blue/20 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-ocean-blue" />
                          </div>
                          <div>
                            <p className="font-medium text-charcoal">
                              {crew.name}
                            </p>
                            <p className="text-sm text-charcoal/60">
                              {crew.job}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Still Images & Video Stills */}
            {film.stillImages && film.stillImages.length > 0 && (
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Play className="h-5 w-5 text-ocean-blue" />
                  Still Images & Video Stills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {film.stillImages.map((image: any, index: number) => (
                    <div
                      key={index}
                      className="aspect-[16/9] relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img
                        src={urlForImage(image).url()}
                        alt={`${film.title} still ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Trailer Section */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Play className="h-5 w-5 text-ocean-blue" />
                Trailer
              </h3>
              <div className="aspect-video bg-charcoal/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-12 w-12 text-charcoal/40 mx-auto mb-2" />
                  <p className="text-charcoal/60">
                    Trailer will be available soon
                  </p>
                </div>
              </div>
            </Card>

            {/* Discussion Topics */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="h-5 w-5 text-ocean-blue" />
                <h3 className="text-xl font-semibold text-charcoal">
                  Discussion Topics
                </h3>
              </div>
              <p className="text-charcoal/70 mb-4">
                Join our community discussion after the screening. Here are some
                topics we'll explore:
              </p>
              {film.discussionTopics && film.discussionTopics.length > 0 ? (
                <ul className="space-y-2">
                  {film.discussionTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/80">{topic}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-charcoal/60 italic">
                  Discussion topics will be added soon.
                </p>
              )}
            </Card>

            {/* Past Screenings */}
            {pastScreenings.length > 0 && (
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-ocean-blue" />
                  Past Screenings
                </h3>
                <div className="space-y-4">
                  {pastScreenings.map((screening: any) => (
                    <div
                      key={screening._id}
                      className="border border-sandstone/30 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-charcoal">
                          {new Date(screening.datetime).toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            }
                          )}
                        </h4>
                        <Badge className="bg-ocean-blue text-sandstone text-xs">
                          Past Event
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm text-charcoal/70">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {new Date(screening.datetime).toLocaleTimeString(
                              'en-US',
                              {
                                hour: 'numeric',
                                minute: '2-digit',
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{screening.venue}</span>
                        </div>
                        {screening.attendance && (
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{screening.attendance} attendees</span>
                          </div>
                        )}
                      </div>
                      {screening.discussionHighlights &&
                        screening.discussionHighlights.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-medium text-charcoal/60 mb-1">
                              Discussion Highlights:
                            </p>
                            <ul className="space-y-1">
                              {screening.discussionHighlights
                                .slice(0, 2)
                                .map((highlight: string, index: number) => (
                                  <li
                                    key={index}
                                    className="text-xs text-charcoal/70 flex items-start gap-1"
                                  >
                                    <div className="w-1 h-1 bg-ocean-blue rounded-full mt-1.5 flex-shrink-0"></div>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Upcoming Screenings */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Upcoming Screenings
              </h3>
              <div className="space-y-4">
                <p className="text-charcoal/60 italic">
                  Screening information will be available soon. Check our{' '}
                  <Link
                    href="/screenings"
                    className="text-ocean-blue hover:underline"
                  >
                    screenings calendar
                  </Link>{' '}
                  for upcoming showtimes.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
