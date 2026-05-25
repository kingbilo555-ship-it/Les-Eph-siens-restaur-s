import Link from "next/link";
import { XCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 pb-20 px-4">
      <div className="bg-white rounded-3xl p-8 md:p-16 max-w-xl text-center shadow-xl border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="bg-red-50 p-4 rounded-full">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif text-primary mb-4">
          Paiement annulé
        </h1>
        
        <p className="text-gray-600 mb-10">
          Votre transaction a été annulée et vous n'avez pas été débité. Si vous avez rencontré un problème technique, n'hésitez pas à nous contacter ou à réessayer.
        </p>
        
        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="rounded-full bg-accent text-primary hover:bg-accent/90 h-14 text-lg">
            <Link href="/give">Réessayer</Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full h-14 text-lg text-gray-500">
            <Link href="/" className="flex items-center gap-2 justify-center">
              <ArrowLeft size={20} /> Retour à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
