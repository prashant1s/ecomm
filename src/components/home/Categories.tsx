"use client";
import { motion } from 'framer-motion';

const categories = [
  {
    title: '20% Off On Summer Wear',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: 'https://images.unsplash.com/photo-1515347619253-0b04fb8cb47d?q=80&w=1000',
    btnText: 'SHOP NOW'
  },
  {
    title: 'Latest Eyewear Collection',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000',
    btnText: 'SHOP NOW'
  },
  {
    title: 'Premium Accessories',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000',
    btnText: 'CHECK OUT'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative h-[450px] group overflow-hidden cursor-pointer flex flex-col justify-end p-8"
            >
              {/* Background Image with Zoom on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                  {cat.desc}
                </p>
                <button className="bg-white text-black px-6 py-3 font-semibold text-sm hover:bg-gray-100 transition">
                  {cat.btnText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}