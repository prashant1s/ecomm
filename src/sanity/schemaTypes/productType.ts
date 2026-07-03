import { defineType, defineField } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Name is required'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug is required for routes'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Men', value: 'Men' },
          { title: 'Women', value: 'Women' },
          { title: 'Kids', value: 'Kids' },
          { title: 'Accessories', value: 'Accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    
    // Primary Image (Used for grids/cards)
    defineField({
      name: 'image',
      title: 'Primary Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('A primary image is required'),
    }),
    
    // 👇 NEW: Gallery Array for multiple images (Used for product details)
    defineField({
      name: 'gallery',
      title: 'Product Gallery (Additional Images)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        }
      ],
      description: 'Add extra images here. These will appear as thumbnails on the product page.',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Brief product info that will also be sent over WhatsApp',
    }),
  ],
})