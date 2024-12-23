import Hero from "@/components/other/hero";
import SparkleText from "@/components/other/sparkle-text";
import { serviceMd } from "@/lib/datas/metaDatas";
import Service from "../(home)/service";

export const metadata = serviceMd; 

export default function page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="Services" /></>} />
      <Service />
    </main>
  )
}
