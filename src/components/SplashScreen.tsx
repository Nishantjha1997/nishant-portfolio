"use client";

import { useEffect, useState } from "react";

const buildStages = [
  { code: "01 / OBSERVE", label: "mapping the problem" },
  { code: "02 / FRAME", label: "finding the signal" },
  { code: "03 / BUILD", label: "shaping the system" },
  { code: "04 / SHIP", label: "making it useful" },
];

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stageTimer = prefersReducedMotion
      ? undefined
      : window.setInterval(() => {
          setStage((current) => Math.min(current + 1, buildStages.length - 1));
        }, 470);
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), prefersReducedMotion ? 280 : 1720);
    const hideTimer = window.setTimeout(() => setIsVisible(false), prefersReducedMotion ? 560 : 2260);

    return () => {
      if (stageTimer) window.clearInterval(stageTimer);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  const dismiss = () => {
    setIsLeaving(true);
    window.setTimeout(() => setIsVisible(false), 620);
  };

  if (!isVisible) return null;

  const currentStage = buildStages[stage];
  const progress = ((stage + 1) / buildStages.length) * 100;

  return (
    <div
      className={`splash-screen${isLeaving ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Nishant Jha's portfolio"
    >
      <div className="splash-grid" aria-hidden="true" />
      <div className="splash-glow splash-glow-one" aria-hidden="true" />
      <div className="splash-glow splash-glow-two" aria-hidden="true" />

      <header className="splash-topline">
        <span className="splash-kicker">Nishant Jha / personal systems</span>
        <span className="splash-index">{currentStage.code}</span>
      </header>

      <div className="splash-stage">
        <div className="splash-orbit" aria-hidden="true">
          <span className="splash-orbit-ring splash-orbit-ring-one" />
          <span className="splash-orbit-ring splash-orbit-ring-two" />
          <span className="splash-orbit-dot" />
          <span className="splash-orbit-cross splash-orbit-cross-one" />
          <span className="splash-orbit-cross splash-orbit-cross-two" />
          <div className="splash-monogram">
            <span>N</span>
            <span>J</span>
          </div>
        </div>

        <p className="splash-signal">Founder&apos;s Office <span>×</span> AI automation <span>×</span> thoughtful products</p>
        <h1>Making <em>complex</em> things move.</h1>
        <p className="splash-status"><i /> {currentStage.label}</p>
      </div>

      <footer className="splash-bottomline">
        <div className="splash-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <span className="splash-manifesto">curiosity → clarity → momentum</span>
        <button className="splash-skip" type="button" onClick={dismiss}>skip intro</button>
      </footer>
    </div>
  );
}
