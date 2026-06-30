import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Star, MessageCircle, ShoppingBag, Truck, ShieldCheck } from "lucide-react";
export const dynamic = 'force-dynamic';
// This interface types the URL parameters provided by Next.js
interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Fetch the single product using GROQ
async function getProduct(slug: string) {
  // 🚨 Notice the updated first line! It now checks BOTH slug and _id
  const query = `*[_type == "product" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    rating,
    description,
    "imageUrl": image.asset->url
  }`;
  
  const product = await client.fetch(query, { slug });
  return product;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  // If someone types a random URL that doesn't exist in Sanity, show the 404 page
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8">
          Home / {product.category} / <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Image Gallery */}
          <div className="relative aspect-[4/5] bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Product Info */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {"★".repeat(product.rating || 5)}
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">
                Read Reviews
              </span>
            </div>

            <div className="text-4xl font-black text-gray-900 mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description || "This premium product is crafted with the highest quality materials. Perfect for your everyday style, offering both comfort and durability."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Note: In a real app, make these client components if you want interactive state */}
              <button className="flex-1 bg-black text-white font-bold py-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 bg-emerald-600 text-white font-bold py-4 rounded-md flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                <MessageCircle className="w-5 h-5 fill-current" />
                Buy on WhatsApp
              </button>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">Free Global Delivery</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium">1 Year Warranty</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

