import SparkleText from "@/components/helper/SparkleText";
import Includes from "./Includes";
import Hero from "@/components/shared/Hero";
import Contact from "@/components/shared/Contact";
import { WUSMd } from "@/lib/metaData";

export const metadata = {
  title: WUSMd.title,
  description: WUSMd.description,
}

export default function page() {
  return (
    <main>
      <Hero heading={<>Website <SparkleText text="Updates" /></>} />
      <Includes />
      <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
    </main>
  )
}
