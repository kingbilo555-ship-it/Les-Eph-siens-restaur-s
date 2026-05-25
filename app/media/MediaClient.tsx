"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle, Calendar, User, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Types
type MediaItem = {
  id: number;
  title: string;
  speaker: string;
  date: string;
  category: string;
  image: string;
  duration: string;
  videoUrl: string; // Lien YouTube embed
};

// Mock Data
const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "La Puissance de la Grâce",
    speaker: "Pasteur Jean Dupont",
    date: "12 Mai 2026",
    category: "Prédications",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop",
    duration: "45:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  },
  {
    id: 2,
    title: "Moment de Louange Intense",
    speaker: "Groupe de Louange ER",
    date: "10 Mai 2026",
    category: "Louange",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=2940&auto=format&fit=crop",
    duration: "28:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  },
  {
    id: 3,
    title: "Comprendre le livre d'Éphésiens",
    speaker: "Pasteur Marc L.",
    date: "05 Mai 2026",
    category: "Études",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2874&auto=format&fit=crop",
    duration: "55:10",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  },
  {
    id: 4,
    title: "Bâtir sur le Roc",
    speaker: "Pasteur Jean Dupont",
    date: "28 Avril 2026",
    category: "Prédications",
    image: "https://images.unsplash.com/photo-1469502674403-162eeb6289b7?q=80&w=2940&auto=format&fit=crop",
    duration: "42:05",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  },
  {
    id: 5,
    title: "Adoration Acoustique",
    speaker: "Groupe de Louange ER",
    date: "25 Avril 2026",
    category: "Louange",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2812&auto=format&fit=crop",
    duration: "30:00",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  },
  {
    id: 6,
    title: "L'Armure du Croyant",
    speaker: "Pasteur Marc L.",
    date: "18 Avril 2026",
    category: "Études",
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2832&auto=format&fit=crop",
    duration: "50:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
  }
];

const categories = ["Tout", "Prédications", "Louange", "Études"];

export default function MediaClient({ initialMedia }: { initialMedia: MediaItem[] }) {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);

  // Fallback to mock data if Sanity is empty
  const mediaToDisplay = initialMedia.length > 0 ? initialMedia : mediaItems;

  const filteredMedia = mediaToDisplay.filter(item => {
    const matchesCategory = activeCategory === "Tout" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.speaker.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-24 pb-20 min-h-screen bg-gray-50">
      {/* HEADER SECTION */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 text-white drop-shadow-md">
            Médiathèque
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-sans">
            Revivez nos derniers cultes, enseignements bibliques et moments d'adoration. 
            Laissez-vous édifier par la Parole où que vous soyez.
          </p>
        </div>
      </section>

      {/* FILTER & SEARCH */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-[72px] md:top-[88px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <Button 
                  key={cat} 
                  variant={activeCategory === cat ? "default" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="rounded-full px-6 whitespace-nowrap"
                >
                  {cat}
                </Button>
              ))}
            </div>

            <div className="relative w-full md:w-80 flex items-center">
              <Search className="absolute left-3 text-muted-foreground" size={18} />
              <Input 
                type="text" 
                placeholder="Chercher un titre, un orateur..." 
                className="pl-10 rounded-full bg-gray-50 border-gray-200 focus:border-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA GRID */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredMedia.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 cursor-pointer"
                  onClick={() => setSelectedVideo(item)}
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 transition-colors flex items-center justify-center">
                      <PlayCircle className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-16 h-16 drop-shadow-lg" />
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-sm">
                      {item.duration}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-serif text-primary mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="mt-auto space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{item.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-4">
                <Filter size={32} />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2">Aucun résultat</h3>
              <p className="text-muted-foreground">Nous n'avons trouvé aucun média correspondant à votre recherche.</p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-full"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Tout");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* VIDEO PLAYER MODAL (Netflix Style) */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
          <div className="absolute top-6 right-6 z-50">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20 rounded-full w-12 h-12"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </Button>
          </div>
          
          <div className="w-full max-w-5xl px-4 flex flex-col items-center">
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 mb-6 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src={selectedVideo.videoUrl} 
                title={selectedVideo.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <div className="w-full text-left">
              <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 block">
                {selectedVideo.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                {selectedVideo.title}
              </h2>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1"><User size={16}/> {selectedVideo.speaker}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar size={16}/> {selectedVideo.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
