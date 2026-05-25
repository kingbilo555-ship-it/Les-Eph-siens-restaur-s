import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import BlogClient from "./BlogClient";

// Ce composant est exécuté côté serveur (SSR)
export default async function BlogPage() {
  let postsData = [];
  try {
    postsData = await client.fetch(postsQuery);
  } catch (error) {
    console.error("Erreur de connexion à Sanity pour les articles :", error);
  }

  // On passe les données au composant interactif
  return <BlogClient initialPosts={postsData} />;
}
