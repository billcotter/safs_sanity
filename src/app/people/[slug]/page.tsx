import { PersonDetailPage } from '@/components/PersonDetailPage'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'

interface PersonPageProps {
  params: Promise<{ slug: string }>
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = await params

  // Fetch person data with all related information
  const personQuery = `*[_type == "person" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    biography,
    birthDate,
    deathDate,
    birthPlace,
    nationality,
    profileImage,
    additionalImages,
    roles,
    awards,
    externalLinks,
    isActive,
    "featuredWork": featuredWork->{
      _id,
      title,
      slug,
      poster,
      releaseYear,
      genres
    },
    "directedFilms": *[_type == "film" && references(^._id) && "director" in ^.roles] {
      _id,
      title,
      slug,
      poster,
      releaseYear,
      imdbRating,
      genres
    } | order(releaseYear desc),
    "actedInFilms": *[_type == "film" && references(^._id) && "actor" in ^.roles] {
      _id,
      title,
      slug,
      poster,
      releaseYear,
      imdbRating,
      genres
    } | order(releaseYear desc),
    "writtenFilms": *[_type == "film" && references(^._id) && "writer" in ^.roles] {
      _id,
      title,
      slug,
      poster,
      releaseYear,
      imdbRating,
      genres
    } | order(releaseYear desc),
    "producedFilms": *[_type == "film" && references(^._id) && "producer" in ^.roles] {
      _id,
      title,
      slug,
      poster,
      releaseYear,
      imdbRating,
      genres
    } | order(releaseYear desc),
    "screeningAppearances": *[_type == "screening" && references(^._id)] {
      _id,
      datetime,
      venue->{name, slug},
      film->{title, slug, poster},
      guestAppearanceType
    } | order(datetime desc)[0...5]
  }`

  const person = await client.fetch(personQuery, { slug })

  if (!person) {
    notFound()
  }

  return <PersonDetailPage person={person} />
}
