import { TESTIMONIOS } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimoniosPreview() {
  const sample = TESTIMONIOS.items.slice(0, 2);

  return (
    <section id="testimonios" className="section-padding bg-brand-navy text-white">
      <div className="container-max">
        <div className="max-w-2xl mb-10">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{TESTIMONIOS.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            {TESTIMONIOS.headline}
          </h2>
          <span className="gold-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {sample.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>

        <a
          href="/testimonios#testimonios"
          className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:text-brand-gold-light transition-colors duration-200"
        >
          Ver los 5 testimonios →
        </a>
      </div>
    </section>
  );
}
