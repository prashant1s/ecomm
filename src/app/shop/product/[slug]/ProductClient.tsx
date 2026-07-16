// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Heart, Truck, RefreshCw, Minus, Plus, ChevronDown, MessageCircle, ShoppingBag, ShieldCheck } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useCartStore } from "@/store/cartStore";
// import { Product } from "@/types/product";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { PortableText } from "@portabletext/react";

// interface ProductClientProps {
//   product: Product;
//   categories: string[];
// }

// // Custom styling for Sanity Rich Text
// const ptComponents = {
//   block: {
//     h3: ({ children }: any) => <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h3>,
//     h4: ({ children }: any) => <h4 className="text-md font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
//     normal: ({ children }: any) => <p className="mb-2 text-gray-600">{children}</p>,
//   },
//   list: {
//     bullet: ({ children }: any) => <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-600">{children}</ul>,
//     number: ({ children }: any) => <ol className="list-decimal pl-5 space-y-1 mb-4 text-gray-600">{children}</ol>,
//   },
//   marks: {
//     strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
//   },
// };

// export default function ProductClient({ product }: ProductClientProps) {
//   const addItem = useCartStore((state) => state.addItem);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [activeTab, setActiveTab] = useState("details");

//   const thumbnails = [product.imageUrl, ...(product.galleryUrls || [])];
  
//   const [mainImage, setMainImage] = useState(product.imageUrl);

//   const handleAddToCart = () => {
//     for (let i = 0; i < quantity; i++) {
//       addItem(product);
//     }
//   };

//   const WHATSAPP_NUMBER = "918168291041";
//   const handleWhatsAppBuy = () => {
//     const message = `Hi, I want to buy ${product.name} (Size: ${selectedSize}, Qty: ${quantity}). Is it available?`;
//     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
//   };

//   const Accordion = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
//     <div className="border-b border-gray-200 py-4">
//       <button 
//         onClick={() => setActiveTab(activeTab === id ? "" : id)}
//         className="flex justify-between items-center w-full text-left font-bold text-gray-900 uppercase tracking-wider text-sm"
//       >
//         {title}
//         <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeTab === id ? "rotate-180" : ""}`} />
//       </button>
//       <AnimatePresence>
//         {activeTab === id && (
//           <motion.div 
//             initial={{ height: 0, opacity: 0 }} 
//             animate={{ height: "auto", opacity: 1 }} 
//             exit={{ height: 0, opacity: 0 }}
//             className="overflow-hidden"
//           >
//             <div className="pt-4 text-sm text-gray-600 leading-relaxed">
//               {children}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );

//   return (
//     <>
//       <Header />
//       <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
//         <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
          
//           {/* Breadcrumbs */}
//           <div className="text-xs text-gray-400 mb-8 flex items-center gap-2 uppercase tracking-widest font-medium">
//             <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
//             <span>/</span>
//             <Link href="/shop" className="hover:text-[#D4AF37] transition">Shop</Link>
//             <span>/</span>
//             <Link href={`/shop?category=${product.category}`} className="hover:text-[#D4AF37] transition">{product.category}</Link>
//             <span>/</span>
//             <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 mb-24 justify-center">
            
//             {/* Left: Image Gallery */}
//             <div className="w-full lg:w-[45%] max-w-lg mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-6 h-fit sticky top-32">
              
//               {/* Vertical Thumbnails */}
//               {thumbnails.length > 1 && (
//                 <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20 custom-scrollbar pb-2 md:pb-0">
//                   {thumbnails.map((img, idx) => (
//                     <button 
//                       key={idx} 
//                       onClick={() => setMainImage(img)}
//                       className={`relative w-16 h-20 md:w-full md:h-24 flex-shrink-0 bg-[#f8f8f8] rounded-lg overflow-hidden border-2 transition-all ${
//                         mainImage === img ? 'border-[#D4AF37] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
//                       }`}
//                     >
//                       <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-2 mix-blend-multiply" />
//                     </button>
//                   ))}
//                 </div>
//               )}

//               {/* Main Image */}
//               <div className="flex-1 bg-[#f8f8f8] rounded-2xl relative aspect-[4/5] max-h-[600px] overflow-hidden group border border-gray-100">
//                 <Image 
//                   src={mainImage} 
//                   alt={product.name}
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                   className="object-contain p-10 mix-blend-multiply transition-opacity duration-300"
//                 />
//               </div>
//             </div>

//             {/* Right: Product Details */}
//             <div className="w-full lg:w-[50%] flex flex-col">
//               <div className="border-b border-gray-100 pb-6 mb-6">
//                 <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-2">
//                   {product.category}
//                 </h2>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide leading-tight">
//                   {product.name}
//                 </h1>

