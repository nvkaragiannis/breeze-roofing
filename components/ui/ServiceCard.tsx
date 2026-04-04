import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  featured = false,
}: ServiceCardProps) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || Icons.Hammer;

  return (
    <a
      href={href}
      className={cn(
        "bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col transition-all duration-200 group motion-safe:hover:-translate-y-1 motion-safe:transition-transform",
        featured && "ring-2 ring-amber border-amber"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          featured ? "bg-amber/10" : "bg-navy/5"
        )}
      >
        <IconComponent
          className={cn("w-6 h-6", featured ? "text-amber" : "text-navy")}
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-1 mb-4">{description}</p>
      <span className="text-navy font-semibold text-sm group-hover:text-amber transition-colors">
        Learn more &rarr;
      </span>
    </a>
  );
}
