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
    
    
    // defineField({
    //   name: 'sizes',
    //   title: 'Available Sizes & Images',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'sizeName',
    //           title: 'Size',
    //           type: 'string',
    //           options: {
    //             list: [
    //               { title: 'Small (S)', value: 'S' },
    //               { title: 'Medium (M)', value: 'M' },
    //               { title: 'Large (L)', value: 'L' },
    //             ],
    //           },
    //           validation: (Rule) => Rule.required(),
    //         },
    //         {
    //           name: 'sizeImage',
    //           title: 'Image for this Size',
    //           type: 'image',
    //           options: { hotspot: true },
    //           description: 'Optional: Upload a specific image for this size.',
    //         },
    //       ],
    //       preview: {
    //         select: {
    //           title: 'sizeName',
    //           media: 'sizeImage',
    //         },
    //       },
    //     },
    //   ],
    //   description: 'Add sizes and optionally attach specific images to them.',
    // }),

    // Replace your current 'sizes' array field with this updated version:
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
              subtitle: 'dimension', // Shows the dimension in the Sanity studio list!
              media: 'sizeImage',
            },
          },
        },
      ],
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
           { title: 'copper', value: 'copper' },
        ],
      },
      description: 'Select the Metal type available. Leave blank if not applicable.',
    }),


    // Add this field inside your product.ts fields array:
    defineField({
      name: 'sku',
      title: 'SKU / Product ID',
      type: 'string',
      description: 'Enter a custom SKU for this product (e.g., JIY-1024).',
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

