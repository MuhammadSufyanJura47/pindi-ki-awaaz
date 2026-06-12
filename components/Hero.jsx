import Image from "next/image";

const assistantUrl =
  "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/04/16/20260504161500-11DR38KS.json";

const mapPins = [
  { label: "Saddar", x: "76%", y: "56%", delay: "0s" },
  { label: "Committee Chowk", x: "68%", y: "47%", delay: "0.8s" },
  { label: "Raja Bazaar", x: "72%", y: "66%", delay: "1.6s" },
  { label: "Commercial Market", x: "86%", y: "42%", delay: "2.4s" },
];

const mapTiles = [
  "5756-3283",
  "5757-3283",
  "5758-3283",
  "5756-3284",
  "5757-3284",
  "5758-3284",
  "5756-3285",
  "5757-3285",
  "5758-3285",
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="heroMapLayer" aria-hidden="true">
          <div className="heroTileMap">
            {mapTiles.map((tile) => (
              <Image
                alt=""
                height="256"
                key={tile}
                sizes="(max-width: 640px) 54vw, 24vw"
                src={`/map/rawalpindi-13-${tile}.png`}
                width="256"
              />
            ))}
          </div>
          <div className="mapWash" />
          <div className="scanCrosshair">
            <span />
            <span />
          </div>
          {mapPins.map((pin) => (
            <span
              className="mapPin"
              key={pin.label}
              style={{
                "--pin-x": pin.x,
                "--pin-y": pin.y,
                "--pin-delay": pin.delay,
              }}
            />
          ))}
        </div>
        <a
          className="mapAttribution"
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noreferrer"
        >
          &copy; OpenStreetMap contributors
        </a>

        <div className="heroContent">
          <p className="eyebrow">AI for Civic Innovation Hackathon 2026</p>

          <h1 id="hero-title">Pindi Ki Awaaz</h1>

          <p>
            An AI civic assistant for Rawalpindi that helps citizens understand
            public services, complaint steps, relevant departments, and practical
            next actions.
          </p>

          <div className="heroActions">
            <a href={assistantUrl} className="btnPrimary" target="_blank" rel="noreferrer">
              Ask the Assistant
            </a>
            <a href="#features" className="btnSecondary">Explore Features</a>
          </div>
        </div>
      </section>
    </>
  );
}
