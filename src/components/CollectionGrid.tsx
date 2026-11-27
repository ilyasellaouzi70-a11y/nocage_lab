"use client";

import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

export const CollectionGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | "JEANS" | "HOODIES">("ALL");

  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div id="collection" className="py-12">
      <div className="flex justify-center gap-2 mb-12">
        {(["ALL", "JEANS", "HOODIES"] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-pink-500 text-white shadow-lg shadow-pink-500/20"
                : "bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-300 dark:hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};