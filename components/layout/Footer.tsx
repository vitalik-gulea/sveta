"use client";

import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import type { MessageKey } from "@/lib/i18n/dictionaries";
import { InstagramIcon, TelegramIcon } from "@/components/icons/SocialIcons";

const socialLinks: {
  key: MessageKey;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    key: "social.telegram",
    href: "https://t.me/+FpWzanyW99JkNjIy",
    Icon: TelegramIcon,
  },
  {
    key: "social.instagram",
    href: "https://www.instagram.com/mokan_sveta",
    Icon: InstagramIcon,
  },
];

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary px-4 pt-12 pb-8 text-primary-foreground sm:px-6 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-serif text-2xl font-bold sm:text-3xl">
            {t("nav.brand")}
          </h3>
          <p className="text-sm text-primary-foreground/80 sm:text-base">
            {t("hero.tagline")}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <h4 className="text-base font-semibold sm:text-lg">
            {t("footer.contact")}
          </h4>
          <div className="flex gap-4">
            {socialLinks.map(({ key, href, Icon }) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(key)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
        © {year} {t("nav.brand")}. {t("footer.rights")}
      </div>
    </footer>
  );
}
