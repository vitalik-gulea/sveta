import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { dictionaries, isLocale, locales } from "@/lib/i18n/dictionaries";
import { LocaleProvider } from "@/lib/i18n/locale-provider";
import { ogLocaleMap, siteSeo } from "@/lib/i18n/seo";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

function siteBaseUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<LayoutParams>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam;
  const seo = siteSeo[locale];
  const base = siteBaseUrl();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    applicationName: siteSeo.en.title,
    metadataBase: new URL(base),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
        ro: "/ro",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
      siteName: siteSeo[locale].title,
      locale: ogLocaleMap[locale],
      alternateLocale: Object.entries(ogLocaleMap)
        .filter(([key]) => key !== locale)
        .map(([, value]) => value),
      url: `/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<LayoutParams>;
}>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam;
  const seo = siteSeo[locale];
  const base = siteBaseUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: dictionaries[locale]["nav.brand"],
    jobTitle: seo.title,
    description: seo.description,
    url: `${base}/${locale}`,
    "@id": `${base}/#person`,
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans">
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider>
            <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
