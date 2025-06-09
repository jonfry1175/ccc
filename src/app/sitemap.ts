import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://mpsjakarta.com";
  const currentDate = new Date();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/apply-now`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/apply-now/candidate`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/apply-now/partner`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/training-center`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.7
    }
  ];

  return routes;
}
