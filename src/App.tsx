import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedRoles } from "./components/FeaturedRoles";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { photoCredits, siteName } from "./data";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-stage-black py-10 text-center">
      <div className="mx-auto max-w-md px-6">
        <p className="font-sans text-xs tracking-[0.12em] text-stage-cream-muted">
          Photography by {photoCredits.default}
        </p>
        {photoCredits.exceptions.map((credit) => (
          <p
            key={credit.play}
            className="mt-2 font-sans text-[11px] leading-relaxed text-stage-cream-muted/70"
          >
            {credit.play} — {credit.photographer}
          </p>
        ))}
        <p className="mt-5 font-sans text-xs text-stage-cream-muted/50">
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-stage-cream focus:px-4 focus:py-2 focus:text-stage-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <FeaturedRoles />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
