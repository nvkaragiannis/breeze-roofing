import { company } from "./data/company";
import type { Service } from "./data/services";
import type { Review } from "./data/reviews";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: company.name,
    alternateName: company.legalName,
    url: company.url,
    telephone: `+1${company.phone}`,
    email: company.email,
    image: `${company.url}/images/hero/hero-bg.jpg`,
    logo: `${company.url}/images/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Wilmington" },
      { "@type": "City", name: "Hampstead" },
      { "@type": "City", name: "Leland" },
      { "@type": "City", name: "Carolina Beach" },
      { "@type": "City", name: "Wrightsville Beach" },
      { "@type": "City", name: "Southport" },
      { "@type": "City", name: "Topsail Island" },
      { "@type": "City", name: "Surf City" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IBHS Fortified Roof Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm Damage Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roof Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Inspection" } },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.reviewRating,
      reviewCount: company.reviewCount,
      bestRating: "5",
    },
    priceRange: "$$",
    paymentAccepted: "Cash, Check, Credit Card, Financing Available",
    currenciesAccepted: "USD",
  };
}

export function getFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function getArticleSchema(article: {
  title: string;
  datePublished: string;
  dateModified?: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || `${company.url}/images/hero/hero-bg.jpg`,
    author: {
      "@type": "Person",
      name: `Brett, ${company.name}`,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/images/brand/logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
  };
}

export function getServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.description,
    provider: {
      "@type": "RoofingContractor",
      name: company.name,
      url: company.url,
      telephone: `+1${company.phone}`,
    },
    areaServed: [
      { "@type": "City", name: "Wilmington" },
      { "@type": "City", name: "Hampstead" },
      { "@type": "City", name: "Leland" },
      { "@type": "City", name: "Carolina Beach" },
      { "@type": "City", name: "Wrightsville Beach" },
      { "@type": "City", name: "Southport" },
      { "@type": "City", name: "Topsail Island" },
      { "@type": "City", name: "Surf City" },
    ],
    url: `${company.url}/services/${service.slug}`,
  };
}

export function getReviewSchema(reviews: Review[]) {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewBody: review.text,
    itemReviewed: {
      "@type": "RoofingContractor",
      name: company.name,
      url: company.url,
    },
  }));
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
