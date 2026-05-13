import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedRoles } from "./components/FeaturedRoles";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { siteName } from "./data";

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-stage-black py-10 text-center">
      <p className="font-sans text-xs text-stage-cream-muted">
        © {new Date().getFullYear()} {siteName}. Crafted for the theater.
      </p>
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
