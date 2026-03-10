import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.liveCasino' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/live-casino-sites-myanmar`,
      languages: { my: '/my/live-casino-sites-myanmar', en: '/en/live-casino-sites-myanmar' },
    },
  };
}

export default async function LiveCasinoPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'pages.liveCasino' });
  const liveCasinos = casinos.filter(c => c.features.includes('Live Casino'));

  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'တိုက်ရိုက်ကာစီနိုသည် ဒီလာတစ်ဦးနှင့် မျက်နှာချင်းဆိုင် ကစားသကဲ့သို့ ခံစားနိုင်သောကစားနည်းတစ်မျိုးဖြစ်သည်။ Baccarat၊ Roulette၊ Blackjack နှင့် Dragon Tiger ကဲ့သို့သောဂိမ်းများကို အွန်လိုင်းမှတဆင့် Live Stream ဖြင့် ကစားနိုင်သည်။'
          : 'Live casino brings the authentic casino atmosphere directly to your screen with real professional dealers. Play Baccarat, Roulette, Blackjack, and Dragon Tiger via live stream from the comfort of your home.'
      }
      casinos={liveCasinos}
      faqs={
        locale === 'my'
          ? [
              { q: 'တိုက်ရိုက်ကာစီနိုတွင် မည်သည့်ဂိမ်းများ ကစားနိုင်သလဲ?', a: 'Baccarat၊ Blackjack၊ Roulette၊ Dragon Tiger နှင့် Sic Bo တို့ကို တွေ့ရှိနိုင်သည်။' },
              { q: 'မိုဘိုင်းဖြင့် တိုက်ရိုက်ကာစီနို ကစားနိုင်သလား?', a: 'ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့ အကြံပြုသောပလက်ဖောင်းများသည် မိုဘိုင်းဖြင့် Live Casino ကစားနိုင်သည်။' },
            ]
          : [
              { q: 'What games are available in live casino?', a: 'You can find Baccarat, Blackjack, Roulette, Dragon Tiger, and Sic Bo among others.' },
              { q: 'Can I play live casino on mobile?', a: 'Yes, all our recommended platforms support mobile live casino play.' },
            ]
      }
    />
  );
}
