import SparkleText from "@/components/helper/SparkleText";
import Hero from "@/components/ui/Hero";
import Includes from "./Includes";
import Contact from "@/components/layouts/contact/Contact";
import { WDDSMd } from "@/lib/datas/metaDatas";

export const metadata = WDDSMd;

export default function page() {
  return (
    <main>
      <Hero heading={<>Website <SparkleText text="Desing" /> & <SparkleText text="Development" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}