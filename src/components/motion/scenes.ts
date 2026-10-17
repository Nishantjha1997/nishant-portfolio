import { gsap, SplitText } from "@/lib/gsap";

/*
 * Route-level GSAP scenes. Every scene runs inside a gsap.matchMedia() context that only
 * matches when motion is allowed, so all tweens, ScrollTriggers and SplitText instances are
 * reverted automatically on route change, unmount, or when reduced motion is switched on.
 * Content is never hidden by CSS: initial states are applied by GSAP itself (from-tweens),
 * so if JavaScript fails the page renders fully visible.
 */

const EASE = "power3.out";
const REVEAL_START = "clamp(top 86%)";
// Keep CSS hover transitions from fighting GSAP while it writes inline transforms.
const CLEAR = "transform,opacity,visibility,transition";

type Targets = gsap.TweenTarget;

/**
 * Adds a viewport-specific block as a SIBLING matchMedia context (motion query is prepended by the
 * caller). Never create a gsap.matchMedia() inside another one: reverting the outer context kills the
 * inner one, which splices GSAP's global media list while GSAP is iterating it, so the next context
 * in that list is skipped and never reverted (content stayed hidden after switching to reduced motion).
 */
export type MotionMedia = { add: (conditions: string | Record<string, string>, fn: (context: gsap.Context) => void | (() => void)) => void };

const all = (selector: string, root: ParentNode = document) => Array.from(root.querySelectorAll<HTMLElement>(selector));

function splitWords(element: Element) {
  return SplitText.create(element, { type: "words", wordsClass: "motion-word" }).words;
}

/** Scroll-triggered reveal; one ScrollTrigger per group so siblings stagger together. */
function reveal(targets: Targets, trigger: Element, vars: gsap.TweenVars = {}) {
  const list = gsap.utils.toArray<HTMLElement>(targets);
  if (!list.length) return;
  gsap.set(list, { transition: "none" });
  gsap.from(list, {
    y: 44,
    autoAlpha: 0,
    duration: 0.95,
    ease: EASE,
    stagger: 0.08,
    clearProps: CLEAR,
    ...vars,
    scrollTrigger: { trigger, start: REVEAL_START, once: true },
  });
}

function revealHeading(heading: Element, vars: gsap.TweenVars = {}) {
  gsap.from(splitWords(heading), {
    yPercent: 70,
    autoAlpha: 0,
    rotate: 3,
    duration: 1,
    ease: "power4.out",
    stagger: 0.045,
    ...vars,
    scrollTrigger: { trigger: heading, start: REVEAL_START, once: true },
  });
}

/** Page-load entrance: staggers elements in order, splitting any h1 into words. */
// Intro timelines of the scene being built; finished instantly when the scene is rebuilt
// (e.g. reduced motion switched back off) so the page-load entrance doesn't replay.
let introTimelines: gsap.core.Timeline[] = [];

function intro(elements: Element[], delay = 0.15) {
  const tl = gsap.timeline({ defaults: { ease: EASE, duration: 0.9 }, delay });
  introTimelines.push(tl);
  elements.forEach((element, index) => {
    const position = index === 0 ? 0 : "-=0.72";
    if (element.matches("h1")) {
      tl.from(splitWords(element), { yPercent: 80, autoAlpha: 0, rotate: 4, duration: 1.1, ease: "power4.out", stagger: 0.05 }, position);
    } else {
      gsap.set(element, { transition: "none" });
      tl.from(element, { y: 28, autoAlpha: 0, clearProps: CLEAR }, position);
    }
  });
  return tl;
}

/** Animates "95%" → counts from 0; restores the original text on revert. */
function countUp(element: HTMLElement, trigger: Element) {
  const original = element.textContent ?? "";
  const match = original.match(/^(\d+)(\D*)$/);
  if (!match) return undefined;
  const target = Number(match[1]);
  const suffix = match[2];
  const counter = { value: 0 };
  gsap.to(counter, {
    value: target,
    duration: 1.6,
    ease: "power2.out",
    scrollTrigger: { trigger, start: REVEAL_START, once: true },
    onStart: () => element.setAttribute("aria-label", original),
    onUpdate: () => { element.textContent = `${Math.round(counter.value)}${suffix}`; },
    onComplete: () => element.removeAttribute("aria-label"),
  });
  element.textContent = `0${suffix}`;
  return () => {
    element.textContent = original;
    element.removeAttribute("aria-label");
  };
}

