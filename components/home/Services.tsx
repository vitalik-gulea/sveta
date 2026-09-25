"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { useLocale } from "@/lib/i18n/locale-provider";
import type { MessageKey } from "@/lib/i18n/dictionaries";
import {
  CreativeWritingIcon,
  CustomPoetryIcon,
  ScreenwritingIcon,
  TheatricalProductionsIcon,
} from "@/components/icons/ServiceIcons";

const services: {
  titleKey: MessageKey;
  descriptionKey: MessageKey;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  {
    titleKey: "services.item1.title",
    descriptionKey: "services.item1.description",
    Icon: CustomPoetryIcon,
  },
  {
    titleKey: "services.item2.title",
    descriptionKey: "services.item2.description",
    Icon: ScreenwritingIcon,
  },
  {
    titleKey: "services.item3.title",
    descriptionKey: "services.item3.description",
    Icon: TheatricalProductionsIcon,
  },
  {
    titleKey: "services.item4.title",
    descriptionKey: "services.item4.description",
    Icon: CreativeWritingIcon,
  },
];

export function Services() {
  const { t } = useLocale();

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
      >
        <h2 className="mb-4 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          {t("services.heading")}
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="text-base text-muted-foreground sm:text-lg">
          {t("services.subtitle")}
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ titleKey, descriptionKey, Icon }, index) => (
          <motion.div
            key={titleKey}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.08,
            }}
            className="rounded-lg border border-border bg-background px-8 py-8 text-center shadow-sm"
          >
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="size-8 text-primary" />
            </div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground sm:text-xl">
              {t(titleKey)}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t(descriptionKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