//                 {/* Price */}
//                 <div className="mt-4">
//                   <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
//                 </div>
//                 <p className="text-xs text-gray-500 mt-2 font-medium">Inclusive of all taxes</p>
//               </div>

//               {/* Size Selector */}
//               <div className="mb-8">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Select Size</span>
//                 </div>
//                 <div className="flex flex-wrap gap-3">
//                   {[ 'S', 'M', 'L'].map((size) => (
//                     <button 
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 ${
//                         selectedSize === size 
//                           ? 'border-[#D4AF37] bg-yellow-50 text-[#D4AF37]' 
//                           : 'border-gray-200 text-gray-700 hover:border-gray-400'
//                       }`}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Quantity */}
//               <div className="mb-8 flex items-center gap-4">
//                 <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quantity</span>
//                 <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden h-11 w-32">
//                   <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex justify-center hover:bg-gray-50 text-gray-600">
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="w-10 text-center font-bold text-gray-900">{quantity}</span>
//                   <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex justify-center hover:bg-gray-50 text-gray-600">
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="fixed bottom-0 left-0 w-full lg:static bg-white lg:bg-transparent p-4 lg:p-0 border-t lg:border-none border-gray-200 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] lg:shadow-none flex gap-4 mb-8">
//                 <button 
//                   onClick={handleWhatsAppBuy}
//                   className="flex-1 bg-[#25D366] text-white h-11 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#1ebd5a] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
//                 >
//                   <MessageCircle className="w-4 h-4" /> Buy on WhatsApp
//                 </button>
                
//                 <button 
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-gray-900 text-white h-11 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
//                 >
//                   <ShoppingBag className="w-4 h-4" /> Add to Bag
//                 </button>
//               </div>

//               {/* Trust Badges */}
//               <div className="grid grid-cols-3 gap-2 mb-10 py-6 border-y border-gray-100">
//                 <div className="flex flex-col items-center text-center gap-2">
//                   <ShieldCheck className="w-6 h-6 text-gray-600" />
//                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">100% Original</span>
//                 </div>
//                 <div className="flex flex-col items-center text-center gap-2">
//                   <RefreshCw className="w-6 h-6 text-gray-600" />
//                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Easy Returns</span>
//                 </div>
//                 <div className="flex flex-col items-center text-center gap-2">
//                   <Truck className="w-6 h-6 text-gray-600" />
//                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Free Shipping</span>
//                 </div>
//               </div>

//               {/* Accordions */}
//               <div className="flex flex-col">
//                 <Accordion title="Product Details" id="details">
//                   {/* Dynamic Portable Text Rendering */}
//                   {product.description && Array.isArray(product.description) ? (
//                     <PortableText value={product.description} components={ptComponents} />
//                   ) : (
//                     <p className="mb-3">
//                       {typeof product.description === 'string' 
//                         ? product.description 
//                         : "Premium quality craftsmanship designed for the modern lifestyle. Detailed with precision."}
//                     </p>
//                   )}
                
                  
//                   <ul className="list-disc pl-5 space-y-1 mt-4 border-t border-gray-100 pt-4">
//                     <li>Product ID: JR-{product._id.substring(0, 5)}</li>
//                   </ul>
//                 </Accordion>

//                 <Accordion title="Shipping & Returns" id="shipping">
//                   Dispatched within 24-48 hours. Standard delivery takes 3-7 business days across India. 
//                   Please note that as per our policy, returns are not accepted unless the product is damaged upon arrival.
//                 </Accordion>
//               </div>  
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Truck, RefreshCw, Minus, Plus, ChevronDown, MessageCircle, ShoppingBag, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PortableText } from "@portabletext/react";

interface ProductClientProps {
  product: Product;
  categories: string[];
}

const ptComponents = {
  block: {
    h3: ({ children }: any) => <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-md font-bold text-gray-900 mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-2 text-gray-600">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-5 space-y-1 mb-4 text-gray-600">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
  },
};

