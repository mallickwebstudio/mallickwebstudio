import Contact from "@/components/shared/Contact";
import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Service from "./Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
    </main>
  );
}
