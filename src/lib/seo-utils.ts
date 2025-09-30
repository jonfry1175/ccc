// SEO utility functions for optimizing content

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
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

export function generateArticleSchema({
  title,
  description,
  author = "Christianity Crisis Center",
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    publisher: {
      "@type": "Organization",
      name: "Christianity Crisis Center",
      logo: {
        "@type": "ImageObject",
        url: "https://mpsjakarta.com/images/Logo/christianity-crisis-center.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
  };
}

export function generateReviewSchema(
  reviews: Array<{
    author: string;
    rating: number;
    review: string;
    date: string;
  }>,
) {
  const aggregateRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Christianity Crisis Center",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.review,
      datePublished: r.date,
    })),
  };
}

// SEO-friendly slug generator
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

// Meta description optimizer (ensures 150-160 chars)
export function optimizeMetaDescription(text: string): string {
  if (text.length <= 160) return text;

  // Cut at last complete word before 157 chars and add ellipsis
  const truncated = text.substring(0, 157);
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.substring(0, lastSpace) + "...";
}

// Generate alt text for images
export function generateAltText(filename: string, context?: string): string {
  // Remove file extension and replace separators with spaces
  const baseName = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  if (context) {
    return `${context} - ${baseName}`;
  }

  // Add context based on common patterns
  if (filename.includes("logo")) {
    return `Christianity Crisis Center ${baseName}`;
  }
  if (filename.includes("crew") || filename.includes("staff")) {
    return `Indonesian cruise ship ${baseName}`;
  }
  if (filename.includes("ship") || filename.includes("cruise")) {
    return `MSC Cruises ${baseName}`;
  }

  return baseName;
}
