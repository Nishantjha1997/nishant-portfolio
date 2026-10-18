"use client";

import { usePathname } from "next/navigation";
import { gsap, MOTION_QUERY, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { runScene, type MotionMedia } from "./scenes";

/** "(a), (b)" -> "motion and (a), motion and (b)", so viewport blocks also switch off with reduced motion. */
const withMotion = (query: string) => query.split(",").map((part) => `${MOTION_QUERY} and ${part.trim()}`).join(", ");

/** Runs the GSAP scene for the current route and reverts it on navigation/unmount/reduced motion. */
export function PageMotion() {
  const pathname = usePathname();

  useGSAP(() => {
    const main = document.querySelector<HTMLElement>("main");
    // One flat matchMedia: viewport-specific blocks are sibling contexts, never nested (see MotionMedia).
    const mm = gsap.matchMedia();
    let built = false;

    if (main) {
      mm.add(MOTION_QUERY, () => {
        const replay = built;
        // Sub-blocks are registered once; GSAP re-runs them itself when their query matches again.
        const media: MotionMedia = {
          add: (conditions, fn) => {
            if (replay) return;
            const query = typeof conditions === "string"
              ? withMotion(conditions)
              : Object.fromEntries(Object.entries(conditions).map(([key, value]) => [key, withMotion(value)]));
            mm.add(query, (context) => fn(context));
          },
        };
        built = true;
        return runScene(pathname, main, media, replay);
      });
    }

    // From-states are applied above, so the pre-hydration guard can be lifted without a flash.
    document.documentElement.classList.remove("motion-pending");
    ScrollTrigger.refresh();
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
