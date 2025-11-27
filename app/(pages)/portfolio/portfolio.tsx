import PortfolioCard from '@/components/cards/portfolio-card';
import { projectsData } from '@/lib/datas/const';

export default function Portfolio() {
    return (
        <section>
            <div className="mx-auto container px-6 py-10 md:p-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 md:gap-12 lg:gap-20">
                    {projectsData.map((project, index) => (
                        <PortfolioCard data={project} key={index + "PortfolioProject"} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
