import { DIAGNOSTIC, LINKS } from "@/lib/data";

export default function Diagnostic() {
  return (
    <section id="diagnostico" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-14">
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

        {/* Blocks + compass image */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          {/* Blocks */}
          <div className="space-y-8">
            {/* What you'll get clarity on */}
            <div className="bg-brand-navy text-white rounded-sm p-8 md:p-10">
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

            {/* Pricing */}
            <div className="bg-white border border-gray-100 rounded-sm p-8 md:p-10">
              <p className="font-display text-xl font-semibold text-brand-navy mb-1">Inversión</p>
              <p className="text-brand-muted text-sm mb-6">Selecciona el plan según el tamaño de tu empresa.</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {DIAGNOSTIC.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative rounded-sm border p-6 transition-all duration-300 ${
                      plan.featured
                        ? "border-brand-gold bg-brand-navy text-white shadow-xl"
                        : "border-gray-200 bg-brand-surface text-brand-navy hover:border-brand-gold/40 hover:shadow-md"
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-6 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                        MÁS ELEGIDO
                      </div>
                    )}
                    <p className={`text-xs font-medium tracking-widest uppercase mb-1 ${plan.featured ? "text-brand-gold" : "text-brand-muted"}`}>
                      {plan.name} · {plan.desc}
                    </p>
                    <p className={`text-sm mb-4 ${plan.featured ? "text-white/70" : "text-brand-muted"}`}>{plan.tier}</p>
                    <div className={`font-display text-3xl font-semibold mb-5 ${plan.featured ? "text-white" : "text-brand-navy"}`}>
                      {plan.price}
                    </div>
                    <a
                      href={LINKS.calendly}
                      className={`block w-full text-center py-3 rounded-sm text-sm font-semibold transition-colors duration-200 ${
                        plan.featured
                          ? "bg-brand-gold text-brand-dark hover:bg-brand-gold-light"
                          : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                      }`}
                    >
                      Reservar sesión
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise */}
            <div className="border border-brand-gold/40 bg-brand-gold/5 rounded-sm p-8">
              <p className="font-display text-lg font-semibold text-brand-navy mb-2">{DIAGNOSTIC.promise.label}</p>
              <p className="text-brand-muted leading-relaxed">{DIAGNOSTIC.promise.text}</p>
            </div>

            {/* Agenda CTA */}
            <div className="bg-brand-navy rounded-sm p-8 md:p-10 text-center">
              <p className="text-white/60 text-sm mb-4">¿Prefieres que conversemos primero?</p>
              <a
                href={LINKS.calendly}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-200 text-sm"
              >
                {DIAGNOSTIC.cta} →
              </a>
            </div>
          </div>

          {/* Compass image */}
          <div className="lg:sticky lg:top-32 flex justify-center">
            <img
              src="/brujula-diagnostico.png"
              alt="Brújula del diagnóstico estratégico"
              className="w-full max-w-md object-contain invert"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
