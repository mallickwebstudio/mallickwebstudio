import SparkleText from "@/components/helper/SparkleText";
import Includes from "./Includes";
import Hero from "@/components/ui/Hero";
import Contact from "@/components/layouts/contact/Contact";
import { WUSMd } from "@/lib/datas/metaDatas";

export const metadata = WUSMd

export default function page() {
  return (
    <main>
      <Hero heading={<>Website <SparkleText text="Updates" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
