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


// Wave 1 SEO additions
export const seoWave1 = {
  openGraph: {
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'myan66.com' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MyanmarBetHub - မြန်မာနိုင်ငံ အကောင်းဆုံး အွန်လိုင်းကာစီနိုများ ၂၀၂၆ |",
    description: "မြန်မာကစားသမားများအတွက် လုံခြုံပြီး ယုံကြည်ရသော ကာစီနိုများကို ကျွမ်းကျင်သူများမှ သုံးသပ်ထားသည်",
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
};
