"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SmartGiftFinder() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Form States
  const [giftType, setGiftType] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 👇 FIX: Stop the search if both fields are empty
    if (!giftType && !price) {
      return;
    }
    
    // Build query parameters based on selections
    const params = new URLSearchParams();
    if (giftType) params.append("category", giftType);
    if (price) params.append("price", price);
    
    router.push(`/shop?${params.toString()}`);
  };

  // 👇 Check if form is empty to disable the button
  const isFormEmpty = !giftType && !price;

  return (
    <section className="py-16 w-full overflow-visible">
      <div className="container mx-auto px-4 max-w-[1200px] relative min-h-[220px] flex items-center justify-center">
        
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ================= SCREEN 1: CLOSED BANNER ================= */
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[200px] flex items-center justify-between drop-shadow-xl"
            >
              <div 
                className="absolute inset-0 z-0"
                style={{
                  background: "#FF0000", 
                  clipPath: "polygon(0 0, 100% 0, 96% 50%, 100% 100%, 0 100%)",
                }}
              />

              {/* Left Gift Box Image */}
              <div className="absolute -left-4 md:-left-8 -top-12 w-64 h-64 md:w-72 md:h-72 z-20 hidden sm:block drop-shadow-2xl hover:scale-105 transition-transform duration-500 pointer-events-none">
                <Image
                  src="/gift-box.png" 
                  alt="Gift Box"
                  fill
                  className="object-contain mix-blend-multiply" 
                />
              </div>

              {/* Center Text */}
              <div className="flex-1 text-center pl-4 sm:pl-32 md:pl-48 relative z-10">
                <p className="text-white text-xl md:text-2xl mb-1 font-medium">Still Confused?</p>
                <p className="text-white text-lg mb-2">Try Our</p>
                <h2 className="text-white text-4xl md:text-5xl font-black font-serif tracking-wide drop-shadow-sm">
                  Smart Gift Finder
                </h2>
              </div>

              {/* Right Button */}
              <div className="pr-8 md:pr-16 lg:pr-24 relative z-10">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-white text-gray-900 px-6 py-3 md:px-8 rounded-md font-bold text-base md:text-lg hover:bg-gray-50 transition-colors shadow-md whitespace-nowrap"
                >
                  Start Search
                </button>
              </div>
            </motion.div>
          ) : (
            /* ================= SCREEN 2: OPEN FORM ================= */
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full flex flex-col md:flex-row drop-shadow-2xl rounded-r-xl"
            >
              {/* Left Red Section */}
              <div
                className="w-full md:w-2/5 h-[300px] flex flex-col justify-center items-center text-center px-8 z-10"
                style={{
                  background: "#FF0000", 
                  clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                }}
              >
                <p className="text-white text-2xl mb-1 font-medium">Still Confused?</p>
                <p className="text-white text-lg mb-2">Try Our</p>
                <h2 className="text-white text-4xl font-black font-serif tracking-wide drop-shadow-sm">
                  Smart Gift Finder
                </h2>
              </div>

              {/* Right Form Section */}
              <div className="w-full md:w-3/5 h-[300px] bg-[#FFF0F0] -ml-8 pl-16 pr-10 py-8 relative flex flex-col justify-center rounded-r-xl">
                
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 bg-white p-1.5 rounded-full text-gray-500 hover:text-gray-800 shadow-sm transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <form onSubmit={handleSearch} className="w-full relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

                    {/* Gift Type Dropdown */}
                    <div className="relative">
                      <select 
                        value={giftType}
                        onChange={(e) => setGiftType(e.target.value)}
                        className="w-full bg-[#FF0000] text-white appearance-none rounded-full py-3 px-5 text-sm font-semibold cursor-pointer outline-none shadow-sm focus:ring-2 focus:ring-red-400"
                      >
                        <option value="">Gift Type</option>
                        <option value="Business">Corporate / Business</option>
                        <option value="School">School Award</option>
                        <option value="Sports Award">Sports Award</option>
                        <option value="Regular">Regular Gift</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>

                    {/* Price Dropdown */}
                    <div className="relative">
                      <select 
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full bg-[#FF0000] text-white appearance-none rounded-full py-3 px-5 text-sm font-semibold cursor-pointer outline-none shadow-sm focus:ring-2 focus:ring-red-400"
                      >
                        <option value="">Price</option>
                        <option value="1000">Under ₹1000</option>
                        <option value="2500">Under ₹2500</option>
                        <option value="5000">Under ₹5000</option>
                        <option value="10000">Under ₹10000</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Search Button */}
                  <button 
                    type="submit"
                    disabled={isFormEmpty} // 👇 FIX: Disabled when empty
                    className={`w-full font-bold text-lg py-3 rounded-full transition-all shadow-md 
                      ${isFormEmpty 
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed" // Disabled styles
                        : "bg-white text-gray-900 hover:bg-gray-50" // Active styles
                      }`}
                  >
                    {isFormEmpty ? "Select Options to Search" : "Search"}
                  </button>
                </form>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
