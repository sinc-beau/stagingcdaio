import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://cdaio.com'),
  title: 'CDAIO // DIVISION - Data. Intelligence. Motion.',
  description: 'A peer-to-peer ecosystem where executives, their teams, and solution providers converge to build the intelligent future. Join the premier data and AI leadership community.',
  keywords: 'data leadership, AI governance, CDAO, CAIO, data strategy, AI strategy, executive community, data forum',
  openGraph: {
    title: 'CDAIO // DIVISION - Data. Intelligence. Motion.',
    description: 'A peer-to-peer ecosystem where executives, their teams, and solution providers converge to build the intelligent future. Join the premier data and AI leadership community.',
    type: 'website',
    url: 'https://cdaio.com',
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
    title: 'CDAIO // DIVISION - Data. Intelligence. Motion.',
    description: 'A peer-to-peer ecosystem where executives, their teams, and solution providers converge to build the intelligent future.',
    images: ['https://cdaio.com/cdaioopengraph.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
