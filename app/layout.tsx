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
    other: {
      'msvalidate.01': '2D973802B87E9F5B2AB4DDD38DD14E60',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
