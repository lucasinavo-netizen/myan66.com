import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.onlineCasinos' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/online-casinos-myanmar`,
      languages: { my: '/my/online-casinos-myanmar', en: '/en/online-casinos-myanmar' },
    },
  };
}

export default async function OnlineCasinosPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'pages.onlineCasinos' });

  const faqs =
    locale === 'my'
      ? [
          {
            q: 'မြန်မာနိုင်ငံတွင် အွန်လိုင်းကာစီနိုကစားခြင်း တရားဝင်ပါသလား?',
            a: 'မြန်မာနိုင်ငံတွင် ပြည်တွင်းကာစီနိုများ တရားဝင်ကန့်သတ်ထားသော်လည်း ပြည်ပအင်တာနက်ကာစီနိုများကို ကစားသမားများ ကျယ်ကျယ်ပြန့်ပြန့် အသုံးပြုနေကြသည်။',
          },
          {
            q: 'KBZPay ဖြင့် ကာစီနိုသွင်းငွေသွင်းနိုင်ပါသလား?',
            a: 'ဟုတ်ကဲ့၊ ကျွန်ုပ်တို့ အကြံပြုသောကာစီနိုအများစုတွင် KBZPay ဖြင့် ငွေသွင်းနိုင်သည်။',
          },
          {
            q: 'အနည်းဆုံး မည်မျှ ငွေသွင်းနိုင်သလဲ?',
            a: 'ပလက်ဖောင်းပေါ် မူတည်၍ 2,000 မှ 5,000 MMK အထိ ကွာခြားနိုင်သည်။',
          },
        ]
      : [
          {
            q: 'Is online casino gambling legal in Myanmar?',
            a: 'While domestic casinos are regulated, many Myanmar players use licensed offshore platforms. We only recommend licensed and regulated operators.',
          },
          {
            q: 'Can I deposit with KBZPay?',
            a: 'Yes, most of our recommended casinos support KBZPay deposits for Myanmar players.',
          },
          {
            q: 'What is the minimum deposit?',
            a: 'Minimum deposits range from 2,000 to 5,000 MMK depending on the platform.',
          },
        ];

  return (
    <CasinoListPage
      locale={locale}
      title={t('title')}
      description={t('description')}
      intro={
        locale === 'my'
          ? 'မြန်မာနိုင်ငံတွင် ကိုယ်နှင့်သင့်တော်သောကာစီနိုကို ရှာဖွေရာတွင် ဘောနပ်စ်၊ ငွေပေးချေမှုနည်းလမ်း၊ ဂိမ်းရွေးချယ်မှုနှင့် ငွေထုတ်မြန်နှုန်းတို့ကို ထည့်သွင်းစဉ်းစားသင့်သည်။ ကျွန်ုပ်တို့ ဤပလက်ဖောင်းများကို မြန်မာကစားသမားများအတွက် အသင့်တော်ဆုံး စစ်ဆေးသုံးသပ်ထားသည်။'
          : 'Finding the right online casino in Myanmar involves considering bonuses, payment methods, game selection, and withdrawal speeds. We\'ve reviewed these platforms specifically for Myanmar players to help you make the best choice.'
      }
      casinos={casinos}
      faqs={faqs}
    />
  );
}
