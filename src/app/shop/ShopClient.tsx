"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Filter, X, ShoppingBag, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface ShopClientProps {
  initialProducts: Product[];
  categories: string[];
}

export default function ShopClient({ initialProducts, categories }: ShopClientProps) {
  const [searchCategory, setSearchCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(100000); 
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Relevance");

  const addItem = useCartStore((state) => state.addItem);

  // Expanded Filter Logic
  let filteredProducts = initialProducts.filter(p => {
    // 1. Category Filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
    
    // 2. Gender Filter 
    // if (selectedGenders.length > 0 && p.gender && !selectedGenders.includes(p.gender)) return false;

    // 3. Price Filter
    if (p.price > priceRange) return false;

    // 4. Availability Filter 
    // if (inStockOnly && p.stock === 0) return false;

    return true;
  });

  // Sort Logic
  if (sortOption === "Price (Low to High)") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price (High to Low)") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleGenderToggle = (gender: string) => {
    setSelectedGenders(prev =>
      prev.includes(gender)
        ? prev.filter(g => g !== gender)
        : [...prev, gender]
    );
  };

  const WHATSAPP_NUMBER = "918168291041";
  const handleWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hi, I want to buy ${product.name} (Price: ₹${product.price}). Is it available?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <h2 className="font-bold text-gray-900 tracking-wide uppercase text-sm">Filters</h2>
        <span className="text-xs text-gray-500 font-medium">{filteredProducts.length} Items</span>
      </div>

      <div className="p-5 flex-1 overflow-y-auto custom-scrollbar space-y-8">
        
        {/* Category Filter */}
        <div>
          <h3 className="font-bold text-gray-800 text-sm mb-4 uppercase tracking-wider">Category</h3>
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="w-full border border-gray-200 rounded bg-gray-50 pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>
          <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2">
            {categories
              .filter(c => c.toLowerCase().includes(searchCategory.toLowerCase()))
              .map((cat, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                    className="w-4 h-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                  />
                  <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{cat}</span>
                </label>
              ))}
          </div>
        </div>

        {/* Gender / Collection Filter*/}
        <div className="border-t border-gray-100 pt-6">
          <h3 className="font-bold text-gray-800 text-sm mb-4 uppercase tracking-wider">Category</h3>
          <div className="space-y-3">
            {["School", "Business", "Regular"].map((gender, idx) => (
              <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedGenders.includes(gender)}
                  onChange={() => handleGenderToggle(gender)}
                  className="w-4 h-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                />
                <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">{gender}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Slider */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-sm uppercase tracking-wider">Price Range</h3>
            <span className="text-xs font-bold text-[#D4AF37]">₹0 - ₹{priceRange}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="20000" 
            step="200"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-[#D4AF37] cursor-pointer"
          />
        </div>

        {/* Availability */}
        <div className="border-t border-gray-100 pt-6 pb-4">
          <h3 className="font-bold text-gray-800 text-sm mb-4 uppercase tracking-wider">Availability</h3>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
              className="w-4 h-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
            />
            <span className="text-gray-600 text-sm group-hover:text-gray-900 transition-colors">In Stock Only</span>
          </label>
        </div>

      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="bg-[#f9f9f9] min-h-screen pt-32 pb-12 font-sans">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
          
          {/* Mobile Filter & Sort Bar */}
          <div className="lg:hidden flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-6 border border-gray-100">
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wider"
            >
              <Filter className="w-4 h-4 text-[#D4AF37]" /> Filters
            </button>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800 uppercase tracking-wider relative">
              <select 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Relevance</option>
                <option>New Arrivals</option>
                <option>Price (Low to High)</option>
                <option>Price (High to Low)</option>
              </select>
              <span>Sort</span> <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm sticky top-32 overflow-hidden max-h-[calc(100vh-140px)]">
                <SidebarContent />
              </div>
            </aside>

            {/* Product Grid Area */}
            <main className="flex-1">
              
              {/* Desktop Sort Bar */}
              <div className="hidden lg:flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h1 className="text-xl font-bold text-gray-900 font-serif">Premium Collections</h1>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500">Sort by:</span>
                  <select 
                    className="border-none font-bold text-gray-900 cursor-pointer focus:outline-none focus:ring-0 bg-transparent"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option>Relevance</option>
                    <option>New Arrivals</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                  </select>
                </div>
              </div>

              {/* Grid with New Card Design */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.length === 0 ? (
                  <div className="col-span-full bg-white p-12 text-center rounded-xl shadow-sm border border-gray-100">
                    <p className="text-gray-500 font-medium">No products found matching these filters.</p>
                  </div>
                ) : (
                  filteredProducts.map((product, idx) => (
                    <motion.div
                      key={product._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative"
                    >
                      <Link href={`/shop/product/${product.slug || product._id}`} className="flex-col flex flex-1">
                        
                        {/* Image Container */}
                        <div className="relative aspect-square w-full mb-3 flex items-center justify-center">
                          <Image 
                            src={product.imageUrl} 
                            alt={product.name} 
                            fill 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-contain hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col flex-1">
                          <span className="text-[13px] text-gray-500 mb-0">{product.category}</span>
                          <h3 className="font-semibold text-gray-900 text-base mb-0 line-clamp-2 min-h-[30px]">
                            {product.name}
                          </h3>
                          
                          {/* Bottom Area (Pushed to bottom using mt-auto) */}
                          <div className="mt-auto flex flex-col gap-2 pt-3">
                            
                            {/* Row 1: Price & Cart Button */}
                            <div className="flex items-center justify-between mb-2">
                              {/* Price */}
                              <span className="font-bold text-gray-900 text-[16px]">
                                ₹{product.price.toFixed(2)}
                              </span>

                              {/* Dark Green Cart Button */}
                              <button
                                onClick={(e) => {
                                  e.preventDefault(); 
                                  e.stopPropagation();
                                  addItem(product);
                                }}
                                className="w-10 h-10 rounded-full bg-[#1f3d2f] text-white flex items-center justify-center hover:bg-[#152920] transition-colors shadow-sm z-10 relative"
                                title="Add to Cart"
                              >
                                <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                              </button>
                            </div>

                            {/* Row 2: Full Width WhatsApp Button */}
                            <button
                              onClick={(e) => handleWhatsAppBuy(e, product)}
                              className="w-full bg-[#25D366] text-white text-[13px] font-bold py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition duration-200 shadow-sm z-10 relative tracking-wide uppercase"
                            >
                              <MessageCircle className="w-[18px] h-[18px] fill-current" strokeWidth={1} />
                              Buy on WhatsApp
                            </button>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>

        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {isMobileFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsMobileFilterOpen(false)}
                className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
              />
              <motion.div
                initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[70] shadow-2xl flex flex-col lg:hidden"
              >
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="font-bold text-gray-900 uppercase tracking-widest">Filters</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-50 rounded-full text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <SidebarContent />
                </div>
                <div className="p-4 border-t border-gray-100 grid grid-cols-2 gap-3 bg-white">
                  <button 
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedGenders([]);
                      setPriceRange(100000);
                      setInStockOnly(false);
                    }}
                    className="py-3 border border-gray-300 rounded-lg text-sm font-bold text-gray-700 uppercase tracking-wider"
                  >
                    Clear All
                  </button>
                  <button 
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="py-3 bg-[#D4AF37] text-white rounded-lg text-sm font-bold uppercase tracking-wider shadow-md"
                  >
                    Apply
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
