import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['my', 'en'],
  defaultLocale: 'my',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
