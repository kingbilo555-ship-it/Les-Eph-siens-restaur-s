"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type PostItem = {
  _id?: string;
  id?: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date?: string;
  publishedAt?: string;
  readTime: string;
  image: string;
  slug?: string;
};

const blogPosts: PostItem[] = [
  {
    id: 1,
    title: "Comment maintenir sa paix dans la tempête",
    excerpt: "Découvrez 3 principes bibliques fondamentaux pour garder son cœur en paix lorsque les circonstances de la vie deviennent difficiles et incertaines.",
    category: "Méditation",
    author: "Pasteur Jean",
    date: "20 Mai 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Le pardon : la clé de la restauration",
    excerpt: "Le pardon n'est pas un sentiment, c'est une décision. Témoignage d'une famille restaurée par la puissance du pardon inconditionnel.",
    category: "Témoignage",
    author: "Sarah Michel",
    date: "15 Mai 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Comprendre la grâce de Dieu",
    excerpt: "Une étude profonde sur la signification du mot grâce dans l'Ancien et le Nouveau Testament.",
    category: "Étude",
    author: "Marc Lemaire",
    date: "10 Mai 2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2873&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Prier avec efficacité",
    excerpt: "Jésus nous a laissé un modèle de prière. Analysons ensemble le Notre Père pour dynamiser notre vie spirituelle quotidienne.",
    category: "Méditation",
    author: "Pasteur Jean",
    date: "02 Mai 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2940&auto=format&fit=crop"
  }
];

const categories = ["Tous", "Méditation", "Témoignage", "Étude"];

// Type PostItem moved above

export default function BlogClient({ initialPosts }: { initialPosts: PostItem[] }) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const postsToDisplay = initialPosts.length > 0 ? initialPosts : blogPosts;

  const filteredPosts = activeCategory === "Tous" 
    ? postsToDisplay 
    : postsToDisplay.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-20">
      
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Blog & Édification</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des articles, des témoignages et des méditations pour nourrir votre foi au quotidien.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className="rounded-full px-6"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post._id || post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                {post.image && (
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-xl md:text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col gap-1 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-accent" /> {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-accent" /> {post.date || new Date(post.publishedAt || "").toLocaleDateString('fr-FR')} • {post.readTime}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="rounded-full text-primary hover:text-accent hover:bg-accent/10">
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
