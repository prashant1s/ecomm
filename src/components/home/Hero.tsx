"use client";

import { motion } from "framer-motion";
import Link from "next/link"; 

export default function Hero() {
  return (
    // 👇 FIX: Added mt-[76px] (margin-top) to clear the solid fixed header
    <section className="relative h-[80vh] overflow-hidden mt-18">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner 1.png')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-5 px-7 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20"
      >
        <div className="flex gap-4">
          <Link href="/shop">
            <button className="border border-white text-white px-5 py-2 font-semibold tracking-wide hover:bg-white/10 transition-all duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}