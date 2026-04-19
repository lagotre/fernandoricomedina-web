import { CREDIBILITY, LINKS } from "@/lib/data";

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
