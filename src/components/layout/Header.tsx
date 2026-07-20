"use client";

import { useState, useEffect, useRef } from "react"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; 
import { urlForImage } from "@/sanity/lib/image";
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X,
  Package 
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";

// 👇 SMART IMAGE HELPER
const getDisplayImage = (item: any) => {
  if (item.imageUrl) {
    return typeof item.imageUrl === "string"
      ? item.imageUrl
      : urlForImage(item.imageUrl).url();
  }
  if (item.galleryUrls && item.galleryUrls.length > 0) return item.galleryUrls[0];
  
  const sizeImages = (item.sizes || []).map((s: any) => s.imageUrl).filter(Boolean);
  if (sizeImages.length > 0) return sizeImages[0];
  
  const colorImages = (item.colors || []).map((c: any) => c.imageUrl).filter(Boolean);
  if (colorImages.length > 0) return colorImages[0];
  
  return "/placeholder.png"; 
};

// STATIC SUGGESTIONS FOR SEARCH BAR
const SUGGESTIONS = [
  "Corporate Gifts",
  "School Awards",
  "Sports Trophies",
  "Anniversary Gifts",
  "Farewell Mementos"
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Search States
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const { items, subtotal, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const pathname = usePathname(); 
  const router = useRouter();

  const cartCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Collection", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Close search dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href === "/") {
      e.preventDefault(); 
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setIsSearchFocused(false);
    router.push(`/shop?q=${encodeURIComponent(suggestion)}`);
  };

  // Filter suggestions based on input
  const filteredSuggestions = SUGGESTIONS.filter(s => 
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm py-3">
        {/* 👇 FIX: Added relative positioning to the container */}
        <div className="container mx-auto px-6 md:px-12 xl:px-20 flex justify-between items-center relative">
          
          {/* Left: Menu (Mobile) & Logo */}
          {/* 👇 FIX: Removed flex-1 so it only takes up necessary space */}
          <div className="flex items-center gap-4">
            <Menu 
              className="w-6 h-6 lg:hidden cursor-pointer text-gray-800 hover:text-[#D4AF37] transition-colors" 
              onClick={() => setIsMobileMenuOpen(true)}
            />
            <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center">
              <Image
                src="/icon512x512.png"
                alt="Logo"
                width={48}
                height={48}
                unoptimized
                className="object-contain"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          {/* 👇 FIX: Added absolute positioning to force true center alignment */}
<nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 absolute left-[45%] top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-gray-700 hover:text-[#D4AF37] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Search & Icons */}
          {/* 👇 FIX: Removed flex-1 so it only takes up necessary space */}
          <div className="flex items-center justify-end gap-5 xl:gap-6">
            
            {/* Search Bar with Suggestions (Desktop) */}
            <div className="hidden md:block w-full max-w-[260px] relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Gifts..."
                  value={searchQuery}
                  onFocus={() => setIsSearchFocused(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-full py-2 pl-5 pr-10 text-sm text-gray-800 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
                <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#D4AF37]">
                  <Search className="w-4 h-4" />
                </button>
              </form>

              {/* SEARCH SUGGESTIONS DROPDOWN */}
              <AnimatePresence>
                {isSearchFocused && searchQuery.trim().length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50"
                  >
                    {filteredSuggestions.length > 0 ? (
                      <ul className="py-2">
                        {filteredSuggestions.map((suggestion, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                            >
                              <Search className="w-3.5 h-3.5 text-gray-400" />
                              {suggestion}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="px-4 py-3 text-sm text-gray-500 text-center">
                        No suggestions found
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bulk Order Icon Button */}
            <Link
              href="/bulk-order"
              title="Bulk Order Enquiry"
              className="relative cursor-pointer group flex items-center flex-shrink-0"
            >
              <Package 
                className="w-6 h-6 text-gray-800 group-hover:text-[#D4AF37] transition-colors" 
                strokeWidth={1.75}
              />
            </Link>

            {/* Cart Icon */}
            <div
              className="relative cursor-pointer group flex items-center flex-shrink-0"
              onClick={() => setIsCartOpen(true)}
              title="Shopping Cart"
            >
              <ShoppingCart 
                className="w-6 h-6 text-gray-800 group-hover:text-[#D4AF37] transition-colors" 
                strokeWidth={1.75}
              />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mini Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 flex flex-col font-sans"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">
                  Shopping Cart <span className="text-gray-400 text-sm font-normal">({cartCount})</span>
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500 hover:text-black" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <ShoppingCart className="w-16 h-16 mb-4 text-gray-200" />
                    <p className="text-gray-500 font-medium">Your cart is empty.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 text-[#D4AF37] font-semibold hover:underline"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item._id} className="flex gap-4 border-b border-gray-50 pb-4 group">
                      <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 flex-shrink-0">
                        <img
                          src={getDisplayImage(item)}
                          alt={item.name}
                          className="w-20 h-20 object-contain mix-blend-multiply"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</h3>
                        <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                          Qty: {item.quantity}
                        </p>
                        <p className="font-bold text-[#D4AF37] mt-1">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-gray-500 hover:text-[#DB4444] p-2 h-fit transition-colors rounded-full hover:bg-red-200"
                        title="Remove item"
                      >
                        <X className="w-6 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
              
              {items.length > 0 && (
                <div className="border-t border-gray-100 pt-6 mt-4 bg-white">
                  <div className="flex justify-between font-bold text-lg mb-6 text-gray-900">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-[#D4AF37] text-white py-4 font-bold tracking-widest uppercase text-sm rounded hover:bg-[#b08d24] transition-colors shadow-md flex justify-center items-center gap-2">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

