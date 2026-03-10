import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { getFastWithdrawalCasinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.fastWithdrawal' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/fast-withdrawal-casinos-myanmar`,
      languages: {
        my: '/my/fast-withdrawal-casinos-myanmar',
        en: '/en/fast-withdrawal-casinos-myanmar',
      },
    },
  };
}

export default async function FastWithdrawalPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'pages.fastWithdrawal' });
  const fastCasinos = getFastWithdrawalCasinos();

  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'ငွေထုတ်ရာတွင် မြန်ဆန်မှုသည် ကာစီနိုတစ်ခုကို ရွေးချယ်ရာတွင် အရေးကြီးသောအချက်တစ်ခုဖြစ်သည်။ ကျွန်ုပ်တို့ ရွေးချယ်ထားသောပလက်ဖောင်းများသည် ၃၀ မိနစ်မှ ၂ နာရီအတွင်း ငွေထုတ်ပေးနိုင်ကြသည်။'
          : 'Withdrawal speed is one of the most important factors when choosing an online casino. Our selected platforms process withdrawals in 30 minutes to 2 hours, ensuring you get your winnings quickly.'
      }
      casinos={fastCasinos}
      faqs={
        locale === 'my'
          ? [
              { q: 'KBZPay ဖြင့် ငွေထုတ်ရာတွင် မည်မျှကြာသလဲ?', a: 'KBZPay ဖြင့် ငွေထုတ်ခြင်းသည် ပုံမှန်အားဖြင့် ၃၀ မိနစ်မှ ၁ နာရီအတွင်း ပြီးမြောက်သည်။' },
              { q: 'USDT ဖြင့် ငွေထုတ်နိုင်ပါသလား?', a: 'ဟုတ်ကဲ့၊ ကာစီနိုအချို့တွင် USDT ဖြင့် ငွေထုတ်နိုင်ပြီး ယင်းသည် ပိုမိုမြန်ဆန်သောနည်းလမ်းတစ်ခုဖြစ်သည်။' },
            ]
          : [
              { q: 'How fast are KBZPay withdrawals?', a: 'KBZPay withdrawals are typically processed within 30 minutes to 1 hour.' },
              { q: 'Can I withdraw with USDT?', a: 'Yes, some casinos support USDT withdrawals which can be even faster.' },
            ]
      }
    />
  );
}
