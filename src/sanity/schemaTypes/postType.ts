import { defineType, defineField } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Thumbnail Image (For the Blog List)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'fullWidthImage',
      title: 'Optional Full Width Banner Image',
      type: 'image',
      options: { hotspot: true },
      description: 'This image will stretch across the top of the actual blog post.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Summary',
      type: 'text',
      rows: 3,
      description: 'A short description for the blog list page.',
    }),
    defineField({
      name: 'body',
      title: 'Body (Text Editor)',
      type: 'array',
      of: [
        { type: 'block' }, // This gives you the full rich text editor (bold, headings, lists, etc)
        { type: 'image', options: { hotspot: true } } // Allows adding images inside the text
      ],
    }),
  ],
})
