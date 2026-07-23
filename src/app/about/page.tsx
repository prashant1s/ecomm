"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  ShieldCheck, 
  Trophy, 
  Users, 
  Truck, 
  Headphones, 
  MessageSquare, 
  PenTool, 
  Settings, 
  SearchCheck, 
  Package, 
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 font-sans">
        {/* 1. HERO SECTION */}
        <section className="relative bg-[#fcf9f5] overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          {/* Abstract Red Swoosh Background Placeholder */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-red-600 to-[#8A1515] transform origin-bottom -skew-y-2 translate-y-16 opacity-90 z-0"></div>
          
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="max-w-xl">
                <p className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-4">About Us</p>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
                  Crafting Recognition <br/>
                  That <span className="text-[#DB4444]">Lasts Forever.</span>
                </h1>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  For over 5 years, Jiya JR has been helping schools, businesses, sports organizations, and institutions celebrate excellence through premium awards and trophies.
                </p>
                <Link 
                  href="/shop" 
                  className="inline-flex items-center gap-2 bg-[#DB4444] text-white font-medium py-3 px-8 rounded-full hover:bg-red-700 transition-colors"
                >
                  EXPLORE OUR COLLECTION <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Hero Image (Trophy + Background Sketch) */}
              <div className="relative flex justify-center">
                {/* Using a placeholder for the complex hero image */}
                <div className="w-full max-w-md aspect-square relative z-10">
                  <Image 
                    src="/images/hero-trophy.png" // Replace with your actual hero image path
                    alt="Golden Trophy"
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS BAR (White) */}
        <div className="container mx-auto px-4 lg:px-12 max-w-7xl relative z-20 -mt-12">
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-8 px-6 flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">5+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Years of<br/>Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">1000+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Award<br/>Designs</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">500+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Happy<br/>Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xl font-bold text-black">10000+</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Awards<br/>Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8 text-[#DB4444]" />
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Dedicated<br/>Customer<br/>Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. OUR STORY SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/our-story-workshop.jpg" // Replace with actual image
                  alt="Trophy Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase mb-2">Our Story</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-6">
                  Every Trophy <br/> Tells a <span className="text-[#DB4444]">Story</span>
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Instead of manufacturing awards, we create symbols of achievement. From school competitions to corporate milestones, every trophy reflects hard work, dedication, and success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Premium<br/>Quality</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <Users className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Trusted by Thousands<br/>Across India</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#fcf9f5] flex items-center justify-center text-[#D4AF37]">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">Designs That<br/>Inspire Pride</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OUR PROCESS SECTION */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase">Our Process</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] border-t-2 border-dashed border-gray-300 z-0"></div>
              
              {/* Process Steps */}
              {[
                { num: "01", icon: MessageSquare, title: "INQUIRY" },
                { num: "02", icon: PenTool, title: "DESIGN APPROVAL" },
                { num: "03", icon: Settings, title: "MANUFACTURING" },
                { num: "04", icon: SearchCheck, title: "QUALITY CHECK" },
                { num: "05", icon: Package, title: "PACKAGING" },
                { num: "06", icon: Truck, title: "DELIVERY" },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10 mb-8 md:mb-0 w-full md:w-auto">
                  <span className="text-xs font-bold text-gray-400 mb-3">{step.num}</span>
                  <div className="w-20 h-20 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm mb-4">
                    <step.icon className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{step.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR CATEGORIES SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase">Our Categories</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "SCHOOL AWARDS", img: "/images/cat-school.jpg" },
                { title: "CORPORATE AWARDS", img: "/images/cat-corporate.jpg" },
                { title: "SPORTS TROPHIES", img: "/images/cat-sports.jpg" },
                { title: "CULTURAL AWARDS", img: "/images/cat-cultural.jpg" },
                { title: "CUSTOM RECOGNITION", img: "/images/cat-custom.jpg" },
              ].map((cat, idx) => (
                <div key={idx} className="group relative rounded-xl overflow-hidden bg-[#111] aspect-[4/5] flex flex-col justify-end p-4 cursor-pointer">
                  {/* Background Image Placeholder */}
                  <Image 
                    src={cat.img} 
                    alt={cat.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="relative z-10 flex justify-between items-end w-full">
                    <h3 className="text-white font-bold text-sm tracking-wide leading-tight max-w-[70%]">
                      {cat.title}
                    </h3>
                    <div className="bg-white rounded-full p-1 group-hover:bg-[#DB4444] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-black group-hover:text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. STATS BAR (Red) */}
        <section className="bg-[#8A1515] py-10">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl flex flex-wrap justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">5+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Trophy className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">1000+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Award Designs</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Users className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">500+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Happy Clients</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <Truck className="w-8 h-8 opacity-80" />
              <div>
                <p className="text-xl font-bold">10000+</p>
                <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Awards Delivered</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRECISION IN EVERY DETAIL */}
        <section className="py-20 bg-[#fcf9f5]">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left text */}
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-[#DB4444] tracking-widest uppercase mb-6">Precision In Every Detail</p>
                <ul className="space-y-4">
                  {[
                    "Premium Quality Materials",
                    "Fine Finishing & Polishing",
                    "Advanced Manufacturing",
                    "Laser Engraving & Customization",
                    "Rigorous Quality Inspection"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="text-[#D4AF37]"><CheckCircle2 className="w-5 h-5 fill-orange-100" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Images */}
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                {/* Large Image */}
                <div className="relative rounded-xl overflow-hidden col-span-1">
                  <Image src="/images/precision-main.jpg" alt="Precision Crafting" fill className="object-cover" />
                </div>
                {/* Two small images */}
                <div className="grid grid-rows-2 gap-4 col-span-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image src="/images/precision-sub1.jpg" alt="Detailing" fill className="object-cover" />
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <Image src="/images/precision-sub2.jpg" alt="Engraving" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. TRUSTED BY SECTION */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <p className="text-center text-xs font-bold text-[#DB4444] tracking-widest uppercase mb-10">
              Trusted by Schools, Companies & Organizations Across India
            </p>
            <div className="flex items-center justify-between">
              <button className="p-2 text-gray-400 hover:text-black"><ChevronLeft /></button>
              
              {/* Logos container */}
              <div className="flex justify-around items-center w-full px-8 flex-wrap gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Placeholders for logos mentioned in image */}
                <span className="font-bold text-xl">DPS</span>
                <span className="font-bold text-xl">AMITY</span>
                <span className="font-bold text-xl">Reliance</span>
                <span className="font-bold text-xl">TATA</span>
                <span className="font-bold text-xl">HDFC</span>
                <span className="font-bold text-xl">Infosys</span>
                <span className="font-bold text-xl">SBI</span>
                <span className="font-bold text-xl">vivo</span>
              </div>

              <button className="p-2 text-gray-400 hover:text-black"><ChevronRight /></button>
            </div>
          </div>
        </section>

        {/* 9. BOTTOM CTA */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
            <div className="bg-gradient-to-r from-[#8A1515] to-[#5C0E0E] rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden">
              
              <div className="relative z-10 max-w-xl text-white mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-4xl font-serif mb-3">
                  Celebrate Every Achievement <br/> with <span className="text-[#D4AF37]">Jiya JR</span>
                </h2>
                <p className="text-gray-200 text-sm mb-8">Premium Awards. Timeless Recognition.</p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/shop" className="bg-[#D4AF37] hover:bg-[#b5952f] text-black font-bold py-3 px-8 rounded transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                    Explore Collection <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="bg-transparent border border-gray-400 hover:border-white text-white font-bold py-3 px-8 rounded transition-colors text-sm uppercase tracking-wide flex items-center gap-2">
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Decorative Trophy Image on the right */}
              <div className="relative z-10 w-48 h-48 lg:w-64 lg:h-64">
                <Image 
                  src="/images/cta-star-trophy.png" // Replace with actual star trophy image
                  alt="Star Trophy" 
                  fill 
                  className="object-contain"
                />
              </div>

            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
