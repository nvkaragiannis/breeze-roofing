import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { BreadcrumbNav } from "@/components/ui/BreadcrumbNav";
import { SchemaScript } from "@/components/ui/SchemaScript";
import { BlogCard } from "@/components/ui/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Roofing Blog | Breeze Roofing Wilmington NC",
  description:
    "Roofing tips, storm preparation, and expert advice for Wilmington NC homeowners from Breeze Roofing.",
  alternates: {
    canonical: "https://breezeroofingnc.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Blog", url: `${company.url}/blog` },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Roofing Blog
            </h1>
            <p className="text-gray-600 mb-12 max-w-2xl">
              Tips, advice, and insights from Brett and the Breeze Roofing team for Wilmington-area homeowners.
            </p>

            {posts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <p className="text-gray-600 text-lg">
                  Blog posts coming soon. Check back for roofing tips and coastal NC insights.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                    readingTime={post.readingTime}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
