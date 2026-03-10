import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'my'
      ? 'ကာစီနိုဘောနပ်စ်စည်းကမ်းများ ရှင်းလင်းချက် ၂၀၂၆ | MyanmarBetHub'
      : 'Casino Bonus Terms Explained 2026 | MyanmarBetHub',
    description: locale === 'my'
      ? 'Wagering Requirement၊ Max Withdrawal၊ Expiry Date နှင့် ဘောနပ်စ်စည်းကမ်းများကို မြန်မာဘာသာဖြင့် ရှင်းလင်းချက်'
      : 'Clear explanation of casino bonus terms including wagering requirements, max withdrawal, and expiry dates',
  };
}

export default function BonusTermsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isMy = locale === 'my';

  const terms = isMy ? [
    { term: 'Wagering Requirement (x)', title: 'ထပ်ကစားရမည့်အကြိမ်', desc: 'ဘောနပ်စ်ငွေကို ထုတ်ယူနိုင်ရန် မည်မျှကြိမ် ပြန်ကစားရမည်ဆိုသောလိုအပ်ချက်ဖြစ်သည်။ x30 ဆိုလျှင် ဘောနပ်စ် 10,000 ကို 300,000 MMK ကစားမှ ထုတ်နိုင်သည်။', example: 'ဘောနပ်စ် 10,000 MMK × 30 = 300,000 MMK ကစားရမည်' },
    { term: 'Max Withdrawal', title: 'ထုတ်ယူနိုင်သောအများဆုံး', desc: 'ဘောနပ်စ်မှ ရရှိသောအမြတ်မှ ထုတ်ယူနိုင်သောအများဆုံးပမာဏ။ ဥပမာ max withdrawal 50,000 MMK ဆိုလျှင် ထို့ထက်မပိုထုတ်နိုင်ပါ။', example: 'Max 50,000 MMK = ထို့ထက်ပိုထုတ်ယူ၍မရ' },
    { term: 'Bonus Expiry', title: 'ဘောနပ်စ်သုံးစွဲနိုင်သောသတ်မှတ်ချိန်', desc: 'ဘောနပ်စ်ကို မည်မျှကာလအတွင်း သုံးစွဲ/Wagering ဖြည့်ဆည်းရမည်ဆိုသောချိန်ကန့်သတ်ချက်ဖြစ်သည်။', example: '7 ရက်အတွင်း Wagering မဖြည့်ဆည်းနိုင်လျှင် ဘောနပ်စ်ပျောက်သည်' },
    { term: 'Min. Deposit', title: 'ဘောနပ်စ်ရရှိရန် အနည်းဆုံးသွင်းငွေ', desc: 'ဘောနပ်စ်ကို အသက်သွင်းရန် ဤပမာဏ သို့မဟုတ် ယင်းထက်ပို သွင်းငွေသွင်းရမည်။', example: 'Min 5,000 MMK မသွင်းမချင်း ဘောနပ်စ်မရ' },
    { term: 'Free Spins', title: 'အခမဲ့ Spin ကစားခွင့်', desc: 'Slot ဂိမ်းများတွင် ငွေမဆောင်ဘဲ ကစားနိုင်သော Spin ကစားခွင့်ဖြစ်သည်။ ရရှိသောငွေကြေးကို Wagering ဖြင့် ထုတ်ယူနိုင်သည်။', example: '20 Free Spins on Book of Dead' },
  ] : [
    { term: 'Wagering Requirement (x)', title: 'Times You Must Bet', desc: 'The number of times you must bet the bonus amount before withdrawing. A 30x requirement on a 10,000 MMK bonus means you must wager 300,000 MMK total.', example: 'Bonus 10,000 MMK × 30 = Must wager 300,000 MMK' },
    { term: 'Max Withdrawal', title: 'Maximum You Can Cash Out', desc: 'The maximum amount you can withdraw from bonus winnings. Even if you win more, you can only take out up to this limit.', example: 'Max 50,000 MMK = Cannot withdraw more than this' },
    { term: 'Bonus Expiry', title: 'Time Limit to Use Bonus', desc: 'The period within which you must meet wagering requirements. After expiry, unused bonus and winnings are forfeited.', example: 'Must complete wagering within 7 days or bonus is lost' },
    { term: 'Min. Deposit', title: 'Minimum Deposit to Claim Bonus', desc: 'You must deposit at least this amount to activate the bonus offer.', example: 'Must deposit min 5,000 MMK to unlock bonus' },
    { term: 'Free Spins', title: 'Free Slot Spins', desc: 'Free plays on slot games with no money required. Winnings from free spins are usually subject to wagering requirements.', example: '20 Free Spins on Book of Dead' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-3">
        {isMy ? 'ကာစီနိုဘောနပ်စ် စည်းကမ်းများ ရှင်းလင်းချက်' : 'Casino Bonus Terms Explained'}
      </h1>
      <p className="text-gray-400 mb-10 leading-relaxed">
        {isMy
          ? 'ဘောနပ်စ်ရရှိပြီးနောက် ငွေမထုတ်နိုင်ဟု ဆိုသောကာစီနိုပြဿနာများကို ကြိုတင်သိနားလည်ရန် ဤစည်းကမ်းများကို နားလည်ထားသင့်သည်။'
          : 'Understanding bonus terms prevents the common frustration of being unable to withdraw winnings. Read this guide before claiming any casino bonus.'}
      </p>

      <div className="space-y-6">
        {terms.map((item) => (
          <div key={item.term} className="bg-brand-card border border-gray-800 rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-white font-bold text-lg">{item.title}</h2>
              <span className="text-brand-accent text-sm font-mono bg-brand-dark px-2 py-1 rounded whitespace-nowrap">
                {item.term}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>
            <div className="bg-brand-dark rounded-lg px-4 py-2 text-xs text-gray-500 border-l-2 border-brand-accent">
              💡 {item.example}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
