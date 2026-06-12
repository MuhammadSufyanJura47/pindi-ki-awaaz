import "./globals.css";
import BotpressChat from "@/components/BotpressChat";

const siteUrl = "https://pindi-ki-awaaz.vercel.app";
const siteName = "Pindi Ki Awaaz";
const siteDescription =
  "Pindi Ki Awaaz is an AI civic assistant for Rawalpindi citizens, helping with public services, complaint guidance, and department routing.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | AI Civic Assistant for Rawalpindi`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Muhammad Sufyan Jura" }],
  creator: "Muhammad Sufyan Jura",
  publisher: siteName,
  keywords: [
    "Pindi Ki Awaaz",
    "Rawalpindi civic assistant",
    "AI civic assistant",
    "citizen support Pakistan",
    "Rawalpindi complaint guidance",
    "public services Rawalpindi",
    "civic technology Pakistan",
    "Code for Pakistan Hackathon",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | AI Civic Assistant for Rawalpindi`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pindi Ki Awaaz AI civic assistant for Rawalpindi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI Civic Assistant for Rawalpindi`,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        alt: "Pindi Ki Awaaz AI civic assistant for Rawalpindi",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/logo.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/logo.png", type: "image/png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "civic technology",
};

export const viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7faf8" },
    { media: "(prefers-color-scheme: dark)", color: "#10231a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-PK">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <meta name="google-site-verification" content="sc6ncL0bz3HzCjxEjkxI0KNGGsNnXNWc9DzyZaQC-UU" />
      </head>
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        {children}
        <BotpressChat />
      </body>
    </html>
  );
}
