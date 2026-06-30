"use client";

import { useState } from "react";
import { Search, ChevronDown, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product"; 

interface ShopClientProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const addItem = useCartStore((state) => state.addItem);

  // Filter logic: Show products that match the selected checkboxes
  const filteredProducts = selectedCategories.length > 0 
    ? initialProducts.filter(p => selectedCategories.includes(p.category))
    : initialProducts;

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Products For You</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT SIDEBAR (Filters) --- */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="border border-gray-200 rounded-md p-4 mb-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition">
              <span className="text-gray-600 font-medium">Sort by : <span className="font-bold text-gray-800">Relevance</span></span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>

            <div className="border border-gray-200 rounded-md">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-800 text-lg">FILTERS</h2>
                <p className="text-xs text-gray-500 mt-1">{filteredProducts.length} Products</p>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-4 cursor-pointer">
                  <h3 className="font-bold text-gray-800">Category</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </div>
                
                <div className="relative mb-4">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search Categories"
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:blue-pink-500"
                  />
                </div>

                {/* Dynamic Category Checkboxes */}
                <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                  {categories
                    .filter(c => c.toLowerCase().includes(searchCategory.toLowerCase()))
                    .map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryToggle(cat)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                      />
                      <span className="text-gray-600 text-sm group-hover:text-gray-900">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- RIGHT CONTENT AREA --- */}
          <main className="flex-1">
            {/* Dynamic Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.length === 0 ? (
                <p className="text-gray-500 col-span-full py-10 text-center">No products found matching these filters.</p>
              ) : (
                filteredProducts.map((product, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={product._id}
                    className="border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow bg-white flex flex-col group relative"
                  >
                    
                    {/* Floating Action Buttons (Like Heart) */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 z-20">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Add wishlist logic here later if needed
                        }}
                        className="bg-white p-1.5 rounded-full shadow text-gray-400 hover:text-red-500 transition"
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Clickable Area for the Product Page */}
                    <Link href={`/shop/product/${product.slug || product._id}`} className="flex-1 flex flex-col cursor-pointer">
                      <div className="aspect-[4/5] bg-gray-50 overflow-hidden relative">
                        <Image 
                          src={product.imageUrl} 
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-gray-500 font-medium text-sm line-clamp-2 mb-2 h-10">{product.name}</h3>
                        
                        <div className="mt-auto flex items-end gap-2 flex-wrap">
                          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        </div>

                        <div className="mt-3 flex items-center gap-2">
                          <div className="bg-green-600 text-white flex items-center gap-1 px-2 py-0.5 rounded-[4px]">
                            <span className="text-xs font-bold">{product.rating || 5}</span>
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Add to Cart Button (Must have stopPropagation!) */}
                    <div className="px-4 pb-4 z-10 relative bg-white">
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addItem(product);
                        }}
                        className="w-full bg-blue-50 text-blue-600 font-bold py-2 rounded border border-blue-100 hover:bg-blue-100 transition opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                      >
                        Add to Cart
                      </button>
                    </div>

                  </motion.div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

