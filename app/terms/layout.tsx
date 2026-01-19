import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | CDAIO // DIVISION',
  description: 'Read the terms and conditions for using the CDAIO platform, participating in events, and engaging with our data and AI leadership community.',
  openGraph: {
    title: 'Terms of Use | CDAIO // DIVISION',
    description: 'Read the terms and conditions for using the CDAIO platform and participating in our community.',
    type: 'website',
    url: 'https://cdaio.com/terms',
    siteName: 'CDAIO // DIVISION',
    images: [
      {
        url: '/cdaio_-_forum_og.png',
        width: 1200,
        height: 630,
        alt: 'CDAIO Forum - Data and AI Leadership Community',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | CDAIO // DIVISION',
    description: 'Read the terms and conditions for using the CDAIO platform and participating in our community.',
    images: ['/cdaio_-_forum_og.png'],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
