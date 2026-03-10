import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.trusted' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/trusted-casino-sites-myanmar`,
      languages: { my: '/my/trusted-casino-sites-myanmar', en: '/en/trusted-casino-sites-myanmar' },
    },
  };
}

export default async function TrustedCasinosPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'pages.trusted' });
  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'ကျွန်ုပ်တို့ ဤစာရင်းတွင် ပါဝင်သောကာစီနိုများသည် တရားဝင်လိုင်စင်ရရှိထားပြီး စစ်ဆေးအတည်ပြုထားသောပလက်ဖောင်းများသာဖြစ်သည်။ PAGCOR၊ MGA သို့မဟုတ် Curaçao eGaming ကဲ့သို့သော အသိအမှတ်ပြုအဖွဲ့အစည်းများမှ လိုင်စင်ရရှိထားသည်။'
          : 'All casinos on this list are licensed and verified platforms only. They hold licenses from recognized authorities such as PAGCOR, MGA, or Curaçao eGaming, ensuring fair play and player protection.'
      }
      casinos={casinos}
      faqs={
        locale === 'my'
          ? [
              { q: 'လိုင်စင်ရကာစီနိုကို ဘယ်လိုမှန်းသိနိုင်သလဲ?', a: 'ဝက်ဘ်ဆိုက်အောက်ခြေတွင် လိုင်စင်နံပါတ်နှင့် အာဏာပိုင်အမည်ကို ပြသထားသင့်သည်။' },
              { q: 'မြန်မာကစားသမားများ ကာသြိုလာ ကာစီနိုများ သုံးနိုင်သလား?', a: 'ဟုတ်ကဲ့၊ Curaçao eGaming လိုင်စင်ရ ကာစီနိုများသည် မြန်မာကစားသမားများကို ဝန်ဆောင်မှုပေးနိုင်သည်။' },
            ]
          : [
              { q: 'How can I tell if a casino is licensed?', a: 'A licensed casino will display their license number and issuing authority at the bottom of their website.' },
              { q: 'Can Myanmar players use Curaçao casinos?', a: 'Yes, Curaçao eGaming licensed casinos can legally serve Myanmar players.' },
            ]
      }
    />
  );
}
