import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Article de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Méditation', value: 'Méditation' },
          { title: 'Témoignage', value: 'Témoignage' },
          { title: 'Étude Biblique', value: 'Étude' },
        ],
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait (Résumé court)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' }
      ],
    }),
    defineField({
      name: 'readTime',
      title: 'Temps de lecture (ex: 5 min)',
      type: 'string',
    }),
  ],
})
