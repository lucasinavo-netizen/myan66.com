import Link from 'next/link';
import { useLocale } from 'next-intl';
import type { Casino } from '@/data/casinos';
import clsx from 'clsx';

interface CasinoCardProps {
  casino: Casino;
  rank: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={clsx('w-4 h-4', star <= Math.round(rating) ? 'text-brand-accent' : 'text-gray-600')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-white font-bold text-sm ml-1">{rating}</span>
    </div>
  );
}

export default function CasinoCard({ casino, rank }: CasinoCardProps) {
  const locale = useLocale();

  const badgeConfig = {
    top: { label: locale === 'my' ? '🏆 ထိပ်တန်း' : '🏆 Top Pick', color: 'bg-yellow-500' },
    new: { label: locale === 'my' ? '🆕 အသစ်' : '🆕 New', color: 'bg-blue-500' },
    fast: { label: locale === 'my' ? '⚡ မြန်ဆန်' : '⚡ Fast Pay', color: 'bg-green-500' },
  };

  return (
    <div className="bg-brand-card border border-gray-800 rounded-xl overflow-hidden hover:border-brand-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/10">
      {/* Badge */}
      {casino.badge && (
        <div className={clsx('text-xs font-bold text-white px-3 py-1 text-center', badgeConfig[casino.badge].color)}>
          {badgeConfig[casino.badge].label}
        </div>
      )}

      <div className="p-5">
        <div className="flex items-center gap-4 mb-4">
          {/* Rank */}
          <div className="text-3xl font-black text-gray-600 w-8 text-center">
            #{rank}
          </div>

          {/* Logo Placeholder */}
          <div className="w-16 h-16 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-brand-accent font-bold text-xs text-center leading-tight px-1">
              {casino.name}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-bold text-lg">{casino.name}</h3>
            <StarRating rating={casino.rating} />
          </div>
        </div>

        {/* Bonus Highlight */}
        <div className="bg-brand-primary/30 border border-brand-primary rounded-lg p-3 mb-4">
          <p className="text-brand-accent font-bold text-sm">{casino.bonus}</p>
          <p className="text-gray-300 text-xs mt-0.5">{casino.bonusAmount}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
          <div className="bg-gray-800/50 rounded p-2">
            <p className="text-gray-500">{locale === 'my' ? 'ငွေထုတ်အချိန်' : 'Withdrawal'}</p>
            <p className="text-white font-medium mt-0.5">⚡ {casino.withdrawalSpeed}</p>
          </div>
          <div className="bg-gray-800/50 rounded p-2">
            <p className="text-gray-500">{locale === 'my' ? 'အနည်းဆုံးသွင်းငွေ' : 'Min. Deposit'}</p>
            <p className="text-white font-medium mt-0.5">💰 {casino.minDeposit}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {casino.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full">
              {f}
            </span>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap gap-1 mb-5">
          {casino.paymentMethods.slice(0, 3).map((p) => (
            <span key={p} className="text-xs bg-brand-dark text-gray-400 px-2 py-0.5 rounded border border-gray-700">
              {p}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <a
            href={casino.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-1 bg-brand-accent hover:bg-yellow-400 text-black font-bold py-2.5 px-4 rounded-lg text-center text-sm transition-colors"
          >
            {locale === 'my' ? 'ယခုကစားပါ' : 'Play Now'}
          </a>
          <Link
            href={`/${locale}/casino-reviews/${casino.id}`}
            className="flex-1 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium py-2.5 px-4 rounded-lg text-center text-sm transition-colors"
          >
            {locale === 'my' ? 'သုံးသပ်ချက်' : 'Review'}
          </Link>
        </div>
      </div>
    </div>
  );
}
