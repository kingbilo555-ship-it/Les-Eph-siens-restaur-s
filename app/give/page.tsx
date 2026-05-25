"use client";

import { useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Heart, Lock, CheckCircle2, ChevronRight, CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PRESET_AMOUNTS = [20, 50, 100, 200];

export default function GivePage() {
  const [amount, setAmount] = useState<number | "">("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [frequency, setFrequency] = useState<"unique" | "mensuel">("unique");
  const [isLoading, setIsLoading] = useState(false);

  const handlePresetClick = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount("");
    setCustomAmount(e.target.value);
  };

  const handleCheckout = async () => {
    const finalAmount = amount || parseFloat(customAmount);
    if (!finalAmount || finalAmount <= 0) return;

    try {
      setIsLoading(true);
      
      // Call our API route
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, frequency }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error("Erreur de paiement:", error);
        setIsLoading(false);
        return;
      }

      // Load Stripe and redirect to Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (err) {
      console.error("Erreur serveur:", err);
      setIsLoading(false);
    }
  };

  const currentAmount = amount || customAmount || "0";

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2940&auto=format&fit=crop"
            alt="Person giving"
            fill
            className="object-cover object-center brightness-[0.3]"
            priority
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Heart className="w-12 h-12 mx-auto text-accent mb-6" fill="currentColor" />
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
            Dons & Partenariat
          </h1>
          <p className="text-lg md:text-xl font-serif italic max-w-3xl mx-auto text-gray-200">
            "Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte ; car Dieu aime celui qui donne avec joie." — 2 Corinthiens 9:7
          </p>
        </div>
      </section>

      {/* DONATION WIDGET SECTION */}
      <section className="py-16 md:py-24 -mt-16 md:-mt-24 relative z-20 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-6xl">
          
          {/* Why Give Information */}
          <div className="lg:w-1/2 pt-10">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Pourquoi donner ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Votre générosité est le moteur qui nous permet de financer nos projets d'évangélisation, d'entretenir nos locaux, de soutenir les plus démunis et de produire du contenu édifiant (prédications, louanges).
            </p>
            
            <ul className="space-y-6">
              {[
                "Soutenir la diffusion de l'Évangile.",
                "Participer aux œuvres de charité locales.",
                "Financer le matériel technique pour les diffusions en direct.",
                "Une plateforme 100% sécurisée via Stripe."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-full text-accent shrink-0 mt-0.5">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Donation Card */}
          <div className="lg:w-1/2 w-full">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <div className="h-2 w-full bg-accent"></div>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-serif text-primary">Faire un Don Sécurisé</CardTitle>
                <CardDescription className="text-base">Choisissez comment vous souhaitez contribuer aujourd'hui.</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="unique" className="w-full" onValueChange={(val) => setFrequency(val as "unique" | "mensuel")}>
                  <TabsList className="grid w-full grid-cols-2 h-14 mb-8 bg-gray-100 p-1 rounded-xl">
                    <TabsTrigger value="unique" className="rounded-lg text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Don Unique</TabsTrigger>
                    <TabsTrigger value="mensuel" className="rounded-lg text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Don Mensuel</TabsTrigger>
                  </TabsList>
                  
                  <div className="space-y-6">
                    {/* Presets */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {PRESET_AMOUNTS.map((preset) => (
                        <Button
                          key={preset}
                          variant={amount === preset ? "default" : "outline"}
                          className={`h-14 text-lg rounded-xl transition-all ${
                            amount === preset 
                              ? "bg-primary text-white border-primary ring-2 ring-primary/20 ring-offset-2" 
                              : "border-gray-200 hover:border-primary hover:text-primary hover:bg-gray-50"
                          }`}
                          onClick={() => handlePresetClick(preset)}
                        >
                          {preset} €
                        </Button>
                      ))}
                    </div>

                    {/* Custom Amount */}
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium text-lg">€</span>
                      <Input 
                        type="number"
                        min="1"
                        placeholder="Autre montant"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="pl-10 h-14 text-lg rounded-xl border-gray-300 focus:border-accent focus:ring-accent"
                      />
                    </div>

                    {/* Proceed Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button 
                        onClick={handleCheckout}
                        disabled={isLoading || parseFloat(currentAmount) <= 0}
                        className="w-full h-16 text-lg rounded-xl bg-accent text-primary hover:bg-accent/90 shadow-lg shadow-accent/20 flex items-center justify-between px-6 group"
                      >
                        <span className="flex items-center gap-2 font-bold">
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin" /> Traitement...
                            </>
                          ) : (
                            <>
                              Continuer <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </span>
                        <span className="font-bold text-xl">{currentAmount} €</span>
                      </Button>
                    </div>
                  </div>
                </Tabs>
              </CardContent>
              <CardFooter className="bg-gray-50 border-t border-gray-100 p-6 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                  <Lock size={16} /> Paiement 100% sécurisé via Stripe
                </div>
                <div className="flex items-center justify-center gap-3 opacity-50 mt-2">
                   <CreditCard size={24} />
                   <span className="text-xs font-bold tracking-widest">VISA / MASTERCARD / AMEX</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
