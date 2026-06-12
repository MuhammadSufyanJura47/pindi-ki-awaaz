import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

const siteUrl = "https://pindi-ki-awaaz.app";
const assistantUrl =
  "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/04/16/20260504161500-11DR38KS.json";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pindi Ki Awaaz",
    url: siteUrl,
    description:
      "AI civic assistant for Rawalpindi citizens seeking public-service guidance and complaint support.",
    inLanguage: "en-PK",
    potentialAction: {
      "@type": "InteractAction",
      name: "Ask the AI civic assistant",
      target: assistantUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Pindi Ki Awaaz",
    applicationCategory: "Civic technology",
    operatingSystem: "Web",
    url: siteUrl,
    description:
      "A web-based AI assistant that helps Rawalpindi citizens understand civic departments, complaint steps, and public-service guidance.",
    creator: {
      "@type": "Person",
      name: "Muhammad Sufyan Jura",
    },
    areaServed: {
      "@type": "City",
      name: "Rawalpindi",
      addressCountry: "PK",
    },
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  );
}
