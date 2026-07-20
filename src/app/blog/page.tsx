import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Fetch all posts sorted by date
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }`;
  return client.fetch(query);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA] pt-32 pb-20 font-sans">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black font-serif text-gray-900 mb-4">Our Blog</h1>
            <p className="text-gray-600">Latest updates, gift guides, and stories.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link 
                key={post._id} 
                href={`/blog/${post.slug.current}`} 
                // 👇 FIX: Increased shadow (shadow-md -> hover:shadow-2xl) and darkened the border (border-gray-300)
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-300 flex flex-col"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={urlForImage(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  {post.publishedAt && (
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-widest mt-auto group-hover:text-[#D4AF37]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
