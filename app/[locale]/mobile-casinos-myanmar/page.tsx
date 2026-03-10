import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.mobileCasino' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/mobile-casinos-myanmar`,
      languages: { my: '/my/mobile-casinos-myanmar', en: '/en/mobile-casinos-myanmar' },
    },
  };
}

export default async function MobileCasinosPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pages.mobileCasino' });
  const mobileCasinos = casinos.filter(c =>
    c.features.some(f => f.toLowerCase().includes('mobile'))
  );

  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'မြန်မာကစားသမားများ၏ ၉၀% ကျော်သည် မိုဘိုင်းဖုန်းဖြင့် ကာစီနိုကစားကြသည်။ ကျွန်ုပ်တို့ ရွေးချယ်ထားသောပလက်ဖောင်းများသည် Android နှင့် iOS နှစ်မျိုးလုံးတွင် အလွယ်တကူ ကစားနိုင်ပြီး App သုတ်ချပ်ရင်လည်း မိုဘိုင်း Browser မှတဆင့်လည်း ကောင်းမွန်စွာ ကစားနိုင်သည်။'
          : 'Over 90% of Myanmar casino players play on mobile devices. Our recommended platforms work seamlessly on both Android and iOS — whether through a dedicated app or mobile browser.'
      }
      casinos={mobileCasinos}
      faqs={
        locale === 'my'
          ? [
              { q: 'App သုတ်ချပ်ရမည်လား?', a: 'မဖြစ်မနေ မလိုပါ။ ပလက်ဖောင်းများသည် မိုဘိုင်းဘရောင်ဇာမှတဆင့်လည်း ကောင်းမွန်စွာ ကစားနိုင်သည်။' },
              { q: 'iOS iPhone ဖြင့် ကာစီနို App သုတ်ချပ်နိုင်သလား?', a: 'ကာစီနိုအချို့တွင် iOS App ရှိပြီး အချို့တွင် Mobile Browser ဖြင့်သာ ကစားနိုင်သည်။' },
            ]
          : [
              { q: 'Do I need to download an app?', a: 'Not necessarily. All platforms also work through mobile browsers without any download required.' },
              { q: 'Can I use a casino app on iPhone?', a: 'Some casinos offer iOS apps while others are optimized for mobile browser play.' },
            ]
      }
    />
  );
}
