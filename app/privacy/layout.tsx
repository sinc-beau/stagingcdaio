import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CDAIO // DIVISION',
  description: 'Learn about how CDAIO collects, uses, and protects your personal information. Read our comprehensive privacy policy for the data and AI leadership community.',
  openGraph: {
    title: 'Privacy Policy | CDAIO // DIVISION',
    description: 'Learn about how CDAIO collects, uses, and protects your personal information.',
    type: 'website',
    url: 'https://cdaio.com/privacy',
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
    title: 'Privacy Policy | CDAIO // DIVISION',
    description: 'Learn about how CDAIO collects, uses, and protects your personal information.',
    images: ['/cdaio_-_forum_og.png'],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
