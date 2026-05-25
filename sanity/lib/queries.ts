import { groq } from "next-sanity";

// Requête pour récupérer les articles de blog
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  category,
  excerpt,
  publishedAt,
  readTime,
  "image": mainImage.asset->url
}`;

// Requête pour récupérer les événements de l'agenda
export const eventsQuery = groq`*[_type == "event"] | order(date asc) {
  _id,
  title,
  date,
  time,
  location,
  description,
  tags,
  "image": image.asset->url
}`;

// Requête pour récupérer les vidéos de la médiathèque
export const mediaQuery = groq`*[_type == "media"] | order(date desc) {
  _id,
  title,
  speaker,
  date,
  category,
  duration,
  videoUrl,
  "image": image.asset->url
}`;
