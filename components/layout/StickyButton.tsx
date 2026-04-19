"use client";
import { useState, useEffect } from "react";
import { LINKS } from "@/lib/data";

export default function StickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-20 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={LINKS.calendly}
        className="bg-brand-gold text-brand-dark font-semibold text-sm px-5 py-3 rounded-sm shadow-xl hover:bg-brand-gold-light transition-colors duration-200 whitespace-nowrap"
      >
        Agenda tu diagnóstico
      </a>
    </div>
  );
}
