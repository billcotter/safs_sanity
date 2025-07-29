import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: false,
  apiVersion: '2024-01-01',
})

export default async function SanityTest() {
  try {
    const data = await client.fetch('*[_type == "sanity.imageAsset"][0..2]')

    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">✅ Sanity Connection Test</h1>
        <div className="bg-green-100 p-4 rounded">
          <p className="font-semibold">Success! Sanity is connected.</p>
          <p>Found {data.length} assets in your project.</p>
        </div>
        <pre className="mt-4 bg-gray-100 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    )
  } catch (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">❌ Sanity Connection Failed</h1>
        <div className="bg-red-100 p-4 rounded">
          <p className="font-semibold">Connection Error:</p>
          <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    )
  }
}
