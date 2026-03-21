"use client";

import { reviews } from "@/lib/data/reviews";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { company } from "@/lib/data/company";
import { ExternalLink } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Wilmington Homeowners Say
          </h2>
          <p className="mt-4 text-gray-600">
            {company.reviewRating} stars from {company.reviewCount}+ verified
            Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              name={review.name}
              text={review.text}
              rating={review.rating}
              source={review.source}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Breeze+Roofing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-amber transition-colors"
          >
            View All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
