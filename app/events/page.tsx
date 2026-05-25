"use client";

import Image from "next/image";
import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Culte Dominical de Restauration",
    date: "Tous les dimanches",
    time: "10h00 - 12h30",
    location: "Auditorium Principal, 123 Ave. de la Restauration",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop",
    description: "Rejoignez-nous chaque dimanche pour un moment puissant de louange, d'adoration et un message inspiré de la Parole de Dieu.",
    tags: ["Culte", "Dimanche"]
  },
  {
    id: 2,
    title: "Soirée de Prière & Intercession",
    date: "Tous les mercredis",
    time: "19h30 - 21h00",
    location: "Salle de Prière",
    image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2832&auto=format&fit=crop",
    description: "Un temps mis à part pour intercéder pour nos familles, notre ville et les nations. Venez expérimenter la puissance de la prière unie.",
    tags: ["Prière", "Semaine"]
  },
  {
    id: 3,
    title: "Séminaire : Bâtir des familles solides",
    date: "Samedi 28 Mai 2026",
    time: "09h00 - 17h00",
    location: "Centre des Congrès",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2940&auto=format&fit=crop",
    description: "Une journée spéciale dédiée aux couples et aux parents, avec des ateliers pratiques fondés sur les principes bibliques.",
    tags: ["Séminaire", "Famille"]
  },
  {
    id: 4,
    title: "Rencontre des Jeunes (ER Youth)",
    date: "Vendredi 20 Mai 2026",
    time: "20h00 - 22h30",
    location: "Espace Jeunes",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop",
    description: "Louange urbaine, jeux, et discussions autour de thèmes pertinents pour la jeunesse d'aujourd'hui.",
    tags: ["Jeunes", "Événement"]
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-20">
      
      <section className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Agenda & Événements</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez tout ce qui se passe dans la vie de notre église et trouvez votre place parmi nous.
          </p>
        </div>

        <div className="space-y-10">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row group">
              
              {/* Image */}
              <div className="relative h-64 md:h-auto md:w-2/5 overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 md:w-3/5 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {event.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider bg-primary/5 text-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                  {event.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {event.description}
                </p>

                <div className="mt-auto space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <CalendarIcon className="text-accent w-5 h-5" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Clock className="text-accent w-5 h-5" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <MapPin className="text-accent w-5 h-5" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full sm:w-auto rounded-full px-8">En savoir plus</Button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