export default function ProductClient({ product }: ProductClientProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  
  // Dynamically set default selections based on Sanity data
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  
  const [activeTab, setActiveTab] = useState("details");
  const thumbnails = [product.imageUrl, ...(product.galleryUrls || [])];
  const [mainImage, setMainImage] = useState(product.imageUrl);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      // You may want to update your cart store to accept selectedSize and selectedColor
      addItem({ ...product, selectedSize, selectedColor } as any); 
    }
  };

  const WHATSAPP_NUMBER = "918168291041";
  const handleWhatsAppBuy = () => {
    // Dynamically build the WhatsApp message based on what options exist
    const sizeText = selectedSize ? `Size: ${selectedSize}, ` : "";
    const colorText = selectedColor ? `Color: ${selectedColor}, ` : "";
    const message = `Hi, I want to buy ${product.name} (${sizeText}${colorText}Qty: ${quantity}). Is it available?`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const Accordion = ({ title, id, children }: { title: string, id: string, children: React.ReactNode }) => (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setActiveTab(activeTab === id ? "" : id)}
        className="flex justify-between items-center w-full text-left font-bold text-gray-900 uppercase tracking-wider text-sm"
      >
        {title}
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeTab === id ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {activeTab === id && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-sm text-gray-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen pt-32 pb-20 font-sans">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1300px]">
          
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-8 flex items-center gap-2 uppercase tracking-widest font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-[#D4AF37] transition">Shop</Link>
            <span>/</span>
            <Link href={`/shop?category=${product.category}`} className="hover:text-[#D4AF37] transition">{product.category}</Link>
            <span>/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 mb-24 justify-center">
            
            {/* Left: Image Gallery */}
            <div className="w-full lg:w-[45%] max-w-lg mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-6 h-fit sticky top-32">
              {thumbnails.length > 1 && (
                <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20 custom-scrollbar pb-2 md:pb-0">
                  {thumbnails.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setMainImage(img)}
                      className={`relative w-16 h-20 md:w-full md:h-24 flex-shrink-0 bg-[#f8f8f8] rounded-lg overflow-hidden border-2 transition-all ${
                        mainImage === img ? 'border-[#D4AF37] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-contain p-2 mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Image */}
              <div className="flex-1 bg-[#f8f8f8] rounded-2xl relative aspect-[4/5] max-h-[600px] overflow-hidden group border border-gray-100">
                <Image 
                  src={mainImage} 
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-10 mix-blend-multiply transition-opacity duration-300"
                />
                <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors z-10">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full lg:w-[50%] flex flex-col">
              <div className="border-b border-gray-100 pb-6 mb-6">
                <h2 className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {product.category}
                </h2>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide leading-tight">
                  {product.name}
                </h1>

                {/* Price */}
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">₹{product.price.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-medium">Inclusive of all taxes</p>
              </div>

              {/* Dynamic Size Selector (Only renders if sizes exist) */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Select Size</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 ${
                          selectedSize === size 
                            ? 'border-[#D4AF37] bg-yellow-50 text-[#D4AF37]' 
                            : 'border-gray-200 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Color Selector (Only renders if colors exist) */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Select Metal Type</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button 
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-5 py-2.5 rounded-full flex items-center justify-center text-sm font-bold transition-all border-2 ${
                          selectedColor === color 
                            ? 'border-[#D4AF37] bg-yellow-50 text-[#D4AF37]' 
                            : 'border-gray-200 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quantity</span>
                <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden h-11 w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex justify-center hover:bg-gray-50 text-gray-600">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-gray-900">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex justify-center hover:bg-gray-50 text-gray-600">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="fixed bottom-0 left-0 w-full lg:static bg-white lg:bg-transparent p-4 lg:p-0 border-t lg:border-none border-gray-200 z-40 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] lg:shadow-none flex gap-4 mb-8">
                <button 
                  onClick={handleWhatsAppBuy}
                  className="flex-1 bg-[#25D366] text-white h-11 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#1ebd5a] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Buy on WhatsApp
                </button>
                
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-900 text-white h-11 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Bag
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mb-10 py-6 border-y border-gray-100">
                <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">100% Original</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <RefreshCw className="w-6 h-6 text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <Truck className="w-6 h-6 text-gray-600" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Free Shipping</span>
                </div>
              </div>

              {/* Accordions */}
              <div className="flex flex-col">
                <Accordion title="Product Details" id="details">
                  {product.description && Array.isArray(product.description) ? (
                    <PortableText value={product.description} components={ptComponents} />
                  ) : (
                    <p className="mb-3">
                      {typeof product.description === 'string' 
                        ? product.description 
                        : "Premium quality craftsmanship designed for the modern lifestyle. Detailed with precision."}
                    </p>
                  )}
                  <ul className="list-disc pl-5 space-y-1 mt-4 border-t border-gray-100 pt-4">
                    <li>Product ID: JR-{product._id.substring(0, 5)}</li>
                  </ul>
                </Accordion>

                <Accordion title="Shipping & Returns" id="shipping">
                  Dispatched within 24-48 hours. Standard delivery takes 3-7 business days across India. 
                  Please note that as per our policy, returns are not accepted unless the product is damaged upon arrival.
                </Accordion>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

