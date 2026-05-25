"use client";

import Image from "next/image";
import { BookOpen, Users, HeartHandshake, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const teamMembers = [
  {
    name: "Pasteur Jean Dupont",
    role: "Pasteur Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2787&auto=format&fit=crop"
  },
  {
    name: "Pasteur Sarah Michel",
    role: "Responsable Louange & Adoration",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop"
  },
  {
    name: "Marc Lemaire",
    role: "Responsable des Groupes de Maison",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2938&auto=format&fit=crop"
            alt="Groupe de prière"
            fill
            className="object-cover object-center brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
            Notre Histoire & Vision
          </h1>
          <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto text-gray-200">
            Une église ancrée dans la Parole, animée par l'Esprit, et tournée vers le monde.
          </p>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Qui sommes-nous ?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  L'église <strong>Les Éphésiens Restaurés</strong> est née d'une vision simple : voir des vies transformées par l'amour inconditionnel de Jésus-Christ.
                </p>
                <p>
                  Nous croyons que chaque individu, quelle que soit son histoire, peut trouver guérison, restauration et un but divin au sein d'une communauté aimante et authentique.
                </p>
                <p>
                  Notre nom tire son inspiration du livre d'Éphésiens, nous rappelant que nous sommes créés en Jésus-Christ pour de bonnes œuvres, préparées d'avance.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2832&auto=format&fit=crop" 
                alt="Bible ouverte"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">Nos Valeurs Fondamentales</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <BookOpen className="w-12 h-12 mx-auto text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">La Parole</h3>
              <p className="text-gray-300 text-sm">Notre boussole infaillible et notre autorité suprême pour la vie et la foi.</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Users className="w-12 h-12 mx-auto text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">La Famille</h3>
              <p className="text-gray-300 text-sm">Une communauté où l'on prend soin les uns des autres dans l'amour fraternel.</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <Globe className="w-12 h-12 mx-auto text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">La Mission</h3>
              <p className="text-gray-300 text-sm">Partager la bonne nouvelle de Jésus-Christ autour de nous et jusqu'aux extrémités de la terre.</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <HeartHandshake className="w-12 h-12 mx-auto text-accent mb-4" />
              <h3 className="text-xl font-serif mb-3">Le Service</h3>
              <p className="text-gray-300 text-sm">Mettre nos dons et talents au service de l'église et des personnes démunies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFESSION DE FOI (ACCORDION) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">Ce que nous croyons</h2>
          
          <Accordion className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-serif px-4 hover:text-accent">La Bible</AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-4 text-base leading-relaxed">
                Nous croyons que la Bible entière est la Parole inspirée de Dieu, sans erreur dans les manuscrits originaux, et qu'elle est l'autorité suprême pour la foi et la vie.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-serif px-4 hover:text-accent">La Trinité</AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-4 text-base leading-relaxed">
                Nous croyons en un seul Dieu, créateur de toutes choses, existant éternellement en trois personnes : le Père, le Fils et le Saint-Esprit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-serif px-4 hover:text-accent">Jésus-Christ</AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-4 text-base leading-relaxed">
                Nous croyons en la divinité de Jésus-Christ, à sa naissance virginale, à sa vie sans péché, à ses miracles, à sa mort expiatoire à notre place, à sa résurrection corporelle, à son ascension et à son retour personnel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-serif px-4 hover:text-accent">Le Salut</AccordionTrigger>
              <AccordionContent className="text-muted-foreground px-4 text-base leading-relaxed">
                Nous croyons que le salut est un don de la grâce de Dieu, reçu par la foi seule en Jésus-Christ, et non par les œuvres.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* NOTRE ÉQUIPE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-4">Notre Équipe</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Des hommes et des femmes dévoués à l'édification de l'église et au service des saints.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-gray-50 group-hover:ring-accent/20 transition-all">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
