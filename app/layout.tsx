import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://myan66.com'),
  title: {
    default: 'MyanmarBetHub - Best Online Casinos in Myanmar',
    template: '%s | MyanmarBetHub',
  },
  description: 'Independent reviews of the best online casinos for Myanmar players. Safe, licensed, and trusted platforms.',
  verification: {
    google: 'K_lQt8BkgUKrXFre8PLBa08z3oX-UD2w03pAhb-fuF8',
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
    <html>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
