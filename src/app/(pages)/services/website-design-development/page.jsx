import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/shared/Hero";
import Includes from "./Includes";
import Contact from "@/components/shared/Contact";
import { WDDSMd } from "@/lib/metaData";

export const metadata = {
  title: WDDSMd.title,
  description: WDDSMd.description,
}

export default function page() {
  return (
    <main>
      <Hero heading={<>Website <SparkleText text="Desing" /> & <SparkleText text="Development" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}