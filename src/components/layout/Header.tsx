// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { ShoppingCart, Search, Menu, X } from "lucide-react";
// import { useCartStore } from "@/store/cartStore";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
  
//   // We only pull 'items', 'subtotal', and 'removeItem' from the store now
//   const { items, subtotal, removeItem } = useCartStore();
//   const [mounted, setMounted] = useState(false);
  
//   const pathname = usePathname(); 

//   // 👇 FIX: Calculate the exact number of items dynamically from the cart array
//   const cartCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

//   useEffect(() => {
//     setMounted(true);
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Collection", href: "/shop" },
//     { name: "Contact us", href: "/contact" },
//   ];

//   const isSolidHeader = isScrolled || pathname !== "/";
// const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
//     if (pathname === "/" && href === "/") {
//       e.preventDefault(); // Stop standard navigation
//       window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
//     }
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           isSolidHeader ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5" : "bg-transparent py-4"
//         }`}
//       >
//         <div className="container mx-auto px-0 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src="/icon512x512.png"
//               alt="Logo"
//               width={42}
//               height={42}
//               unoptimized
//               className="rounded-sm object-contain"
//             />
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={(e) => handleNavClick(e, link.href)}
//                 className={`text-sm tracking-wide font-medium transition-colors relative group ${
//                   isSolidHeader ? "text-gray-800 hover:text-[#1f3d2f]" : "text-white/90 hover:text-white drop-shadow-sm"
//                 }`}
//               >
//                 {link.name}
//                 <span 
//                   className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
//                     isSolidHeader ? "bg-[#1f3d2f]" : "bg-white"
//                   }`}
//                 />
//               </Link>
//             ))}
//           </nav>

//           {/* Icons */}
//           <div
//             className={`flex items-center gap-6 ${isSolidHeader ? "text-gray-800" : "text-white"}`}
//           >
//             <Search className="w-5 h-5 cursor-pointer hover:text-[#1f3d2f] transition-colors" />
            
//             <div
//               className="relative cursor-pointer group"
//               onClick={() => setIsCartOpen(true)}
//             >
//               <ShoppingCart className="w-5 h-5 group-hover:text-[#1f3d2f] transition-colors" />
              
//               {/* 👇 FIX: Display the cartCount here! */}
//               {mounted && cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
//                   {cartCount}
//                 </span>
//               )}
//             </div>
            
//             <Menu
//               className="w-6 h-6 md:hidden cursor-pointer hover:text-[#1f3d2f] transition-colors"
//               onClick={() => setIsMobileMenuOpen(true)}
//             />
//           </div>
//         </div>
//       </header>

//       {/* Mini Cart Drawer */}
//       <AnimatePresence>
//         {isCartOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
//           >
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "tween", duration: 0.3 }}
//               className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 flex flex-col font-sans"
//             >
//               <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
//                 <h2 className="text-xl font-bold text-gray-900 tracking-wide">
//                   Shopping Cart <span className="text-gray-400 text-sm font-normal">({cartCount})</span>
//                 </h2>
//                 <button 
//                   onClick={() => setIsCartOpen(false)}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   <X className="w-5 h-5 text-gray-500 hover:text-black" />
//                 </button>
//               </div>
              
//               <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
//                 {items.length === 0 ? (
//                   <div className="flex flex-col items-center justify-center h-full text-gray-400">
//                     <ShoppingCart className="w-16 h-16 mb-4 text-gray-200" />
//                     <p className="text-gray-500 font-medium">Your cart is empty.</p>
//                     <button 
//                       onClick={() => setIsCartOpen(false)}
//                       className="mt-6 text-[#1f3d2f] font-semibold hover:underline"
//                     >
//                       Continue Shopping
//                     </button>
//                   </div>
//                 ) : (
//                   items.map((item) => (
//                     <div key={item._id} className="flex gap-4 border-b border-gray-50 pb-4 group">
//                       <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
//                         <img
//                           src={item.imageUrl}
//                           alt={item.name}
//                           className="w-20 h-20 object-contain mix-blend-multiply"
//                         />
//                       </div>
//                       <div className="flex-1 flex flex-col justify-center">
//                         <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">{item.name}</h3>
//                         <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
//                           Qty: {item.quantity}
//                         </p>
//                         <p className="font-bold text-[#1f3d2f] mt-1">
//                           ₹{item.price.toFixed(2)}
//                         </p>
//                       </div>
//                       <button
//                         onClick={() => removeItem(item._id)}
//                         className="text-gray-500 hover:text-[#DB4444] p-2 h-fit transition-colors rounded-full hover:bg-red-200"
//                         title="Remove item"
//                       >
//                         <X className="w-6 h-5" />
//                       </button>
//                     </div>
//                   ))
//                 )}
//               </div>
              
