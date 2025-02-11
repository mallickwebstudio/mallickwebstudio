"use client"
import SparkleText from "@/components/other/sparkle-text";
import HomeProjectCard from "@/components/cards/home-project-card";
import Link from "next/link";
import { projectsData } from "@/lib/datas/const";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Projects() {
    return (
        <section className="bg-section-secondary">
            <div className="section-wrapper">
                <h2>
                    <SparkleText text="Portfolio" />
                </h2>

                <div className="my-block grid md:grid-cols-2 gap-base ">
                    {projectsData.slice(0, 4).map((item, i) => (
                        <HomeProjectCard data={item} key={item.title + "HomeProjectCard"} />
                    ))}
                </div>

                <div className="flex-center">
                    <Link href="/portfolio" className={buttonVariants({ variant: "secondary" })}>View More  <ArrowRight className="ml-2 size-4 inline" /></Link>
                </div>
            </div>
        </section>
    )
}
