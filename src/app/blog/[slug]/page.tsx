import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

// Fetch single post by slug
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}

// Custom components to style the Sanity Rich Text (PortableText) using Tailwind
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden shadow-md">
        <Image src={urlForImage(value).url()} alt="Blog image" fill className="object-cover" />
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-serif">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-[#D4AF37] pl-4 italic text-gray-600 my-8 text-xl">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noreferrer" className="text-[#0052A3] hover:underline font-medium">
        {children}
      </a>
    ),
  },
};

// 👇 FIX: Changed the type of params to a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  // 👇 FIX: Await the params before using them!
  const resolvedParams = await params;
  
  // Now we can safely pass the slug
  const post = await getPost(resolvedParams.slug);

  if (!post) return notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-32 pb-20 font-sans">
        
        {/* Back Button */}
        <div className="container mx-auto px-4 max-w-4xl mb-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] transition-colors font-semibold text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        {/* 1. OPTIONAL FULL WIDTH IMAGE */}
        {post.fullWidthImage && (
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative mb-12">
            <Image
              src={urlForImage(post.fullWidthImage).url()}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        <article className="container mx-auto px-4 max-w-3xl">
          {/* Post Header */}
          <header className="mb-12 text-center">
            {post.publishedAt && (
              <p className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-4">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 font-serif leading-tight">
              {post.title}
            </h1>
          </header>

          {/* 2. RICH TEXT EDITOR BODY */}
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              <PortableText 
                value={post.body} 
                components={portableTextComponents} 
              />
            ) : (
              <p className="text-gray-500 italic">No content available.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

