import { aboutMd } from "@/lib/metaData";
import HowWeWork from "./HowWeWork";
import Mission from "./Mission";
import Hero from "@/components/shared/Hero";
import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/shared/Contact";
import TechStack from "./TechStack";

export const metadata = {
  title: aboutMd.title,
  description: aboutMd.description,
}

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
