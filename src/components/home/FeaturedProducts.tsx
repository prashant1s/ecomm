"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { getWhatsAppProductLink } from '@/utils/whatsapp';
import { urlForImage } from '@/sanity/lib/image'; 

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation();
    addItem(product);
  };

  const handleWhatsAppBuy = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation();
    const targetUrl = getWhatsAppProductLink(product);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
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
              // h-full ensures all cards stretch to equal heights
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative"
            >
              <Link href={`/shop/product/${product.slug || product._id}`} className="flex-col flex flex-1">
                
                {/* Image Container */}
                <div className="relative aspect-square w-full mb-3 flex items-center justify-center">
                  <Image 
                    src={typeof product.imageUrl === 'string' ? product.imageUrl : urlForImage(product.imageUrl).url()} 
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
                  <div className="mt-0 flex flex-col gap-2">
                    
                    {/* Row 1: Rating, Price & Cart Button */}
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

                      {/* Dark Green Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
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
          ))}
        </div>
      </div>
    </section>
  );
}