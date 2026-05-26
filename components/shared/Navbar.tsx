"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/media", label: "Médiathèque" },
  { href: "/events", label: "Agenda" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || pathname !== "/" ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-24 h-24 md:w-28 md:h-28 group-hover:scale-105 transition-transform">
            <Image 
              src="/logo.png" 
              alt="Logo de l'église" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          <span className={`font-serif text-xl md:text-2xl font-semibold hidden sm:block ${scrolled || pathname !== "/" ? 'text-primary' : 'text-white drop-shadow-md'}`}>
            Les Éphésiens Restaurés
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === link.href
                  ? (scrolled || pathname !== "/") ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
                  : (scrolled || pathname !== "/") ? "text-slate-600 hover:text-primary hover:bg-slate-100" : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/give" className="hidden sm:block">
            <Button variant={scrolled || pathname !== "/" ? "default" : "secondary"} className="rounded-full px-6">
              Faire un Don
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant={scrolled || pathname !== "/" ? "outline" : "secondary"} size="icon" className="rounded-full" />}>
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="font-serif text-xl text-primary mb-8 text-center mt-4">
                  Les Éphésiens Restaurés
                </SheetTitle>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-primary hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-8 pt-8 border-t border-border">
                    <Link href="/give" className="w-full">
                      <Button className="w-full rounded-xl py-6 text-lg">
                        Faire un Don
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
