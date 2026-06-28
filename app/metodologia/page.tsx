import type { Metadata } from "next";
import Methodology from "@/components/sections/Methodology";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Metodología | Fernando Rico Medina",
};

export default function MetodologiaPage() {
  return (
    <>
      <Methodology />
      <Footer />
    </>
  );
}
