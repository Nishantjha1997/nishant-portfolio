"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const BACKDROP_STYLE_ID = "nishant-sylva-backdrop";

export function SylvaPortfolio() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);

  const prepareBackdrop = useCallback(() => {
    const frame = frameRef.current;
    const document = frame?.contentDocument;
    if (!frame || !document?.head) return;

    let style = document.getElementById(BACKDROP_STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = BACKDROP_STYLE_ID;
      style.textContent = `
        html, body, .hero { width: 100% !important; height: 100% !important; min-height: 100% !important; overflow: hidden !important; }
        .hero > *:not(#scene) { visibility: hidden !important; pointer-events: none !important; }
        #scene { position: fixed !important; inset: 0 !important; width: 100vw !important; height: 100vh !important; max-width: none !important; max-height: none !important; transform: none !important; }
      `;
      document.head.appendChild(style);
    }

    frame.contentWindow?.requestAnimationFrame(() => {
      frame.contentWindow?.dispatchEvent(new Event("resize"));
      setReady(true);
    });
  }, []);

  useEffect(() => {
    const forwardPointer = (event: PointerEvent) => {
      const view = frameRef.current?.contentWindow;
      if (!view) return;
      view.dispatchEvent(new PointerEvent("pointermove", {
        clientX: event.clientX,
        clientY: event.clientY,
        pointerType: event.pointerType,
      }));
    };

    window.addEventListener("pointermove", forwardPointer, { passive: true });
    return () => window.removeEventListener("pointermove", forwardPointer);
  }, []);

  return (
    <div className="sylva-backdrop" data-state={ready ? "ready" : "loading"} aria-hidden="true">
      <iframe
        ref={frameRef}
        title="Living moss landscape"
        src="/landing-pages/inner-green-3d.html"
        sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        loading="eager"
        onLoad={prepareBackdrop}
        tabIndex={-1}
      />
    </div>
  );
}
