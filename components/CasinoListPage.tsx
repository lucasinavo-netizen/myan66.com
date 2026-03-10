'use client';

import CasinoCard from './CasinoCard';
import type { Casino } from '@/data/casinos';

interface CasinoListPageProps {
  locale: string;
  title: string;
  description: string;
  intro: string;
  casinos: Casino[];
  faqs?: { q: string; a: string }[];
}

export default function CasinoListPage({
  locale,
  title,
  description,
  intro,
  casinos,
  faqs,
}: CasinoListPageProps) {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-b from-brand-primary/20 to-brand-dark py-14 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Intro text */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-400 leading-relaxed max-w-3xl">{intro}</p>
      </section>

      {/* Casino Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino, i) => (
            <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            {locale === 'my' ? 'အမေးများဆုံးမေးခွန်းများ' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-brand-card border border-gray-800 rounded-xl p-5 group"
              >
                <summary className="text-white font-semibold cursor-pointer hover:text-brand-accent transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-400 mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
