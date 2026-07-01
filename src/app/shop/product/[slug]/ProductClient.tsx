"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Truck, RefreshCw, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types/product";

interface ProductClientProps {
  product: Product;
  categories: string[];
}

export default function ProductClient({ product }: ProductClientProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  // Mocking multiple thumbnails using the single product image for the visual effect
  const thumbnails = [product.imageUrl, product.imageUrl, product.imageUrl, product.imageUrl];

  const handleAddToCart = () => {
    // Adding multiple quantities to the store (if your store supports it, otherwise just add 1)
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-10 flex items-center gap-3">
          <Link href="/" className="hover:text-black transition">Account</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black transition">{product.category}</Link>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="w-full lg:w-[60%] flex gap-6">
            {/* Thumbnails (Vertical) */}
            <div className="hidden md:flex flex-col gap-4 w-32">
              {thumbnails.map((img, idx) => (
                <div key={idx} className="bg-gray-100 rounded-md p-2 cursor-pointer border-2 border-transparent hover:border-gray-300 transition h-32 relative">
                  <Image src={img} alt="Thumbnail" fill className="object-contain p-2 mix-blend-multiply" />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 bg-gray-100 rounded-md relative min-h-[400px] md:min-h-[500px] flex items-center justify-center p-8">
              <Image 
                src={product.imageUrl} 
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-12 mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-[40%] flex flex-col pt-2">
            <h1 className="text-2xl font-bold text-black tracking-wide mb-3">
              {product.name}
            </h1>
            
            {/* Rating & Stock */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-[#FFAD33]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-400 border-r border-gray-400 pr-3">(150 Reviews)</span>
              <span className="text-sm text-green-500 font-medium pl-1">In Stock</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-medium text-black tracking-wide mb-6">
              ₹{product.price.toFixed(2)}
            </div>
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6 pb-6 border-b border-gray-300">
              {product.description || "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
            </p>

            {/* Colors */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-lg text-black mr-2 tracking-wide">Colours:</span>
              <button className="w-5 h-5 rounded-full bg-blue-300 border-2 border-black ring-2 ring-transparent hover:ring-black transition"></button>
              <button className="w-5 h-5 rounded-full bg-red-400 border-2 border-transparent hover:border-black transition"></button>
            </div>

            {/* Sizes */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg text-black mr-2 tracking-wide">Size:</span>
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-9 h-9 rounded border flex items-center justify-center text-sm font-medium transition ${
                    selectedSize === size ? 'bg-[#DB4444] border-[#DB4444] text-white' : 'border-gray-400 text-black hover:border-[#DB4444] hover:text-[#DB4444]'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Actions (Quantity + Buy Now) */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center border border-gray-400 rounded overflow-hidden h-11">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition border-r border-gray-400"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-[#DB4444] text-white hover:bg-red-600 transition border-l border-[#DB4444]"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#DB4444] text-white h-11 rounded font-medium hover:bg-red-600 transition tracking-wide"
              >
                Buy Now
              </button>

              <button className="w-11 h-11 border border-gray-400 rounded flex items-center justify-center hover:bg-gray-50 transition">
                <Heart className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Delivery Info Boxes */}
            <div className="border border-gray-400 rounded flex flex-col">
              <div className="flex gap-4 p-4 items-center border-b border-gray-400">
                <Truck className="w-8 h-8 text-black stroke-1" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">Free Delivery</span>
                  <span className="text-xs text-black underline cursor-pointer mt-1 font-medium">Enter your postal code for Delivery Availability</span>
                </div>
              </div>
              <div className="flex gap-4 p-4 items-center">
                <RefreshCw className="w-8 h-8 text-black stroke-1" />
                <div className="flex flex-col">
                  <span className="font-medium text-black">Return Delivery</span>
                  <span className="text-xs text-black mt-1 font-medium">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Related Item Section */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
            <h2 className="text-[#DB4444] font-bold text-lg">Related Item</h2>
          </div>
          
          {/* Grid placeholder to match your screenshot layout visually */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
             <div className="h-72 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm">Related Item 1</span>
             </div>
             <div className="h-72 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm">Related Item 2</span>
             </div>
             <div className="h-72 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm">Related Item 3</span>
             </div>
             <div className="h-72 bg-gray-100 rounded flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 text-sm">Related Item 4</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
