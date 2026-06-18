"use client";
import { motion } from 'framer-motion';

export default function PromoBanner() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center mt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000')" }}
      />
      {/* Brand Blue Overlay */}
      <div className="absolute inset-0 bg-[#2563eb]/80 mix-blend-multiply" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl text-white"
        >
          <p className="font-semibold tracking-wider text-sm mb-4">Limited Time Offer</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Special Edition Collection</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <p className="text-xl font-medium mb-8">
            Get 20% Off Use Code: <span className="font-bold border-b-2 border-white pb-1">STYLE20</span>
          </p>
          <button className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-100 transition duration-300">
            SHOP NOW
          </button>
        </motion.div>
      </div>
    </section>
  );
}