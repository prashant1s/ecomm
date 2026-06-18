import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Brands from '@/components/home/Brands';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PromoBanner from '@/components/home/PromoBanner';
import Features from '@/components/home/Features';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Brands />
      <Categories />
      <FeaturedProducts />
      <PromoBanner />
      <Features />
      <Footer />
    </main>
  );
}