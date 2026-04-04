import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { Button } from "@/components/ui/Button";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";
import { services } from "@/lib/data/services";

function getRelatedServices(tags?: string[]) {
  if (!tags || tags.length === 0) {
    return services.filter((s) =>
      ["residential-roofing", "fortified-roof", "storm-damage"].includes(s.slug)
    );
  }

  const tagStr = tags.join(" ").toLowerCase();

  const scored = services.map((s) => {
    const keywords = [
      s.shortTitle.toLowerCase(),
      s.slug.replace(/-/g, " "),
      s.description.toLowerCase(),
    ].join(" ");

    let score = 0;
    for (const tag of tags) {
      if (keywords.includes(tag.toLowerCase())) score += 2;
      for (const word of tag.toLowerCase().split(/\s+/)) {
        if (word.length > 3 && keywords.includes(word)) score += 1;
      }
    }
    if (tagStr.includes(s.slug.replace(/-/g, " "))) score += 5;

    return { service: s, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const matched = scored.filter((s) => s.score > 0).slice(0, 3);
  if (matched.length >= 3) return matched.map((s) => s.service);

  const fallbackSlugs = ["residential-roofing", "fortified-roof", "storm-damage"];
  const result = matched.map((s) => s.service);
  for (const slug of fallbackSlugs) {
    if (result.length >= 3) break;
    const svc = services.find((s) => s.slug === slug);
    if (svc && !result.find((r) => r.slug === svc.slug)) {
      result.push(svc);
    }
  }
  return result.slice(0, 3);
}

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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Blog", url: `${company.url}/blog` },
    { name: post.title, url: `${company.url}/blog/${slug}` },
  ]);

  return (
    <>
      <SchemaScript schema={articleSchema} />
      <SchemaScript schema={breadcrumbSchema} />
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
                <span>&middot;</span>
                <span>{post.readingTime} min read</span>
              </div>
            </header>

            {/* Blog Content */}
            <MarkdownContent content={post.content} />

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

            {/* Related Services */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Related Services
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {getRelatedServices(post.tags).map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:border-navy hover:shadow-md transition-all duration-200 group"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-navy transition-colors mb-1">
                      {svc.shortTitle}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {svc.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
