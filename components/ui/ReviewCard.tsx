"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
  rating: number;
  source: string;
}

export function ReviewCard({ name, text, rating, source }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "text-amber fill-amber"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          ))}
        </div>
        {source === "google" && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full px-2 py-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </span>
        )}
      </div>
      <div className="flex-1 mb-3">
        <p
          className={`text-gray-600 text-sm leading-relaxed ${
            !expanded ? "line-clamp-3" : ""
          }`}
        >
          &ldquo;{text}&rdquo;
        </p>
        {text.length > 150 && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="text-navy text-sm font-medium hover:text-amber transition-colors mt-1"
          >
            Read more
          </button>
        )}
      </div>
      <p className="font-semibold text-gray-900 text-sm">{name}</p>
    </div>
  );
}