function homeScene(main: HTMLElement, mm: MotionMedia) {
  const cleanups: Array<() => void> = [];
  const hero = main.querySelector(".sylva-hero");

  // Hero entrance: copy first, then the floating specimen cards drift in.
  if (hero) {
    const tl = intro(all(".sylva-kicker, h1, .sylva-lede, .sylva-actions > *, .sylva-availability", hero));
    const cards = all(".sylva-hero-cards > *", hero);
    tl.from(cards, {
      y: 90,
      autoAlpha: 0,
      scale: 0.92,
      rotation: (index: number) => (index % 2 ? 5 : -5),
      duration: 1.3,
      ease: "expo.out",
      stagger: 0.12,
    }, 0.35);

    // Layered parallax as the hero scrolls away.
    mm.add("(min-width: 761px)", () => {
      const depth = [-10, -26, -48, -18];
      cards.forEach((card, index) => {
        gsap.to(card, {
          yPercent: depth[index % depth.length],
          ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
      gsap.to(hero.querySelector(".sylva-hero-copy"), {
        y: -70,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    });
  }

  // Slow push-in on the Three.js moss landscape while the page scrolls.
  const backdrop = main.querySelector(".sylva-backdrop iframe");
  if (backdrop) {
    gsap.fromTo(backdrop, { scale: 1 }, {
      scale: 1.14,
      transformOrigin: "50% 35%",
      ease: "none",
      scrollTrigger: { trigger: main, start: "top top", end: "bottom bottom", scrub: 1, refreshPriority: -1 },
    });
  }

  const impact = main.querySelector(".sylva-impact");
  if (impact) {
    reveal(all(":scope > article", impact), impact, { y: 36, stagger: 0.1 });
    all("strong", impact).forEach((value) => {
      const cleanup = countUp(value, impact);
      if (cleanup) cleanups.push(cleanup);
    });
  }

  // Section transitions: glass surfaces open up from an inset, rounded frame as they arrive.
  all(".sylva-section.glass-surface", main).forEach((surface) => {
    gsap.fromTo(surface,
      { clipPath: "inset(70px 36px 0px 36px round 40px)" },
      {
        clipPath: "inset(-120px -120px -120px -120px round 0px)",
        ease: "none",
        scrollTrigger: { trigger: surface, start: "top bottom", end: "top 30%", scrub: 0.5 },
      });
  });

  all(".sylva-section h2, .sylva-contact h2", main).forEach((heading) => revealHeading(heading));
  all(".sylva-index, .sylva-section-head > p, .sylva-prose", main).forEach((element) => reveal(element, element, { y: 24 }));

  const projectGrid = main.querySelector(".sylva-project-grid");
  if (projectGrid) {
    reveal(all(":scope > *", projectGrid), projectGrid, { y: 80, scale: 0.96, duration: 1.1, stagger: 0.12 });
    all(".card-art i", projectGrid).forEach((shape) => {
      gsap.fromTo(shape, { yPercent: -18 }, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: shape.closest(".project-card") ?? shape, start: "top bottom", end: "bottom top", scrub: true },
      });
    });
  }

  const moreHead = main.querySelector(".sylva-more-work-head");
  if (moreHead) reveal(all(":scope > *", moreHead), moreHead, { y: 30 });
  const moreGrid = main.querySelector(".sylva-more-work-grid");
  if (moreGrid) reveal(all(":scope > *", moreGrid), moreGrid, { x: -30, y: 0, stagger: 0.06 });

  const experience = main.querySelector(".sylva-experience-list");
  if (experience) {
    all(":scope > article", experience).forEach((item) => reveal(item, item, { x: -48, y: 0, duration: 1.05 }));
  }

  // Field kit: cards assemble while pinned on large screens; simple stagger elsewhere.
  const capabilityCards = main.querySelector<HTMLElement>(".capability-cards");
  if (capabilityCards) {
    const cards = all(":scope > article", capabilityCards);
    mm.add({
      pin: "(min-width: 1001px) and (min-height: 700px)",
      flow: "(max-width: 1000px), (max-height: 699px)",
    }, (context) => {
      if (context.conditions?.pin) {
        gsap.timeline({
          scrollTrigger: { trigger: capabilityCards, start: "center 55%", end: "+=90%", pin: true, scrub: 0.8, anticipatePin: 1 },
        }).from(cards, {
          yPercent: 55,
          autoAlpha: 0,
          scale: 0.9,
          rotation: (index: number) => (index - 1) * 6,
          ease: "power2.out",
          stagger: 0.35,
        });
      } else {
        reveal(cards, capabilityCards, { stagger: 0.12 });
      }
    });
  }

  all(".field-kit > article", main).forEach((article) => {
    reveal(article, article, { y: 36 });
    reveal(all("li", article), article, { y: 14, duration: 0.7, stagger: 0.05, delay: 0.2 });
  });

  const contact = main.querySelector(".sylva-contact");
  if (contact) {
    reveal(all(":scope > p:not(.sylva-index), .sylva-actions > *", contact), contact, { y: 26, stagger: 0.08, delay: 0.2 });
    gsap.fromTo(contact, { scale: 0.94 }, {
      scale: 1,
      ease: "none",
      scrollTrigger: { trigger: contact, start: "top bottom", end: "center center", scrub: 0.6 },
    });
  }

  return () => cleanups.forEach((cleanup) => cleanup());
}

function projectScene(main: HTMLElement) {
  const page = main.querySelector(".project-detail");
  if (!page) return;
  const heroBits = all(":scope > .back-link, .detail-hero > .eyebrow, .detail-hero > h1, .detail-summary, .detail-hero .tag-row > span", page);
  const tl = intro(heroBits);

  const art = page.querySelector<HTMLElement>(".detail-art");
  if (art) {
    tl.from(art, { clipPath: "inset(18% 18% 18% 18% round 30px)", autoAlpha: 0, duration: 1.4, ease: "expo.out", clearProps: "clipPath,opacity,visibility" }, 0.4);
    const monogram = art.querySelector("span");
    if (monogram) {
      tl.from(monogram, { scale: 0.6, autoAlpha: 0, rotate: -8, duration: 1.2, ease: "back.out(1.6)" }, 0.65);
      gsap.to(monogram, {
        yPercent: 40,
        rotate: 6,
        ease: "none",
        scrollTrigger: { trigger: art, start: "top 30%", end: "bottom top", scrub: 0.6 },
      });
    }
  }

  const content = page.querySelector(".detail-content");
  if (content) tl.from(content, { y: 50, autoAlpha: 0, duration: 1.1, clearProps: CLEAR }, 0.55);

  const facts = page.querySelector(".detail-facts");
  if (facts) reveal(all(":scope > div", facts), facts, { y: 24, stagger: 0.07, delay: 0.3 });
  const flow = page.querySelector(".case-flow");
  if (flow) reveal(all(":scope > *", flow), flow, { x: -26, y: 0, stagger: 0.08 });
  all(".case-block", page).forEach((block) => {
    reveal(all(":scope > h2, :scope > p", block), block, { y: 30 });
    reveal(all("li", block), block, { y: 18, duration: 0.75, stagger: 0.06, delay: 0.15 });
  });
  all(".case-study > .section-index, .case-disclosure, .detail-links > a", page).forEach((element) => reveal(element, element, { y: 20 }));
}

function resumeScene(main: HTMLElement) {
  const page = main.querySelector(".resume-page");
  if (!page) return;
  intro(all(":scope > .back-link, :scope > .eyebrow, :scope > h1, :scope > .detail-summary, :scope > .resume-panel", page));

  all(".resume-section", page).forEach((section) => {
    const heading = section.querySelector("h2");
    reveal(all(":scope > .section-index", section), section, { y: 18 });
    if (heading) revealHeading(heading);
  });
  all(".experience-item", page).forEach((item) => reveal(item, item, { y: 50, duration: 1.05 }));
  all(".strengths-grid", page).forEach((grid) => {
    reveal(all(":scope > div", grid), grid, { stagger: 0.12 });
    reveal(all("li", grid), grid, { y: 14, duration: 0.7, stagger: 0.04, delay: 0.25 });
  });
  all(".resume-projects li, .resume-projects .text-link, .fine-print", page).forEach((element) => reveal(element, element, { y: 26 }));
}

function simpleScene(main: HTMLElement, selector: string, deferred: string) {
  const page = main.querySelector(selector);
  if (!page) return;
  const children = Array.from(page.children).filter((child) => !child.matches(`script, ${deferred}`));
  intro(children);
  all(deferred, page).forEach((group) => reveal(Array.from(group.children), group, { y: 40, stagger: 0.12 }));
}

export function runScene(pathname: string, main: HTMLElement, mm: MotionMedia, replay: boolean) {
  introTimelines = [];
  const cleanup = buildScene(pathname, main, mm);
  if (replay) introTimelines.forEach((tl) => tl.progress(1));
  introTimelines = [];
  return cleanup;
}

function buildScene(pathname: string, main: HTMLElement, mm: MotionMedia) {
  if (pathname === "/") return homeScene(main, mm);
  if (pathname.startsWith("/work/")) return projectScene(main);
  if (pathname === "/resume") return resumeScene(main);
  if (pathname === "/contact") return simpleScene(main, ".contact-page", ".contact-links");
  if (pathname.startsWith("/labs/")) return simpleScene(main, ".lab-page", ".lab-notes");
  return undefined;
}
