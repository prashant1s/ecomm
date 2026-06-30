"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r" /> */}

      {/* Bottom Left Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-5 px-7 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20"
      >
        <div className="flex gap-4">
          <button className="bg-white text-black px-5 py-2 font-semibold tracking-wide hover:bg-gray-100 transition-all duration-300">
            SHOP NOW
          </button>

          <button className="border border-white text-white px-5 py-2 font-semibold tracking-wide hover:bg-white/10 transition-all duration-300">
            FIND MORE
          </button>
        </div>
      </motion.div>
    </section>
  );
}