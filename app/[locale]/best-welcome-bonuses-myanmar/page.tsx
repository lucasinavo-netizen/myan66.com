import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CasinoListPage from '@/components/CasinoListPage';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'pages.bonuses' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/best-welcome-bonuses-myanmar`,
      languages: { my: '/my/best-welcome-bonuses-myanmar', en: '/en/best-welcome-bonuses-myanmar' },
    },
  };
}

export default async function BonusesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'pages.bonuses' });
  const bonusCasinos = [...casinos].sort((a, b) => {
    const aAmt = parseInt(a.bonusAmount.replace(/[^0-9]/g, ''));
    const bAmt = parseInt(b.bonusAmount.replace(/[^0-9]/g, ''));
    return bAmt - aAmt;
  });

  return (
    <>
      <CasinoListPage
        locale={locale}
        title={t('title')}
        description={t('description')}
        intro={
          locale === 'my'
            ? 'ဘောနပ်စ်ရရှိပြီးနောက် ငွေထုတ်ယူနိုင်ရန် Wagering Requirement (ထပ်ကစားရမည့်အကြိမ်) ကို နားလည်ထားသင့်သည်။ ကျွန်ုပ်တို့ ဤပလက်ဖောင်းများ၏ ဘောနပ်စ်စည်းကမ်းများကို ရှင်းလင်းစွာ ဖော်ပြထားသည်။'
            : 'Before claiming a bonus, it\'s important to understand wagering requirements. We clearly outline the bonus terms for each platform so you know exactly what to expect before signing up.'
        }
        casinos={bonusCasinos}
        faqs={
          locale === 'my'
            ? [
                { q: 'Wagering Requirement ဆိုသည်မှာ ဘာလဲ?', a: 'ဘောနပ်စ်ငွေကို ထုတ်ယူနိုင်ရန် သတ်မှတ်ထားသောအကြိမ်အရေအတွက် ပြန်လည်ကစားရမည့် လိုအပ်ချက်ဖြစ်သည်။ ဥပမာ x30 ဆိုလျှင် ဘောနပ်စ် 10,000 MMK ကို 300,000 MMK ကစားမှသာ ထုတ်ယူနိုင်သည်။' },
                { q: 'Free Spins ဆိုသည်မှာ?', a: 'Slot ဂိမ်းများတွင် အခမဲ့ Spin ကစားနိုင်ခွင့်ဖြစ်ပြီး ရရှိသောငွေကြေးကို Wagering ဖြင့် ထုတ်ယူနိုင်သည်။' },
              ]
            : [
                { q: 'What is a wagering requirement?', a: 'It\'s the number of times you must bet the bonus amount before you can withdraw. For example, a 30x requirement on a 10,000 MMK bonus means you must wager 300,000 MMK total.' },
                { q: 'What are Free Spins?', a: 'Free spins let you spin slot games for free. Winnings are subject to wagering requirements before withdrawal.' },
              ]
        }
      />

      {/* Bonus Explanation Section */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-brand-card border border-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            {locale === 'my' ? '⚠️ ဘောနပ်စ် ကြိုတင်သိထားသင့်သောအချက်များ' : '⚠️ Important Bonus Terms to Know'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              { term: 'Wagering / Rollover', desc: locale === 'my' ? 'ဘောနပ်စ်ကို ငွေထုတ်ရန် ကစားရမည့်အကြိမ်' : 'Times you must bet before withdrawal' },
              { term: 'Min. Deposit', desc: locale === 'my' ? 'ဘောနပ်စ်ရရှိရန် အနည်းဆုံးသွင်းငွေ' : 'Minimum deposit to claim bonus' },
              { term: 'Expiry Date', desc: locale === 'my' ? 'ဘောနပ်စ်သုံးစွဲနိုင်သောသတ်မှတ်ချိန်' : 'Time limit to use the bonus' },
              { term: 'Max Withdrawal', desc: locale === 'my' ? 'ဘောနပ်စ်မှ ထုတ်ယူနိုင်သောအများဆုံးပမာဏ' : 'Maximum you can withdraw from bonus winnings' },
            ].map((item) => (
              <div key={item.term} className="flex gap-3">
                <span className="text-brand-accent font-bold whitespace-nowrap">{item.term}:</span>
                <span className="text-gray-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
