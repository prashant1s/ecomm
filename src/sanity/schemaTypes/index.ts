import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { postType } from './postType'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, postType],
}
