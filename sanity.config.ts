import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'safs-studio',
  title: 'St. Augustine Film Society',
  projectId: 'rqfiyt6m',
  dataset: 'production',
  basePath: '/studio',
  plugins: [visionTool(), media()],
  schema: {
    types: schemaTypes,
  },

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('SAFS Content')
          .items([
            S.listItem()
              .title('🎬 Films')
              .child(S.documentTypeList('film').title('All Films')),
            S.listItem()
              .title('🎟️ Screenings')
              .child(S.documentTypeList('screening').title('All Screenings')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['film', 'screening'].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
