import Contact from "@/components/section/contact/contact";
import FAQ from "@/components/section/faq";
import Hero from "./hero";
import Pricing from "./pricing";
import Service from "./service";
import WorkingProcess from "./working-process";
import Projects from "./projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Service />
      <WorkingProcess />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
