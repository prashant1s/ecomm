"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-start overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Raining Offers For <br /> Hot Summer!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            25% Off On All Premium Products. Discover clothing designed for comfort, quality, and modern fashion.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition duration-300">
              SHOP NOW
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition duration-300">
              FIND MORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}