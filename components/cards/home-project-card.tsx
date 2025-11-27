"use client"
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from "@/types/const";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function HomeProjectCard({
    data: { title, description, link, imageUrl, concept },
    index
}: {
    data: ProjectItem;
    index: number;
}) {
    const arr = concept;
    const image = imageUrl;

    return (
        <div className={cn("relative grid grid-cols-1 items-center lg:gap-6 overflow-hidden transition-all group", (index % 2 === 0) ? "lg:grid-cols-[auto_1fr]" : "lg:grid-cols-[1fr_auto]")}>
            {/* Image */}
            {/* Description */}
            <div className={cn("p-4 order-2 lg:w-xs", (index % 2 === 0) && "lg:order-1")}>
                {arr &&
                    <div className="flex items-center gap-1  flex-wrap">
                        {arr.map(item => {
                            return <Badge variant="secondary" key={item} className="capitalize">{item}</Badge>
                        })}
                    </div>
                }

                <h3 className={cn("h4", arr && "mt-2")}>{title}</h3>
                <p className="mt-1 text-muted-foreground text-sm lg:text-base">{description}</p>

                <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 hover:text-primary")} href={link} target="blank">
                    View Live <ExternalLink className="ml-2" />
                </Link>
            </div>

            <div className={cn("relative p-4 group-hover:p-0 aspect-video transition-all overflow-hidden grayscale group-hover:grayscale-0 order-1", (index % 2 === 0) && "lg:order-2")}>
                <div className={`block size-full bg-cover bg-no-repeat group-hover:bg-bottom transition-all duration-8000 ease-linear rounded-md`} style={{ backgroundImage: `url('${image}')` }} />
            </div>
        </div>
    )
}