// Browser script to seed sample films
// Run this in the Sanity Studio browser console at http://localhost:3333

const sampleFilms = [
  {
    _type: 'film',
    title: 'The Godfather',
    slug: { current: 'the-godfather' },
    tmdbId: 238,
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    featured: true,
    discussionTopics: [
      'The portrayal of family loyalty vs. criminal enterprise',
      "Marlon Brando's iconic performance",
      "The film's influence on modern cinema"
    ]
  },
  {
    _type: 'film',
    title: 'Citizen Kane',
    slug: { current: 'citizen-kane' },
    tmdbId: 15,
    synopsis: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance.',
    featured: true,
    discussionTopics: [
      "Orson Welles' innovative cinematography",
      'The mystery of "Rosebud"',
      "The film's commentary on media and power"
    ]
  },
  {
    _type: 'film',
    title: 'Casablanca',
    slug: { current: 'casablanca' },
    tmdbId: 289,
    synopsis: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
    featured: false,
    discussionTopics: [
      'The chemistry between Bogart and Bergman',
      "The film's wartime propaganda elements",
      'The iconic dialogue and memorable quotes'
    ]
  }
]

// Function to create films
async function createFilms() {
  console.log('Starting to create films...')
  
  for (const film of sampleFilms) {
    try {
      // Use the Sanity Studio's client to create the document
      const result = await window.sanityClient.create(film)
      console.log(`✅ Created film: ${result.title} (ID: ${result._id})`)
    } catch (error) {
      console.error(`❌ Error creating ${film.title}:`, error)
    }
  }
  
  console.log('🎬 Film creation complete!')
}

// Instructions for use:
console.log(`
📝 HOW TO USE THIS SCRIPT:

1. Go to http://localhost:3333 (your Sanity Studio)
2. Open the browser console (F12 or right-click → Inspect → Console)
3. Copy and paste this entire script into the console
4. Run: createFilms()

This will create 3 sample films: The Godfather, Citizen Kane, and Casablanca.
`)

// Export the function
window.createFilms = createFilms 