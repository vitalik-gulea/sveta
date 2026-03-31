import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { Inter, Playfair_Display } from "next/font/google";
import { getLocaleServer } from "@/lib/i18n/get-locale-server";
import { LocaleProvider } from "@/lib/i18n/locale-provider";
import { siteSeo } from "@/lib/i18n/seo";
import { ThemeProvider } from "../components/theme/theme-provider";
import "./globals.css";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleServer();
  const seo = siteSeo[locale];
  const base = siteBaseUrl();

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    metadataBase: new URL(base),
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        ru: "/",
      },
    },
    openGraph: {
      type: "website",
      title: seo.title,
      description: seo.description,
      locale: locale === "ru" ? "ru_RU" : "en_US",
      alternateLocale: locale === "ru" ? ["en_US"] : ["ru_RU"],
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleServer();

  return (
    <html
      lang={locale === "ru" ? "ru" : "en"}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col font-sans">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider>
            <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
