import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import CasinoCard from '@/components/CasinoCard';
import { casinos } from '@/data/casinos';
import type { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'hero' });
  return {
    title:
      locale === 'my'
        ? 'MyanmarBetHub - မြန်မာနိုင်ငံ အကောင်းဆုံး အွန်လိုင်းကာစီနိုများ ၂၀၂၆'
        : 'MyanmarBetHub - Best Online Casinos in Myanmar 2026',
    description:
      locale === 'my'
        ? 'မြန်မာကစားသမားများအတွက် လုံခြုံပြီး ယုံကြည်ရသော ကာစီနိုများကို ကျွမ်းကျင်သူများမှ သုံးသပ်ထားသည်'
        : 'Expert-reviewed safe and trusted online casinos for Myanmar players. Compare bonuses, payment methods, and more.',
    alternates: {
      canonical: `/${locale}`,
      languages: {
        my: '/my',
        en: '/en',
      },
    },
    openGraph: {
      title: t('title'),
      description:
        locale === 'my'
          ? 'မြန်မာကစားသမားများအတွက် အကောင်းဆုံး ကာစီနိုများ'
          : 'Best online casinos for Myanmar players',
      locale: locale,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'myan66.com' }],
    },
  };
}

function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-primary/30 to-brand-dark py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-brand-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand-accent/30">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          ✓ {t('badge')}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <Link
          href={`/${locale}/online-casinos-myanmar`}
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-400 text-black font-bold py-3.5 px-8 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-brand-accent/30"
        >
          {t('cta')} →
        </Link>
      </div>
    </section>
  );
}

