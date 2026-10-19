'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const PARTNER_SITES = [
  { name: 'Shan Koe Mee APK', url: '/go/m6' },
  { name: 'M9 Shan Koe Mee', url: '/go/m62' },
  { name: 'Joy Shan Koe Mee', url: '/go/m6' },
  { name: 'Myanmar Mobile Play', url: '/go/m62' },
  { name: 'Fast Wallet Check', url: '/go/m6' },
  { name: 'APK Safety Guide', url: '/go/m62' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const links = [
    { label: locale === 'my' ? 'Joy Shan Koe Mee' : 'Joy Shan Koe Mee', href: '/joy-shan-koe-mee' },
    { label: locale === 'my' ? 'M9 Login' : 'M9 Login', href: '/m9-shan-koe-mee-login' },
    { label: locale === 'my' ? 'Shan Koe Mee APK' : 'Shan Koe Mee APK', href: '/shan-koe-mee-apk-download' },
    { label: locale === 'my' ? 'M9 APK' : 'M9 APK', href: '/m9-shan-koe-mee-apk' },
    { label: locale === 'my' ? 'ငွေပေးချေမှု' : 'Payments', href: '/casino-payment-methods-myanmar' },
    { label: locale === 'my' ? 'တာဝန်ရှိသောကစား' : 'Responsible Gambling', href: '/responsible-gambling' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-primary mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-brand-accent">Myan</span>
              <span className="text-2xl font-bold text-white">66</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {locale === 'my'
                ? 'မြန်မာကစားသမားများအတွက် သီးခြားတည်ဆောက်ထားသော လွတ်လပ်သောသုံးသပ်ရေးပလက်ဖောင်း'
                : 'Independent Shan Koe Mee guide built for Myanmar mobile players'}
            </p>
            {/* Age Warning */}
            <div className="mt-4 inline-flex items-center gap-2 bg-red-900/30 border border-red-800 rounded-lg px-3 py-2">
              <span className="text-red-400 text-lg font-bold">18+</span>
              <span className="text-red-400 text-xs">
                {locale === 'my' ? 'အသက် ၁၈ နှစ်အောက် ကစားခြင်း တားမြစ်သည်' : 'Must be 18+ to gamble'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'my' ? 'မြန်မြန်ဆန်ဆန်သွားပါ' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-400 hover:text-brand-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Icons */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'my' ? 'ငွေပေးချေမှုနည်းလမ်းများ' : 'Payment Methods'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {['KBZPay', 'Wave Money', 'AYA Bank', 'KBZ Bank', 'CB Pay', 'USDT'].map((method) => (
                <span
                  key={method}
                  className="bg-brand-card text-gray-300 text-xs px-2 py-1 rounded border border-gray-700"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Partner Sites */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <h3 className="text-white font-semibold mb-3 text-sm">
            {locale === 'my' ? 'Shan Koe Mee နှင့် mobile play လမ်းကြောင်းများ' : 'Shan Koe Mee and mobile play routes'}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {PARTNER_SITES.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-xs transition-colors"
              >
                {site.name}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-xs leading-relaxed mb-3">
            {t('disclaimer')}
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Myan66. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
