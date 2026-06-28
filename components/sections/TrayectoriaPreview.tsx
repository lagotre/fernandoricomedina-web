import { TRAYECTORIA } from "@/lib/data";
import MarqueeRow from "@/components/ui/MarqueeRow";

export default function TrayectoriaPreview() {
  const firstGroup = TRAYECTORIA.groups[0];

  return (
    <section id="trayectoria" className="section-padding bg-brand-surface">
      <div className="container-max">
        <div className="max-w-2xl mb-10">
          <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{TRAYECTORIA.eyebrow}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-navy leading-tight">
            {TRAYECTORIA.headline}
          </h2>
          <span className="gold-line" />
          <p className="text-brand-muted text-lg">{TRAYECTORIA.intro}</p>
        </div>

        <MarqueeRow items={firstGroup.items} duration={30} />

        <div className="mt-10">
          <a
            href="/testimonios#trayectoria"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold text-sm hover:text-brand-gold transition-colors duration-200"
          >
            Ver trayectoria completa →
          </a>
        </div>
      </div>
    </section>
  );
}
