"use client"
import SparkleText from "@/components/other/sparkle-text";
import HomeProjectCard from "@/components/cards/home-project-card";
import Link from "next/link";
import { projectsData } from "@/lib/datas/const";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/animaitons/FadeUp";

export default function Projects() {
    return (
        <section className="bg-section-secondary">
            <div className="section-wrapper">
                <FadeUp>
                    <h2><SparkleText text="Portfolio" /></h2>
                </FadeUp>

                <div className="my-block grid md:grid-cols-2 gap-base ">
                    {projectsData.slice(0, 4).map((item, i) => (
                        <FadeUp
                            transition={{
                                type: "spring",
                                delay: 0.3 * i
                            }}
                            key={item.title + "HomeProjectCard"}>
                            <HomeProjectCard data={item} />
                        </FadeUp>
                    ))}
                </div>

                <div className="flex-center">
                    <FadeUp>
                        <Link href="/portfolio" className={buttonVariants({ variant: "secondary" })}>View More  <ArrowRight className="ml-2 size-4 inline" /></Link>
                    </FadeUp>
                </div>
            </div>
        </section>
    )
}
