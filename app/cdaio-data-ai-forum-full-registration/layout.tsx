import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Your Forum Registration | CDAIO Forum Austin 2026',
  description: 'Complete your travel and logistics information for the CDAIO National Forum in Austin, TX. March 22-24, 2026 at the Downright Hotel.',
  openGraph: {
    title: 'Complete Your Forum Registration | CDAIO Forum Austin 2026',
    description: 'Complete your travel and logistics information for the CDAIO National Forum in Austin, TX. March 22-24, 2026 at the Downright Hotel.',
    type: 'website',
    url: 'https://cdaio.com/cdaio-data-ai-forum-full-registration',
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
    title: 'Complete Your Forum Registration | CDAIO Forum Austin 2026',
    description: 'Complete your travel and logistics information for the CDAIO National Forum in Austin, TX.',
    images: ['https://cdaio.com/cdaioopengraph.png'],
  },
};

export default function FullRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
