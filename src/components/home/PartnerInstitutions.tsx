"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnerInstitutions() {
  const logos = [
    { id: 1, name: "", src:"/institute/logo1.jpeg" },
    { id: 2, name: "", src:"/institute/logo2.jpeg" },
    { id: 3, name: "", src:"/institute/logo3.jpeg"},
    { id: 4, name: "", src:"/institute/logo4.png" },
    { id: 5, name: "", src:"/institute/logo5.jpeg" },
    { id: 6, name: "", src:"/institute/logo6.jpeg"},
    { id: 7, name: "", src:"/institute/logo7.jpeg" },
  ];

  return (
    <section className="bg-gray-50 py-24 border-t border-gray-100 font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] text-center">
        
        {/* Header Content */}
        <div className="mb-16">
          <p className="text-gray-500 text-xl font-bold tracking-[0.2em] uppercase mb-4">
            Our Academic Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Proudly associated with <span className="text-[#fbbc04]">top institutions</span>
          </h2>
          <p className="text-gray-600 text-xl md:text-xl max-w-5xl mx-auto">
            Delivering excellence and custom craftsmanship for schools, colleges, and academies across India.
          </p>
        </div>

        {/* 👇 FIX: Adjusted gaps (gap-6 md:gap-8 lg:gap-10 xl:gap-12) to ensure they all fit */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-7 xl:gap-9">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                type: "spring",
                stiffness: 100
              }}
              className="group flex flex-col items-center"
            >
              {/* 👇 FIX: Adjusted sizes so 7 items fit in one row on desktop */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-2 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-gray-200 cursor-pointer">
                    <Image
                  src={logo.src}
                  alt={logo.name || `Partner Institution ${logo.id}`}
                  width={200}
                  height={200}
                  unoptimized
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              
              {logo.name && (
                <span className="mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {logo.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}