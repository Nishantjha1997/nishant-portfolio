import Link from "next/link";
import { Mark } from "./Mark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Nishant Jha home">
        <Mark small />
        <span>Nishant<br />Jha</span>
      </Link>
      <nav className="top-nav" aria-label="Primary navigation">
        <Link href="/#about"><span aria-hidden="true">⌁</span> About</Link>
        <Link href="/#work"><span aria-hidden="true">⌘</span> Work</Link>
        <Link href="/#experience"><span aria-hidden="true">◇</span> Experience</Link>
        <Link href="/resume"><span aria-hidden="true">▤</span> Résumé</Link>
        <Link className="nav-cta glass-button" href="/contact"><span aria-hidden="true">↗</span> Contact</Link>
      </nav>
    </header>
  );
}
