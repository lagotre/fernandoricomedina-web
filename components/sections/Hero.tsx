import { HERO, LINKS } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-brand-dark overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C9A84C 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />

      <div className="container-max px-4 sm:px-6 lg:px-8 py-32 md:py-40 relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            {/* Pre-headline badge */}
            <div className="inline-flex items-center gap-2 border border-brand-gold/30 text-brand-gold text-xs tracking-widest uppercase px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
              Estrategia Comercial · Marketing · Canales · Inteligencia Artificial
            </div>

            {/* Main headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              {HERO.headline}
            </h1>

            {/* Gold divider */}
            <div className="w-16 h-0.5 bg-brand-gold mb-8" />

            {/* Sub */}
            <div className="space-y-4 mb-10 max-w-2xl">
              {HERO.sub.map((p, i) => (
                <p key={i} className="text-white/70 text-lg md:text-xl leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={LINKS.calendly} variant="primary" className="text-base px-8 py-4">
                {HERO.cta}
              </Button>
              <Button href="#metodologia" variant="outline" className="text-base px-8 py-4">
                {HERO.ctaSecondary}
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6">
              {[
                "27 años de experiencia",
                "Colombia y LATAM",
                "IA aplicada a negocios reales",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="text-brand-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="/estrategia-omnicanal-latam.png"
              alt="Ecosistema de canales, marketing e inteligencia artificial en Latinoamérica"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
