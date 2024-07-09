import Contact from "@/components/layouts/contact/Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Purpose from "./Purpose";
import Service from "./Service";
import FAQ from "./FAQs";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <main>
      <Hero />
      <Purpose />
      <Service />
      <Pricing />
      <FAQ />
      <Projects />
      <Contact />
    </main>
  );
}
