import { type SchemaTypeDefinition } from 'sanity'

import { postType } from './postType'
import { eventType } from './eventType'
import { mediaType } from './mediaType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, eventType, mediaType],
}
