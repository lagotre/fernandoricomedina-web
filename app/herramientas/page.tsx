import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Herramientas | Fernando Rico Medina",
};

export default function HerramientasPage() {
  return (
    <SectionWrapper dark className="min-h-[60vh] flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-brand-gold text-xs tracking-widest uppercase mb-4">Herramientas</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Próximamente.
        </h1>
        <p className="text-white/60 leading-relaxed">
          Estamos preparando esta sección. Vuelve pronto.
        </p>
      </div>
    </SectionWrapper>
  );
}
