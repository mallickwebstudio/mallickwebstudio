import Hero from "@/components/other/hero";
import SparkleText from "@/components/other/sparkle-text";
import Portfolio from "./portfolio";
import { portfolioMd } from "@/lib/datas/metaDatas";
import Contact from "@/components/section/contact/contact";

export const metadata = portfolioMd

export default function Page() {
  return (
    <>
      <Hero heading={<span>Portfolio <SparkleText text="Projects" /></span>} />
      <Portfolio/>
      <Contact className="bg-section-secondary" heading={<>Have Any <SparkleText text="projects" /> In Mind?</>} />
    </>
  )
}
