import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need a token with write permissions
})

async function updatePastEvents() {
  try {
    console.log('🔄 Checking for past events...')
    
    // Find all screenings that have passed but aren't marked as past events
    const pastScreenings = await client.fetch(`
      *[_type == "screening" && datetime < $now && isPastEvent != true] {
        _id,
        datetime,
        "filmTitle": film->title
      }
    `, { now: new Date().toISOString() })
    
    if (pastScreenings.length === 0) {
      console.log('✅ No past events to update')
      return
    }
    
    console.log(`📅 Found ${pastScreenings.length} past events to update:`)
    
    // Update each screening to mark as past event
    const updates = pastScreenings.map(screening => ({
      patch: {
        id: screening._id,
        set: {
          isPastEvent: true
        }
      }
    }))
    
    // Execute all updates in a transaction
    const result = await client.transaction(updates).commit()
    
    console.log('✅ Successfully updated past events:')
    pastScreenings.forEach(screening => {
      const date = new Date(screening.datetime).toLocaleDateString()
      console.log(`  - ${screening.filmTitle} (${date})`)
    })
    
  } catch (error) {
    console.error('❌ Error updating past events:', error)
  }
}

// Run the update
updatePastEvents() 