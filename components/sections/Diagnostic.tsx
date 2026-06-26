import { DIAGNOSTIC, LINKS } from "@/lib/data";

export default function Diagnostic() {
  return (
    <section id="diagnostico" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Diagnóstico Estratégico</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight mb-6">
            {DIAGNOSTIC.headline}
          </h2>
          <div className="space-y-4">
            {DIAGNOSTIC.sub.map((p, i) => (
              <p key={i} className="text-brand-muted text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </div>

        {/* What you'll get clarity on */}
        <div className="bg-brand-navy text-white rounded-sm p-8 md:p-12 mb-14 max-w-3xl mx-auto">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-6">Al finalizar, tendrás claridad sobre</p>
          <ul className="space-y-4">
            {DIAGNOSTIC.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="text-brand-gold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Agenda CTA */}
        <div className="bg-brand-navy rounded-sm p-10 text-center max-w-3xl mx-auto">
          <p className="text-white/60 text-sm mb-4">Cuando quieras, agenda tu sesión.</p>
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-200 text-sm"
          >
            {DIAGNOSTIC.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
