import type { Metadata } from "next";
import Trayectoria from "@/components/sections/Trayectoria";
import Testimonios from "@/components/sections/Testimonios";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Testimonios | Fernando Rico Medina",
  description: "Trayectoria con marcas multinacionales, pymes e instituciones, y testimonios de quienes ya trabajaron con Fernando Rico Medina.",
  alternates: {
    canonical: "/testimonios",
  },
};

export default function TestimoniosPage() {
  return (
    <>
      <Trayectoria />
      <Testimonios />
      <Footer />
    </>
  );
}
