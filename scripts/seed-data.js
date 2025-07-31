import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'rqfiyt6m',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need to add this to your .env.local
})

const sampleFilms = [
  {
    _type: 'film',
    title: 'The Godfather',
    slug: { current: 'the-godfather' },
    tmdbId: 238,
    synopsis:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    featured: true,
    discussionTopics: [
      'The portrayal of family loyalty vs. criminal enterprise',
      "Marlon Brando's iconic performance",
      "The film's influence on modern cinema",
    ],
  },
  {
    _type: 'film',
    title: 'Citizen Kane',
    slug: { current: 'citizen-kane' },
    tmdbId: 15,
    synopsis:
      'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance.',
    featured: true,
    discussionTopics: [
      "Orson Welles' innovative cinematography",
      'The mystery of "Rosebud"',
      "The film's commentary on media and power",
    ],
  },
  {
    _type: 'film',
    title: 'Casablanca',
    slug: { current: 'casablanca' },
    tmdbId: 289,
    synopsis:
      'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
    featured: false,
    discussionTopics: [
      'The chemistry between Bogart and Bergman',
      "The film's wartime propaganda elements",
      'The iconic dialogue and memorable quotes',
    ],
  },
]

async function seedFilms() {
  try {
    console.log('Seeding films...')

    for (const film of sampleFilms) {
      const result = await client.create(film)
      console.log(`Created film: ${result.title} (ID: ${result._id})`)
    }

    console.log('Seeding complete!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedFilms()
