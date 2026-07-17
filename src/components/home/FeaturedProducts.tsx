// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Product } from "@/types/product";
// import { useCartStore } from "@/store/cartStore";
// import { ShoppingBag, MessageCircle } from "lucide-react";
// import { getWhatsAppProductLink } from "@/utils/whatsapp";
// import { urlForImage } from "@/sanity/lib/image";

// export default function FeaturedProducts({
//   products,
// }: {
//   products: Product[];
// }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleAddToCart = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault(); // Prevent link navigation
//     e.stopPropagation();
//     addItem(product);
//   };

//   const handleWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
//     e.preventDefault(); // Prevent link navigation
//     e.stopPropagation();
//     const targetUrl = getWhatsAppProductLink(product);
//     window.open(targetUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-2">
//             FEATURED PRODUCTS
//           </h2>
//           <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
//           {products.map((product, idx) => (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               // h-full ensures all cards stretch to equal heights
//               className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative"
//             >
//               <Link
//                 href={`/shop/product/${product.slug || product._id}`}
//                 className="flex-col flex flex-1"
//               >
//                 {/* Image Container */}
//                 <div className="relative aspect-square w-full mb-3 flex items-center justify-center">
//                   <Image
//                     // 👇 Safely checks if imageUrl exists before trying to resolve it
//                     src={
//                       product.imageUrl
//                         ? typeof product.imageUrl === "string"
//                           ? product.imageUrl
//                           : urlForImage(product.imageUrl).url()
//                         : "/placeholder.png" // 👈 Create a simple grey image in your public folder named placeholder.png
//                     }
//                     alt={product.name || "Product"}
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                     className="object-contain p-4"
//                   />
//                 </div>

//                 {/* Text Content */}
//                 <div className="flex flex-col flex-1">
//                   <span className="text-[13px] text-gray-500 mb-0">
//                     {product.category}
//                   </span>
//                   <h3 className="font-semibold text-gray-900 text-base mb-0 line-clamp-2 min-h-[30px]">
//                     {product.name}
//                   </h3>

//                   {/* Bottom Area (Pushed to bottom using mt-auto) */}
//                   <div className="mt-0 flex flex-col gap-2">
//                     {/* Row 1: Rating, Price & Cart Button */}
//                     <div className="flex items-end justify-between">
//                       <div className="flex flex-col gap-1">
//                         {/* Rating Stars */}
//                         <div className="flex text-[#F5A623] text-sm">
//                           {"★".repeat(Math.round(product.rating || 5))}
//                           <span className="text-gray-300">
//                             {"★".repeat(5 - Math.round(product.rating || 5))}
//                           </span>
//                         </div>
//                         {/* Price */}
//                         <span className="font-bold text-gray-900 text-[16px]">
//                           ₹{product.price.toFixed(2)}
//                         </span>
//                       </div>

//                       {/* Dark Green Cart Button */}
//                       <button
//                         onClick={(e) => handleAddToCart(e, product)}
//                         className="w-10 h-10 rounded-full bg-[#1f3d2f] text-white flex items-center justify-center hover:bg-[#152920] transition-colors shadow-sm z-10 relative"
//                         title="Add to Cart"
//                       >
//                         <ShoppingBag className="w-5 h-5" strokeWidth={2} />
//                       </button>
//                     </div>

//                     {/* Row 2: Full Width WhatsApp Button */}
//                     <button
//                       onClick={(e) => handleWhatsAppBuy(e, product)}
//                       className="w-full bg-[#25D366] text-white text-[13px] font-bold py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition duration-200 shadow-sm z-10 relative tracking-wide uppercase"
//                     >
//                       <MessageCircle
//                         className="w-[18px] h-[18px] fill-current"
//                         strokeWidth={1}
//                       />
//                       Buy on WhatsApp
//                     </button>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { getWhatsAppProductLink } from "@/utils/whatsapp";
import { urlForImage } from "@/sanity/lib/image";

// 👇 SMART IMAGE HELPER: Hunts for the first available image anywhere on the product
const getDisplayImage = (product: Product) => {
  // 1. Check Primary Image
  if (product.imageUrl) {
    return typeof product.imageUrl === "string"
      ? product.imageUrl
      : urlForImage(product.imageUrl).url();
  }

  // 2. Check Gallery Images
  if (product.galleryUrls && product.galleryUrls.length > 0) {
    return product.galleryUrls[0];
  }

  // 3. Check Available Sizes & Images
  const sizeImages = (product.sizes as any[] || [])
    .map((s) => s.imageUrl)
    .filter(Boolean);
  if (sizeImages.length > 0) return sizeImages[0];

  // 4. Check Available Metal Types & Images
  const colorImages = (product.colors as any[] || [])
    .map((c) => c.imageUrl)
    .filter(Boolean);
  if (colorImages.length > 0) return colorImages[0];

  // 5. Ultimate Fallback
  return "/placeholder.png";
};

export default function FeaturedProducts({
  products,
}: {
  products: Product[];
}) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); 
    e.stopPropagation();
    addItem(product);
  };

  const handleWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); 
    e.stopPropagation();
    const targetUrl = getWhatsAppProductLink(product);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            FEATURED PRODUCTS
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative"
            >
              <Link
                href={`/shop/product/${product.slug || product._id}`}
                className="flex-col flex flex-1"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full mb-3 flex items-center justify-center">
                  <Image
                    // 👇 Call our new smart helper function here
                    src={getDisplayImage(product)}
                    alt={product.name || "Product"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1">
                  <span className="text-[13px] text-gray-500 mb-0">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 text-base mb-0 line-clamp-2 min-h-[30px]">
                    {product.name}
                  </h3>

                  {/* Bottom Area */}
                  <div className="mt-0 flex flex-col gap-2">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col gap-1">
                        {/* Rating Stars */}
                        <div className="flex text-[#F5A623] text-sm">
                          {"★".repeat(Math.round(product.rating || 5))}
                          <span className="text-gray-300">
                            {"★".repeat(5 - Math.round(product.rating || 5))}
                          </span>
                        </div>
                        {/* Price */}
                        <span className="font-bold text-gray-900 text-[16px]">
                          ₹{product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-10 h-10 rounded-full bg-[#1f3d2f] text-white flex items-center justify-center hover:bg-[#152920] transition-colors shadow-sm z-10 relative"
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                      </button>
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      onClick={(e) => handleWhatsAppBuy(e, product)}
                      className="w-full bg-[#25D366] text-white text-[13px] font-bold py-2.5 rounded-md flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition duration-200 shadow-sm z-10 relative tracking-wide uppercase"
                    >
                      <MessageCircle
                        className="w-[18px] h-[18px] fill-current"
                        strokeWidth={1}
                      />
                      Buy on WhatsApp
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
