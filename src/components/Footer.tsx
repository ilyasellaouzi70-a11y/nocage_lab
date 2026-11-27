"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/212702769784",
      icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
      label: "+212 702-769784"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nocage_lab?knvt=dnhkd3l4YzcwbnEx",
      icon: (
        <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ),
      label: "Instagram"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@nocage_lab",
      icon: (
        <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
        </svg>
      ),
      label: "TikTok"
    }
  ];

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 py-16 mt-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/images/logo.png"
                  alt="nocage_lab logo"
                  fill
                  className="object-contain mix-blend-multiply dark:mix-blend-lighten contrast-125"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-zinc-950 dark:text-white uppercase italic">
                nocage_lab
              </span>
            </Link>
            <p className="text-zinc-500 text-xs tracking-wider uppercase">
              Underground Streetwear Laboratory. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};