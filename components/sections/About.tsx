import { ABOUT, LINKS } from "@/lib/data";

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-brand-navy text-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img
                src="/FERNANDO-RICO.png"
                alt="Fernando Rico Medina"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Gold accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-brand-gold/30 rounded-sm -z-0" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-brand-gold/20 rounded-sm -z-0" />
          </div>

          {/* Content */}
          <div>
            <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Sobre mí</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-2">
              {ABOUT.headline}
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mt-4 mb-8" />

            <div className="space-y-5">
              {ABOUT.body.map((p, i) => (
                <p key={i} className="text-white/70 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={LINKS.calendly}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-semibold px-6 py-3 rounded-sm hover:bg-brand-gold-light transition-colors text-sm"
              >
                Agendar diagnóstico
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:border-brand-gold hover:text-brand-gold font-medium px-6 py-3 rounded-sm transition-colors text-sm"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
