import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'my' ? 'တာဝန်ရှိသောကစားနည်း | MyanmarBetHub' : 'Responsible Gambling | MyanmarBetHub',
    description: locale === 'my'
      ? 'ကာစီနိုကစားရာတွင် တာဝန်ရှိသောကစားနည်းများနှင့် ကိုယ်ကိုယ်ကိုကာကွယ်ရန် နည်းလမ်းများ'
      : 'How to gamble responsibly and protect yourself from problem gambling',
  };
}

export default function ResponsibleGamblingPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isMy = locale === 'my';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-white mb-2">
        {isMy ? '⚠️ တာဝန်ရှိသောကစားနည်း' : '⚠️ Responsible Gambling'}
      </h1>
      <p className="text-gray-400 mb-10 text-lg">
        {isMy
          ? 'ကာစီနိုကစားခြင်းသည် ဖျော်ဖြေရေးအတွက်သာ ဖြစ်သင့်သည်။ ငွေကြေးဆုံးရှုံးနိုင်ချေ ရှိသောကြောင့် တာဝန်ရှိသောကစားနည်းကို အမြဲလိုက်နာပါ။'
          : 'Gambling should be entertainment only. Since it carries financial risk, always follow responsible gambling practices.'}
      </p>

      <div className="space-y-6">
        {(isMy ? [
          { icon: '💰', title: 'ဘတ်ဂျက်သတ်မှတ်ပါ', desc: 'ဆုံးရှုံးနိုင်သောငွေကြေးကိုသာ ကစားပါ။ မိမိ၏ ဘဏ္ဍာရေးကို မထိခိုက်နိုင်သောပမာဏသာ သတ်မှတ်ပါ။' },
          { icon: '⏰', title: 'အချိန်ကန့်သတ်ပါ', desc: 'ကစားချိန်ကို ကန့်သတ်ပြီး ပုံမှန်အချိန်မှတ်ပေးချက်ကို အသုံးပြုပါ။' },
          { icon: '🚫', title: 'ဆုံးရှုံးမှုကို ပြန်ဆပ်ဖို့ မကစားပါနဲ့', desc: 'ဆုံးရှုံးသောငွေကို ပြန်ရဖို့ ကြိုးစားကစားခြင်းသည် ပိုမိုဆုံးရှုံးနိုင်ချေ မြင့်မားစေသည်။' },
          { icon: '🧠', title: 'ကာစီနိုကို ဝင်ငွေရင်းမြစ်မမြင်ပါနဲ့', desc: 'ကာစီနိုဂိမ်းများသည် ဖျော်ဖြေရေးသာဖြစ်ပြီး ဝင်ငွေရသောနည်းလမ်းအဖြစ် မမှတ်ယူသင့်ပါ။' },
          { icon: '🔞', title: 'အသက် ၁၈ နှစ်အောက် တားမြစ်', desc: 'ကာစီနိုကစားခြင်းသည် အသက် ၁၈ နှစ်နှင့်အထက်သာ ခွင့်ပြုသည်။' },
        ] : [
          { icon: '💰', title: 'Set a Budget', desc: 'Only gamble with money you can afford to lose. Set a strict budget before you start playing.' },
          { icon: '⏰', title: 'Set Time Limits', desc: 'Limit your gambling sessions and use time alerts available on most platforms.' },
          { icon: '🚫', title: "Don't Chase Losses", desc: 'Trying to win back lost money leads to bigger losses. Accept losses and stop when you reach your limit.' },
          { icon: '🧠', title: "Don't See It as Income", desc: 'Casino games are entertainment, not a way to make money. The house always has an edge.' },
          { icon: '🔞', title: '18+ Only', desc: 'Online gambling is strictly for adults aged 18 and over.' },
        ]).map((tip) => (
          <div key={tip.title} className="bg-brand-card border border-gray-800 rounded-xl p-5 flex gap-4">
            <span className="text-3xl flex-shrink-0">{tip.icon}</span>
            <div>
              <h3 className="text-white font-bold mb-1">{tip.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Self-exclusion tools */}
      <div className="mt-10 bg-red-900/20 border border-red-800 rounded-xl p-6">
        <h2 className="text-red-400 font-bold text-xl mb-3">
          {isMy ? '🆘 အကူအညီရယူပါ' : '🆘 Get Help'}
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          {isMy
            ? 'မိမိသည်ဖြစ်စေ မိမိသိသောသူတစ်ဦးသည်ဖြစ်စေ ကာစီနိုကြောင့် ပြဿနာများကြုံတွေ့နေပါက ကျန်းမာရေးကျွမ်းကျင်သူ သို့မဟုတ် ယုံကြည်ရသောသူနှင့် ဆွေးနွေးပါ။ ကာစီနိုပလက်ဖောင်းများတွင် Self-Exclusion (မိမိကိုယ်ကိုတားမြစ်ခြင်း) ကိရိယာများကို အသုံးပြုနိုင်သည်။'
            : 'If you or someone you know is experiencing issues related to gambling, please speak with a healthcare professional or trusted person. Most casino platforms offer self-exclusion tools to help you take a break.'}
        </p>
      </div>
    </div>
  );
}
