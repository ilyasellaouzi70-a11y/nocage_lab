"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/logo.png"
                alt="nocage_lab logo"
                fill
                className="object-contain mix-blend-multiply dark:mix-blend-lighten contrast-125 brightness-125 transition-all"
              />
            </div>
            <span className="text-xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase italic group-hover:text-pink-500 dark:group-hover:text-pink-300 transition-colors">
              nocage_lab
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
            <Link href="#collection" className="text-zinc-600 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">Collection</Link>
            <Link href="#drop" className="text-zinc-600 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">Latest Drop</Link>
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
              <a
                href="https://www.instagram.com/nocage_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@nocage_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                TT
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-pink-500 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-800" />}
            </button>

            <a
              href="https://wa.me/212702769784?text=Hello%20nocage_lab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 dark:bg-white text-white dark:text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-500 dark:hover:bg-pink-400 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};