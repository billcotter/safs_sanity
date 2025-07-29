import { PersonDetailPage } from '@/components/PersonDetailPage'
import { tmdbService } from '@/lib/tmdb'
import { notFound } from 'next/navigation'

interface PersonDetailPageProps {
  params: {
    slug: string
  }
}

// Mock person data for fallback
const mockPersons = {
  'wes-anderson': {
    id: 5658,
    name: 'Wes Anderson',
    slug: 'wes-anderson',
    profile_path: '/images/directors/wes-anderson.jpg',
    biography:
      'Wes Anderson is an American filmmaker known for his distinctive visual and narrative style. His films are characterized by their symmetrical compositions, distinctive color palettes, and quirky characters. Anderson has directed critically acclaimed films such as "The Royal Tenenbaums," "Moonrise Kingdom," and "The Grand Budapest Hotel."',
    known_for_department: 'Directing',
    place_of_birth: 'Houston, Texas, USA',
    birthday: '1969-05-01',
    deathday: null,
    popularity: 8.5,
    imdb_id: 'nm0027572',
    homepage: null,
  },
  'bong-joon-ho': {
    id: 1245,
    name: 'Bong Joon-ho',
    slug: 'bong-joon-ho',
    profile_path: '/images/directors/bong-joon-ho.jpg',
    biography:
      'Bong Joon-ho is a South Korean filmmaker known for his genre-bending films that often blend comedy, drama, and horror. He gained international acclaim with "Parasite," which won the Palme d\'Or at Cannes and four Academy Awards, including Best Picture. His other notable works include "The Host," "Snowpiercer," and "Memories of Murder."',
    known_for_department: 'Directing',
    place_of_birth: 'Daegu, South Korea',
    birthday: '1969-09-14',
    deathday: null,
    popularity: 9.2,
    imdb_id: 'nm0094435',
    homepage: null,
  },
  'damien-chazelle': {
    id: 1234567,
    name: 'Damien Chazelle',
    slug: 'damien-chazelle',
    profile_path: '/images/directors/damien-chazelle.jpg',
    biography:
      'Damien Chazelle is an American filmmaker and screenwriter. He is best known for directing "Whiplash," "La La Land," and "First Man." At the age of 32, he became the youngest person to win the Academy Award for Best Director for "La La Land." His films often explore themes of ambition, passion, and the pursuit of artistic excellence.',
    known_for_department: 'Directing',
    place_of_birth: 'Providence, Rhode Island, USA',
    birthday: '1985-01-19',
    deathday: null,
    popularity: 7.8,
    imdb_id: 'nm3227090',
    homepage: null,
  },
  'ryan-gosling': {
    id: 30614,
    name: 'Ryan Gosling',
    slug: 'ryan-gosling',
    profile_path: '/images/actors/ryan-gosling.jpg',
    biography:
      'Ryan Gosling is a Canadian actor and musician. He began his career as a child star on the Disney Channel\'s "The Mickey Mouse Club." Gosling gained critical acclaim for his performances in films like "The Notebook," "Half Nelson," "Drive," "La La Land," and "Blade Runner 2049." He is known for his versatility and ability to portray complex characters.',
    known_for_department: 'Acting',
    place_of_birth: 'London, Ontario, Canada',
    birthday: '1980-11-12',
    deathday: null,
    popularity: 9.1,
    imdb_id: 'nm0331516',
    homepage: null,
  },
  'emma-stone': {
    id: 54693,
    name: 'Emma Stone',
    slug: 'emma-stone',
    profile_path: '/images/actors/emma-stone.jpg',
    biography:
      'Emma Stone is an American actress and producer. She began her career in television and made her film debut in "Superbad." Stone gained widespread recognition for her roles in "Easy A," "The Help," "La La Land," and "The Favourite." She won the Academy Award for Best Actress for her performance in "La La Land."',
    known_for_department: 'Acting',
    place_of_birth: 'Scottsdale, Arizona, USA',
    birthday: '1988-11-06',
    deathday: null,
    popularity: 8.9,
    imdb_id: 'nm1297015',
    homepage: null,
  },
  'song-kang-ho': {
    id: 1234568,
    name: 'Song Kang-ho',
    slug: 'song-kang-ho',
    profile_path: '/images/actors/song-kang-ho.jpg',
    biography:
      'Song Kang-ho is a South Korean actor. He is one of the most prominent actors in Korean cinema, known for his collaborations with director Bong Joon-ho in films like "Memories of Murder," "The Host," "Snowpiercer," and "Parasite." His performances are characterized by their depth, versatility, and ability to convey complex emotions.',
    known_for_department: 'Acting',
    place_of_birth: 'Gimhae, South Korea',
    birthday: '1967-01-17',
    deathday: null,
    popularity: 8.3,
    imdb_id: 'nm0814280',
    homepage: null,
  },
}

// Generate fallback person for any slug not in our data
function generateFallbackPerson(slug: string) {
  return {
    id: Math.floor(Math.random() * 1000000),
    name: slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    slug: slug,
    profile_path: '/images/placeholder-person.jpg',
    biography:
      'A talented individual in the film industry whose work has contributed to the art of cinema. Their performances and creative vision have left a lasting impact on audiences worldwide.',
    known_for_department: 'Acting',
    place_of_birth: 'Unknown',
    birthday: null,
    deathday: null,
    popularity: 5.0,
    imdb_id: null,
    homepage: null,
  }
}

export default async function PersonDetailPageRoute({
  params,
}: PersonDetailPageProps) {
  const { slug } = await params

  let person = null

  // Try to fetch from TMDB first
  try {
    // For now, we'll use mock data, but this could be enhanced to search TMDB
    person = mockPersons[slug as keyof typeof mockPersons]
  } catch (error) {
    console.error('Error fetching person data:', error)
  }

  // If not found, generate a fallback person
  if (!person) {
    person = generateFallbackPerson(slug)
  }

  if (!person) {
    notFound()
  }

  // Enrich with TMDB data if we have a TMDB ID
  let tmdbData = null
  if (person.id && person.id < 1000000) {
    // Only try TMDB for real IDs
    try {
      const personDetails = await tmdbService.getPersonDetails(person.id)
      const personCredits = await tmdbService.getPersonCredits(person.id)

      tmdbData = {
        ...personDetails,
        known_for: personCredits.cast.slice(0, 10),
        crew: personCredits.crew.slice(0, 5),
      }
    } catch (error) {
      console.error('Error fetching TMDB person data:', error)
    }
  }

  return <PersonDetailPage person={person} tmdbData={tmdbData} />
}
