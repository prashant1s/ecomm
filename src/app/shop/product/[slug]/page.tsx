import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import ProductClient from "./ProductClient";

export const dynamic = 'force-dynamic';

// This interface types the URL parameters provided by Next.js
interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Fetch the single product using GROQ
async function getProduct(slug: string) {
// Add sizes and colors to your query:
const query = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  category,
  price,
  rating,
  sku,
  colors,
  description,
  "imageUrl": image.asset->url,
  "galleryUrls": gallery[].asset->url,
  "sizes": sizes[]{
    sizeName,
    dimension,
    "imageUrl": sizeImage.asset->url
  }
}`;
  
  const product = await client.fetch(query, { slug });
  return product;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Fetch all categories for the left sidebar
  const allProducts = await client.fetch(`*[_type == "product"] { category }`);
  const categories = [...new Set(allProducts.map((p: any) => p.category))];

  // 👇 THIS IS THE MAGIC LINE. It loads your new UI with the sidebar!
  return <ProductClient product={product} categories={categories as string[]} />;
}

