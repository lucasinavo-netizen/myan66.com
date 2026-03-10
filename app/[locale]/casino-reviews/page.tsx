import type { Metadata } from 'next';
import Link from 'next/link';
import { casinos } from '@/data/casinos';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'my' ? 'ကာစီနိုသုံးသပ်ချက်များ ၂၀၂၆ | MyanmarBetHub' : 'Casino Reviews 2026 | MyanmarBetHub',
    description: locale === 'my'
      ? 'မြန်မာကာစီနိုများ၏ အသေးစိတ်သုံးသပ်ချက်များ — ဘောနပ်စ်၊ ကစားနည်းနှင့် ငွေပေးချေမှု'
      : 'In-depth reviews of Myanmar online casinos — bonuses, games, and payment methods',
    alternates: {
      canonical: `/${locale}/casino-reviews`,
      languages: { my: '/my/casino-reviews', en: '/en/casino-reviews' },
    },
  };
}

export default function CasinoReviewsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-primary/20 to-brand-dark py-14 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            {locale === 'my' ? 'ကာစီနိုသုံးသပ်ချက်များ' : 'Casino Reviews'}
          </h1>
          <p className="text-gray-300 text-lg">
            {locale === 'my'
              ? 'မြန်မာကစားသမားများအတွက် အသေးစိတ်သုံးသပ်ချက်များ'
              : 'In-depth, expert reviews for Myanmar players'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {casinos.map((casino, i) => (
            <Link
              key={casino.id}
              href={`/${locale}/casino-reviews/${casino.id}`}
              className="bg-brand-card border border-gray-800 hover:border-brand-accent/50 rounded-xl p-5 flex items-center gap-4 group transition-all"
            >
              <div className="w-14 h-14 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-brand-accent font-bold text-xs text-center leading-tight px-1">
                  {casino.name}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold group-hover:text-brand-accent transition-colors">
                    {casino.name}
                  </h3>
                  <span className="text-brand-accent font-bold">⭐ {casino.rating}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{casino.bonus}</p>
                <p className="text-gray-500 text-xs mt-1">
                  {locale === 'my' ? 'ငွေထုတ်' : 'Withdrawal'}: {casino.withdrawalSpeed}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-600 group-hover:text-brand-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
