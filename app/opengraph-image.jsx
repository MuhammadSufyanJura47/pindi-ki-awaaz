import { ImageResponse } from "next/og";

export const alt = "Pindi Ki Awaaz AI civic assistant for Rawalpindi";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #f7faf8 0%, #ffffff 48%, #fff3ed 100%)",
          color: "#10231a",
          padding: "70px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 650 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#14583d",
              fontSize: 28,
              fontWeight: 900,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                display: "flex",
                width: 64,
                height: 64,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                background: "#14583d",
                color: "white",
                fontSize: 22,
                fontWeight: 900,
              }}
            >
              PK
            </span>
            Pindi Ki Awaaz
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 0.98,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            AI civic assistant for Rawalpindi
          </div>

          <div
            style={{
              marginTop: 28,
              color: "#52665b",
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Public service guidance, complaint support, and department routing in one simple chat.
          </div>
        </div>

        <div
          style={{
            width: 340,
            display: "flex",
            flexDirection: "column",
            gap: 18,
            border: "1px solid #dce9e1",
            borderRadius: 24,
            background: "rgba(255,255,255,0.86)",
            padding: 24,
            boxShadow: "0 24px 70px rgba(16,35,26,0.12)",
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              maxWidth: 260,
              borderRadius: 18,
              background: "#eaf3ff",
              padding: "16px 18px",
              color: "#10231a",
              fontSize: 24,
              lineHeight: 1.25,
            }}
          >
            Which office handles street lighting?
          </div>
          <div
            style={{
              maxWidth: 282,
              borderRadius: 18,
              background: "#dff4e8",
              padding: "16px 18px",
              color: "#10231a",
              fontSize: 24,
              lineHeight: 1.25,
            }}
          >
            Start with municipal services and prepare location details.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#14583d",
              fontSize: 22,
              fontWeight: 900,
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#21835b",
              }}
            />
            Live guidance
          </div>
        </div>
      </div>
    ),
    size
  );
}
