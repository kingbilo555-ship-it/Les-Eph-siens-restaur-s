"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Intro */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-serif text-2xl font-bold">
                ER
              </div>
              <span className="font-serif text-2xl font-semibold">
                Les Éphésiens<br />Restaurés
              </span>
            </Link>
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              Une communauté passionnée par la présence de Dieu, dédiée à la restauration des âmes et à l'édification par la Parole pour équiper les saints.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-accent">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">Notre Vision</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Prochains Événements</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">Prédications & Louange</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Édification</Link></li>
              <li><Link href="/give" className="hover:text-white transition-colors">Faire un Don</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Prière</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-accent">Nous Contacter</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span>123 Avenue de la Restauration<br />75000 Paris, France</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-accent shrink-0" />
                <span>contact@ephesiensrestaures.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl font-medium mb-6 text-accent">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos pensées du jour et rester informé de nos événements.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <Button className="bg-accent text-primary hover:bg-accent/90 font-medium">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Les Éphésiens Restaurés. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
