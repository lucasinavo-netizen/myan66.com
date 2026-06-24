import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ShanGuidePage from '@/components/ShanGuidePage';
import { getShanGuide } from '@/data/shanGuides';
import { isLocale } from '@/lib/i18n';

const slug = 'm9-shan-koe-mee-login';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) return {};
  const guide = getShanGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title[locale],
    description: guide.description[locale],
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: { my: `/my/${slug}`, en: `/en/${slug}` },
    },
  };
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  return <ShanGuidePage locale={locale} slug={slug} />;
}
