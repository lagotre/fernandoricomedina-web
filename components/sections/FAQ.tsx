"use client";
import { useState } from "react";
import { FAQ as FAQData, LINKS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Preguntas frecuentes</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight">
            Lo que más preguntan antes de agendar.
          </h2>
          <span className="gold-line" />
        </div>

        {/* Accordion */}
        <div className="max-w-3xl space-y-2">
          {FAQData.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-brand-navy pr-4">{item.q}</span>
                <span
                  className={`text-brand-gold text-xl font-light flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-brand-muted leading-relaxed border-t border-gray-50 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-14 bg-brand-navy text-white rounded-sm p-8 md:p-10 max-w-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-lg mb-1">¿Tienes otra pregunta?</p>
            <p className="text-white/60 text-sm">Escríbeme directamente. Respondo en menos de 24 horas.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold px-5 py-3 rounded-sm text-sm hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
            <a
              href={LINKS.email}
              className="border border-white/20 text-white/80 font-semibold px-5 py-3 rounded-sm text-sm hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
