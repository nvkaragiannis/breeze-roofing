import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
}

const aspectStyles: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center",
        aspectStyles[aspectRatio],
        className
      )}
    >
      <span className="text-gray-600 text-sm font-medium text-center px-4">
        {label}
      </span>
    </div>
  );
}
