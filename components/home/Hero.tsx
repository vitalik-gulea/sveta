"use client";

import ExpandMore from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-provider";

const tapSpring = { type: "spring" as const, stiffness: 520, damping: 28 };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { t } = useLocale();

  return (
    <div className="relative box-border flex h-screen flex-col items-center justify-center px-4 pb-24 pt-6 text-center sm:px-6 sm:pb-28 sm:pt-10">
      <motion.div
        className="flex w-full max-w-3xl flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-4 max-w-xl px-1 text-[0.65rem] font-medium uppercase leading-snug tracking-[0.22em] text-muted-foreground sm:mb-5 sm:text-[0.7rem] sm:tracking-[0.28em] md:text-xs md:tracking-[0.35em]"
        >
          {t("hero.roleLabel")}
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-5 max-w-[min(100%,20ch)] px-1 font-serif text-[clamp(1.75rem,8vw,4.5rem)] font-bold leading-[1.1] text-foreground sm:mb-6 sm:max-w-none md:text-6xl md:leading-[1.1] lg:text-7xl"
        >
          {t("nav.brand")}
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-8 max-w-lg px-1 text-[0.95rem] leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:text-lg md:leading-relaxed"
        >
          {t("hero.tagline")}
        </motion.p>
        <motion.div variants={item} className="w-full max-w-sm sm:max-w-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={tapSpring}
            className="w-full sm:inline-block sm:w-auto"
          >
            <Link
              href="#about"
              className="inline-flex w-full min-w-0 items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-40 sm:px-10 sm:text-base"
            >
              {t("hero.cta")}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 md:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.85, ease: "easeInOut" }}
        >
          <Link
            href="#about"
            aria-label={t("hero.scrollAria")}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExpandMore sx={{ fontSize: { xs: 32, sm: 40 }, color: "inherit" }} />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
