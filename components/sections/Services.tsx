import { SERVICES, LINKS } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicios" className="section-padding bg-brand-navy text-white">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Áreas de trabajo</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Trabajo en el punto exacto donde la estrategia se convierte en resultado.
          </h2>
          <span className="gold-line" />
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`relative p-8 rounded-sm border transition-all duration-300 ${
                i === 0
                  ? "border-brand-gold/50 bg-brand-gold/5"
                  : "border-white/10 bg-white/3 hover:border-white/20"
              }`}
            >
              {s.tag && (
                <span className="absolute top-4 right-4 bg-brand-gold text-brand-dark text-xs font-semibold px-3 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <h3 className="font-display text-xl font-semibold mb-3 text-white">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-200 text-sm tracking-wide"
          >
            Empezar con un diagnóstico estratégico
          </a>
        </div>
      </div>
    </section>
  );
}
