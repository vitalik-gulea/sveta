"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "@/lib/i18n/locale-provider";

type FragmentDialogProps = {
  title: string | null;
  text: string | null;
  onClose: () => void;
};

const ease = [0.22, 1, 0.36, 1] as const;
const exitTransition = { duration: 0.2, ease };

const subscribe = () => () => {};

export function FragmentDialog({ title, text, onClose }: FragmentDialogProps) {
  const { t, locale } = useLocale();
  const reduceMotion = useReducedMotion();
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const open = title !== null && text !== null;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="fragment-dialog"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0, transition: { duration: 0.25, ease } },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.3, ease }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="fragment-dialog-title"
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-border bg-background text-foreground shadow-2xl"
            variants={
              reduceMotion
                ? {
                    hidden: { opacity: 0, transition: exitTransition },
                    visible: { opacity: 1 },
                  }
                : {
                    hidden: {
                      opacity: 0,
                      y: 32,
                      scale: 0.96,
                      transition: exitTransition,
                    },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }
            }
            transition={{ duration: 0.4, ease }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-8">
              <div>
                <motion.p
                  className="mb-1 text-xs font-medium uppercase tracking-wider text-primary"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: reduceMotion ? 0 : -8,
                      transition: exitTransition,
                    },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.35, ease, delay: 0.1 }}
                >
                  {t("plays.fragmentLabel")}
                </motion.p>
                <motion.h3
                  id="fragment-dialog-title"
                  className="font-serif text-xl font-semibold sm:text-2xl"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: reduceMotion ? 0 : -8,
                      transition: exitTransition,
                    },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.35, ease, delay: 0.15 }}
                >
                  {title}
                </motion.h3>
              </div>
              <motion.button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={t("plays.close")}
                whileHover={reduceMotion ? undefined : { rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                ×
              </motion.button>
            </div>

            <motion.div
              className="overflow-y-auto px-5 py-6 sm:px-8"
              variants={{
                hidden: {
                  opacity: 0,
                  y: reduceMotion ? 0 : 12,
                  transition: exitTransition,
                },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease, delay: 0.2 }}
            >
              {locale !== "ru" && (
                <p className="mb-5 rounded-md bg-primary/10 px-4 py-3 text-sm text-muted-foreground">
                  {t("plays.fragmentRuOnly")}
                </p>
              )}
              <div
                lang="ru"
                className="whitespace-pre-line text-sm leading-relaxed sm:text-base"
              >
                {text}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
