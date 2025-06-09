import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";

export const homePageMetadata: Metadata = generatePageMetadata({
  title: "Home",
  description: "Marina Prima Sukses Jakarta - MSC Cruises official manning agency. Join our cruise ship crew recruitment & training programs today!",
  path: "/"
});

export const applyNowMetadata: Metadata = generatePageMetadata({
  title: "Apply Now",
  description: "Apply for MSC cruise ship jobs or partner with Marina Prima Sukses Jakarta. Indonesia's leading maritime recruitment agency.",
  path: "/apply-now"
});

export const candidateMetadata: Metadata = generatePageMetadata({
  title: "Candidate Application",
  description: "Apply for MSC Cruises crew positions with Marina Prima Sukses. Housekeeping, F&B, deck & engine jobs. Start your cruise career today!",
  path: "/apply-now/candidate"
});

export const partnerMetadata: Metadata = generatePageMetadata({
  title: "Partner Application",
  description: "Partner with Marina Prima Sukses - MSC Cruises official agency Jakarta. Join Indonesia's premier maritime recruitment network.",
  path: "/apply-now/partner"
});

export const trainingCenterMetadata: Metadata = generatePageMetadata({
  title: "Training Center",
  description: "Marina Prima Sukses Training Center Jakarta - Get certified for cruise ship careers. Professional maritime training for Indonesian crew.",
  path: "/training-center"
});

export const articlesMetadata: Metadata = generatePageMetadata({
  title: "Articles & News",
  description: "Latest cruise ship job updates & maritime news from Marina Prima Sukses Jakarta. MSC Cruises opportunities for Indonesian crew.",
  path: "/articles"
});