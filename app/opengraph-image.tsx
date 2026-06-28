import { ImageResponse } from "next/og";
import { SEO } from "@/lib/data";

export const alt = SEO.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B0F1A",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />

        <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: "#ffffff" }}>
          Fernando Rico<span style={{ color: "#C9A84C" }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#C9A84C",
              marginBottom: 24,
            }}
          >
            Estrategia Comercial · Marketing · Canales · IA
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 600,
              lineHeight: 1.25,
              color: "#ffffff",
            }}
          >
            {SEO.description}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 22, color: "rgba(255,255,255,0.5)" }}>
          fernandoricomedina.com
        </div>
      </div>
    ),
    { ...size }
  );
}
