import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Trayectoria</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight">
            Experiencia que cubre todos los ángulos del negocio.
          </h2>
          <span className="gold-line" />
          <p className="text-brand-muted text-lg">
            He trabajado en, con y para empresas de sectores muy distintos. Eso construye un tipo de visión que no se aprende en un MBA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Sectors */}
          <div>
            <p className="text-xs tracking-widest uppercase text-brand-muted mb-6">Sectores e industrias</p>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE.sectors.map((s) => (
                <span
                  key={s}
                  className="bg-white border border-gray-200 text-brand-navy text-sm px-4 py-2 rounded-full hover:border-brand-gold hover:text-brand-dark transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <p className="text-xs tracking-widest uppercase text-brand-muted mb-6">Hitos de carrera</p>
            <ul className="space-y-5">
              {EXPERIENCE.highlights.map((h) => (
                <li key={h} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
                  <p className="text-brand-navy leading-relaxed">{h}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
