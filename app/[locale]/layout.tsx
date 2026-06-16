import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const locales = ['my', 'en'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hero' });
  return {
    title: t('title'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  const baseUrl = 'https://myan66.com';
  const langCode = locale === 'my' ? 'my-MM' : 'en';

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        'name': 'MyanmarBetHub',
        'url': baseUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/og-image.png`,
          'width': 1200,
          'height': 630,
        },
        'description':
          locale === 'my'
            ? 'မြန်မာနိုင်ငံ အကောင်းဆုံး အွန်လိုင်းကာစီနိုများ ၂၀၂၆'
            : 'Best online casinos in Myanmar 2026',
        'knowsLanguage': ['my', 'en'],
        'areaServed': { '@type': 'Country', 'name': 'Myanmar' },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'MyanmarBetHub',
        'publisher': { '@id': `${baseUrl}/#organization` },
        'inLanguage': langCode,
      },
    ],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
