import ProjectCard from "@/components/ui/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { projectsData } from "@/lib/const";
import SparkleText from "@/components/helper/SparkleText";
import Link from "next/link";

export default function Page() {
  return (
    <section className="section-padding">
      <h1 className="text-center">Showcase <SparkleText text="Projects" /></h1>
      <div className="my-10 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
        {
          projectsData.map((project, index) => (
            <ProjectCard
              key={index + 11}
              title={project.title}
              desc={project.desc}
              link={project.link}
              concept={project.concept}
              imageUrl={project.imageUrl}
            />
          ))
        }
      </div>
      <div className="w-full flex-center">
        <Link href="/hire-now" className={buttonVariants({variant:"secondary"})}>Hire For Project</Link>
      </div>
    </section>
  )
}
