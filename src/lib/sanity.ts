// src/lib/sanity.ts
import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'zt5tih1k',
  dataset: 'blogs', // Or 'production' if that's your active one
  apiVersion: '2024-06-01',
  useCdn: true,
})
