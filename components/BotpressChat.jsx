import Script from "next/script";

export default function BotpressChat() {
  return (
    <>
      <Script
        id="botpress-webchat-inject"
        src="https://cdn.botpress.cloud/webchat/v3.6/inject.js"
        strategy="afterInteractive"
      />
      <Script
        id="botpress-webchat-config"
        src="https://files.bpcontent.cloud/2026/05/04/16/20260504161500-NRKER261.js"
        defer
        strategy="afterInteractive"
      />
    </>
  );
}
