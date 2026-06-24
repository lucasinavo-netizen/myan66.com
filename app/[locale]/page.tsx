import type { Metadata } from 'next';
import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';

const baseUrl = 'https://myan66.com';

const copy = {
  my: {
    title: 'Myan66 Shan Koe Mee APK Download Guide 2026',
    description:
      'Shan Koe Mee apk download, M9 Shan Koe Mee login, M9 apk and Joy Shan Koe Mee guide for Myanmar players.',
    badge: 'Shan Koe Mee Myanmar Guide',
    h1: 'Shan Koe Mee APK Download Myanmar 2026',
    subtitle:
      'Myan66 သည် မြန်မာကစားသမားများအတွက် Shan Koe Mee app, M9 Shan Koe Mee login, apk download နှင့် Joy Shan Koe Mee ကို တစ်နေရာတည်းတွင် နှိုင်းယှဉ်ရှင်းပြသော လမ်းညွှန်ဖြစ်သည်။',
    primaryCta: 'Shan Koe Mee APK လမ်းညွှန်',
    secondaryCta: 'M9 Login ဖတ်ရန်',
    trustTitle: 'Myan66 တွင် အဓိကစစ်ဆေးသောအချက်များ',
    clusterTitle: 'Shan Koe Mee Topic Cluster',
    clusterIntro:
      'Shan Koe Mee ကိုရှာသော user များသည် download link တစ်ခုတည်းမဟုတ်ဘဲ app source, login stability, payment flow နှင့် game rule ကိုပါသိချင်ကြသည်။ ထို့ကြောင့် Myan66 သည် generic casino စာမျက်နှာများအစား Shan Koe Mee, M9 နှင့် Joy intent ကို သီးခြားခွဲ၍ရှင်းပြသည်။',
    compareTitle: 'M9, Joy နှင့် Shan Koe Mee APK ကို ဘယ်လိုရွေးမလဲ',
    guideTitle: 'Shan Koe Mee ကစားမည့်သူများအတွက် စစ်ဆေးရန်အချက်များ',
    faqTitle: 'မေးလေ့ရှိသောမေးခွန်းများ',
    responsible:
      'Shan Koe Mee နှင့် အွန်လိုင်းကစားနည်းများသည် ငွေကြေးဆုံးရှုံးနိုင်ချေရှိသည်။ အသက် 18 နှစ်အောက် မကစားသင့်ပါ။ ဘတ်ဂျက်သတ်မှတ်ပြီး အပန်းဖြေရန်အတွက်သာ အသုံးပြုပါ။',
  },
  en: {
    title: 'Myan66 Shan Koe Mee APK Download Guide 2026',
    description:
      'Myanmar guide for Shan Koe Mee apk download, M9 Shan Koe Mee login, M9 apk and Joy Shan Koe Mee app options.',
    badge: 'Shan Koe Mee Myanmar Guide',
    h1: 'Shan Koe Mee APK Download Myanmar 2026',
    subtitle:
      'Myan66 is a focused Myanmar guide for Shan Koe Mee app downloads, M9 Shan Koe Mee login, M9 apk setup, and Joy Shan Koe Mee comparisons.',
    primaryCta: 'Read APK Guide',
    secondaryCta: 'M9 Login Guide',
    trustTitle: 'What Myan66 Checks First',
    clusterTitle: 'Shan Koe Mee Topic Cluster',
    clusterIntro:
      'People searching for Shan Koe Mee need more than a download link. They need source checks, login stability, payment flow, and basic rule clarity. Myan66 now separates Shan Koe Mee, M9, and Joy intent instead of treating every query as a generic casino search.',
    compareTitle: 'How to Choose Between M9, Joy and Shan Koe Mee APKs',
    guideTitle: 'Checklist Before Playing Shan Koe Mee Online',
    faqTitle: 'Common Questions',
    responsible:
      'Shan Koe Mee and online gaming involve financial risk. Do not play under 18. Set a strict budget and treat play as entertainment only.',
  },
} as const;

