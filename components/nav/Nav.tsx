"use client";

import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";
import PublicOutlined from "@mui/icons-material/PublicOutlined";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { useLocale } from "@/lib/i18n/locale-provider";

const tapSpring = { type: "spring" as const, stiffness: 520, damping: 28 };

const linkMotion = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.96 },
  transition: tapSpring,
};

const navLinks = [
  { href: "#home", key: "nav.home" as const },
  { href: "#about", key: "nav.about" as const },
  { href: "#about", key: "nav.books" as const },
  { href: "#about", key: "nav.services" as const },
];

export default function Nav() {
  const { t, toggleLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md sm:gap-4 sm:px-6 sm:py-4 lg:px-10 lg:py-6 xl:px-12 xl:py-8">
        <motion.h2
          className="min-w-0 shrink font-serif text-lg font-bold text-primary sm:text-xl md:text-2xl"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block truncate">{t("nav.brand")}</span>
        </motion.h2>

        <div className="hidden items-center gap-5 md:flex lg:gap-6">
          {navLinks.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="whitespace-nowrap text-sm text-foreground/90 hover:text-foreground lg:text-base"
            >
              <motion.span className="inline-block" {...linkMotion}>
                {t(key)}
              </motion.span>
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <motion.button
            type="button"
            onClick={toggleLocale}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={tapSpring}
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1.5 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
            aria-label={t("nav.language")}
          >
            <motion.span
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="inline-flex text-primary"
            >
              <PublicOutlined sx={{ fontSize: { xs: 20, sm: 22 } }} />
            </motion.span>
            <span>{t("nav.languageShort")}</span>
          </motion.button>
          <ThemeToggle />
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            whileTap={{ scale: 0.92 }}
            transition={tapSpring}
          >
            {menuOpen ? <Close sx={{ fontSize: 24 }} /> : <Menu sx={{ fontSize: 24 }} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-background/98 px-6 pt-18 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-col gap-1 border-t border-border pt-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                },
              }}
            >
              {navLinks.map(({ href, key }) => (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={href}
                    className="block rounded-lg py-3 text-lg text-foreground/95 active:bg-muted"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
