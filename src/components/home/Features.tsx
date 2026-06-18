"use client";
import { motion } from 'framer-motion';
import { Globe2, Sparkles, Tags, LockKeyhole } from 'lucide-react';

const features = [
  {
    icon: Globe2,
    title: 'Worldwide Shipping',
    desc: 'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    icon: Sparkles,
    title: 'Best Quality',
    desc: 'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    icon: Tags,
    title: 'Best Offers',
    desc: 'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    icon: LockKeyhole,
    title: 'Secure Payments',
    desc: 'It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 text-black">
                <feature.icon className="w-10 h-10 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}