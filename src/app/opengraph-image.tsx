import { ImageResponse } from "next/og";

export const alt = "Nishant Jha - Executive operations and AI automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#100f12", color: "#f4f0ea", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "72px" }}>
      <div style={{ color: "#ee5a4f", display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>Nishant Jha - Portfolio</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Executive operations<br />and AI automation.</div>
        <div style={{ color: "#aaa3a0", display: "flex", fontSize: 28 }}>Founder&apos;s Office - Digital products - Systems that move work forward</div>
      </div>
      <div style={{ borderTop: "1px solid #4a4244", color: "#aaa3a0", display: "flex", fontSize: 20, paddingTop: 20 }}>nishant.top</div>
    </div>,
    { ...size },
  );
}
