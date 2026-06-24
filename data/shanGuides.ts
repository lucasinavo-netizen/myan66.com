export type Locale = 'my' | 'en';

export type ShanGuideSlug =
  | 'joy-shan-koe-mee'
  | 'm9-shan-koe-mee-login'
  | 'shan-koe-mee-apk-download'
  | 'm9-shan-koe-mee-apk';

export interface ShanGuide {
  slug: ShanGuideSlug;
  primaryKeyword: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  intent: Record<Locale, string>;
  ctaLabel: Record<Locale, string>;
  ctaUrl: '/go/m6' | '/go/m62';
  sections: Array<{
    heading: Record<Locale, string>;
    body: Record<Locale, string>;
    bullets: Record<Locale, string[]>;
  }>;
  checklist: Record<Locale, string[]>;
  faqs: Array<{
    question: Record<Locale, string>;
    answer: Record<Locale, string>;
  }>;
  related: ShanGuideSlug[];
}

export const shanGuides: ShanGuide[] = [
  {
    slug: 'joy-shan-koe-mee',
    primaryKeyword: 'joy shan koe mee',
    title: {
      my: 'Joy Shan Koe Mee Guide 2026',
      en: 'Joy Shan Koe Mee Guide 2026',
    },
    description: {
      my: 'Joy Shan Koe Mee app, mobile play, login safety, table flow and comparison with M9 Shan Koe Mee for Myanmar players.',
      en: 'Joy Shan Koe Mee app guide covering mobile play, login safety, table flow and comparison with M9 Shan Koe Mee.',
    },
    intro: {
      my: 'Joy Shan Koe Mee ကိုရှာသော user များသည် app တစ်ခု၏ download, table flow, wallet support နှင့် M9 Shan Koe Mee နှင့် ကွာခြားချက်များကို သိချင်ကြသည်။ ဤစာမျက်နှာသည် Joy app ကို မရွေးခင် စစ်ရမည့်အချက်များကို လက်တွေ့ကျကျရှင်းပြထားသည်။',
      en: 'People searching Joy Shan Koe Mee usually want to understand app access, table flow, wallet support, and how Joy differs from M9 Shan Koe Mee. This page explains the practical checks before choosing Joy.',
    },
    intent: {
      my: 'Brand-specific Shan Koe Mee app comparison',
      en: 'Brand-specific Shan Koe Mee app comparison',
    },
    ctaLabel: {
      my: 'Joy/M9 Platform ကြည့်ရန်',
      en: 'View Joy/M9 Platform',
    },
    ctaUrl: '/go/m6',
    sections: [
      {
        heading: { my: 'Joy Shan Koe Mee ကို ဘယ်သူတွေ ရှာကြသလဲ', en: 'Who Searches for Joy Shan Koe Mee' },
        body: {
          my: 'ဤ intent သည် generic casino မဟုတ်ဘဲ Shan Koe Mee app တစ်ခုကို တိတိကျကျရှာနေသော user ဖြစ်နိုင်ခြေများသည်။ ထို user သည် download link တင်မက၊ app layout, table speed, payment support နှင့် login reliability ကိုပါသိချင်သည်။',
          en: 'This is not a generic casino query. The searcher is likely comparing a specific Shan Koe Mee app and wants more than a download link: app layout, table speed, payment support, and login reliability all matter.',
        },
        bullets: {
          my: ['Brand name ပါသော search ဖြစ်သည်', 'Mobile-first user ဖြစ်နိုင်ခြေမြင့်သည်', 'M9 နှင့် နှိုင်းယှဉ်သည့် intent ရှိနိုင်သည်'],
          en: ['Brand-led search intent', 'Likely mobile-first players', 'Often compared against M9 Shan Koe Mee'],
        },
      },
      {
        heading: { my: 'Joy app ကို မရွေးခင် စစ်ရမည့်အချက်များ', en: 'What to Check Before Choosing Joy' },
        body: {
          my: 'Shan Koe Mee app တစ်ခုကို ရွေးရာတွင် အဓိကအချက်မှာ table ထဲဝင်ရလွယ်ခြင်း၊ wallet balance ပြသမှုရှင်းလင်းခြင်း၊ support language နှင့် withdrawal flow ဖြစ်သည်။ Bonus ကြီးရုံဖြင့် မရွေးသင့်ပါ။',
          en: 'The important checks are table access, clear wallet balance display, support language, and withdrawal flow. A large bonus alone is not enough reason to choose an app.',
        },
        bullets: {
          my: ['Login မတည်ငြိမ်လျှင် deposit မလုပ်ပါနှင့်', 'App permission များကို install မလုပ်ခင် စစ်ပါ', 'Withdrawal time ကို bonus ထက်အရင်စစ်ပါ'],
          en: ['Do not deposit if login is unstable', 'Review app permissions before installing', 'Check withdrawal timing before bonus size'],
        },
      },
      {
        heading: { my: 'Joy နှင့် M9 ကို ဘယ်လိုနှိုင်းယှဉ်မလဲ', en: 'How to Compare Joy Against M9' },
        body: {
          my: 'Joy နှင့် M9 နှစ်ခုလုံး Shan Koe Mee user များကို ဦးတည်သော်လည်း login flow, table availability, payment support နှင့် customer support speed ကွာနိုင်သည်။ Account ဖွင့်ပြီးပြီးချင်း ငွေများများမသွင်းဘဲ login, wallet, withdrawal rule ကို အရင်စမ်းသင့်သည်။',
          en: 'Joy and M9 can both serve Shan Koe Mee players, but login flow, table availability, payment support and customer service speed can differ. After opening an account, test login, wallet display and withdrawal rules before making a larger deposit.',
        },
        bullets: {
          my: ['Table availability ကို peak time တွင်စစ်ပါ', 'Support language ကို မေးခွန်းလေးဖြင့်စမ်းပါ', 'Wallet history ပြသမှုကို နှိုင်းယှဉ်ပါ'],
          en: ['Check table availability during busy hours', 'Test support language with a small question', 'Compare how wallet history is displayed'],
        },
      },
    ],
    checklist: {
      my: ['Joy app source ကိုစစ်ပါ', 'Phone number/OTP login ကိုအရင်စမ်းပါ', 'Small deposit ဖြင့် wallet flow စစ်ပါ', 'M9 နှင့် table/game availability နှိုင်းယှဉ်ပါ'],
      en: ['Check the Joy app source', 'Test phone/OTP login first', 'Use a small deposit to test wallet flow', 'Compare table and game availability with M9'],
    },
    faqs: [
      {
        question: { my: 'Joy Shan Koe Mee သည် M9 ထက်ကောင်းလား?', en: 'Is Joy Shan Koe Mee better than M9?' },
        answer: {
          my: 'တစ်ခုတည်းက အမြဲပိုကောင်းသည်ဟု မပြောနိုင်ပါ။ Table availability, login stability, payment support နှင့် withdrawal rule ကို သင်၏ဖုန်း၊ payment method နှင့် budget အပေါ်မူတည်၍ နှိုင်းယှဉ်သင့်သည်။',
          en: 'One is not always better than the other. Compare table availability, login stability, payment support and withdrawal rules based on your phone, payment method and budget.',
        },
      },
      {
        question: { my: 'Joy app download မလုပ်ခင် ဘာစစ်ရမလဲ?', en: 'What should I check before downloading a Joy app?' },
        answer: {
          my: 'Domain, app name, version, update date, file permission နှင့် support contact ကိုစစ်ပါ။ မသေချာလျှင် ငွေသွင်းခြင်းမလုပ်သင့်ပါ။',
          en: 'Check the domain, app name, version, update date, file permissions and support contact. If these are unclear, avoid depositing money.',
        },
      },
      {
        question: { my: 'Joy Shan Koe Mee က beginner အတွက်သင့်လား?', en: 'Is Joy Shan Koe Mee suitable for beginners?' },
        answer: {
          my: 'Beginner အတွက် app ထက် table rule နားလည်မှုက ပိုအရေးကြီးသည်။ Blind bet, card ranking, turn order နှင့် budget limit ကို အရင်သိထားသင့်သည်။',
          en: 'For beginners, understanding the table rules matters more than the app name. Learn blind bets, card ranking, turn order and budget limits first.',
        },
      },
    ],
    related: ['m9-shan-koe-mee-login', 'shan-koe-mee-apk-download'],
  },
  {
    slug: 'm9-shan-koe-mee-login',
    primaryKeyword: 'm9 shan koe mee login',
    title: {
      my: 'M9 Shan Koe Mee Login Guide',
      en: 'M9 Shan Koe Mee Login Guide',
    },
    description: {
      my: 'M9 Shan Koe Mee login guide for account access, OTP, password checks, wallet review and common login problems.',
      en: 'M9 Shan Koe Mee login guide for account access, OTP, password checks, wallet review and common login problems.',
    },
    intro: {
      my: 'M9 Shan Koe Mee login ကိုရှာသော user သည် app ကိုသိပြီးဖြစ်သော်လည်း account ဝင်မရခြင်း၊ OTP မရခြင်း၊ password မမှတ်မိခြင်း သို့မဟုတ် wallet မပြခြင်းကဲ့သို့သော practical problem ရှိနေတတ်သည်။',
      en: 'People searching M9 Shan Koe Mee login usually know the app already and need a practical fix for account access, OTP, password reset, or wallet visibility.',
    },
    intent: {
      my: 'Login troubleshooting and account access',
      en: 'Login troubleshooting and account access',
    },
    ctaLabel: {
      my: 'M9 Platform ဖွင့်ရန်',
      en: 'Open M9 Platform',
    },
    ctaUrl: '/go/m62',
    sections: [
      {
        heading: { my: 'Login မလုပ်ခင် စစ်ရန်', en: 'Before You Try to Log In' },
        body: {
          my: 'Account access မတည်ငြိမ်သေးလျှင် deposit မလုပ်သင့်ပါ။ အရင်ဆုံး phone number, OTP, password reset, device date/time နှင့် app version ကို စစ်ပါ။',
          en: 'Do not deposit until account access is stable. First confirm phone number, OTP access, password reset, device date/time, and app version.',
        },
        bullets: {
          my: ['Phone number မှန်ကန်မှု', 'OTP SMS ရရှိမှု', 'Password reset လမ်းကြောင်း', 'Wallet balance ပြသမှု'],
          en: ['Correct phone number', 'OTP SMS delivery', 'Password reset path', 'Wallet balance visibility'],
        },
      },
      {
        heading: { my: 'Common login issue များ', en: 'Common Login Issues' },
        body: {
          my: 'M9 login error များတွင် browser cache, old apk version, network latency နှင့် OTP delay များ ပါဝင်နိုင်သည်။ Account lock ဖြစ်နေပါက support channel မှတစ်ဆင့် password reset လုပ်သင့်သည်။',
          en: 'M9 login errors can come from browser cache, old apk versions, network latency, or OTP delay. If the account is locked, use the official support channel to reset access.',
        },
        bullets: {
          my: ['Old apk ကို update လုပ်ပါ', 'Cache ကိုရှင်းပါ', 'OTP ကို ထပ်ပို့မီ ခဏစောင့်ပါ', 'အခြား device တွင် login များလွန်းခြင်းကိုရှောင်ပါ'],
          en: ['Update old apk builds', 'Clear cache', 'Wait before requesting another OTP', 'Avoid too many device logins'],
        },
      },
      {
        heading: { my: 'Login အောင်ပြီးနောက် ဘာစစ်ရမလဲ', en: 'What to Check After Login Works' },
        body: {
          my: 'Login အောင်မြင်သွားပြီးနောက် ချက်ချင်း deposit မလုပ်သင့်ပါ။ Account profile, wallet balance, transaction history, bonus rule, withdrawal method နှင့် support response time ကို အရင်စစ်ပါ။',
          en: 'After login works, do not deposit immediately. Check account profile, wallet balance, transaction history, bonus rules, withdrawal method and support response time first.',
        },
        bullets: {
          my: ['Wallet history မပျောက်မပျက်ပြသမှု', 'Deposit/withdrawal minimum', 'Bonus rollover condition', 'Support response time'],
          en: ['Stable wallet history display', 'Deposit and withdrawal minimums', 'Bonus rollover conditions', 'Support response time'],
        },
      },
    ],
    checklist: {
      my: ['Login အရင်စမ်းပါ', 'Wallet balance မှန်မမှန်ကြည့်ပါ', 'Password reset လမ်းကြောင်းသိထားပါ', 'Deposit မလုပ်ခင် withdrawal rule ဖတ်ပါ'],
      en: ['Test login first', 'Confirm wallet balance display', 'Know the password reset path', 'Read withdrawal rules before depositing'],
    },
    faqs: [
      {
        question: { my: 'M9 Shan Koe Mee login မဝင်နိုင်ရင် ဘာလုပ်ရမလဲ?', en: 'What should I do if M9 Shan Koe Mee login fails?' },
        answer: {
          my: 'Phone number မှန်မမှန်၊ OTP ရမရ၊ password reset ရနိုင်မရ၊ app version နှင့် network connection ကိုစစ်ပါ။ မအောင်မြင်သေးလျှင် deposit မလုပ်ဘဲ support ကိုဆက်သွယ်သင့်သည်။',
          en: 'Check phone number, OTP delivery, password reset access, app version and network connection. If access is still unstable, contact support before depositing.',
        },
      },
      {
        question: { my: 'OTP မရရင် account အသစ်ဖွင့်သင့်လား?', en: 'Should I create a new account if OTP does not arrive?' },
        answer: {
          my: 'အမြန် account အသစ်ဖွင့်ခြင်းမလုပ်သင့်ပါ။ SIM signal, SMS block, resend delay နှင့် registered number ကိုအရင်စစ်ပါ။ Account duplicate ဖြစ်လျှင် withdrawal ပြဿနာဖြစ်နိုင်သည်။',
          en: 'Do not rush into creating another account. Check SIM signal, SMS blocking, resend delay and the registered number first. Duplicate accounts can create withdrawal problems.',
        },
      },
      {
        question: { my: 'Login အောင်မြင်ရင် ချက်ချင်းငွေသွင်းလို့ရလား?', en: 'Can I deposit as soon as login works?' },
        answer: {
          my: 'Login အောင်မြင်ခြင်းသည် အစပိုင်းစစ်ဆေးမှုသာဖြစ်သည်။ Wallet display, withdrawal rule, support contact နှင့် bonus condition ကို စစ်ပြီးမှ ငွေနည်းနည်းဖြင့်စမ်းသင့်သည်။',
          en: 'Successful login is only the first check. Review wallet display, withdrawal rules, support contact and bonus conditions, then test with a small amount first.',
        },
      },
    ],
    related: ['m9-shan-koe-mee-apk', 'joy-shan-koe-mee'],
  },
  {
    slug: 'shan-koe-mee-apk-download',
    primaryKeyword: 'shan koe mee apk download',
    title: {
      my: 'Shan Koe Mee APK Download Guide',
      en: 'Shan Koe Mee APK Download Guide',
    },
    description: {
      my: 'Shan Koe Mee apk download guide for Myanmar Android users: source checks, app permissions, update safety and account setup.',
      en: 'Shan Koe Mee apk download guide for Myanmar Android users covering source checks, app permissions, update safety and account setup.',
    },
    intro: {
      my: 'Shan Koe Mee apk download ကိုရှာသော user များသည် install link သက်သက်မဟုတ်ဘဲ APK source, Android setting, permission, account setup နှင့် payment check ကိုပါ လိုအပ်သည်။ ဤစာမျက်နှာသည် download မလုပ်ခင်နှင့် install ပြီးနောက် စစ်သင့်သောအချက်များကို ဖုံးလွှမ်းထားသည်။',
      en: 'People searching Shan Koe Mee apk download need more than an install link. They need apk source checks, Android settings, permissions, account setup and payment checks. This guide covers what to verify before and after installing.',
    },
    intent: {
      my: 'Android apk download and safety checks',
      en: 'Android apk download and safety checks',
    },
    ctaLabel: {
      my: 'APK Platform ကြည့်ရန်',
      en: 'View APK Platform',
    },
    ctaUrl: '/go/m6',
    sections: [
      {
        heading: { my: 'APK download intent ကို ဘယ်လိုဖြည့်ဆည်းမလဲ', en: 'How to Satisfy APK Download Intent' },
        body: {
          my: 'Google Play မဟုတ်သော APK install များတွင် source trust သည် အရေးကြီးဆုံးဖြစ်သည်။ File name, package name, version, update date နှင့် permission request များကို မသိမသာမကျော်သင့်ပါ။',
          en: 'When an apk is installed outside Google Play, source trust is the most important check. Do not skip file name, package name, version, update date, and permission requests.',
        },
        bullets: {
          my: ['Unknown source setting ကို ယာယီသာဖွင့်ပါ', 'Install ပြီးလျှင် permission များပြန်စစ်ပါ', 'Old apk link များကိုရှောင်ပါ'],
          en: ['Enable unknown sources only temporarily', 'Review permissions after install', 'Avoid old apk mirrors'],
        },
      },
      {
        heading: { my: 'Download ပြီးနောက် account setup', en: 'Account Setup After Download' },
        body: {
          my: 'App install ပြီးသည်နှင့် အရင်ဆုံး login stability, wallet display, deposit minimum, withdrawal rule နှင့် support channel ကိုစစ်သင့်သည်။ အများဆုံး bonus ကို အရင်မကြည့်ဘဲ account security ကို အရင်ကြည့်ပါ။',
          en: 'After install, check login stability, wallet display, minimum deposit, withdrawal rules, and support channels. Account security should come before bonus size.',
        },
        bullets: {
          my: ['Small deposit ဖြင့် စမ်းပါ', 'Withdrawal rule ကို screenshot သိမ်းပါ', 'Support channel ရှိမရှိစစ်ပါ'],
          en: ['Test with a small deposit', 'Save withdrawal rules for reference', 'Confirm support channel availability'],
        },
      },
      {
        heading: { my: 'APK download တွင် ရှောင်သင့်သောအန္တရာယ်များ', en: 'APK Download Red Flags' },
        body: {
          my: 'APK file များသည် Google Play review မဖြတ်နိုင်သောကြောင့် source မသေချာလျှင် malware, account theft သို့မဟုတ် payment fraud အန္တရာယ်ရှိနိုင်သည်။ File size မတူခြင်း၊ package name မရှင်းခြင်း၊ update date မရှိခြင်းနှင့် excessive permission တောင်းခြင်းတို့ကို သတိထားပါ။',
          en: 'APK files may not pass Google Play review, so unclear sources can expose users to malware, account theft or payment fraud. Watch for mismatched file sizes, unclear package names, missing update dates and excessive permission requests.',
        },
        bullets: {
          my: ['SMS/contact permission မလိုအပ်ဘဲတောင်းခြင်း', 'Official support contact မပြခြင်း', 'Old mirror link များသာရှိခြင်း', 'File name မကြာခဏပြောင်းခြင်း'],
          en: ['Unnecessary SMS or contact permissions', 'No official support contact', 'Only old mirror links available', 'File names changing too often'],
        },
      },
    ],
    checklist: {
      my: ['APK source စစ်ပါ', 'Version/update date စစ်ပါ', 'Permission list ဖတ်ပါ', 'Login stability စမ်းပါ', 'Payment rule ဖတ်ပါ'],
      en: ['Check apk source', 'Check version/update date', 'Read permission list', 'Test login stability', 'Read payment rules'],
    },
    faqs: [
      {
        question: { my: 'Shan Koe Mee APK ကို ဘယ်က download လုပ်သင့်လဲ?', en: 'Where should I download a Shan Koe Mee APK?' },
        answer: {
          my: 'Source ကို verify လုပ်နိုင်သော official-looking domain သို့မဟုတ် platform မှသာ download လုပ်သင့်သည်။ Mirror site, shortened link, unknown file host များကိုရှောင်ပါ။',
          en: 'Download only from a source you can verify, such as a consistent official-looking domain or platform. Avoid mirror sites, shortened links and unknown file hosts.',
        },
      },
      {
        question: { my: 'Unknown sources ကို ဖွင့်ထားရမလား?', en: 'Should I leave unknown sources enabled?' },
        answer: {
          my: 'Install လုပ်ချိန်တွင်သာ ယာယီဖွင့်ပြီး install ပြီးနောက်ပြန်ပိတ်သင့်သည်။ အမြဲဖွင့်ထားလျှင် အခြား file များ install ဖြစ်နိုင်သော အန္တရာယ်တိုးသည်။',
          en: 'Enable unknown sources only temporarily during installation, then turn it off again. Leaving it enabled increases the risk of unwanted installs.',
        },
      },
      {
        question: { my: 'APK install ပြီးနောက် ငွေသွင်းမီ ဘာလုပ်သင့်လဲ?', en: 'What should I do before depositing after APK install?' },
        answer: {
          my: 'Login stability, wallet balance, withdrawal rule, support channel နှင့် transaction history ကို အရင်စစ်ပါ။ အားလုံးရှင်းမှ ငွေနည်းနည်းဖြင့်စမ်းသင့်သည်။',
          en: 'Check login stability, wallet balance, withdrawal rules, support channel and transaction history first. If everything is clear, test with a small amount.',
        },
      },
    ],
    related: ['m9-shan-koe-mee-apk', 'joy-shan-koe-mee'],
  },
  {
    slug: 'm9-shan-koe-mee-apk',
    primaryKeyword: 'm9 shan koe mee apk',
    title: {
      my: 'M9 Shan Koe Mee APK Guide',
      en: 'M9 Shan Koe Mee APK Guide',
    },
    description: {
      my: 'M9 Shan Koe Mee apk guide covering Android install checks, app update flow, login setup and safety notes.',
      en: 'M9 Shan Koe Mee apk guide covering Android install checks, app update flow, login setup and safety notes.',
    },
    intro: {
      my: 'M9 Shan Koe Mee apk သည် volume နည်းသော်လည်း M9 login intent နှင့်နီးစပ်သော support page ဖြစ်သည်။ ဤစာမျက်နှာသည် M9 install/update flow ကို သီးခြားရှင်းပြပြီး login page ကိုအားပေးသော spoke page အဖြစ်သုံးသည်။',
      en: 'M9 Shan Koe Mee apk is a smaller keyword, but it supports M9 login intent. This page explains the M9 install and update flow and acts as a supporting spoke for the login guide.',
    },
    intent: {
      my: 'M9 Android install and update support',
      en: 'M9 Android install and update support',
    },
    ctaLabel: {
      my: 'M9 APK Platform ကြည့်ရန်',
      en: 'View M9 APK Platform',
    },
    ctaUrl: '/go/m62',
    sections: [
      {
        heading: { my: 'M9 APK install flow', en: 'M9 APK Install Flow' },
        body: {
          my: 'M9 apk ကို install မလုပ်ခင် Android version, storage space, browser download permission နှင့် package source ကိုစစ်ပါ။ Install ပြီးနောက် app ကို update လုပ်ရန် prompt ရှိမရှိကြည့်ပါ။',
          en: 'Before installing an M9 apk, check Android version, storage space, browser download permission and package source. After install, confirm whether the app requests an update.',
        },
        bullets: {
          my: ['Android version ကိုစစ်ပါ', 'Storage space လုံလောက်မှုစစ်ပါ', 'Package source ကိုမှတ်ထားပါ'],
          en: ['Check Android version', 'Confirm enough storage space', 'Record the package source'],
        },
      },
      {
        heading: { my: 'M9 APK နှင့် login page ချိတ်ဆက်မှု', en: 'How M9 APK Connects to Login' },
        body: {
          my: 'APK install အောင်မြင်သော်လည်း login မအောင်မြင်လျှင် app value မရှိပါ။ ထို့ကြောင့် APK page မှ login guide သို့သွားရန် internal link ကို ထည့်ထားပြီး user journey ကို ဆက်ထားသည်။',
          en: 'An apk install is not useful if login fails. This is why the apk page links directly to the login guide and keeps the user journey connected.',
        },
        bullets: {
          my: ['Install ပြီး login စမ်းပါ', 'OTP delivery စစ်ပါ', 'Wallet balance ပြသမှုစစ်ပါ'],
          en: ['Test login after install', 'Check OTP delivery', 'Confirm wallet balance display'],
        },
      },
      {
        heading: { my: 'M9 APK update လုပ်သင့်သည့်အချိန်', en: 'When to Update the M9 APK' },
        body: {
          my: 'Login error, table loading issue, payment page မဖွင့်ခြင်း သို့မဟုတ် app crash များကြုံပါက old apk ဖြစ်နိုင်သည်။ Update link မနှိပ်ခင် source တူမတူ၊ version number နှင့် permission ပြောင်းလဲမှုကို ပြန်စစ်သင့်သည်။',
          en: 'Login errors, table loading issues, broken payment pages or crashes can indicate an outdated apk. Before using an update link, confirm the source, version number and whether permissions have changed.',
        },
        bullets: {
          my: ['Update source ကို original install source နှင့်နှိုင်းယှဉ်ပါ', 'Permission အသစ်တောင်းခြင်းရှိမရှိစစ်ပါ', 'Update မလုပ်ခင် wallet status ကိုမှတ်ထားပါ'],
          en: ['Compare update source with the original install source', 'Check for new permission requests', 'Record wallet status before updating'],
        },
      },
    ],
    checklist: {
      my: ['APK package source သိမ်းပါ', 'Install permission ပြန်ပိတ်ပါ', 'M9 login ကိုချက်ချင်းစမ်းပါ', 'Wallet နှင့် withdrawal rule စစ်ပါ'],
      en: ['Keep note of apk package source', 'Turn install permission off again', 'Test M9 login immediately', 'Check wallet and withdrawal rules'],
    },
    faqs: [
      {
        question: { my: 'M9 Shan Koe Mee APK သည် login page နှင့်တူတူလား?', en: 'Is M9 Shan Koe Mee APK the same as the login page?' },
        answer: {
          my: 'မတူပါ။ APK သည် Android app install အတွက်ဖြစ်ပြီး login page သည် account access အတွက်ဖြစ်သည်။ Install အောင်မြင်သော်လည်း login မအောင်မြင်ပါက app ကိုအသုံးမပြုနိုင်ပါ။',
          en: 'No. The APK is for Android app installation, while the login page is for account access. If install works but login fails, the app is still not usable.',
        },
      },
      {
        question: { my: 'M9 APK update link ကို ဘယ်လိုစစ်မလဲ?', en: 'How do I check an M9 APK update link?' },
        answer: {
          my: 'Source domain, version number, update date, file name နှင့် permission request ကို original install source နှင့်နှိုင်းယှဉ်ပါ။ မတူညီမှုများစွာရှိလျှင် install မလုပ်သင့်ပါ။',
          en: 'Compare source domain, version number, update date, file name and permission requests against the original install source. Avoid installing if too many details differ.',
        },
      },
      {
        question: { my: 'M9 APK install ပြီး login မရရင် ဘာလုပ်ရမလဲ?', en: 'What if M9 APK installs but login still fails?' },
        answer: {
          my: 'App version, OTP, phone number, password reset နှင့် network ကိုစစ်ပါ။ Login မတည်ငြိမ်သေးလျှင် deposit မလုပ်ဘဲ support မှ account access ကိုအရင်ဖြေရှင်းပါ။',
          en: 'Check app version, OTP, phone number, password reset and network. If login remains unstable, solve account access through support before depositing.',
        },
      },
    ],
    related: ['m9-shan-koe-mee-login', 'shan-koe-mee-apk-download'],
  },
];

export const guideSlugs = shanGuides.map((guide) => guide.slug);

export function getShanGuide(slug: string) {
  return shanGuides.find((guide) => guide.slug === slug);
}
