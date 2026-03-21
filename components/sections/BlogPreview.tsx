import { BlogCard } from "@/components/ui/BlogCard";
import Link from "next/link";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  category?: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest from the Blog
          </h2>
          <Link
            href="/blog"
            className="hidden sm:inline-flex text-navy font-semibold hover:text-amber transition-colors"
          >
            View all posts &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="text-navy font-semibold hover:text-amber transition-colors"
          >
            View all posts &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
