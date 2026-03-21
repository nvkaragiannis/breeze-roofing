import { MapPin } from "lucide-react";

interface AreaCardProps {
  city: string;
  slug: string;
}

export function AreaCard({ city, slug }: AreaCardProps) {
  return (
    <a
      href={`/areas/${slug}`}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 flex items-center gap-3 transition-all duration-200 group"
    >
      <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
        <MapPin className="w-5 h-5 text-navy group-hover:text-amber transition-colors" />
      </div>
      <span className="font-semibold text-gray-900 group-hover:text-navy transition-colors">
        {city}
      </span>
    </a>
  );
}
