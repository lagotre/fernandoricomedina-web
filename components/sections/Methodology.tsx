import { METHODOLOGY, LINKS } from "@/lib/data";

export default function Methodology() {
  return (
    <section id="metodologia" className="section-padding bg-brand-dark text-white">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Cómo trabajo</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Sin metodologías de manual. Con criterio construido en décadas.
          </h2>
          <span className="gold-line" />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-0">
          {METHODOLOGY.map((m, i) => (
            <div
              key={m.step}
              className={`p-8 md:p-12 border-white/10 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < 2 ? "border-b" : ""}`}
            >
              <div className="font-display text-6xl font-semibold text-white/10 mb-4 leading-none select-none">
                {m.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{m.title}</h3>
              <p className="text-white/60 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-14 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/60 text-lg max-w-lg">
            La estrategia no debería ser compleja. Debería ser clara.
          </p>
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-200 text-sm whitespace-nowrap"
          >
            Agenda tu diagnóstico →
          </a>
        </div>
      </div>
    </section>
  );
}
