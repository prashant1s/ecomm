"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, totalItems, subtotal, removeItem } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Men', 'Women', 'Accessories', 'New Arrivals', 'Sale'];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon512x512.png" alt="StyleHub Logo" width={32} height={32} className="rounded-sm" />
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-black' : 'text-white drop-shadow-md'}`}>
              STYLEHUB
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link} href="#" className={`font-medium hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'}`}>
                {link}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className={`flex items-center gap-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
            <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="w-5 h-5 hover:text-blue-600 transition-colors" />
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
            <Menu className="w-6 h-6 md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Mini Cart Drawer (Simplified) */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-[60]">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween' }} className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                <button onClick={() => setIsCartOpen(false)}><X className="w-6 h-6 text-gray-500 hover:text-black" /></button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
                ) : (
                  items.map(item => (
                    <div key={item.id} className="flex gap-4 border-b pb-4">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        <p className="font-medium text-blue-600">${item.price}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm h-fit">Remove</button>
                    </div>
                  ))
                )}
              </div>
              {items.length > 0 && (
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 font-semibold rounded-md hover:bg-blue-700 transition">
                    Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}