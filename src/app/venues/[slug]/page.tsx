import { VenueDetailPage } from '@/components/VenueDetailPage'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'

interface VenuePageProps {
  params: Promise<{ slug: string }>
}

export default async function VenuePage({ params }: VenuePageProps) {
  const { slug } = await params

  // Fetch venue data with all related information
  const venueQuery = `*[_type == "venue" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    address,
    coordinates,
    capacity,
    established,
    venueType,
    heroImage,
    galleryImages,
    amenities,
    contact,
    isActive,
    "pastScreenings": *[_type == "screening" && venue._ref == ^._id && isPastEvent == true] {
      _id,
      datetime,
      film->{
        _id,
        title,
        slug,
        poster,
        directors[]->{name, slug}
      },
      attendance
    } | order(datetime desc)[0...10],
    "upcomingScreenings": *[_type == "screening" && venue._ref == ^._id && isPastEvent != true] {
      _id,
      datetime,
      film->{
        _id,
        title,
        slug,
        poster
      },
      ticketPrice,
      soldOut
    } | order(datetime asc),
    "totalScreenings": count(*[_type == "screening" && venue._ref == ^._id]),
    "featuredFilms": *[_type == "film" && count(*[_type == "screening" && venue._ref == ^._id && film._ref == ^._id]) > 0] {
      _id,
      title,
      slug,
      poster,
      releaseYear,
      directors[]->{name, slug}
    }[0...6]
  }`

  const venue = await client.fetch(venueQuery, { slug })

  if (!venue) {
    notFound()
  }

  return <VenueDetailPage venue={venue} />
}