const clusterPages = [
  {
    href: '/joy-shan-koe-mee',
    keyword: 'joy shan koe mee',
    title: {
      my: 'Joy Shan Koe Mee',
      en: 'Joy Shan Koe Mee',
    },
    desc: {
      my: 'Joy Shan Koe Mee app, table style, mobile play နှင့် M9 နှိုင်းယှဉ်ချက်ကို ဖတ်နိုင်သည်။',
      en: 'Joy Shan Koe Mee app overview, table style, mobile play notes, and comparison with M9.',
    },
  },
  {
    href: '/m9-shan-koe-mee-login',
    keyword: 'm9 shan koe mee login',
    title: {
      my: 'M9 Shan Koe Mee Login',
      en: 'M9 Shan Koe Mee Login',
    },
    desc: {
      my: 'M9 account login, password, OTP, wallet check နှင့် common login issue များကို တစ်ဆင့်ချင်းရှင်းပြသည်။',
      en: 'Step-by-step login guidance for M9 accounts, OTP checks, wallet checks, and common access issues.',
    },
  },
  {
    href: '/shan-koe-mee-apk-download',
    keyword: 'shan koe mee apk download',
    title: {
      my: 'Shan Koe Mee APK Download',
      en: 'Shan Koe Mee APK Download',
    },
    desc: {
      my: 'Android ဖုန်းတွင် Shan Koe Mee apk ကို ဘယ်လိုရွေး၊ ဘယ်လိုစစ်ပြီး ဘယ်လို install လုပ်ရမလဲဆိုတာကို ရှင်းပြသည်။',
      en: 'A focused Android download guide covering apk checks, install flow, and safety points before playing.',
    },
  },
  {
    href: '/m9-shan-koe-mee-apk',
    keyword: 'm9 shan koe mee apk',
    title: {
      my: 'M9 Shan Koe Mee APK',
      en: 'M9 Shan Koe Mee APK',
    },
    desc: {
      my: 'M9 apk version, Android setting, update ပြုလုပ်နည်းနှင့် download မလုပ်ခင် စစ်ရမည့်အချက်များ။',
      en: 'M9 apk version checks, Android settings, update flow, and what to verify before installing.',
    },
  },
] as const;

const trustItems = {
  my: [
    ['APK source', 'Download link ကို မနှိပ်ခင် domain, app name, version နှင့် update date ကို စစ်ရန်။'],
    ['Login safety', 'M9 Shan Koe Mee login တွင် password, OTP, wallet balance နှင့် device security ကိုစစ်ရန်။'],
    ['Payment fit', 'KBZPay, Wave Money, bank transfer, USDT စသည့် မြန်မာအသုံးများသော payment များကို နှိုင်းယှဉ်ရန်။'],
    ['Game intent', 'Shan Koe Mee, slots, live casino ကို မရောဘဲ မိမိလိုချင်သော game intent ကို ခွဲခြားရန်။'],
  ],
  en: [
    ['APK source', 'Check the domain, app name, version and update date before installing any apk.'],
    ['Login safety', 'For M9 Shan Koe Mee login, verify password, OTP, wallet balance and device security.'],
    ['Payment fit', 'Compare Myanmar payment options such as KBZPay, Wave Money, bank transfer and USDT.'],
    ['Game intent', 'Separate Shan Koe Mee intent from slots or live casino intent before choosing a platform.'],
  ],
} as const;

const comparisonRows = {
  my: [
    ['M9 Shan Koe Mee', 'Login နှင့် apk intent ပြင်းသည်', 'Account, OTP, wallet, Android apk ကို အရင်စစ်သင့်သည်'],
    ['Joy Shan Koe Mee', 'Brand search intent သီးသန့်ရှိသည်', 'Mobile play, table flow, support language ကို စစ်သင့်သည်'],
    ['Generic Shan Koe Mee APK', 'Download intent အကျယ်ဆုံး', 'APK source, update, file permission ကို အရင်စစ်သင့်သည်'],
  ],
  en: [
    ['M9 Shan Koe Mee', 'Strong login and apk intent', 'Check account access, OTP, wallet and Android apk first'],
    ['Joy Shan Koe Mee', 'Specific brand-search intent', 'Review mobile play, table flow and support language'],
    ['Generic Shan Koe Mee APK', 'Broadest download intent', 'Check apk source, update history and file permissions'],
  ],
} as const;

const checklist = {
  my: [
    'APK ကို official-looking source မှသာ download လုပ်ပြီး file permission များကို install မလုပ်ခင် စစ်ပါ။',
    'M9 Shan Koe Mee login မလုပ်ခင် phone number, OTP, password reset နည်းလမ်းကို မှတ်ထားပါ။',
    'Deposit မလုပ်ခင် minimum deposit, withdrawal time, bonus rule နှင့် rollover ကို ဖတ်ပါ။',
    'Shan Koe Mee table တွင် blind bet, turn order, card ranking စည်းကမ်းများကို အရင်နားလည်ပါ။',
    'Loss chasing မလုပ်ရန် budget limit ကို ကြိုတင်သတ်မှတ်ပါ။',
  ],
  en: [
    'Download apk files only from a source you can verify, then check file permissions before installing.',
    'Before M9 Shan Koe Mee login, confirm your phone number, OTP access and password reset path.',
    'Before depositing, read minimum deposit, withdrawal time, bonus rules and rollover terms.',
    'Understand blind bet, turn order and card ranking rules before joining a Shan Koe Mee table.',
    'Set a budget first and avoid chasing losses after a bad session.',
  ],
} as const;

