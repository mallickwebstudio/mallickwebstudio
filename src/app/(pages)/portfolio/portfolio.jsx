import FadeUp from '@/components/animaitons/FadeUp';
import ProjectCard from '@/components/cards/project-card'
import { projectsData } from '@/lib/datas/const';

export default function Portfolio() {
    return (
        <section>
            <div className="section-wrapper">
                <div className="my-block grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
                    {projectsData.map((project, i) => (
                        <FadeUp
                            transition={{
                                type: "spring",
                                delay: 0.3 * i
                            }}
                            key={i + "PortfolioProject"}>
                            <ProjectCard data={project} />
                        </FadeUp>
                    ))}
                </div>

            </div>
        </section>
    )
}
