import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { getTopCasinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.bestCasinos' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/best-online-casinos-myanmar`,
      languages: { my: '/my/best-online-casinos-myanmar', en: '/en/best-online-casinos-myanmar' },
    },
  };
}

export default async function BestCasinosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pages.bestCasinos' });
  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'အောက်ပါကာစီနိုများသည် လုံခြုံရေး၊ ဘောနပ်စ်အရွယ်အစား၊ ကစားနည်းပေါင်းများ၊ ဖောက်သည်ဝန်ဆောင်မှုနှင့် ငွေပေးချေမှုမြန်နှုန်းတို့အပေါ် အခြေခံ၍ အဆင့်သတ်မှတ်ထားသောမြန်မာနိုင်ငံ ထိပ်တန်းကာစီနိုများဖြစ်သည်။'
          : 'The following casinos are ranked based on security, bonus size, game variety, customer service, and payment speed — the top-rated online casinos for Myanmar players.'
      }
      casinos={getTopCasinos(6)}
    />
  );
}
