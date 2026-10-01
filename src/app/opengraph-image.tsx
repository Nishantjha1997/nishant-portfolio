import { ImageResponse } from "next/og";

export const alt = "Nishant Jha - forward-deployed builder portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#30362f", color: "#f4f6ef", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "72px" }}>
      <div style={{ color: "#d9ff54", display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>Forward-deployed builder</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>Nishant Jha</div>
        <div style={{ color: "#cbd5c7", display: "flex", fontSize: 30 }}>AI adoption · Automation · Business intelligence</div>
      </div>
      <div style={{ borderTop: "1px solid #61705c", color: "#cbd5c7", display: "flex", fontSize: 20, paddingTop: 20 }}>nishant.top</div>
    </div>,
    { ...size },
  );
}