//               {items.length > 0 && (
//                 <div className="border-t border-gray-100 pt-6 mt-4 bg-white">
//                   <div className="flex justify-between font-bold text-lg mb-6 text-gray-900">
//                     <span>Subtotal</span>
//                     <span>₹{subtotal.toFixed(2)}</span>
//                   </div>
//                   <button className="w-full bg-[#1f3d2f] text-white py-4 font-bold tracking-widest uppercase text-sm rounded hover:bg-[#152920] transition-colors shadow-md flex justify-center items-center gap-2">
//                     Proceed to Checkout
//                   </button>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

// 👇 FIX: Added useRef here
import { useState, useEffect, useRef } from "react"; 
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; 
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const { items, subtotal, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);
  
  const pathname = usePathname(); 
  const router = useRouter();

  // 👇 FIX: Create a reference to attach to our Search container
  const searchRef = useRef<HTMLDivElement>(null);

  const cartCount = items.reduce((total, item) => total + (item.quantity || 1), 0);

  // Scroll Effect
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 FIX: Click Outside Effect for Search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the search is open, and the click happened OUTSIDE the searchRef element...
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false); // ...close the search dropdown!
      }
    };

    // Only add the event listener if the search is actually open
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    // Cleanup the event listener when component unmounts or search closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Collection", href: "/shop" },
    { name: "Contact us", href: "/contact" },
  ];

  const isSolidHeader = isScrolled || pathname !== "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href === "/") {
      e.preventDefault(); 
      window.scrollTo({ top: 0, behavior: "smooth" }); 
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false); 
      setSearchQuery(""); 
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isSolidHeader ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          
          {/* Logo */}
          <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="flex items-center gap-2">
            <Image
              src="/icon512x512.png"
              alt="Logo"
              width={42}
              height={42}
              unoptimized
              className="rounded-sm object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm tracking-wide font-medium transition-colors relative group ${
                  isSolidHeader ? "text-gray-800 hover:text-[#D4AF37]" : "text-white/90 hover:text-white drop-shadow-sm"
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isSolidHeader ? "bg-[#D4AF37]" : "bg-white"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className={`flex items-center gap-6 ${isSolidHeader ? "text-gray-800" : "text-white"}`}>
            
            {/* 👇 FIX: Attached the searchRef to this wrapper div */}
            <div className="relative flex items-center" ref={searchRef}>
              <Search 
                className="w-5 h-5 cursor-pointer hover:text-[#D4AF37] transition-colors" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
              
              {/* Premium Search Dropdown */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-6 w-[320px] md:w-[380px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8 rounded-sm border border-gray-100 cursor-default"
                  >
                    
                    {/* The "Cut" (Close) Button */}
                    <button 
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute top-3 right-3 p-1.5 text-gray-400 hover:text-black transition-colors rounded-full hover:bg-gray-100"
                      title="Close Search"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <form onSubmit={handleSearch} className="relative flex items-center border-b border-gray-200 pb-3 mt-2">
                      <Search className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Search collections..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                        autoFocus
                      />
                    </form>
                    
                    <div className="mt-8 mb-2 text-center">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                        Type to explore collections
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Cart Icon */}
            <div
              className="relative cursor-pointer group flex items-center"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5 group-hover:text-[#D4AF37] transition-colors" />
              {mounted && cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#DB4444] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>
            
            {/* Mobile Menu Icon */}
            <Menu
              className="w-6 h-6 md:hidden cursor-pointer hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            />
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
                      <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                        <img
                          src={item.imageUrl}
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