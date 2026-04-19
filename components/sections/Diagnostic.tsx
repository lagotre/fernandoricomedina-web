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
          <p className="text-brand-muted text-lg leading-relaxed">{DIAGNOSTIC.sub}</p>
        </div>

        {/* What's included */}
        <div className="bg-brand-navy text-white rounded-sm p-8 md:p-12 mb-14 max-w-3xl mx-auto">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-6">Qué incluye la sesión</p>
          <ul className="space-y-4">
            {DIAGNOSTIC.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="text-brand-gold text-lg mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing cards */}
        <div>
          <p className="text-center text-brand-muted text-sm mb-10 uppercase tracking-widest">
            Selecciona tu plan según el tamaño de tu empresa
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {DIAGNOSTIC.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-sm border p-8 text-center transition-all duration-300 ${
                  plan.featured
                    ? "border-brand-gold bg-brand-navy text-white shadow-xl scale-105"
                    : "border-gray-200 bg-white text-brand-navy hover:border-brand-gold/40 hover:shadow-md"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                    MÁS ELEGIDO
                  </div>
                )}
                <p className={`text-sm font-medium mb-2 ${plan.featured ? "text-brand-gold" : "text-brand-muted"}`}>
                  {plan.name}
                </p>
                <div className={`font-display text-4xl font-semibold mb-1 ${plan.featured ? "text-white" : "text-brand-navy"}`}>
                  {plan.price}
                </div>
                <p className={`text-xs mb-8 ${plan.featured ? "text-white/50" : "text-brand-muted"}`}>
                  {plan.desc}
                </p>
                <a
                  href={LINKS.calendly}
                  className={`block w-full py-3 rounded-sm text-sm font-semibold transition-colors duration-200 ${
                    plan.featured
                      ? "bg-brand-gold text-brand-dark hover:bg-brand-gold-light"
                      : "border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-muted text-xs mt-8">
            Pago seguro · Sesión virtual · Reagendamiento sin costo con 24h de anticipación
          </p>
        </div>

        {/* Calendly placeholder */}
        <div className="mt-16 border-2 border-dashed border-brand-gold/30 rounded-sm p-10 text-center bg-white">
          <p className="text-brand-muted text-sm mb-2 uppercase tracking-widest">Integración Calendly</p>
          <p className="text-brand-navy font-medium">
            Aquí se integrará el widget de Calendly.
          </p>
          <p className="text-brand-muted text-sm mt-1">
            Reemplaza <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">[LINK_CALENDLY]</code> con tu URL real en{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">lib/data.ts</code>
          </p>
        </div>
      </div>
    </section>
  );
}
