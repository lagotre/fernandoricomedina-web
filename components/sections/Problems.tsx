import { PROBLEMS, LINKS } from "@/lib/data";

export default function Problems() {
  return (
    <section id="problemas" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Reconoces alguno de estos escenarios</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight">
            Los problemas que más le cuestan a las empresas hoy.
          </h2>
          <span className="gold-line" />
          <p className="text-brand-muted text-lg">
            No son problemas de tecnología. Son problemas de estrategia, foco y decisión.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-gray-100 p-8 rounded-sm hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-brand-navy text-lg mb-3 group-hover:text-brand-dark transition-colors">
                {p.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* CTA inline */}
        <div className="text-center">
          <p className="text-brand-muted mb-6 text-base">
            Si reconociste al menos uno, el diagnóstico estratégico es para ti.
          </p>
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-dark transition-colors duration-200 text-sm tracking-wide"
          >
            Agenda tu diagnóstico de 45 minutos
          </a>
        </div>
      </div>
    </section>
  );
}
