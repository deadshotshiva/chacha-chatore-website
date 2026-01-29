import type { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'CC Production - Performance Marketing & Creative Production Agency',
  description: 'Award-winning performance marketing and creative production agency. Specialized in Meta Ads, Google Ads, social media marketing, video production, and creative design.',
  keywords: ['performance marketing', 'creative production', 'digital advertising', 'Meta Ads', 'Google Ads'],
  robots: 'index, follow',
  creator: 'CC Production',
  publisher: 'CC Production',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
}

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/',
  keywords?: string[]
): Metadata {
  const fullTitle = `${title} | CC Production`

  return {
    title: fullTitle,
    description,
    keywords: keywords ? [...keywords, 'CC Production'] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: `https://ccproduction.com${path}`,
      siteName: 'CC Production',
      images: [
        {
          url: 'https://ccproduction.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'CC Production',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['https://ccproduction.com/og-image.jpg'],
    },
    alternates: {
      canonical: `https://ccproduction.com${path}`,
    },
  }
}

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export const servicePages = [
  {
    slug: 'meta-ads',
    title: 'Meta Ads Services',
    description: 'Expert Meta Ads management for lead generation and sales',
  },
  {
    slug: 'google-ads',
    title: 'Google Ads Services',
    description: 'Results-driven Google Ads management and optimization',
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    description: 'Strategic social media marketing for brand growth',
  },
  {
    slug: 'video-production',
    title: 'Video Production Services',
    description: 'Professional video production for marketing campaigns',
  },
  {
    slug: 'creative-design',
    title: 'Creative Design Services',
    description: 'Custom creative design for digital and print marketing',
  },
]
