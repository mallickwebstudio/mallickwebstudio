import SparkleText from "@/components/helper/SparkleText";
import Includes from "./Includes";
import Hero from "@/components/ui/Hero";
import Contact from "@/components/layouts/contact/Contact";
import { SOSMd } from "@/lib/datas/metaDatas";

export const metadata = SOSMd;

export default function page() {
  return (
    <main>
      <Hero heading={<>Speed <SparkleText text="Optimization" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
