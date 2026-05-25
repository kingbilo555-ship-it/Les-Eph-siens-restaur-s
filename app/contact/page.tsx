"use client";

import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">Contact & Prière</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Que ce soit pour une question, un besoin pastoral ou un sujet de prière, n'hésitez pas à nous écrire. Nous sommes là pour vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Informations de contact */}
          <div>
            <h2 className="text-3xl font-serif text-primary mb-8">Où nous trouver ?</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    123 Avenue de la Restauration<br />
                    75000 Paris, France
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@ephesiensrestaures.fr</p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps Mock */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner border border-gray-300 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                <p>Intégration Google Maps ici</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 w-full bg-primary"></div>
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-serif text-primary mb-6">Écrivez-nous</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Prénom</label>
                      <Input placeholder="Jean" className="bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nom</label>
                      <Input placeholder="Dupont" className="bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" placeholder="jean@exemple.com" className="bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Objet</label>
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                      <option value="">Sélectionnez un objet</option>
                      <option value="priere">Sujet de prière</option>
                      <option value="information">Demande d'information</option>
                      <option value="temoignage">Partager un témoignage</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent resize-y"
                    />
                  </div>

                  <Button className="w-full h-12 text-lg rounded-xl bg-primary text-white hover:bg-primary/90">
                    <Send className="mr-2 h-5 w-5" /> Envoyer le message
                  </Button>
                </form>

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </main>
  );
}
