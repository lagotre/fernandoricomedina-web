import { TESTIMONIOS, LINKS } from "@/lib/data";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonios() {
  return (
    <section id="testimonios" className="section-padding bg-brand-navy text-white">
      <div className="container-max">
        {/* Header */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center mb-16">
          <div className="rounded-sm overflow-hidden order-2 lg:order-1">
            <img
              src="/testimonios-picture.jpg"
              alt="Fernando Rico Medina"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{TESTIMONIOS.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              {TESTIMONIOS.headline}
            </h2>
            <span className="gold-line" />
          </div>
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {TESTIMONIOS.items.map((t, i) => (
            <TestimonialCard
              key={t.author}
              {...t}
              className={i === TESTIMONIOS.items.length - 1 ? "md:col-span-2" : ""}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-200 text-sm tracking-wide"
          >
            Agenda tu diagnóstico estratégico
          </a>
        </div>
      </div>
    </section>
  );
}
