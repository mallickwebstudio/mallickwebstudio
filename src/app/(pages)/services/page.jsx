import { serviceMd } from "@/lib/metaData";
import Service from "../(home)/Service";
import Hero from "@/components/ui/Hero";
import SparkleText from "@/components/helper/SparkleText";

export const metadata = {
  title: serviceMd.title,
  description: serviceMd.description,
}

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="Services" /></>} />
      <Service />
    </main>
  )
}
