// "use client";
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Product } from '@/types/product';
// import { useCartStore } from '@/store/cartStore';
// import { ShoppingBag, MessageCircle } from 'lucide-react';
// import { getWhatsAppProductLink } from '@/utils/whatsapp';
// import { urlForImage } from '@/sanity/lib/image'; 

// export default function FeaturedProducts({ products }: { products: Product[] }) {
//   const addItem = useCartStore((state) => state.addItem);

//   const handleWhatsAppBuy = (product: Product) => {
//     const targetUrl = getWhatsAppProductLink(product);
//     window.open(targetUrl, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
//           <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
//           {products.map((product, idx) => (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="relative aspect-square overflow-hidden bg-gray-100">
//                   {/* 2. Wrap product.image and call .url() */}
//                   <Image 
//                     src={urlForImage(product.imageUrl).url()} 
//                     alt={product.name} 
//                     fill 
//                     sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                     className="object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   {/* ... rest of your card code ... */}
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

//                   {/* Keep the original Cart Add button if users want to save items */}
//                   <button
//                     onClick={() => addItem(product)}
//                     className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
//                     title="Add to Cart Inventory"
//                   >
//                     <ShoppingBag className="w-4 h-4" />
//                   </button>
//                 </div>

//                 <div className="p-4 pb-2">
//                   <p className="text-xs text-gray-500 mb-1">
//                     {product.category}
//                   </p>
//                   <h3 className="font-semibold text-gray-900 mb-2 truncate">
//                     {product.name}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     <div className="flex text-yellow-400 text-sm">
//                       {"★".repeat(product.rating)}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Instant WhatsApp Order Trigger */}
//               <div className="p-4 pt-2">
//                 <button
//                   onClick={() => handleWhatsAppBuy(product)}
//                   className="w-full bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-emerald-700 transition duration-200 shadow-sm"
//                 >
//                   <MessageCircle className="w-4 h-4 fill-current" />
//                   BUY ON WHATSAPP
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // <-- 1. Import Link
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { getWhatsAppProductLink } from '@/utils/whatsapp';
import { urlForImage } from '@/sanity/lib/image'; 

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation();
    const targetUrl = getWhatsAppProductLink(product);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation();
    addItem(product);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between relative"
            >
              {/* 2. Wrap the visual content in a Link */}
              <Link href={`/shop/product/${product.slug || product._id}`} className="flex-1">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image 
                    src={typeof product.imageUrl === 'string' ? product.imageUrl : urlForImage(product.imageUrl).url()} 
                    alt={product.name} 
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                  {/* Keep Cart Add button inside, but use the new handler */}
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="absolute top-4 right-4 bg-white p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white z-10"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 pb-2">
                  <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <div className="flex text-yellow-400 text-sm">
                      {"★".repeat(product.rating || 5)}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Instant WhatsApp Order Trigger */}
              <div className="p-4 pt-2">
                <button
                  onClick={(e) => handleWhatsAppBuy(e, product)}
                  className="w-full bg-emerald-600 text-white text-xs font-bold py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-emerald-700 transition duration-200 shadow-sm z-10 relative"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  BUY ON WHATSAPP
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}