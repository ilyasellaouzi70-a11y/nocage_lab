"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CollectionGrid } from "@/components/CollectionGrid";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white transition-colors duration-300 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-6 py-16">
        <section id="collection">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-pink-500 dark:text-pink-400 mb-3">Catalog</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The Collection</h2>
            <div className="w-12 h-1 bg-pink-500 mt-4 rounded-full" />
          </div>
          <CollectionGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}