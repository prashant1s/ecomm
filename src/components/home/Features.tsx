"use client";

import { MessageCircle, Star, Wrench, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const steps = [
    {
      id: 1,
      icon: <MessageCircle className="w-6 h-6 text-[#fbbc04]" />,
      title: "Tell us",
      description: "WhatsApp, call or fill the form. Share the event, quantity and any reference images.",
    },
    {
      id: 2,
      icon: <Star className="w-6 h-6 text-[#fbbc04]" />,
      title: "Pick & customise",
      description: "We send catalog + past work. You shortlist. We finalise engraving, finish and quote.",
    },
    {
      id: 3,
      icon: <Wrench className="w-6 h-6 text-[#fbbc04]" />,
      title: "We craft it",
      description: "Mockup approved → hand-crafted in our Rama Vihar workshop → final QC.",
    },
    {
      id: 4,
      icon: <Truck className="w-6 h-6 text-[#fbbc04]" />,
      title: "Delivered",
      description: "Safe-packed, tracked. 2 days in Rama Vihar · 5 days in UP · 2 weeks pan-India.",
    },
  ];

  return (
    <section className="bg-[#ffffff] py-20 relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header Content */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-xl font-bold tracking-[0.2em] uppercase mb-4">
            How to order
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-700 mb-4">
            Custom trophies, the <span className="text-[#fbbc04]">easy way</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-lg max-w-4xl mx-auto">
            Four simple steps from your first WhatsApp to a trophy in your hand. Most orders ship in 5-7 days.
          </p>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative flex items-center">
          
          {/* Left Arrow
          <button className="hidden md:flex absolute -left-4 lg:-left-12 w-10 h-10 rounded-full bg-[#15191e] border border-gray-800 items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition z-10 shadow-lg">
            <ChevronLeft className="w-5 h-5" />
          </button> */}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-[#1c2127] border border-gray-700 rounded-xl p-8 pt-10 text-center hover:bg-[#23282f] transition-colors duration-300"
              >
                {/* Floating Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#fbbc04] text-black text-sm font-bold flex items-center justify-center ring-4 ring-[#1c2127] shadow-[0_0_15px_rgba(251,188,4,0.3)]">
                  {step.id}
                </div>

                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                
                <h3 className="text-white font-semibold text-base mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          {/* <button className="hidden md:flex absolute -right-4 lg:-right-12 w-10 h-10 rounded-full bg-[#15191e] border border-gray-800 items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition z-10 shadow-lg">
            <ChevronRight className="w-5 h-5" />
          </button> */}
          
        </div>
      </div>
    </section>
  );
}
