import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { Button } from "@/components/ui/Button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getArticleSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://breezeroofingnc.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: post.title,
    datePublished: post.date,
    description: post.description,
    url: `${company.url}/blog/${slug}`,
  });

  // Simple markdown-to-paragraphs rendering for blog content
  const contentLines = post.content.split("\n");
  const contentElements = contentLines.map((line, i) => {
    const trimmed = line.trim();
    if (trimmed === "") return null;
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    return (
      <p key={i} className="text-gray-600 leading-relaxed my-3">
        {trimmed}
      </p>
    );
  });

  return (
    <>
      <SchemaScript schema={articleSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
        </div>

        <article className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Blog Header */}
            <header className="mb-10">
              {post.category && (
                <span className="text-xs font-semibold text-amber uppercase tracking-wide">
                  {post.category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>By {post.author}</span>
                <span>&middot;</span>
                <time dateTime={post.date}>{post.date}</time>
              </div>
            </header>

            {/* Blog Content */}
            <div className="prose-content">{contentElements}</div>

            {/* CTA */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Need Help With Your Roof?
              </h2>
              <p className="text-gray-600 mb-4">
                Get a free estimate from Breeze Roofing — Wilmington&apos;s trusted local roofer.
              </p>
              <Button href="/estimate" variant="primary" size="lg">
                Get Free Estimate
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
