import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getShanGuide, type Locale } from '@/data/shanGuides';

const baseUrl = 'https://myan66.com';

export default function ShanGuidePage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const guide = getShanGuide(slug);
  if (!guide) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title[locale],
        description: guide.description[locale],
        url: `${baseUrl}/${locale}/${guide.slug}`,
        inLanguage: locale === 'my' ? 'my-MM' : 'en',
        dateModified: '2026-06-24',
        author: {
          '@type': 'Organization',
          name: 'Myan66',
        },
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/${locale}/${guide.slug}`,
        },
        about: guide.primaryKeyword,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: locale === 'my' ? 'မူလစာမျက်နှာ' : 'Home',
            item: `${baseUrl}/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: guide.title[locale],
            item: `${baseUrl}/${locale}/${guide.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question[locale],
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer[locale],
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article>
        <section className="border-b border-gray-800 bg-brand-dark px-4 py-14">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link href={`/${locale}`} className="hover:text-brand-accent">
                {locale === 'my' ? 'မူလစာမျက်နှာ' : 'Home'}
              </Link>
              <span>/</span>
              <span className="text-gray-300">{guide.title[locale]}</span>
            </nav>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold text-brand-accent">
                {guide.primaryKeyword}
              </span>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
              {guide.title[locale]}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              {guide.intro[locale]}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={guide.ctaUrl}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="rounded-lg bg-brand-accent px-6 py-3 text-center font-bold text-black transition-colors hover:bg-yellow-400"
              >
                {guide.ctaLabel[locale]}
              </a>
              <Link
                href={`/${locale}`}
                className="rounded-lg border border-gray-600 px-6 py-3 text-center font-bold text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                {locale === 'my' ? 'Cluster စာမျက်နှာသို့' : 'Back to Cluster Hub'}
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.7fr_0.3fr]">
            <div className="space-y-8">
              <div className="rounded-xl border border-gray-800 bg-brand-card p-6">
                <h2 className="text-2xl font-black text-white">
                  {locale === 'my' ? 'Search intent အကျဉ်းချုပ်' : 'Search Intent Summary'}
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-400">{guide.intent[locale]}</p>
              </div>

              {guide.sections.map((section) => (
                <section key={section.heading.en} className="rounded-xl border border-gray-800 bg-brand-card p-6">
                  <h2 className="text-2xl font-black text-white">{section.heading[locale]}</h2>
                  <p className="mt-4 text-sm leading-7 text-gray-300">{section.body[locale]}</p>
                  <ul className="mt-5 space-y-3">
                    {section.bullets[locale].map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-gray-400">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section className="rounded-xl border border-gray-800 bg-brand-card p-6">
                <h2 className="text-2xl font-black text-white">
                  {locale === 'my' ? 'မေးလေ့ရှိသောမေးခွန်းများ' : 'Common Questions'}
                </h2>
                <div className="mt-5 space-y-5">
                  {guide.faqs.map((faq) => (
                    <div key={faq.question.en} className="border-t border-gray-800 pt-5 first:border-t-0 first:pt-0">
                      <h3 className="font-bold text-white">{faq.question[locale]}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-400">{faq.answer[locale]}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-gray-800 bg-brand-card p-5">
                <h2 className="text-lg font-bold text-white">
                  {locale === 'my' ? 'စစ်ဆေးရန် checklist' : 'Checklist'}
                </h2>
                <ol className="mt-4 space-y-3">
                  {guide.checklist[locale].map((item, index) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-gray-300">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-xs font-bold text-brand-accent">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-gray-800 bg-brand-card p-5">
                <h2 className="text-lg font-bold text-white">
                  {locale === 'my' ? 'ဆက်ဖတ်ရန်' : 'Related Guides'}
                </h2>
                <div className="mt-4 space-y-3">
                  {guide.related.map((relatedSlug) => {
                    const related = getShanGuide(relatedSlug);
                    if (!related) return null;
                    return (
                      <Link
                        key={related.slug}
                        href={`/${locale}/${related.slug}`}
                        className="block rounded-lg border border-gray-800 bg-brand-dark px-4 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-brand-accent hover:text-brand-accent"
                      >
                        {related.title[locale]}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-red-900 bg-red-950/20 p-5">
                <h2 className="text-lg font-bold text-red-300">18+</h2>
                <p className="mt-2 text-xs leading-6 text-red-200/80">
                  {locale === 'my'
                    ? 'ငွေကြေးဆုံးရှုံးနိုင်ချေရှိသည်။ အသက် 18 နှစ်အောက် မကစားရ။'
                    : 'Online gaming carries financial risk. 18+ only.'}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
