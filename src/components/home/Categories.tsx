"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/award1.png', alt: 'Banner 1' },
  { src: '/award2.png', alt: 'Banner 2' },
  { src: '/award3.png', alt: 'Icon Banner' } 
];

export default function Categories() {
  return (
    <section className="w-full bg-white"> 
      <div className="w-full">
        
        <div className="grid pt-24 pb-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group overflow-hidden cursor-pointer flex w-full"
            >
              <Image 
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1200}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}