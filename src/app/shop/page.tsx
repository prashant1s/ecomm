import { client } from "@/sanity/lib/client";
import ShopClient from "./ShopClient";
import { Product } from "@/types/product";

export const revalidate = 60; 

export default async function ShopPage() {
  const products = await client.fetch<Product[]>(`*[_type == "product"] {
    _id,
    name,
    "slug": slug.current, 
    price,
    rating,
    category,
    "imageUrl": image.asset->url,
    "originalPrice": price * 1.5,
    "discount": "33% off"
  }`);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <ShopClient 
      initialProducts={products} 
      categories={categories} 
    />
  );
}

