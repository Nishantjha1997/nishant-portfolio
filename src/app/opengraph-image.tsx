import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { preview, previewImage } from "@/lib/seo";

export const alt = preview.imageAlt;
export const size = { width: previewImage.width, height: previewImage.height };
export const contentType = "image/png";

/*
 * Link-preview image: "messy problems in, working systems out" as a picture.
 * Built to stay crisp when a platform shrinks it to a thumbnail:
 * - few, bold shapes and heavy type, with no small text;
 * - everything inside the middle 630px, because small previews crop the sides;
 * - laid out on a 1200×630 grid but drawn at double resolution.
 */
const C = { bg: "#252c23", acid: "#d9ff54", cream: "#edf0e8", muted: "#c3cdbd", ink: "#222820" };
const W = 1200;
const S = size.width / W;
const u = (value: number) => value * S;

/** A tangled scribble that leaves to the right as a clean line. */
function tangle(cx: number, cy: number, rx: number, ry: number, exitX: number) {
  const points: string[] = [];
  const steps = 320;
  let x = 0;
  let y = 0;
  for (let i = 0; i <= steps; i += 1) {
    const a = (i / steps) * Math.PI * 2;
    x = cx + rx * (0.6 * Math.sin(5 * a + 0.4) + 0.4 * Math.sin(9 * a + 1.7));
    y = cy + ry * (0.6 * Math.cos(4 * a + 1.1) + 0.4 * Math.sin(7 * a + 0.2));
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `${points.join(" ")} C${(x + 46).toFixed(1)} ${y.toFixed(1)} ${exitX - 64} ${cy} ${exitX} ${cy}`;
}

const row = (top: number, extra: React.CSSProperties = {}): React.CSSProperties => ({ position: "absolute", top: u(top), left: 0, width: u(W), display: "flex", justifyContent: "center", alignItems: "center", ...extra });

export default async function OpenGraphImage() {
  // The site's own typeface (Lexend, SIL Open Font License; see src/app/fonts/OFL.txt).
  const [medium, extraBold] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/Lexend-500.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Lexend-800.ttf")),
  ]);
  const cy = 120;
  const boxes = [570, 692, 814];
  const box = 96;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: C.bg, color: C.cream, fontFamily: "Lexend" }}>
      <div style={row(54, { fontSize: u(96), fontWeight: 800, letterSpacing: u(-3) })}>Nishant Jha</div>
      <svg width={u(W)} height={u(240)} viewBox={`0 0 ${W} 240`} style={{ position: "absolute", top: u(192), left: 0 }}>
        <path d={tangle(402, cy, 112, 98, boxes[0])} fill="none" stroke={C.muted} strokeWidth={7.5} strokeLinecap="round" strokeLinejoin="round" />
        <line x1={boxes[0]} y1={cy} x2={boxes[2] + box / 2} y2={cy} stroke={C.acid} strokeWidth={9} />
        {boxes.map((x) => (
          <g key={x}>
            <rect x={x} y={cy - box / 2} width={box} height={box} rx={24} fill={C.acid} />
            <path d={`M${x + 27} ${cy + 3} l15 15 l28 -33`} fill="none" stroke={C.ink} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
      </svg>
      <div style={row(442, { flexDirection: "column", fontSize: u(46), lineHeight: 1.2 })}>
        <div style={{ display: "flex", fontWeight: 500, color: C.muted }}>Messy problems in.</div>
        <div style={{ display: "flex", fontWeight: 800 }}>Working systems out.</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Lexend", data: medium, weight: 500, style: "normal" },
        { name: "Lexend", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
