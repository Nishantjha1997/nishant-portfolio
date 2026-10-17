"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, MOTION_QUERY, REDUCED_MOTION_QUERY, ScrollTrigger, useGSAP } from "@/lib/gsap";

function hashTarget(hash: string) {
  if (!hash || hash === "#") return null;
  return document.getElementById(decodeURIComponent(hash.slice(1)));
}

/**
 * Lenis smooth scrolling driven by the GSAP ticker and synced with ScrollTrigger.
 * Disabled entirely when the visitor prefers reduced motion (native scrolling is used).
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const isFirstRoute = useRef(true);
  const isHistoryNavigation = useRef(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let tick: ((time: number) => void) | null = null;

    const start = () => {
      if (lenisRef.current) return;
      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 1,
        autoRaf: false,
        prevent: (node) => node.nodeName === "TEXTAREA" || node.nodeName === "SELECT",
      });
      lenis.on("scroll", ScrollTrigger.update);
      tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      lenisRef.current = lenis;
    };

    const stop = () => {
      if (tick) gsap.ticker.remove(tick);
      tick = null;
      lenisRef.current?.destroy();
      lenisRef.current = null;
      gsap.ticker.lagSmoothing(500, 33);
    };

    const sync = () => {
      if (reducedMotion.matches) stop();
      else start();
      ScrollTrigger.refresh();
    };

    // Smoothly scroll same-page hash links (e.g. "#work") with Lenis instead of a native jump.
    const onClick = (event: MouseEvent) => {
      const lenis = lenisRef.current;
      if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement) || (anchor.target && anchor.target !== "_self") || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = hashTarget(url.hash);
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      lenis.scrollTo(target);
      if (url.hash !== window.location.hash) window.history.pushState(null, "", url.hash);
    };

    const onPopState = () => {
      isHistoryNavigation.current = true;
    };

    const onFontsReady = () => ScrollTrigger.refresh();

    sync();
    reducedMotion.addEventListener("change", sync);
    window.addEventListener("click", onClick, { capture: true });
    window.addEventListener("popstate", onPopState);
    document.fonts?.ready.then(onFontsReady).catch(() => undefined);

    return () => {
      reducedMotion.removeEventListener("change", sync);
      window.removeEventListener("click", onClick, { capture: true });
      window.removeEventListener("popstate", onPopState);
      stop();
    };
  }, []);

  // Reset scroll on client-side navigation and recalculate every ScrollTrigger for the new page.
  useEffect(() => {
    if (isFirstRoute.current) {
      isFirstRoute.current = false;
      return;
    }

    const lenis = lenisRef.current;
    if (isHistoryNavigation.current) {
      // Let the browser/Next.js restore the previous scroll position on back/forward.
      isHistoryNavigation.current = false;
      lenis?.resize();
    } else {
      const target = hashTarget(window.location.hash);
      if (lenis) lenis.scrollTo(target ?? 0, { immediate: true, force: true });
      else if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    }

    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Reading-progress rail and a one-time entrance for the floating header dock.
  useGSAP(() => {
    const progress = progressRef.current;
    if (progress) {
      gsap.to(progress, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: true, refreshPriority: -1 },
      });
    }

    gsap.matchMedia().add(MOTION_QUERY, () => {
      gsap.from(".site-header > .brand, .site-header .top-nav > a", {
        y: -18,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
        clearProps: "transform,opacity,visibility",
      });
    });
  });

  return <div className="scroll-progress-rail" aria-hidden="true"><span ref={progressRef} /></div>;
}
