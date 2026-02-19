import { INJECTED_STYLES } from "./animations";
import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { LogoBar } from "./LogoBar";
import { Features } from "./Features";
import { ProductShowcase } from "./ProductShowcase";
import { HowItWorks } from "./HowItWorks";
import { OpenSourceCTA } from "./OpenSourceCTA";
import { Footer } from "./Footer";

export default function WorkforcePlannerLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />

      <div className="min-h-screen bg-[#09090b] text-white antialiased selection:bg-blue-500/30 selection:text-white">
        <TopBar />
        <Navbar />

        <main>
          <Hero />
          <LogoBar />
          <Features />
          <ProductShowcase />
          <HowItWorks />
          <OpenSourceCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}
