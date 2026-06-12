import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10231a 0%, #21835b 64%, #e6a72f 100%)",
        }}
      >
        <div
          style={{
            width: 126,
            height: 126,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 28,
            background: "rgba(255,255,255,0.16)",
            color: "white",
            fontSize: 54,
            fontWeight: 900,
            letterSpacing: 0,
          }}
        >
          PK
        </div>
      </div>
    ),
    size
  );
}
