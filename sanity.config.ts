// sanity.config.ts
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './src/schemas'

export default defineConfig({
  name: 'SAFSCMS',
  title: 'St. Augustine Film Society',
  projectId: 'rqfiyt6m',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
