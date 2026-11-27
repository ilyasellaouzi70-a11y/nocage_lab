"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-36 md:pt-44 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 brightness-[0.45] contrast-125 grayscale-[0.1]"
        >
          <source src="/media/Pink_hoodie_walking_forward_727d1664.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/30 to-zinc-950" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="inline-block px-4 py-1.5 border border-pink-500/20 bg-pink-500/5 rounded-full mb-6 backdrop-blur-sm">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-300/80">Experimental Drop 01</span>
        </div>

        <div className="mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter uppercase italic leading-[0.85] drop-shadow-2xl">
            nocage<span className="text-pink-500">_</span>lab
          </h1>
        </div>

        <p className="text-xs sm:text-base md:text-lg text-zinc-400 mb-10 max-w-lg mx-auto font-bold tracking-widest uppercase">
          Underground Streetwear Laboratory.
        </p>

        <div className="flex justify-center">
          <a
            href="#collection"
            className="group relative px-8 py-3.5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:bg-pink-400"
          >
            <span className="relative z-10">Shop Collection</span>
          </a>
        </div>
      </div>
    </section>
  );
};