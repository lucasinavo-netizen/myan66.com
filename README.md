# Myanmar Casino Hub 🎰

Myanmar online casino affiliate SEO site built with Next.js 14 + Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router + SSG)
- **Styling**: Tailwind CSS
- **i18n**: next-intl (`/my/` Myanmar + `/en/` English)
- **SEO**: next-sitemap (auto-generated sitemap + robots.txt)
- **Deploy**: Vercel

## Pages
| Route | Description |
|-------|-------------|
| `/[locale]/` | Homepage |
| `/[locale]/online-casinos-myanmar` | Casino listing |
| `/[locale]/best-online-casinos-myanmar` | Top rated |
| `/[locale]/trusted-casino-sites-myanmar` | Licensed casinos |
| `/[locale]/live-casino-sites-myanmar` | Live dealer |
| `/[locale]/mobile-casinos-myanmar` | Mobile casinos |
| `/[locale]/fast-withdrawal-casinos-myanmar` | Fast payouts |
| `/[locale]/best-welcome-bonuses-myanmar` | Welcome bonuses |
| `/[locale]/casino-reviews` | Review index |
| `/[locale]/casino-reviews/[slug]` | Individual review |
| `/[locale]/casino-payment-methods-myanmar` | Payment guide |
| `/[locale]/casino-bonus-terms-guide` | Bonus terms guide |
| `/[locale]/responsible-gambling` | Responsible gambling |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/my](http://localhost:3000/my)

## Add a Casino
Edit `data/casinos.ts` and add a new entry to the `casinos` array.

## Change Domain
1. Update `SITE_URL` in Vercel environment variables
2. Update `metadataBase` in `app/layout.tsx`
3. Update `alternateRefs` in `next-sitemap.config.js`

## Deploy to Vercel
```bash
git init
git add .
git commit -m "initial commit"
# Push to GitHub, then import in vercel.com
```

Or via Vercel CLI:
```bash
npm i -g vercel
vercel
```

## SEO Checklist
- [ ] Replace `yourdomain.com` with actual domain
- [ ] Add real casino logos to `public/images/`
- [ ] Update affiliate links in `data/casinos.ts`
- [ ] Add Google Analytics / GTM
- [ ] Submit sitemap to Google Search Console
