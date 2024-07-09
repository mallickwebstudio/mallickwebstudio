import HowWeWork from "./HowWeWork";
import Mission from "./Mission";
import Hero from "@/components/ui/Hero";
import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/Contact";
import TechStack from "./TechStack";
import { aboutMd } from "@/lib/datas/metaDatas";

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
