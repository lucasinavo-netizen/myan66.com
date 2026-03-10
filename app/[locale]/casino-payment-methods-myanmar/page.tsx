import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  return {
    title: locale === 'my'
      ? 'မြန်မာ ကာစီနို ငွေပေးချေမှုနည်းလမ်းများ ၂၀၂၆ | MyanmarBetHub'
      : 'Myanmar Casino Payment Methods 2026 | MyanmarBetHub',
    description: locale === 'my'
      ? 'KBZPay၊ Wave Money၊ AYA Bank နှင့် Crypto ဖြင့် ကာစီနိုသွင်းငွေ/ထုတ်ငွေ အချိန်နှင့် လုပ်ဆောင်ချက်များ'
      : 'Complete guide to KBZPay, Wave Money, AYA Bank and Crypto casino deposits and withdrawals in Myanmar',
    alternates: {
      canonical: `/${locale}/casino-payment-methods-myanmar`,
    },
  };
}

const paymentMethods = [
  { name: 'KBZPay', emoji: '📱', type: 'E-Wallet', depositTime: 'Instant', withdrawTime: '30min–1hr', minDeposit: '1,000 MMK', maxDeposit: '5,000,000 MMK', fee: '0%', available: true },
  { name: 'Wave Money', emoji: '🌊', type: 'E-Wallet', depositTime: 'Instant', withdrawTime: '30min–2hr', minDeposit: '1,000 MMK', maxDeposit: '3,000,000 MMK', fee: '0%', available: true },
  { name: 'AYA Bank', emoji: '🏦', type: 'Bank Transfer', depositTime: '5–30 min', withdrawTime: '1–4 hr', minDeposit: '5,000 MMK', maxDeposit: '10,000,000 MMK', fee: '0%', available: true },
  { name: 'KBZ Bank', emoji: '🏦', type: 'Bank Transfer', depositTime: '5–30 min', withdrawTime: '1–4 hr', minDeposit: '5,000 MMK', maxDeposit: '10,000,000 MMK', fee: '0%', available: true },
  { name: 'CB Pay', emoji: '💳', type: 'E-Wallet', depositTime: 'Instant', withdrawTime: '1–3 hr', minDeposit: '2,000 MMK', maxDeposit: '2,000,000 MMK', fee: '0%', available: true },
  { name: 'USDT (TRC20)', emoji: '🪙', type: 'Crypto', depositTime: '5–15 min', withdrawTime: '15–60 min', minDeposit: '$5', maxDeposit: 'No limit', fee: 'Network fee', available: true },
  { name: 'Binance Pay', emoji: '🔶', type: 'Crypto', depositTime: 'Instant', withdrawTime: '15–30 min', minDeposit: '$5', maxDeposit: 'No limit', fee: '0%', available: true },
];

export default function PaymentMethodsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isMy = locale === 'my';

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-primary/20 to-brand-dark py-14 px-4 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            {isMy ? 'မြန်မာ ကာစီနို ငွေပေးချေမှုနည်းလမ်းများ ၂၀၂၆' : 'Myanmar Casino Payment Methods 2026'}
          </h1>
          <p className="text-gray-300 text-lg">
            {isMy
              ? 'KBZPay မှ Crypto အထိ — မြန်မာကစားသမားများအတွက် ငွေပေးချေမှုနည်းလမ်းအားလုံး'
              : 'From KBZPay to Crypto — all payment options for Myanmar casino players explained'}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Table (desktop) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                {[
                  isMy ? 'နည်းလမ်း' : 'Method',
                  isMy ? 'အမျိုးအစား' : 'Type',
                  isMy ? 'သွင်းချိန်' : 'Deposit',
                  isMy ? 'ထုတ်ချိန်' : 'Withdrawal',
                  isMy ? 'အနည်းဆုံး' : 'Min. Deposit',
                  isMy ? 'ကြေး' : 'Fee',
                ].map((h) => (
                  <th key={h} className="text-left text-gray-400 font-medium py-3 px-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {paymentMethods.map((m) => (
                <tr key={m.name} className="hover:bg-brand-card/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{m.emoji}</span>
                      <span className="text-white font-medium">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{m.type}</td>
                  <td className="py-4 px-4 text-green-400">⚡ {m.depositTime}</td>
                  <td className="py-4 px-4 text-blue-400">{m.withdrawTime}</td>
                  <td className="py-4 px-4 text-gray-300">{m.minDeposit}</td>
                  <td className="py-4 px-4 text-gray-300">{m.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {paymentMethods.map((m) => (
            <div key={m.name} className="bg-brand-card border border-gray-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{m.emoji}</span>
                <div>
                  <p className="text-white font-bold">{m.name}</p>
                  <p className="text-gray-500 text-xs">{m.type}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-gray-500">{isMy ? 'သွင်းချိန်' : 'Deposit:'}</span> <span className="text-green-400">{m.depositTime}</span></div>
                <div><span className="text-gray-500">{isMy ? 'ထုတ်ချိန်' : 'Withdraw:'}</span> <span className="text-blue-400">{m.withdrawTime}</span></div>
                <div><span className="text-gray-500">{isMy ? 'အနည်းဆုံး' : 'Min:'}</span> <span className="text-white">{m.minDeposit}</span></div>
                <div><span className="text-gray-500">{isMy ? 'ကြေး' : 'Fee:'}</span> <span className="text-white">{m.fee}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
