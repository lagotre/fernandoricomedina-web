"use client";
import { useState, useEffect } from "react";
import { LINKS } from "@/lib/data";

const navLinks = [
  { label: "Servicios",    href: "#servicios" },
  { label: "Diagnóstico",  href: "#diagnostico" },
  { label: "Metodología",  href: "#metodologia" },
  { label: "Sobre mí",     href: "#sobre-mi" },
  { label: "FAQ",          href: "#faq" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo / Name */}
        <a href="#" className="text-white font-display font-semibold text-lg tracking-tight">
          Fernando Rico<span className="text-brand-gold">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-brand-gold text-sm transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.calendly}
            className="bg-brand-gold text-brand-dark text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-brand-gold-light transition-colors duration-200"
          >
            Agenda tu diagnóstico
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark/98 border-t border-white/10 px-4 pb-6 pt-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-brand-gold py-3 text-sm border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.calendly}
            className="block mt-4 bg-brand-gold text-brand-dark text-center font-semibold px-5 py-3 rounded-sm text-sm"
          >
            Agenda tu diagnóstico
          </a>
        </div>
      )}
    </header>
  );
}
