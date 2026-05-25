import { defineField, defineType } from 'sanity'

export const mediaType = defineType({
  name: 'media',
  title: 'Médiathèque (Vidéos/Audios)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du média',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'speaker',
      title: 'Orateur',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date (ex: 12 Mai 2026)',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Prédications', value: 'Prédications' },
          { title: 'Louange', value: 'Louange' },
          { title: 'Études', value: 'Études' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Miniature (Image)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'duration',
      title: 'Durée (ex: 45:20)',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Lien YouTube (ou autre)',
      type: 'url',
    }),
  ],
})
