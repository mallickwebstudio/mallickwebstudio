"use client"
import SparkleText from "@/components/helper/SparkleText";
import HomeProjectCard from "@/components/cards/HomeProjectCard";
import Link from "next/link";
import { projectsData } from "@/lib/const";
import { buttonVariants } from "@/components/ui/button";

export default function Projects() {
    return (
        <section className="section-padding">
            <h2><SparkleText text="Portfolio" /></h2>

            <div className="my-block grid md:grid-cols-2 gap-base ">
                {projectsData.slice(0, 4).map((item, i) => (
                    <HomeProjectCard
                        data={item}
                        key={item.title + "homeProject"}
                    />
                ))}
            </div>

            <div className="flex-center">
                <Link href="/portfolio" className={buttonVariants({ variant: "secondary" })}>View More</Link>
            </div>
        </section>
    )
}