function TrustBadges({ locale }: { locale: string }) {
  const items = locale === 'my'
    ? [
        { icon: '🔒', title: 'လုံခြုံရေး စစ်ဆေးပြီး', desc: 'SSL ကုဒ်ဝှက်နှင့် ခိုင်မာသောလုံခြုံရေး' },
        { icon: '⚡', title: 'မြန်ဆန်သောငွေထုတ်', desc: '၃၀ မိနစ် - ၂ နာရီအတွင်း' },
        { icon: '🎁', title: 'မြန်မာ ဘောနပ်စ်များ', desc: 'MMK ဖြင့် ဘောနပ်စ်ရရှိနိုင်' },
        { icon: '📱', title: 'မိုဘိုင်း အပြည့်အဝ', desc: 'Android & iOS ဖြင့် ကစားနိုင်' },
      ]
    : [
        { icon: '🔒', title: 'Security Verified', desc: 'SSL encryption & strong security' },
        { icon: '⚡', title: 'Fast Withdrawals', desc: 'Processed in 30 min – 2 hours' },
        { icon: '🎁', title: 'Myanmar Bonuses', desc: 'Bonuses available in MMK' },
        { icon: '📱', title: 'Fully Mobile', desc: 'Play on Android & iOS' },
      ];

  return (
    <section className="py-10 px-4 bg-brand-dark/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryCards({ locale }: { locale: string }) {
  const categories = locale === 'my'
    ? [
        { icon: '🏆', title: 'အကောင်းဆုံး', desc: 'ထိပ်တန်း ကာစီနိုများ', href: '/best-online-casinos-myanmar', color: 'from-yellow-900/50' },
        { icon: '🎥', title: 'တိုက်ရိုက်', desc: 'Live Dealer ဂိမ်းများ', href: '/live-casino-sites-myanmar', color: 'from-red-900/50' },
        { icon: '📱', title: 'မိုဘိုင်း', desc: 'ဖုန်းနှင့်ကစားနိုင်', href: '/mobile-casinos-myanmar', color: 'from-blue-900/50' },
        { icon: '⚡', title: 'မြန်ဆန်သောငွေထုတ်', desc: '30 မိနစ်အတွင်း', href: '/fast-withdrawal-casinos-myanmar', color: 'from-green-900/50' },
        { icon: '🎁', title: 'ဘောနပ်စ်', desc: 'Welcome Bonus များ', href: '/best-welcome-bonuses-myanmar', color: 'from-purple-900/50' },
        { icon: '✅', title: 'ယုံကြည်ရသော', desc: 'လိုင်စင်ရ ကာစီနိုများ', href: '/trusted-casino-sites-myanmar', color: 'from-teal-900/50' },
      ]
    : [
        { icon: '🏆', title: 'Best Casinos', desc: 'Top rated platforms', href: '/best-online-casinos-myanmar', color: 'from-yellow-900/50' },
        { icon: '🎥', title: 'Live Casino', desc: 'Real dealer games', href: '/live-casino-sites-myanmar', color: 'from-red-900/50' },
        { icon: '📱', title: 'Mobile', desc: 'Play on your phone', href: '/mobile-casinos-myanmar', color: 'from-blue-900/50' },
        { icon: '⚡', title: 'Fast Payouts', desc: 'Withdraw in 30 min', href: '/fast-withdrawal-casinos-myanmar', color: 'from-green-900/50' },
        { icon: '🎁', title: 'Bonuses', desc: 'Welcome offers', href: '/best-welcome-bonuses-myanmar', color: 'from-purple-900/50' },
        { icon: '✅', title: 'Trusted Sites', desc: 'Licensed & verified', href: '/trusted-casino-sites-myanmar', color: 'from-teal-900/50' },
      ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={`/${locale}${cat.href}`}
              className={`bg-gradient-to-br ${cat.color} to-brand-card border border-gray-800 hover:border-brand-accent/50 rounded-xl p-5 group transition-all hover:scale-105`}
            >
              <span className="text-3xl mb-3 block">{cat.icon}</span>
              <h3 className="text-white font-bold group-hover:text-brand-accent transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('ratings');

  return (
    <>
      <HeroSection locale={locale} />
      <TrustBadges locale={locale} />

      {/* Category Cards */}
      <CategoryCards locale={locale} />

      {/* Casino Rankings */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">{t('title')}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casinos.map((casino, i) => (
              <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/${locale}/online-casinos-myanmar`}
              className="inline-flex items-center gap-2 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-black font-bold py-3 px-8 rounded-xl transition-all"
            >
              {locale === 'my' ? 'ကာစီနိုအားလုံးကြည့်ရှုပါ →' : 'View All Casinos →'}
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 px-4 bg-brand-card/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {locale === 'my' ? 'ထောက်ခံသောငွေပေးချေမှုနည်းလမ်းများ' : 'Supported Payment Methods'}
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            {locale === 'my'
              ? 'မြန်မာကစားသမားများ အသုံးများသောနည်းလမ်းများ'
              : 'Popular payment methods used by Myanmar players'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'KBZPay', emoji: '📱' },
              { name: 'Wave Money', emoji: '🌊' },
              { name: 'AYA Bank', emoji: '🏦' },
              { name: 'KBZ Bank', emoji: '🏦' },
              { name: 'CB Pay', emoji: '💳' },
              { name: 'USDT', emoji: '🪙' },
              { name: 'Binance', emoji: '🔶' },
              { name: 'OKD', emoji: '💱' },
            ].map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-2 bg-brand-card border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white hover:border-brand-accent/50 transition-colors"
              >
                <span>{m.emoji}</span>
                <span>{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-white mb-4">
            {locale === 'my'
              ? 'မြန်မာနိုင်ငံတွင် အွန်လိုင်းကာစီနို ကစားနည်းလမ်းညွှန်'
              : 'How to Choose an Online Casino in Myanmar'}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {locale === 'my'
              ? 'မြန်မာနိုင်ငံတွင် အွန်လိုင်းကာစီနိုကစားရာတွင် လုံခြုံရေးနှင့် ယုံကြည်စိတ်ချရမှုသည် အရေးအကြီးဆုံးဖြစ်သည်။ ကျွန်ုပ်တို့သည် ပလက်ဖောင်းတစ်ခုစီ၏ လိုင်စင်ရရှိမှု၊ ငွေပေးချေမှုစနစ်၊ ဘောနပ်စ်စည်းကမ်းများနှင့် ဖောက်သည်ဝန်ဆောင်မှုကို သေချာစစ်ဆေးသုံးသပ်ပါသည်။'
              : 'When choosing an online casino in Myanmar, security and trustworthiness are paramount. We thoroughly review each platform\'s licensing, payment systems, bonus terms, and customer service to ensure Myanmar players have the best possible experience.'}
          </p>
        </div>
      </section>
    </>
  );
}
