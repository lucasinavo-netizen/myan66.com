import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { isLocale, locales } from '@/lib/i18n';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  if (!isLocale(locale)) return {};
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
  if (!isLocale(locale)) notFound();
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
        'name': 'Myan66',
        'url': baseUrl,
        'logo': {
          '@type': 'ImageObject',
          'url': `${baseUrl}/og-image.png`,
          'width': 1200,
          'height': 630,
        },
        'description':
          locale === 'my'
            ? 'Shan Koe Mee APK, M9 login နှင့် Joy Shan Koe Mee လမ်းညွှန်'
            : 'Shan Koe Mee APK, M9 login and Joy Shan Koe Mee guide',
        'knowsLanguage': ['my', 'en'],
        'areaServed': { '@type': 'Country', 'name': 'Myanmar' },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        'url': baseUrl,
        'name': 'Myan66',
        'publisher': { '@id': `${baseUrl}/#organization` },
        'inLanguage': langCode,
      },
    ],
  };

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B0FZNEVMTT"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B0FZNEVMTT');
        `}
      </Script>
      <Script id="affiliate-click-tracking" strategy="afterInteractive">
        {`
          (function () {
            if (window.__affiliateClickTrackingInstalled) return;
            window.__affiliateClickTrackingInstalled = true;
            function textOf(link) {
              return (link.textContent || '').replace(/\\s+/g, ' ').trim().slice(0, 120);
            }
            function placementOf(link) {
              if (link.closest('header, nav')) return 'nav';
              if (link.closest('footer')) return 'footer';
              if (link.closest('article')) return 'article_cta';
              var marker = [
                link.getAttribute('class'),
                link.closest('[class]') && link.closest('[class]').getAttribute('class')
              ].filter(Boolean).join(' ').toLowerCase();
              if (marker.indexOf('hero') !== -1) return 'hero';
              if (marker.indexOf('card') !== -1 || marker.indexOf('grid') !== -1) return 'card';
              if (marker.indexOf('cta') !== -1 || marker.indexOf('button') !== -1) return 'cta';
              return 'content';
            }
            document.addEventListener('click', function (event) {
              var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
              if (!link) return;
              var rawHref = link.getAttribute('href') || '';
              var url;
              try { url = new URL(rawHref, window.location.href); } catch (error) { return; }
              if (url.pathname.indexOf('/go/') !== 0) return;
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'affiliate_click', {
                  event_category: 'affiliate',
                  event_label: url.pathname,
                  go_path: url.pathname,
                  link_url: url.href,
                  link_text: textOf(link),
                  page_location: window.location.href,
                  page_path: window.location.pathname,
                  site: window.location.hostname.replace(/^www\\./, ''),
                  placement: placementOf(link),
                  transport_type: 'beacon'
                });
              }
            }, true);
          })();
        `}
      </Script>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <NextIntlClientProvider messages={messages}>
        <div lang={langCode}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </NextIntlClientProvider>
    </>
  );
}
