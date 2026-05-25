import { defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Événement (Agenda)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'événement',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date de l\'événement (ex: 28 Mai 2026)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Horaires (ex: 10h00 - 12h30)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lieu',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image de présentation',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description courte',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Mots-clés (Tags)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
