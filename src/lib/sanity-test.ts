// Create: src/lib/sanity-test.ts
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false, // Set to false for fresh data
  apiVersion: '2024-01-01',
})

export async function testSanityConnection() {
  try {
    const result = await client.fetch('*[_type == "sanity.imageAsset"][0]')
    console.log('✅ Sanity connection successful!')
    return { success: true, data: result }
  } catch (error) {
    console.error('❌ Sanity connection failed:', error)
    return { success: false, error }
  }
}
