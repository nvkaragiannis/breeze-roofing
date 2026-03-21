interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
  category?: string;
  readingTime?: number;
}

export function BlogCard({
  title,
  description,
  date,
  slug,
  category,
  readingTime,
}: BlogCardProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col transition-all duration-200 group"
    >
      {category && (
        <span className="text-xs font-semibold text-amber uppercase tracking-wide mb-2">
          {category}
        </span>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm flex-1 mb-4 line-clamp-3">
        {description}
      </p>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <time>{date}</time>
        {readingTime && (
          <>
            <span>&middot;</span>
            <span>{readingTime} min read</span>
          </>
        )}
      </div>
    </a>
  );
}
