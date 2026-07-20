"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// 👇 Defined the 3 requested categories. 
const categoriesData = [
  { 
    src: '/award1.png', 
    alt: 'Corporate Gifting', 
    title: 'CORPORATE GIFTING', 
    query: 'Business' 
  },
  { 
    src: '/award2.png', 
    alt: 'School Awards', 
    title: 'SCHOOL AWARDS', 
    query: 'School' 
  },
  { 
    src: '/award3.png', 
    alt: 'Sports Awards', 
    title: 'SPORTS AWARDS', 
    query: 'Sports Award' 
  }
];

export default function Categories() {
  return (
    <section className="w-full bg-white py-6"> 
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* 👇 FIX: Increased from max-w-4xl to max-w-6xl to utilize screen width, and increased the gap */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {categoriesData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              // 👇 FIX: Increased max-w-[300px] to max-w-[450px] so the cards scale up professionally
              className="w-full sm:w-[calc(50%-1.5rem)] max-w-[500px]"
            >
              <Link href={`/shop?category=${encodeURIComponent(item.query)}`} className="group flex flex-col items-center">
                
                {/* Image Container: Increased padding (p-10) and bottom margin (mb-6) to match the larger size */}
                <div className="relative overflow-hidden rounded-3xl bg-[#F0F0F0] border border-gray-200 w-full aspect-square flex items-center justify-center p-4 mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#D4AF37]">
                  <Image 
                    src={item.src}
                    alt={item.alt}
                    width={700} // 👇 Increased base image resolution for the larger card
                    height={700}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 mix-blend-multiply"
                  />
                </div>

                {/* The Button: Increased font size (lg:text-base) for better proportions */}
                <button className="bg-white border-2 border-[#D4AF37] text-[#000000] px-6 py-3 rounded-full font-semibold tracking-widest text-sm lg:text-base group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 shadow-sm w-full max-w-[85%]">
                  {item.title}
                </button>
                
              </Link>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
