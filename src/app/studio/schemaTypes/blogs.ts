// schemaTypes/blogs.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
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
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Tips & Guides', value: 'Tips & Guides'},
          {title: 'Safety & Trust', value: 'Safety & Trust'},
          {title: 'Industry Insights', value: 'Industry Insights'},
          {title: 'Financial Tips', value: 'Financial Tips'},
          {title: 'Market Analysis', value: 'Market Analysis'},
          {title: 'Product Updates', value: 'Product Updates'},
          {title: 'Remote Work', value: 'Remote Work'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g., 5 min read',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Section',
          fields: [
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'contentType',
              title: 'Content Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text', value: 'text'},
                  {title: 'List', value: 'list'},
                ],
              },
              initialValue: 'text',
            },
            {
              name: 'textContent',
              title: 'Text Content',
              type: 'text',
              rows: 8,
              hidden: ({parent}) => parent?.contentType !== 'text',
            },
            {
              name: 'listContent',
              title: 'List Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'text',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
              hidden: ({parent}) => parent?.contentType !== 'list',
            },
            {
              name: 'sectionImage',
              title: 'Section Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'video',
              title: 'Video URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'subtitle',
              media: 'sectionImage',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const {author, date} = selection
      return {
        ...selection,
        subtitle: author && date ? `${author} • ${new Date(date).toLocaleDateString()}` : author || date,
      }
    },
  },
})