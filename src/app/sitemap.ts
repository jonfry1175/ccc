import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // revalidate every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metasolusidigital.com'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-applications`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/mobile-applications`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  return routes
} 