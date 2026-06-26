import { CREDIBILITY, ECOSYSTEM, LINKS } from "@/lib/data";

export default function Credibility() {
  return (
    <section id="credibilidad" className="bg-brand-navy text-white">
      {/* Stats strip */}
      <div className="border-b border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {CREDIBILITY.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-semibold text-brand-gold mb-2">
                {s.value}
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Ecosistema empresarial */}
      <div className="border-b border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="max-w-2xl mb-10">
            <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{ECOSYSTEM.eyebrow}</p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight mb-3">
              {ECOSYSTEM.headline}
            </h3>
            <p className="text-white/60 leading-relaxed">{ECOSYSTEM.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM.companies.map((c) => (
              <div key={c.name} className="bg-white/5 border border-white/10 rounded-sm p-6">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 object-contain object-left brightness-0 invert opacity-80 mb-4"
                />
                <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Roles & formation */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Posiciones actuales</p>
          <ul className="space-y-3">
            {CREDIBILITY.roles.map((r) => (
              <li key={r} className="flex items-start gap-3 text-white/80">
                <span className="text-brand-gold mt-1">→</span>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Formación</p>
          <ul className="space-y-3">
            {CREDIBILITY.formation.map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/80">
                <span className="text-brand-gold mt-1">→</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm mb-3">¿Prefieres conocerme primero?</p>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-gold text-sm hover:text-brand-gold-light transition-colors"
            >
              Ver perfil en LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
