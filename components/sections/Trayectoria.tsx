import { TRAYECTORIA } from "@/lib/data";
import MarqueeRow from "@/components/ui/MarqueeRow";

export default function Trayectoria() {
  return (
    <section id="trayectoria" className="section-padding bg-brand-surface">
      <div className="container-max">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center mb-16">
          <div>
            <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">{TRAYECTORIA.eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-navy leading-tight">
              {TRAYECTORIA.headline}
            </h2>
            <span className="gold-line" />
            <p className="text-brand-muted text-lg">{TRAYECTORIA.intro}</p>
          </div>
          <div className="rounded-sm overflow-hidden">
            <img
              src="/trayectoria-picture.jpg"
              alt="Fernando Rico presentando y trabajando con equipos comerciales"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Marquee groups */}
        <div className="space-y-12">
          {TRAYECTORIA.groups.map((group, i) => (
            <div key={group.label}>
              <p className="text-xs tracking-widest uppercase text-brand-muted mb-5">{group.label}</p>
              <MarqueeRow items={group.items} duration={28 + i * 6} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
