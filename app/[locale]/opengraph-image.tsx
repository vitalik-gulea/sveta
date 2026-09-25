import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/dictionaries";
import { siteSeo } from "@/lib/i18n/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const seo = siteSeo[localeParam];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          backgroundColor: "#1a1810",
          padding: "80px 96px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a39d5f",
            display: "flex",
          }}
        >
          {seo.title.split(" — ")[1] ?? seo.title}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#f8f5e4",
            textAlign: "center",
            display: "flex",
          }}
        >
          {seo.title.split(" — ")[0]}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a39d5f",
            textAlign: "center",
            maxWidth: 860,
            display: "flex",
          }}
        >
          {seo.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
