"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Lock, Truck, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const WHATSAPP_NUMBER = "9971509003";

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
              Decades of craftsmanship, trusted service, and carefully curated
              premium collections.
            </p>
          </div>

          {/* Column 2: Social Links */}
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 uppercase">
              Connect With Us
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/jai-rampal-ab6bb25b/"
                  className="hover:text-[#D4AF37] transition"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch (Dashed Box) */}
          <div className="border border-dashed border-gray-600 rounded-xl p-4 flex flex-col justify-center">
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-5 uppercase">
              Get In Touch
            </h3>

            <div className="flex items-center gap-3 mb-4 text-sm">
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <a
                href="tel:+919971509003"
                className="hover:text-[#D4AF37] transition"
              >
                +91 9971509003
              </a>
            </div>

            <div className="flex items-center gap-3 mb-6 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <a
                href="mailto:info@jiyajr.com"
                className="hover:text-[#D4AF37] transition"
              >
                info@jiyajr.com
              </a>
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
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#D4AF37] transition">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#D4AF37] transition">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D4AF37] transition">
                  Store Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Store Location */}
          <div className="whitespace-nowrap">
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 uppercase">
              Store Location
            </h3>
            <div className="flex gap-1 text-sm text-gray-300 mb-6 leading-relaxed">
              <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p>
                2nd Floor, Property No-22A, Block C-1
                <br />
                Rama Vihar, Delhi-110081
                <br />
                India
              </p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2nd+Floor%2C+Property+No-22A%2C+Block+C-1%2C+Rama+Vihar%2C+Delhi-110081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#D4AF37] text-[#D4AF37] text-sm font-medium py-2 px-6 rounded hover:bg-[#D4AF37] hover:text-black transition duration-300 text-center"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* 🌟 Bottom Section: Payments & Trust Badges 🌟 */}
        <div className="border-t border-gray-800 pt-10 mt-10 flex flex-col xl:flex-row justify-between items-center gap-10">
          {/* Payments Logos Section */}
          <div className="flex flex-col items-center xl:items-start gap-3 w-full xl:w-auto">
            <h4 className="mt-1 text-sm tracking-[0.3em] uppercase text-[#D4AF37] text-center xl:text-left">
              Accepted Payment Methods
            </h4>
            <div className="flex flex-wrap gap-3 py-1 justify-center xl:justify-start w-full">
              {[
                { src: "/payments/upi.svg", alt: "UPI" },
                { src: "/payments/google-pay.svg", alt: "Google Pay" },
                { src: "/payments/phonepay.svg", alt: "phonepe" },
                { src: "/payments/mastercard-alt.svg", alt: "Mastercard" },
                { src: "/payments/visa.svg", alt: "Visa" },
                { src: "/payments/amazon-pay.svg", alt: "amazon pay" },
                { src: "/payments/discover.svg", alt: "Discover" },
              ].map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={50}
                  height={40}
                  className="h-9 md:h-11 w-auto border border-gray-800 rounded-lg p-1.5 bg-white/5 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Right: Trust Badges */}
          <div className="flex flex-wrap items-center px-3 gap-8 text-sm font-medium">
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

        {/* 👇 NEW: Legal Links & Copyright Section */}
        <div className="border-t border-gray-800 mt-3 pt-1 flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-200">
            <Link
              href="/privacy-policy"
              className="hover:text-[#D4AF37] transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D4AF37] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/return-policy"
              className="hover:text-[#D4AF37] transition duration-300"
            >
              Return & Refund
            </Link>
            <Link
              href="/shipping-policy"
              className="hover:text-[#D4AF37] transition duration-300"
            >
              Shipping Policy
            </Link>
            <Link
              href="/cancellation"
              className="hover:text-[#D4AF37] transition duration-300"
            >
              Cancellation
            </Link>
          </div>

          <p className="text-gray-300 text-xs italic tracking-wide">
            "All transactions are subject to Jiya JR's policies, terms, and
            applicable laws of India."
          </p>

          <p className="text-gray-400 text-xs tracking-wider">
            © 2026 Jiya JR. All rights reserved. Store, Rama Vihar.
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
