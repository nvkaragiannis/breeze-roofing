import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category?: string;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function blogDirExists(): boolean {
  try {
    return fs.existsSync(BLOG_DIR);
  } catch {
    return false;
  }
}

export function getAllPosts(): BlogPost[] {
  if (!blogDirExists()) return [];

  try {
    const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

    const posts = files.map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        title: (data.title as string) || slug,
        description: (data.description as string) || "",
        date: (data.date as string) || "",
        author: (data.author as string) || "Brett, Breeze Roofing",
        category: (data.category as string) || undefined,
        content,
      };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getRecentPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}
