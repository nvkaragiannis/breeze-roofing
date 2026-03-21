import { ChevronRight } from "lucide-react";
import { SchemaScript } from "./SchemaScript";
import { getBreadcrumbSchema } from "@/lib/schema";
import { company } from "@/lib/data/company";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href ? `${company.url}${item.href}` : company.url,
  }));

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="pt-4 pb-2">
        <ol className="flex items-center gap-1 text-sm text-gray-600 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-300 shrink-0" />
                )}
                {isLast || !item.href ? (
                  <span className="font-semibold text-gray-900">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-navy transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
