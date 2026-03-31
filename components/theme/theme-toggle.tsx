"use client";

import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";

const tapSpring = { type: "spring" as const, stiffness: 520, damping: 28 };

export function ThemeToggle() {
  const { t } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const ariaLabel = mounted
    ? isDark
      ? t("theme.ariaLight")
      : t("theme.ariaDark")
    : t("theme.ariaToggle");

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.88 }}
      transition={tapSpring}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={ariaLabel}
    >
      {mounted ? (
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ rotate: -40, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="inline-flex"
        >
          {isDark ? (
            <LightModeOutlined sx={{ fontSize: 22 }} className="text-foreground" />
          ) : (
            <DarkModeOutlined sx={{ fontSize: 22 }} className="text-foreground" />
          )}
        </motion.span>
      ) : (
        <span className="h-[22px] w-[22px]" />
      )}
    </motion.button>
  );
}
