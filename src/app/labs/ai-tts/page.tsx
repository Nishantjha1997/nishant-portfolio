import type { Metadata } from "next";
import Link from "next/link";
import { SpeechLab } from "@/components/SpeechLab";

export const metadata: Metadata = {
  title: "AI Text-to-Speech Lab",
  description: "Try Nishant Jha's browser-based text-to-speech lab with local voices, adjustable speed and pitch, and privacy-friendly on-device playback.",
  alternates: { canonical: "/labs/ai-tts" },
  openGraph: {
    url: "/labs/ai-tts",
    title: "AI Text-to-Speech Lab by Nishant Jha",
    description: "A privacy-friendly browser speech lab with local voices and adjustable playback controls.",
  },
};

export default function AiTtsPage() {
  return <section className="page-shell lab-page"><Link className="back-link" href="/">← Back home</Link><p className="eyebrow">LAB / AUDIO INTERFACES</p><h1>Text to speech, made <em>useful.</em></h1><p className="detail-summary">A working browser speech lab for testing voice, pace, and pitch. Playback uses voices installed by your browser or operating system, so the text remains on your device.</p><SpeechLab /><div className="lab-notes"><article><span>01</span><h2>Local by default</h2><p>No account, API key, or server upload is required for browser speech playback.</p></article><article><span>02</span><h2>Honest capability</h2><p>Available voices and quality depend on the browser and operating system. This mode does not generate a downloadable audio file.</p></article><article><span>03</span><h2>Designed for iteration</h2><p>Voice, speed, and pitch controls make it practical to test narration before choosing a production synthesis service.</p></article></div></section>;
}
