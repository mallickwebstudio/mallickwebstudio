"use client"
import FadeUp from '@/components/animaitons/FadeUp';
import ProjectCard from '@/components/cards/ProjectCard'
import { projectsData } from '@/lib/datas/const';
import { motion } from 'framer-motion';

// Parent animation configuration
const parentVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { delayChildren: 0.05, staggerChildren: 0.3 },
    },
};

// Children animation configuration
const childrenVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

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
