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
          { title: 'Gift Item', value: 'Gift Item' },
          { title: 'Sports Award', value: 'Sports Award' },
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
    defineField({
      name: 'sizes',
      title: 'Available Sizes & Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'sizeName',
              title: 'Size Label',
              type: 'string',
              description: 'The standard label (e.g., S, M, L, Small, Big)',
              validation: (Rule) => Rule.required(),
            },
            {
              // 👇 NEW: The exact physical dimension
              name: 'dimension',
              title: 'Exact Dimension',
              type: 'string',
              description: 'Optional: The physical measurement (e.g., 11 inch, 11.5", 500g)',
            },
            {
              name: 'sizeImage',
              title: 'Image for this Size',
              type: 'image',
              options: { hotspot: true },
            },
          ],
          preview: {
            select: {
              title: 'sizeName',
              subtitle: 'dimension',
              media: 'sizeImage',
            },
          },
        },
      ],
    }),

// Replace your current 'colors' field with this:
    defineField({
      name: 'colors',
      title: 'Available Metal Types & Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorName',
              title: 'Metal Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Gold', value: 'Gold' },
                  { title: 'Silver', value: 'Silver' },
                  { title: 'Copper', value: 'Copper' }, // Capitalized Copper for consistency
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'dimension',
              title: 'Metal Size / Dimension',
              type: 'string',
              description: 'Optional: Specify the size or weight for this metal (e.g., 500g, 12 inch).',
            },
            {
              name: 'colorImage',
              title: 'Image for this Metal Type',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional: Upload a specific image to show this metal color.',
            },
          ],
          preview: {
            select: {
              title: 'colorName',
              media: 'colorImage',
            },
          },
        },
      ],
      description: 'Select the Metal types available and optionally attach images.',
    }),
    
    // Add this field inside your product.ts fields array:
    defineField({
      name: 'sku',
      title: 'SKU / Product ID',
      type: 'string',
      description: 'Enter a custom SKU for this product (e.g., JIY-1024).',
    }),
    defineField({
      name: 'description',
      title: 'Product Details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})

