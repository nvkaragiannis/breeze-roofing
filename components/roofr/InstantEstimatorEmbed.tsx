"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface InstantEstimatorEmbedProps {
  embedUrl?: string; // Roofr iframe src URL from Brett's dashboard
  className?: string;
}

export function InstantEstimatorEmbed({
  embedUrl,
  className,
}: InstantEstimatorEmbedProps) {
  const [height, setHeight] = useState(650);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://app.roofr.com") return;

      // GA4 event tracking stub
      // When Roofr sends postMessage events, forward them to GA4
      try {
        const data = event.data;
        if (typeof data === "object" && data.type) {
          // Handle dynamic height resize
          if (data.type === "resize" && typeof data.height === "number") {
            setHeight(data.height);
          }

          if (typeof window !== "undefined" && "gtag" in window) {
            (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", `roofr_${data.type}`, {
              event_category: "instant_estimator",
              event_label: data.type,
            });
          }
        }
      } catch {
        // Silently handle parsing errors
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // If no embedUrl provided, show placeholder (Brett hasn't provided code yet)
  if (!embedUrl) {
    return (
      <div
        ref={containerRef}
        className={cn(
          "min-h-[650px] bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-4",
          className
        )}
      >
        <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-navy"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-xl font-semibold text-navy">
          Roofr Instant Estimator
        </p>
        <p className="text-gray-600 text-sm">
          Brett&apos;s embed code goes here
        </p>
      </div>
    );
  }

  // Production mode: render secure iframe
  return (
    <div ref={containerRef} className={cn("w-full", className)}>
      <iframe
        src={embedUrl}
        title="Roofr Instant Roof Estimator"
        className="w-full rounded-xl border-0"
        style={{ height: `${height}px`, transition: "height 0.3s ease" }}
        allow="geolocation"
        loading="lazy"
      />
    </div>
  );
}
