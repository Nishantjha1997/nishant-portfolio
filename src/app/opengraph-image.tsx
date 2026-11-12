import { ImageResponse } from "next/og";
import { preview } from "@/lib/seo";

export const alt = preview.imageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Everything is centred and kept inside the middle of the canvas: small link previews
// (LinkedIn, WhatsApp) crop the sides of the image, so nothing important may sit near an edge.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#30362f", color: "#f4f6ef", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "64px 0", width: "100%" }}>
      <div style={{ color: "#d9ff54", display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>AI adoption lead</div>
      <div style={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 26 }}>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>Nishant Jha</div>
        <div style={{ color: "#cbd5c7", display: "flex", flexDirection: "column", alignItems: "center", fontSize: 36, lineHeight: 1.3 }}>
          <span>I turn messy problems</span>
          <span>into working systems.</span>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #61705c", color: "#cbd5c7", display: "flex", fontSize: 22, justifyContent: "center", paddingTop: 20, width: 360 }}>nishant.top</div>
    </div>,
    { ...size },
  );
}
