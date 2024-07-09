import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/Contact";
import Hero from "@/components/ui/Hero";
import Portfolio from "./Portfolio";
import { portfolioMd } from "@/lib/datas/metaDatas";

export const metadata = portfolioMd

export default function Page() {
  return (
    <>
      <Hero heading={<sapn>Portfolio <SparkleText text="Projects" /></sapn>} />
      <Portfolio/>
      <Contact className="bg-section-secondary" heading={<>Have Any <SparkleText text="projects" /> In Mind?</>} />
    </>
  )
}
