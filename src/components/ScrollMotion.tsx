"use client";

import { useEffect, useRef } from "react";

export function ScrollMotion() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    if (prefersReducedMotion) {
      revealNodes.forEach((node) => node.classList.add("is-revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -9% 0px" },
      );

      revealNodes.forEach((node, index) => {
        if (node.dataset.reveal === "item") {
          node.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
        }
        observer.observe(node);
      });

      const updateProgress = () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
          progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
        });
      };

      updateProgress();
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress, { passive: true });

      return () => {
        observer.disconnect();
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", updateProgress);
        window.removeEventListener("resize", updateProgress);
      };
    }

    return undefined;
  }, []);

  return <div className="scroll-progress-rail" aria-hidden="true"><span ref={progressRef} /></div>;
}
