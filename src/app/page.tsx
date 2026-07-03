import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Brands from '@/components/home/Brands';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoBanner from '@/components/home/PromoBanner';
import Features from '@/components/home/Features';
import { client } from '@/sanity/lib/client';
import { Product } from '@/types/product';
import WhyChooseBanner from "@/components/home/WhyChooseBanner"; 
import PartnerInstitutions from "@/components/home/PartnerInstitutions";


async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"] | order(_createdAt desc)[0...5] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    rating,
    "imageUrl": image.asset->url,
    "galleryUrls": gallery[].asset->url,
    description
  }`;
  return client.fetch(query);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PartnerInstitutions />
      <FeaturedProducts products={products} />
      <Categories />
      <Brands />
      <PromoBanner />
      <Features />
      <WhyChooseBanner />
      <Footer />
    </main>
  );
}
