import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Problems from "@/components/sections/Problems";
import Services from "@/components/sections/Services";
import Diagnostic from "@/components/sections/Diagnostic";
import Methodology from "@/components/sections/Methodology";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
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
      <Methodology />
      <Experience />
      <About />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </>
  );
}
