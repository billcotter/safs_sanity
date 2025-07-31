import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { Archive, Calendar, Film, MapPin, User, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ArchiveDetailPageProps {
  params: { screeningId: string }
}

const screeningDetailQuery = `
*[_type == "screening" && _id == $screeningId][0] {
  _id,
  datetime,
  venue->{
    name,
    slug,
    address,
    capacity,
    heroImage
  },
  film->{
    _id,
    title,
    slug,
    poster,
    synopsis,
    releaseYear,
    runtime,
    genres,
    rating,
    imdbRating,
    directors[]->{
      name,
      slug,
      profileImage
    },
    actors[]->{
      name,
      slug,
      profileImage
    },
    writers[]->{
      name,
      slug
    }
  },
  ticketPrice,
  capacity,
  actualAttendance,
  attendance,
  soldOut,
  eventPhotos[]{
    asset->,
    caption,
    photographer
  },
  eventNotes,
  discussionHighlights,
  guestFeedback,
  specialGuests[]->{
    name,
    slug,
    profileImage,
    roles
  },
  guestAppearanceType,
  specialNotes
}
`

export async function generateStaticParams() {
  const screenings = await client.fetch(`
    *[_type == "screening" && isPastEvent == true]._id
  `)

  return screenings.map((id: string) => ({
    screeningId: id,
  }))
}

export default async function ArchiveDetailPage({
  params,
}: ArchiveDetailPageProps) {
  const screening = await client.fetch(screeningDetailQuery, {
    screeningId: params.screeningId,
  })

  if (!screening) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Archive', href: '/archive' },
          { label: screening.film.title },
        ]}
      />

      {/* Hero Section */}
      <Card className="overflow-hidden mb-8">
        <div className="md:flex">
          {/* Film Poster */}
          <div className="md:w-1/3">
            {screening.film.poster ? (
              <Image
                src={urlForImage(screening.film.poster)
                  .width(400)
                  .height(600)
                  .url()}
                alt={screening.film.title}
                width={400}
                height={600}
                className="w-full h-auto"
              />
            ) : (
              <div className="aspect-[2/3] bg-sandstone-dark flex items-center justify-center">
                <Film className="h-24 w-24 text-charcoal/40" />
              </div>
            )}
          </div>

          {/* Event Details */}
          <div className="md:w-2/3 p-6">
            <div className="mb-4">
              <Badge className="bg-ocean-blue text-sandstone mb-2">
                <Archive className="h-3 w-3 mr-1" />
                Archived Screening
              </Badge>
            </div>

            <h1 className="text-3xl font-bold text-charcoal mb-2">
              {screening.film.title}
            </h1>
            <p className="text-lg text-charcoal/70 mb-4">
              {screening.film.releaseYear} • {screening.film.runtime} min
              {screening.film.rating && ` • ${screening.film.rating}`}
            </p>

            {/* Directors */}
            {screening.film.directors &&
              screening.film.directors.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-charcoal mb-1">
                    Directed by
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {screening.film.directors.map((director: any) => (
                      <Link
                        key={director.slug?.current}
                        href={`/people/${director.slug?.current}`}
                        className="flex items-center space-x-2 bg-sandstone-dark rounded-md px-3 py-1 hover:bg-sandstone transition-colors"
                      >
                        {director.profileImage && (
                          <Image
                            src={urlForImage(director.profileImage)
                              .width(24)
                              .height(24)
                              .url()}
                            alt={director.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span className="text-sm font-medium text-charcoal">
                          {director.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            {/* Screening Event Info */}
            <div className="bg-sandstone-dark rounded-lg p-4 space-y-3">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-ocean-blue" />
                <div>
                  <p className="font-medium text-charcoal">
                    {new Date(screening.datetime).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-charcoal/70">
                    {new Date(screening.datetime).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-ocean-blue" />
                <div>
                  <Link
                    href={`/venues/${screening.venue.slug?.current}`}
                    className="font-medium text-charcoal hover:text-ocean-blue transition-colors"
                  >
                    {screening.venue.name}
                  </Link>
                  {screening.venue.address && (
                    <p className="text-sm text-charcoal/70">
                      {screening.venue.address}
                    </p>
                  )}
                </div>
              </div>

              {(screening.actualAttendance || screening.attendance) && (
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-ocean-blue" />
                  <span className="text-charcoal">
                    {screening.actualAttendance || screening.attendance}{' '}
                    attendees
                    {screening.capacity && (
                      <span className="text-charcoal/70">
                        {' '}
                        of {screening.capacity} capacity
                      </span>
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Film Synopsis */}
      {screening.film.synopsis && (
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">
            About the Film
          </h2>
          <p className="text-charcoal/80 leading-relaxed">
            {screening.film.synopsis}
          </p>
        </Card>
      )}

      {/* Event Photos */}
      {screening.eventPhotos && screening.eventPhotos.length > 0 && (
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">
            Event Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {screening.eventPhotos.map((photo: any, index: number) => (
              <div key={index} className="aspect-square relative">
                <Image
                  src={urlForImage(photo).width(300).height(300).url()}
                  alt={photo.caption || `Event photo ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 rounded-b-lg">
                    {photo.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Event Notes & Discussion */}
      {(screening.eventNotes ||
        screening.discussionHighlights ||
        screening.guestFeedback) && (
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">
            Event Highlights
          </h2>

          {screening.eventNotes && (
            <div className="mb-6">
              <h3 className="font-medium text-charcoal mb-2">Event Notes</h3>
              <div className="text-charcoal/80">
                <PortableText value={screening.eventNotes} />
              </div>
            </div>
          )}

          {screening.discussionHighlights &&
            screening.discussionHighlights.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium text-charcoal mb-2">
                  Discussion Highlights
                </h3>
                <ul className="list-disc list-inside space-y-1 text-charcoal/80">
                  {screening.discussionHighlights.map(
                    (highlight: string, index: number) => (
                      <li key={index}>{highlight}</li>
                    )
                  )}
                </ul>
              </div>
            )}

          {screening.guestFeedback && (
            <div>
              <h3 className="font-medium text-charcoal mb-2">Guest Feedback</h3>
              <blockquote className="italic text-charcoal/80 border-l-4 border-ocean-blue pl-4">
                "{screening.guestFeedback}"
              </blockquote>
            </div>
          )}
        </Card>
      )}

      {/* Special Guests */}
      {screening.specialGuests && screening.specialGuests.length > 0 && (
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-charcoal mb-4">
            Special Guests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {screening.specialGuests.map((guest: any) => (
              <Link
                key={guest.slug?.current}
                href={`/people/${guest.slug?.current}`}
                className="flex items-center space-x-3 p-3 bg-sandstone-dark rounded-lg hover:bg-sandstone transition-colors"
              >
                {guest.profileImage && (
                  <Image
                    src={urlForImage(guest.profileImage)
                      .width(48)
                      .height(48)
                      .url()}
                    alt={guest.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-charcoal">{guest.name}</p>
                  {guest.roles && (
                    <p className="text-sm text-charcoal/70">
                      {guest.roles.join(', ')}
                    </p>
                  )}
                  {screening.guestAppearanceType && (
                    <p className="text-xs text-ocean-blue">
                      {screening.guestAppearanceType}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {/* Related Links */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">
          Explore More
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href={`/films/${screening.film.slug?.current}`}>
              <Film className="h-4 w-4 mr-2" />
              Film Details
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href={`/venues/${screening.venue.slug?.current}`}>
              <MapPin className="h-4 w-4 mr-2" />
              Venue Details
            </Link>
          </Button>

          {screening.film.directors && screening.film.directors[0] && (
            <Button variant="outline" asChild>
              <Link
                href={`/people/${screening.film.directors[0].slug?.current}`}
              >
                <User className="h-4 w-4 mr-2" />
                Director Profile
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
