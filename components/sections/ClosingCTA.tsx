import { CLOSING, LINKS } from "@/lib/data";

export default function ClosingCTA() {
  return (
    <section
      id="contacto"
      className="relative section-padding bg-brand-dark text-white overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)",
        }}
      />

      <div className="container-max relative z-10 text-center max-w-3xl mx-auto">
        <p className="text-brand-gold text-xs tracking-widest uppercase mb-6">Es el momento</p>
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
          {CLOSING.headline}
        </h2>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-8" />
        <p className="text-white/70 text-lg leading-relaxed mb-12">
          {CLOSING.sub}
        </p>

        <a
          href={LINKS.calendly}
          className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-semibold px-10 py-5 rounded-sm hover:bg-brand-gold-light transition-all duration-200 text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
        >
          {CLOSING.cta}
          <span className="text-lg">→</span>
        </a>

        <p className="text-white/30 text-sm mt-8">
          Sin compromisos. Sin ventas de seguimiento. Solo claridad estratégica.
        </p>
      </div>
    </section>
  );
}
