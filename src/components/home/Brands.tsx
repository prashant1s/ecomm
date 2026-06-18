"use client";
import { motion } from 'framer-motion';

const brands = ['Nike', 'Adidas', 'Puma', 'Zara', 'H&M', "Levi's"];
// Duplicate the array to create a seamless infinite loop
const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden flex items-center">
      <div className="flex w-full relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 25 
          }}
          className="flex whitespace-nowrap items-center gap-24 px-12"
        >
          {duplicatedBrands.map((brand, idx) => (
            <div 
              key={idx} 
              className="text-2xl md:text-3xl font-black text-gray-300 uppercase tracking-widest"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}