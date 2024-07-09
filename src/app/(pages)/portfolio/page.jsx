import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/layouts/contact/Contact";
import { portfolioMd } from "@/lib/metaData";
import Hero from "@/components/ui/Hero";
import Portfolio from "./Portfolio";

export const metadata = {
  title: portfolioMd.title,
  description: portfolioMd.description,
}

export default function Page() {
  return (
    <>
      <Hero heading={<sapn>Portfolio <SparkleText text="Projects" /></sapn>} />
      <Portfolio/>
      <Contact className="bg-section-secondary" heading={<>Have Any <SparkleText text="projects" /> In Mind?</>} />
    </>
  )
}
