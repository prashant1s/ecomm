"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { featuredProducts } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag } from 'lucide-react';

export default function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <button 
                  onClick={() => addItem(product)}
                  className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(product.rating)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}