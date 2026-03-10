'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'casinos', href: '/online-casinos-myanmar' },
    { key: 'bestCasinos', href: '/best-online-casinos-myanmar' },
    { key: 'liveCasino', href: '/live-casino-sites-myanmar' },
    { key: 'mobileCasino', href: '/mobile-casinos-myanmar' },
    { key: 'fastWithdrawal', href: '/fast-withdrawal-casinos-myanmar' },
    { key: 'bonuses', href: '/best-welcome-bonuses-myanmar' },
    { key: 'reviews', href: '/casino-reviews' },
    { key: 'payments', href: '/casino-payment-methods-myanmar' },
  ] as const;

  const otherLocale = locale === 'my' ? 'en' : 'my';
  const localeName = locale === 'my' ? 'English' : 'မြန်မာ';

  return (
    <header className="bg-brand-dark border-b border-brand-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-accent">Myanmar</span>
            <span className="text-2xl font-bold text-white">BetHub</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.slice(0, 5).map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-gray-300 hover:text-brand-accent px-3 py-2 text-sm rounded-md transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right: Language Switcher + Mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLocale}`}
              className="text-xs bg-brand-primary text-white px-3 py-1.5 rounded-full hover:bg-brand-secondary transition-colors"
            >
              {localeName}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-3 border-t border-brand-primary">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="block text-gray-300 hover:text-brand-accent px-3 py-2 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
