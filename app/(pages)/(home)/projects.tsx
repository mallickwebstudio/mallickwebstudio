"use client"

import HomeProjectCard from "@/components/cards/home-project-card";
import Link from "next/link";
import { projectsData } from "@/lib/datas/const";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
    return (
        <section
            id="project"
            className="relative bg-background bg-linear-to-b from-secondary to-background"
            role="region"
            aria-label="Project section for project introduction"
        >
            <div className="mx-auto container px-6 pb-12 md:p-16 md:pt-0 lg:pb-20">
                <header>
                    <h2 className="h2 sr-only">Portfolio</h2>
                </header>

                {/* --- CAROUSEL START --- */}
                <Carousel
                    opts={{
                        loop: true,
                        align: "center",
                    }}
                    plugins={[
                        Autoplay({
                            delay: 10000,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent>

                        {projectsData.slice(0, 5).map((item, index) => (
                            <CarouselItem
                                key={item.title + "HomeProjectCard"}
                                className="basis-full"
                            >
                                <HomeProjectCard index={index} data={item} />
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
                {/* --- CAROUSEL END --- */}

                <div className="mt-8 md:mt-12 flex justify-center items-center">
                    <Link
                        href="/portfolio"
                        className={buttonVariants({ variant: "secondary" })}
                    >
                        View More <ArrowRight className="ml-2 size-4 inline" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
