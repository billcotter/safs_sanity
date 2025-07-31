const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need a token with write permissions
})

async function addTestArchiveData() {
  try {
    console.log('🔄 Adding test archive data...')

    // First, let's create a test film
    const testFilm = await client.create({
      _type: 'film',
      title: 'The Godfather',
      slug: { current: 'the-godfather' },
      tmdbId: 238,
      releaseYear: 1972,
      synopsis:
        'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      directors: [], // We'll add directors later if needed
    })

    console.log('✅ Created test film:', testFilm.title)

    // Create a test venue
    const testVenue = await client.create({
      _type: 'venue',
      name: 'SAFS Cinema',
      slug: { current: 'safs-cinema' },
      address: '123 Film Street, St. Augustine, FL',
      capacity: 150,
    })

    console.log('✅ Created test venue:', testVenue.name)

    // Create a past screening
    const pastScreening = await client.create({
      _type: 'screening',
      film: {
        _type: 'reference',
        _ref: testFilm._id,
      },
      venue: {
        _type: 'reference',
        _ref: testVenue._id,
      },
      datetime: '2024-01-15T19:00:00Z', // Past date
      isPastEvent: true,
      actualAttendance: 120,
      soldOut: false,
      capacity: 150,
      discussionHighlights: [
        "Discussion about the film's influence on cinema",
        'Analysis of the cinematography and direction',
        'Q&A about the historical context',
      ],
      guestFeedback: 'An incredible screening with great audience engagement!',
    })

    console.log('✅ Created past screening for:', testFilm.title)
    console.log(
      '📅 Screening date:',
      new Date(pastScreening.datetime).toLocaleDateString()
    )
    console.log(
      '👥 Attendance:',
      pastScreening.actualAttendance,
      'of',
      pastScreening.capacity
    )

    // Create another past screening
    const pastScreening2 = await client.create({
      _type: 'screening',
      film: {
        _type: 'reference',
        _ref: testFilm._id,
      },
      venue: {
        _type: 'reference',
        _ref: testVenue._id,
      },
      datetime: '2024-02-20T19:30:00Z', // Another past date
      isPastEvent: true,
      actualAttendance: 145,
      soldOut: true,
      capacity: 150,
      discussionHighlights: [
        'Sold out screening with enthusiastic audience',
        "Deep dive into the film's themes and symbolism",
        "Discussion about the film's cultural impact",
      ],
    })

    console.log('✅ Created second past screening (sold out)')
    console.log(
      '📅 Screening date:',
      new Date(pastScreening2.datetime).toLocaleDateString()
    )
    console.log(
      '👥 Attendance:',
      pastScreening2.actualAttendance,
      'of',
      pastScreening2.capacity,
      '(SOLD OUT)'
    )

    console.log('\n🎉 Test archive data created successfully!')
    console.log('📊 You can now visit /archive to see the past screenings')
  } catch (error) {
    console.error('❌ Error adding test data:', error)
  }
}

// Run the script
addTestArchiveData()
