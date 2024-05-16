import ProjectCard from "@/components/cards/ProjectCard";
import { projectsData } from "@/lib/const";
import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/shared/Contact";
import { portfolioMd } from "@/lib/metaData";
import Hero from "@/components/shared/Hero";

export const metadata = {
  title: portfolioMd.title,
  description: portfolioMd.description,
}

export default function Page() {
  return (
    <>
      <Hero heading={<sapn>Portfolio <SparkleText text="Projects" /></sapn>} />
      <section>
        <div className="section-wrapper">
          <div className="my-block grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
            {projectsData.map((project, index) => (
              <ProjectCard data={project} key={index + 11} />
            ))}
          </div>

        </div>
      </section>
      <Contact className="bg-section-secondary" heading={<>Have Any <SparkleText text="projects" /> In Mind?</>} />
    </>
  )
}
