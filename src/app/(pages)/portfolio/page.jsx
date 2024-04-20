import ProjectCard from "@/components/cards/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { projectsData } from "@/lib/const";
import SparkleText from "@/components/helper/SparkleText";
import Link from "next/link";
import Contact from "@/components/shared/Contact";

export default function Page() {
  return (
    <section className="section-padding">
      <h1 className="text-center">Showcase <SparkleText text="Projects" /></h1>
      <div className="my-block grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
        {
          projectsData.map((project, index) => (
            <ProjectCard data={project} key={index + 11} />
          ))
        }
      </div>

      <Contact className="pb-0" />
    </section>
  )
}
