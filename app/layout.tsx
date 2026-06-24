import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://myan66.com'),
  title: {
    default: 'Myan66 - Shan Koe Mee APK and M9 Login Guide',
    template: '%s | Myan66',
  },
  description: 'Myanmar guide for Shan Koe Mee APK downloads, M9 Shan Koe Mee login, Joy Shan Koe Mee, and mobile play safety.',
  verification: {
    google: '_cBt0MTNpkPlANeNOa-IQj3d6wO9H9fmj1aotpKWdXE',
    other: {
      'msvalidate.01': 'F31A3989097533BDEBEE5C6AB2C37732',
    },
  },

  openGraph: { images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'myan66.com' }] },
  twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
