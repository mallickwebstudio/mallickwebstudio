import Contact from "@/components/section/contact/contact";
import FAQ from "./faq";
import Hero from "./hero";
import Pricing from "./pricing";
import Projects from "./projects";
import Purpose from "./purpose";
import Service from "./service";

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
