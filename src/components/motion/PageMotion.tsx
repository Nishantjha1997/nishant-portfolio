"use client";

import { usePathname } from "next/navigation";
import { gsap, MOTION_QUERY, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { runScene } from "./scenes";

/** Runs the GSAP scene for the current route and reverts it on navigation/unmount. */
export function PageMotion() {
  const pathname = usePathname();

  useGSAP(() => {
    const main = document.querySelector<HTMLElement>("main");
    const mm = gsap.matchMedia();

    if (main) mm.add(MOTION_QUERY, () => runScene(pathname, main));

    // From-states are applied above, so the pre-hydration guard can be lifted without a flash.
    document.documentElement.classList.remove("motion-pending");
    ScrollTrigger.refresh();
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
