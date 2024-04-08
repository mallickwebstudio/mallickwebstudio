"use client"
import SparkleText from "@/components/helper/SparkleText";
import HomeProjectCard from "@/components/ui/HomeProjectCard";
import Link from "next/link";
import { projectsData } from "@/lib/const";
import { buttonVariants } from "@/components/ui/button";

export default function Projects() {
    const displayData = projectsData.slice(0, 3);
    return (
        <section className="section-padding">
            <h2 className="md:text-center" ><SparkleText text="Portfolio" /></h2>

            <div className="my-10 flex flex-col gap-10">
                {displayData && displayData.map((item, i) => (
                    <HomeProjectCard
                        key={item.title + "homeProject"}
                        position={i}
                        title={item.title}
                        desc={item.desc}
                        concept={item.concept}
                        link={item.link}
                        imageUrl={item.imageUrl} />
                ))}
            </div>
            <div className="mt-10 flex-center">
                <Link href="/portfolio" className={buttonVariants({ variant: "secondary" })}>View More</Link>
            </div>
        </section>
    )
}
