"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { getWhatsAppProductLink } from "@/utils/whatsapp";
import { urlForImage } from "@/sanity/lib/image";

// 👇 SMART IMAGE HELPER
const getDisplayImage = (product: Product) => {
  if (product.imageUrl) {
    return typeof product.imageUrl === "string"
      ? product.imageUrl
      : urlForImage(product.imageUrl).url();
  }
  if (product.galleryUrls && product.galleryUrls.length > 0) {
    return product.galleryUrls[0];
  }
  const sizeImages = (product.sizes as any[] || []).map((s) => s.imageUrl).filter(Boolean);
  if (sizeImages.length > 0) return sizeImages[0];
  
  const colorImages = (product.colors as any[] || []).map((c) => c.imageUrl).filter(Boolean);
  if (colorImages.length > 0) return colorImages[0];
  
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
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-2 tracking-wide">
            FEATURED PRODUCTS
          </h2>
          <div className="w-24 h-0.5 bg-[#F5A623] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // 👇 FIX: Applied exact #F0F0F0 background color
              className="bg-[#F0F0F0] rounded-xl border border-gray-200 hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col h-full relative group p-4"
            >
              <Link
                href={`/shop/product/${product.slug || product._id}`}
                className="flex-col flex flex-1"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full flex items-center justify-center mb-4">
                  <Image
                    src={getDisplayImage(product)}
                    alt={product.name || "Product"}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" 
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-1">
                  
                  {/* Category in Gold */}
                  <span className="text-[10px] md:text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-1.5 truncate">
                    {product.category}
                  </span>
                  
                  <h3 className="font-bold text-gray-900 text-sm mb-0 line-clamp-2 min-h-[40px] leading-snug transition-colors">
                    {product.name}
                  </h3>

                  {/* Bottom Area */}
                  <div className="mt-auto flex flex-col gap-3 pt-2">
                    <div className="flex items-end justify-between">
                      
                      <div className="flex flex-col gap-1">
                        {/* Rating Stars */}
                        <div className="flex text-[#F5A623] text-[10px] md:text-[12px]">
                          {"★".repeat(Math.round(product.rating || 5))}
                          <span className="text-gray-300">
                            {"★".repeat(5 - Math.round(product.rating || 5))}
                          </span>
                        </div>
                        
                        {/* Price */}
                        <span className="font-extrabold text-gray-900 text-[15px] md:text-[16px]">
                          ₹{product.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-8 h-8 rounded-full bg-[#1f3d2f] text-white flex items-center justify-center hover:bg-[#152920] hover:scale-105 transition-all shadow-sm z-10 relative"
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>

                    {/* WhatsApp Button */}
                    <button
                      onClick={(e) => handleWhatsAppBuy(e, product)}
                      className="w-full bg-[#25D366] text-white text-[11px] md:text-[12px] font-bold py-2.5 rounded-md flex items-center justify-center gap-1.5 hover:bg-[#1ebd5a] transition duration-200 shadow-sm z-10 relative tracking-wide uppercase"
                    >
                      <MessageCircle
                        className="w-4 h-4 fill-current"
                        strokeWidth={2}
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

