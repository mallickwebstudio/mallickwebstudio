import ProjectCard from '@/components/cards/project-card'
import { projectsData } from '@/lib/datas/const';

export default function Portfolio() {
    return (
        <section>
            <div className="section-wrapper">
                <div className="my-block grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
                    {projectsData.map((project, i) => (
                        <ProjectCard data={project} key={i + "PortfolioProject"} />
                    ))}
                </div>

            </div>
        </section>
    )
}
