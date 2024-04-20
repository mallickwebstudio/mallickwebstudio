import Contact from "@/components/shared/Contact";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Purpose from "./Purpose";
import Service from "./Service";
import FAQ from "./FAQs";
import Pricing from "./Pricing";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Purpose />
      <Service />
      {/* <About /> */}
      {/* <FAQ /> */}
      {/* <WhyChooseUs /> */}
      <Projects />
      {/* Testimonial */}
      <Pricing />
      <Contact />
    </main>
  );
}
