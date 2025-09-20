import ErrorBoundary from '@/components/ErrorBoundary';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Navbar/navbar';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import { ThemeProvider } from '@/components/ThemeProvider';
// import StickyNavbar from '@/components/StickyNavbar/sticky-navbar';
import { getMessages } from '@/i18n/request';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Source_Sans_3 } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Organization Management System',
  description: 'Organization Management System',
};
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sourceSans.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary>
              <div className=' overflow-x-hidden'>
                <Navbar />
                {/* <StickyNavbar /> */}
                {children}
                <Footer />
                {/* <PerformanceMonitor /> */}
              </div>
            </ErrorBoundary>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
