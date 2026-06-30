"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ChevronDown, Star, Heart, MessageCircle, ShoppingBag, Truck, ShieldCheck, Share2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import { getWhatsAppProductLink } from "@/utils/whatsapp";

interface ProductClientProps {
  product: Product;
  categories: string[];
}

export default function ProductClient({ product, categories }: ProductClientProps) {
  const [searchCategory, setSearchCategory] = useState("");
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const handleWhatsAppBuy = () => {
    const targetUrl = getWhatsAppProductLink(product);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Route back to the main shop if they try to filter from the single product page
  const handleCategoryClick = () => {
    router.push('/shop');
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-blue-600 transition">Shop</Link>
          <span>/</span>
          <span className="hover:text-blue-600 transition cursor-pointer" onClick={handleCategoryClick}>{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-[200px]">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- LEFT SIDEBAR (Filters - Matches ShopClient perfectly) --- */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="border border-gray-200 rounded-md p-4 mb-6 cursor-pointer flex justify-between items-center hover:bg-gray-50 transition">
              <span className="text-gray-600 font-medium">Sort by : <span className="font-bold text-gray-800">Relevance</span></span>
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>

            <div className="border border-gray-200 rounded-md">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-gray-800 text-lg">FILTERS</h2>
                <p className="text-xs text-gray-500 mt-1">Explore our catalog</p>
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
                    className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500"
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
                        onChange={handleCategoryClick}
                        checked={cat === product.category}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" 
                      />
                      <span className={`text-sm ${cat === product.category ? 'font-bold text-blue-600' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- RIGHT CONTENT (Professional Product Details) --- */}
          <main className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-10">
            
            {/* Left Col: Image Gallery */}
            <div className="relative aspect-square xl:aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center group">
              <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                <button className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:shadow-md transition">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="bg-white p-2.5 rounded-full shadow-sm text-gray-400 hover:text-blue-500 hover:shadow-md transition">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
              
              <Image 
                src={product.imageUrl} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Col: Product Info */}
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-yellow-400">
                  {"★".repeat(Math.round(product.rating || 5))}
                  {"☆".repeat(5 - Math.round(product.rating || 5))}
                </div>
                <span className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer underline underline-offset-4 transition">
                  Read Reviews
                </span>
              </div>

              {/* Price Block */}
              <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
                <span className="text-4xl font-black text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-400 line-through mb-1">${(product.price * 1.5).toFixed(2)}</span>
                <span className="text-sm font-bold text-green-600 mb-2">(33% OFF)</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Product Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description || "Crafted with premium materials for maximum comfort and durability. This piece elevates your everyday style while maintaining exceptional quality and a perfect fit."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => addItem(product)}
                  className="flex-1 bg-black text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button 
                  onClick={handleWhatsAppBuy}
                  className="flex-1 bg-[#25D366] text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1ebd5a] hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Buy on WhatsApp
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-white p-2 rounded-md shadow-sm border border-gray-100">
                    <Truck className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide">Free Global Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="bg-white p-2 rounded-md shadow-sm border border-gray-100">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide">1 Year Warranty</span>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}