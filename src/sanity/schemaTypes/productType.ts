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
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug is required for routes'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'School', value: 'School' },
          { title: 'Business', value: 'Business' },
          { title: 'Regular', value: 'Regular' },
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
    // 👇 NEW: Sizes Selection
    defineField({
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Small (S)', value: 'S' },
          { title: 'Medium (M)', value: 'M' },
          { title: 'Large (L)', value: 'L' },
        ],
      },
      description: 'Select the sizes available for this product. Leave blank if not applicable.',
    }),
    // 👇 NEW: Colors Selection
    defineField({
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Gold', value: 'Gold' },
          { title: 'Silver', value: 'Silver' },
        ],
      },
      description: 'Select the Metal type available. Leave blank if not applicable.',
    }),
    defineField({
      name: 'image',
      title: 'Primary Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('A primary image is required'),
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})

