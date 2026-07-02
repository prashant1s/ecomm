"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function WhyChooseBanner() {
  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full overflow-hidden rounded-2xl shadow-sm border border-gray-100"
        >
          <Image
            src="/banner 3.png" // Pointing to the image in your public folder
            alt="Why Choose Jiya JR - Quality, Trust, Excellence"
            width={1920}
            height={600}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1400px"
            className="w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
