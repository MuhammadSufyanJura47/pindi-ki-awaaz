const siteUrl = "https://pindi-ki-awaaz.vercel.app";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-12T00:00:00+05:00"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/opengraph-image`],
    },
  ];
}
