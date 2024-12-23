import { aboutMd } from "@/lib/datas/metaDatas";
import Hero from "@/components/other/hero";
import Mission from "./mission";
import TechStack from "./tech-stack";
import HowWeWork from "./how-we-work";
import SparkleText from "@/components/other/sparkle-text";
import Contact from "@/components/section/contact/contact";

export const metadata = aboutMd;

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="About Me" /></>} />
      <Mission />
      <TechStack />
      <HowWeWork />
      <Contact heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