const faqs = {
  my: [
    ['Shan Koe Mee APK download လုပ်ဖို့ ဘာစစ်ရမလဲ?', 'App name, domain, version, permission နှင့် update date ကို စစ်ပြီးမှ install လုပ်သင့်သည်။'],
    ['M9 Shan Koe Mee login မဝင်နိုင်ရင် ဘာလုပ်ရမလဲ?', 'Phone number, OTP, password reset, browser cache နှင့် app update ကိုစစ်ပါ။ ငွေမသွင်းခင် account access ကို အရင်ပြန်ရအောင်လုပ်သင့်သည်။'],
    ['Joy Shan Koe Mee နဲ့ M9 ဘာကွာလဲ?', 'နှစ်ခုလုံး Shan Koe Mee intent ရှိသော်လည်း brand, login flow, app layout, promotion နှင့် payment support ကွာနိုင်သည်။'],
  ],
  en: [
    ['What should I check before a Shan Koe Mee APK download?', 'Check the app name, domain, version, permissions and update date before installing.'],
    ['What if M9 Shan Koe Mee login does not work?', 'Check phone number, OTP access, password reset, browser cache and app version before depositing money.'],
    ['What is the difference between Joy Shan Koe Mee and M9?', 'Both target Shan Koe Mee players, but brand, login flow, app layout, promotions and payment support may differ.'],
  ],
} as const;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(locale)) return {};
  const c = copy[locale];
  return {
    title: c.title,
    description: c.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        my: '/my',
        en: '/en',
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${baseUrl}/${locale}`,
      type: 'website',
      locale,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Myan66 Shan Koe Mee guide' }],
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const c = copy[locale];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: c.title,
    description: c.description,
    url: `${baseUrl}/${locale}`,
    inLanguage: locale === 'my' ? 'my-MM' : 'en',
    about: ['Shan Koe Mee', 'M9 Shan Koe Mee', 'Joy Shan Koe Mee', 'Myanmar card games'],
    isPartOf: { '@id': `${baseUrl}/#website` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="border-b border-gray-800 bg-brand-dark px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent">
                {c.badge}
              </span>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
                {c.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                {c.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/shan-koe-mee-apk-download`}
                  className="rounded-lg bg-brand-accent px-6 py-3 text-center font-bold text-black transition-colors hover:bg-yellow-400"
                >
                  {c.primaryCta}
                </Link>
                <Link
                  href={`/${locale}/m9-shan-koe-mee-login`}
                  className="rounded-lg border border-gray-600 px-6 py-3 text-center font-bold text-white transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  {c.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-gray-800 bg-brand-card p-6">
              <h2 className="text-xl font-bold text-white">{c.trustTitle}</h2>
              <div className="mt-5 space-y-4">
                {trustItems[locale].map(([title, desc]) => (
                  <div key={title} className="border-l-2 border-brand-accent pl-4">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-white">{c.clusterTitle}</h2>
            <p className="mt-4 leading-7 text-gray-400">{c.clusterIntro}</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {clusterPages.map((page) => (
              <Link
                key={page.href}
                href={`/${locale}${page.href}`}
                className="rounded-xl border border-gray-800 bg-brand-card p-6 transition-colors hover:border-brand-accent/70"
              >
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-brand-primary px-3 py-1 text-brand-accent">{page.keyword}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{page.title[locale]}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{page.desc[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-800 bg-brand-card/30 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black text-white">{c.compareTitle}</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-dark text-gray-300">
                <tr>
                  <th className="px-4 py-3">{locale === 'my' ? 'အမျိုးအစား' : 'Option'}</th>
                  <th className="px-4 py-3">{locale === 'my' ? 'Search Intent' : 'Search Intent'}</th>
                  <th className="px-4 py-3">{locale === 'my' ? 'စစ်ဆေးရန်' : 'What to Check'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 bg-brand-card">
                {comparisonRows[locale].map(([option, intent, check]) => (
                  <tr key={option}>
                    <td className="px-4 py-4 font-semibold text-white">{option}</td>
                    <td className="px-4 py-4 text-gray-300">{intent}</td>
                    <td className="px-4 py-4 text-gray-400">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-black text-white">{c.guideTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-gray-400">{c.responsible}</p>
            <a
              href="/go/m6"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-6 inline-flex rounded-lg bg-brand-accent px-6 py-3 font-bold text-black transition-colors hover:bg-yellow-400"
            >
              {locale === 'my' ? 'Shan Koe Mee Platform ကြည့်ရန်' : 'View Shan Koe Mee Platform'}
            </a>
          </div>
          <div className="rounded-xl border border-gray-800 bg-brand-card p-6">
            <ol className="space-y-4">
              {checklist[locale].map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-brand-accent">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-7 text-gray-300">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-black text-white">{c.faqTitle}</h2>
          <div className="mt-6 space-y-4">
            {faqs[locale].map(([question, answer]) => (
              <details key={question} className="rounded-xl border border-gray-800 bg-brand-card p-5">
                <summary className="cursor-pointer font-semibold text-white">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-gray-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
