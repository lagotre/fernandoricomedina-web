import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Diagnostic from "@/components/sections/Diagnostic";
import About from "@/components/sections/About";
import TrayectoriaPreview from "@/components/sections/TrayectoriaPreview";
import TestimoniosPreview from "@/components/sections/TestimoniosPreview";
import FAQ from "@/components/sections/FAQ";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Credibility />
      <Problems />
      <Services />
      <Diagnostic />
      <About />
      <TrayectoriaPreview />
      <TestimoniosPreview />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </>
  );
}
