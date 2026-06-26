import { PROBLEMS, LINKS } from "@/lib/data";

export default function Problems() {
  return (
    <section id="problemas" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{PROBLEMS.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight">
            {PROBLEMS.headline}
          </h2>
          <span className="gold-line" />
          <p className="text-brand-muted text-lg leading-relaxed">{PROBLEMS.intro}</p>
        </div>

        {/* Symptom list */}
        <ul className="grid sm:grid-cols-2 gap-4 mb-12 max-w-4xl">
          {PROBLEMS.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 bg-white border border-gray-100 p-5 rounded-sm text-brand-navy text-sm leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Closing */}
        <div className="max-w-2xl">
          <p className="text-brand-muted text-base leading-relaxed mb-8">{PROBLEMS.closing}</p>
          <a
            href={LINKS.calendly}
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-dark transition-colors duration-200 text-sm tracking-wide"
          >
            Agenda tu diagnóstico estratégico
          </a>
        </div>
      </div>
    </section>
  );
}
