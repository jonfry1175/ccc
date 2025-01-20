import type { Metadata } from 'next'

const sharedMetadata = {
  twitter: {
    card: 'summary_large_image',
    site: '@metasolusidigital',
    creator: '@metasolusidigital'
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Meta Solusi Digital',
  }
} as const

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `https://metasolusidigital.com${path}`
  
  return {
    title,
    description,
    metadataBase: new URL('https://metasolusidigital.com'),
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...sharedMetadata.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...sharedMetadata.twitter,
      title,
      description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
} 