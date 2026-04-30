import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const runtime = "nodejs";
export const alt = `${site.name} — Bathroom remodeling in Auburn, CA`;
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
          background:
            "linear-gradient(135deg, #2f5d50 0%, #23483e 55%, #7a9e8e 100%)",
          padding: "80px",
          color: "#FAFAF7",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: "#FAFAF7",
              color: "#2f5d50",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 30, letterSpacing: -0.5 }}>Auburn Bath</div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 920,
            }}
          >
            Bathroom Remodeling in Auburn, CA
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: 880,
              opacity: 0.92,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Custom bathrooms, walk-in showers, and tub-to-shower conversions
            for Auburn and the Placer County foothills.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "system-ui, sans-serif",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              opacity: 0.85,
              marginTop: 10,
            }}
          >
            <div style={{ width: 36, height: 1, background: "#FAFAF7" }} />
            A local brand of Oakwood Remodeling Group
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
