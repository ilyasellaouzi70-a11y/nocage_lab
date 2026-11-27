"use client";

import { Product } from "@/data/products";
import { WhatsAppButton } from "./WhatsAppButton";
import { useState } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white dark:bg-zinc-900/30 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 hover:border-pink-500/50 transition-all duration-500 group flex flex-col justify-between shadow-sm dark:shadow-none">
      <div>
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-950">
          <video
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
            <source src={product.videoPreview} type="video/mp4" />
          </video>
          <div className="absolute top-4 left-4 bg-white/60 dark:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-200/50 dark:border-white/10">
            <span className="text-[10px] font-black tracking-widest text-pink-500 dark:text-pink-300 uppercase">{product.category}</span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-zinc-950 dark:text-white mb-2 uppercase tracking-tight">{product.name}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6 leading-relaxed font-normal">{product.description}</p>

          <div className="flex flex-col mb-6">
            <div className="text-2xl font-black text-zinc-950 dark:text-white italic tracking-tighter">
              {product.price.toFixed(0)} <span className="text-xs font-bold not-italic text-zinc-500 ml-1">MAD</span>
            </div>
            <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mt-0.5">
              (excl. delivery)
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1.5 ml-1">Select Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white text-xs font-bold px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 focus:border-pink-500/50 focus:outline-none transition-colors cursor-pointer"
                >
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="w-20">
                <label className="block text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1.5 ml-1">Qty</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-white text-xs font-bold px-3 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 focus:border-pink-500/50 focus:outline-none transition-colors text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <WhatsAppButton product={{...product, size: selectedSize, quantity}} />
      </div>
    </div>
  );
};