import { client } from "@/sanity/lib/client";
import { mediaQuery } from "@/sanity/lib/queries";
import MediaClient from "./MediaClient";

// Ce composant est exécuté côté serveur (SSR / SSG)
export default async function MediaPage() {
  // On récupère les données de Sanity
  let mediaData = [];
  try {
    mediaData = await client.fetch(mediaQuery);
  } catch (error) {
    console.error("Erreur de connexion à Sanity :", error);
  }

  // On passe les données au composant client qui gère l'interactivité
  return <MediaClient initialMedia={mediaData} />;
}
