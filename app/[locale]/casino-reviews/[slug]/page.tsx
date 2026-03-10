import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { casinos, getCasinoById } from '@/data/casinos';

export async function generateStaticParams() {
  const locales = ['my', 'en'];
  return locales.flatMap(locale =>
    casinos.map(casino => ({ locale, slug: casino.id }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const casino = getCasinoById(slug);
  if (!casino) return {};
  return {
    title: locale === 'my'
      ? `${casino.name} သုံးသပ်ချက် ၂၀၂၆ | MyanmarBetHub`
      : `${casino.name} Review 2026 | MyanmarBetHub`,
    description: locale === 'my'
      ? `${casino.name} ၏ ဘောနပ်စ်၊ ကစားနည်းများနှင့် ငွေပေးချေမှုစနစ်ကို အသေးစိတ်စစ်ဆေးသုံးသပ်ချက်`
      : `In-depth review of ${casino.name} — bonuses, games, payment methods, and more for Myanmar players`,
  };
}

export default function CasinoReviewPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const casino = getCasinoById(slug);
  if (!casino) notFound();

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(casino.rating));

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link href={`/${locale}`} className="hover:text-brand-accent">
          {locale === 'my' ? 'မူလစာမျက်နှာ' : 'Home'}
        </Link>
        <span>/</span>
        <Link href={`/${locale}/casino-reviews`} className="hover:text-brand-accent">
          {locale === 'my' ? 'သုံးသပ်ချက်' : 'Reviews'}
        </Link>
        <span>/</span>
        <span className="text-white">{casino.name}</span>
      </nav>

      {/* Casino Header */}
      <div className="bg-brand-card border border-gray-800 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-24 h-24 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-brand-accent font-bold text-sm text-center leading-tight px-2">
              {casino.name}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-black text-white mb-2">
              {casino.name} {locale === 'my' ? 'သုံးသပ်ချက်' : 'Review'}
            </h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {stars.map((filled, i) => (
                  <span key={i} className={filled ? 'text-brand-accent' : 'text-gray-600'}>★</span>
                ))}
              </div>
              <span className="text-white font-bold text-xl">{casino.rating}</span>
              <span className="text-gray-500 text-sm">/ 5.0</span>
            </div>
            <div className="bg-brand-primary/30 border border-brand-primary rounded-lg p-3 inline-block">
              <p className="text-brand-accent font-bold">{casino.bonus}</p>
              <p className="text-gray-300 text-sm">{casino.bonusAmount}</p>
            </div>
          </div>
          <a
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full md:w-auto bg-brand-accent hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl text-center transition-all"
          >
            {locale === 'my' ? 'ယခုကစားပါ' : 'Play Now'}
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: locale === 'my' ? 'တည်ထောင်သည့်နှစ်' : 'Established', value: casino.established.toString() },
          { label: locale === 'my' ? 'လိုင်စင်' : 'License', value: casino.license },
          { label: locale === 'my' ? 'ငွေထုတ်အချိန်' : 'Withdrawal', value: casino.withdrawalSpeed },
          { label: locale === 'my' ? 'အနည်းဆုံးသွင်းငွေ' : 'Min. Deposit', value: casino.minDeposit },
        ].map((stat) => (
          <div key={stat.label} className="bg-brand-card border border-gray-800 rounded-lg p-4 text-center">
            <p className="text-gray-500 text-xs mb-1">{stat.label}</p>
            <p className="text-white font-bold text-sm">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-900/20 border border-green-800 rounded-xl p-5">
          <h3 className="text-green-400 font-bold mb-3">
            ✅ {locale === 'my' ? 'အားသာချက်များ' : 'Pros'}
          </h3>
          <ul className="space-y-2">
            {casino.pros.map((pro) => (
              <li key={pro} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-green-400 mt-0.5">+</span> {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-900/20 border border-red-800 rounded-xl p-5">
          <h3 className="text-red-400 font-bold mb-3">
            ❌ {locale === 'my' ? 'အားနည်းချက်များ' : 'Cons'}
          </h3>
          <ul className="space-y-2">
            {casino.cons.map((con) => (
              <li key={con} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-red-400 mt-0.5">-</span> {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features & Payments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-brand-card border border-gray-800 rounded-xl p-5">
          <h3 className="text-white font-bold mb-3">
            🎮 {locale === 'my' ? 'ကစားနည်းများ' : 'Features'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {casino.features.map((f) => (
              <span key={f} className="bg-brand-primary text-white text-xs px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
        </div>
        <div className="bg-brand-card border border-gray-800 rounded-xl p-5">
          <h3 className="text-white font-bold mb-3">
            💳 {locale === 'my' ? 'ငွေပေးချေမှုနည်းလမ်း' : 'Payment Methods'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {casino.paymentMethods.map((p) => (
              <span key={p} className="bg-brand-dark border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 border border-brand-primary rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {locale === 'my' ? `${casino.name} တွင် ကစားမည်လား?` : `Ready to play at ${casino.name}?`}
        </h2>
        <p className="text-gray-400 mb-4">{casino.bonus} — {casino.bonusAmount}</p>
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-black font-bold py-3.5 px-10 rounded-xl text-lg transition-all hover:scale-105"
        >
          {locale === 'my' ? 'ယခု မှတ်ပုံတင်ပါ →' : 'Sign Up Now →'}
        </a>
        <p className="text-gray-600 text-xs mt-3">
          {locale === 'my' ? '18+ သာ | တာဝန်ရှိသောကစားနည်း' : '18+ only | Gamble Responsibly'}
        </p>
      </div>
    </div>
  );
}
