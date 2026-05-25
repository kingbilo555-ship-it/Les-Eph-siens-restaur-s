import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 pb-20 px-4">
      <div className="bg-white rounded-3xl p-8 md:p-16 max-w-2xl text-center shadow-2xl border border-gray-100">
        <div className="flex justify-center mb-8">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 className="w-20 h-20 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
          Merci pour votre générosité !
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Votre don a été traité avec succès. C'est grâce à des partenaires comme vous que nous pouvons continuer à accomplir notre mission, diffuser l'Évangile et soutenir notre communauté.
        </p>
        
        <p className="text-md text-gray-500 font-medium italic mb-10">
          "Dieu aime celui qui donne avec joie." — 2 Corinthiens 9:7
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90 h-14 px-8 text-lg">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg group">
            <Link href="/blog" className="flex items-center gap-2">
              Lire nos articles <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
