import { ImageResponse } from "next/og";

export const alt = "Nishant Jha - Founder's Office and AI automation portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#100f12", color: "#f4f0ea", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "72px" }}>
      <div style={{ color: "#ee5a4f", display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>Professional portfolio</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>Nishant Jha</div>
        <div style={{ color: "#aaa3a0", display: "flex", fontSize: 30 }}>Founder&apos;s Office · Executive operations · AI automation</div>
      </div>
      <div style={{ borderTop: "1px solid #4a4244", color: "#aaa3a0", display: "flex", fontSize: 20, paddingTop: 20 }}>nishant.top</div>
    </div>,
    { ...size },
  );
}
