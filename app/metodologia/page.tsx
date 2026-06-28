import type { Metadata } from "next";
import Methodology from "@/components/sections/Methodology";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Metodología | Fernando Rico Medina",
  description: "Cómo trabajo: entender el negocio, identificar el problema principal, priorizar acciones y acompañar la ejecución. Sin metodologías de manual, con criterio construido en décadas.",
  alternates: {
    canonical: "/metodologia",
  },
};

export default function MetodologiaPage() {
  return (
    <>
      <Methodology />
      <Footer />
    </>
  );
}
