import SparkleText from "@/components/helper/SparkleText";
import Includes from "./Includes";
import Hero from "@/components/shared/Hero";
import Contact from "@/components/shared/Contact";
import { SOSMd } from "@/lib/metaData";

export const metadata = {
  title: SOSMd.title,
  description: SOSMd.description,
}

export default function page() {
  return (
    <main>
      <Hero heading={<>Speed <SparkleText text="Optimization" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
