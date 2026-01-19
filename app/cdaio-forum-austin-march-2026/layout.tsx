import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDAIO National Forum - Austin, TX | March 22-24, 2026',
  description: 'Join 50+ data and AI leaders at the CDAIO National Forum in Austin. Three days of strategic insights, executive networking, and actionable intelligence on enterprise data and AI transformation.',
  openGraph: {
    title: 'CDAIO National Forum - Austin, TX | March 22-24, 2026',
    description: 'Join 50+ data and AI leaders at the CDAIO National Forum in Austin. Three days of strategic insights, executive networking, and actionable intelligence on enterprise data and AI transformation.',
    type: 'website',
    url: 'https://cdaio.com/cdaio-forum-austin-march-2026',
    siteName: 'CDAIO // DIVISION',
    images: [
      {
        url: 'https://cdaio.com/cdaioopengraph.png',
        width: 1200,
        height: 630,
        alt: 'CDAIO // DIVISION - Data and AI Leadership Community',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDAIO National Forum - Austin, TX | March 22-24, 2026',
    description: 'Join 50+ data and AI leaders at the CDAIO National Forum in Austin. Three days of strategic insights on enterprise data and AI transformation.',
    images: ['https://cdaio.com/cdaioopengraph.png'],
  },
};

export default function ForumAustinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
