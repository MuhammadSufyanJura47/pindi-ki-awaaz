const siteUrl = "https://www.pindi-ki-awaaz.app";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
