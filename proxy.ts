import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LOCALE_COOKIE, LOCALE_COOKIE_MAX_AGE } from "@/lib/i18n/config";
import { detectLocaleFromAcceptLanguage } from "@/lib/i18n/detect-locale";
import { isLocale } from "@/lib/i18n/dictionaries";
import { parseLocale } from "@/lib/i18n/parse-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, firstSegment] = pathname.split("/");

  if (isLocale(firstSegment)) {
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, firstSegment, {
      path: "/",
      maxAge: LOCALE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
    return response;
  }

  const cookieLocale = parseLocale(request.cookies.get(LOCALE_COOKIE)?.value);
  const locale =
    cookieLocale ??
    detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: LOCALE_COOKIE_MAX_AGE,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
