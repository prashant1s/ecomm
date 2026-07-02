"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Lock, Truck, MessageCircle } from "lucide-react";

export default function Footer() {
  const WHATSAPP_NUMBER = "918168291041";

  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-16 pb-6 relative font-sans border-t border-gray-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Top Section: 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col pr-4">
            <h2 className="text-[#D4AF37] text-3xl font-serif font-bold mb-4 leading-tight tracking-wide">
              JIYA JR
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Decades of craftsmanship, trusted service, and carefully curated premium collections.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 uppercase">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Pinterest</a></li>
              <li><a href="#" className="hover:text-white transition">YouTube</a></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (Dashed Box) */}
          <div className="border border-dashed border-gray-600 rounded-xl p-4 flex flex-col justify-center">
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-5 uppercase">
              Get In Touch
            </h3>
            
            <div className="flex items-center gap-3 mb-4 text-sm">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <a href="tel:+918168291041" className="hover:text-white transition">+91 8168291041</a>
            </div>
            
            <div className="flex items-center gap-3 mb-6 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <a href="mailto:contact@jiyajr.com" className="hover:text-white transition">contact@jiyajr.com</a>
            </div>

            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-sm font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition shadow-sm"
            >
              WhatsApp Chat with Us
            </a>
          </div>

          {/* Column 4: Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">All Collections</Link></li>
              <li><Link href="/shop" className="hover:text-white transition">Featured</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Store Visit</Link></li>
            </ul>
          </div>

          {/* Column 5: Store Location */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 uppercase">
              Store Location
            </h3>
            <div className="flex gap-3 text-sm text-gray-300 mb-6 leading-relaxed">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p>Civil Lines, Near High Court,<br/>Prayagraj, Uttar Pradesh - 211001<br/>India</p>
            </div>
            <button className="border border-[#D4AF37] text-[#D4AF37] text-sm font-medium py-2 px-6 rounded hover:bg-[#D4AF37] hover:text-black transition duration-300">
              Get Directions
            </button>
          </div>

        </div>

        {/* Bottom Section: Payment & Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Left: Payments */}
            <div className="flex flex-col gap-3">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                Payment Methods
              </span>
              <div className="flex flex-wrap gap-2">
                {['Visa', 'Mastercard', 'RuPay', 'UPI', 'GPay', 'Paytm'].map((method) => (
                  <div key={method} className="bg-white text-black text-[11px] font-bold py-2 px-3 rounded-sm">
                    {method}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Trust Badges */}
            <div className="flex flex-wrap items-center px-25 gap-10 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white">100% Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-orange-500" />
                <span className="text-white">Pan India Shipping</span>
              </div>
            </div>

          </div>
        </div>

        {/* 👇 NEW: Legal Links & Copyright Section */}
        <div className="border-t border-gray-800 mt-3 pt-1 flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-200">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37] transition duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#D4AF37] transition duration-300">Terms & Conditions</Link>
            <Link href="/return-policy" className="hover:text-[#D4AF37] transition duration-300">Return & Refund</Link>
            <Link href="/shipping-policy" className="hover:text-[#D4AF37] transition duration-300">Shipping Policy</Link>
            <Link href="/cancellation" className="hover:text-[#D4AF37] transition duration-300">Cancellation</Link>
          </div>
          
          <p className="text-gray-300 text-xs italic tracking-wide">
            "All transactions are subject to Jiya JR's policies, terms, and applicable laws of India."
          </p>
          
          <p className="text-gray-400 text-xs tracking-wider">
            © 2026 Jiya JR. All rights reserved. Head Office, Prayagraj.
          </p>
        </div>

      </div>

      {/* Global Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#25D366] text-white rounded-full py-3 px-5 flex items-center justify-center gap-2 hover:bg-[#1ebd5a] hover:scale-105 transition-all duration-300 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] z-50 font-bold tracking-wide"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        WhatsApp
      </a>
    </footer>
  );
}