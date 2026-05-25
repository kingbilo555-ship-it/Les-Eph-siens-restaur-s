"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, PlayCircle, MapPin, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop"
            alt="Worship gathering"
            fill
            className="object-cover object-center brightness-[0.4] scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-in-out"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="text-accent uppercase tracking-widest text-sm font-semibold mb-4 block">
              Bienvenue chez
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-md">
              Les Éphésiens <br className="hidden md:block"/> Restaurés
            </h1>
            <p className="text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 text-gray-200">
              Une communauté passionnée par la présence de Dieu, dédiée à la restauration des âmes et à l'édification par la Parole.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/about" 
                className="bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Nous Rendre Visite <MapPin size={20} />
              </Link>
              <Link 
                href="/media" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Regarder le Culte <PlayCircle size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VERSET DU JOUR */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-accent mb-4">
              <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-6">
              "La parole de Dieu vaincra satan n'importe où, en tout lieu dans n'importe quelle condition, n'importe quand."
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-medium">— Expectative 27 53-0507 WILLIAM BRANHAM</p>
          </motion.div>
        </div>
      </section>

      {/* PROCHAINS EVENEMENTS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row justify-between items-end mb-12"
          >
            <div>
              <span className="text-accent uppercase tracking-wider text-sm font-bold">Agenda</span>
              <h2 className="text-4xl font-serif text-primary mt-2">Nos Prochains Événements</h2>
            </div>
            <Link href="/events" className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors gap-2">
              Voir tout l'agenda <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Culte de Célébration", date: "Dimanche 10h00", image: "https://images.unsplash.com/photo-1473280025148-643f9b0cbac2?q=80&w=2948&auto=format&fit=crop" },
              { title: "Réunion de Prière", date: "Mardi 19h30", image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2832&auto=format&fit=crop" },
              { title: "Étude Biblique", date: "Jeudi 18h30", image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2940&auto=format&fit=crop" }
            ].map((event, index) => (
              <motion.div key={index} variants={fadeIn} className="group cursor-pointer">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-4 shadow-md">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm font-medium mb-1">
                      <Calendar size={16} className="text-accent" /> {event.date}
                    </div>
                    <h3 className="text-2xl font-serif">{event.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-10 text-center md:hidden">
             <Link href="/events" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors gap-2">
              Voir tout l'agenda <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION : DONS / PARTENARIAT */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white">Soutenir l'Œuvre</h2>
            <p className="text-lg text-gray-300 mb-10 font-sans">
              Votre générosité nous permet de continuer à propager l'Évangile et à impacter notre communauté locale et internationale.
            </p>
            <Link 
              href="/give" 
              className="inline-block bg-accent text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-xl hover:-translate-y-1"
            >
              Faire un Don Sécurisé
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
