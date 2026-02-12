"use client"
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from "@/types/const";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function HomeProjectCard({
    data: { title, link, imageUrl, concept },
}: {
    data: ProjectItem;
    index: number;
}) {
    const arr = concept;
    const image = imageUrl;

    return (
        <article className="relative overflow-hidden transition-all group bg-card rounded-md border">
            <div className="relative p-4 group-hover:p-0 aspect-video transition-all overflow-hidden">
                <div className={`block size-full bg-cover bg-no-repeat group-hover:bg-bottom transition-all duration-8000 ease-linear rounded-md border`} style={{ backgroundImage: `url('${image}')` }} />
            </div>

            <div className="p-4">
                {arr &&
                    <div className="flex items-center gap-1  flex-wrap">
                        {arr.map(item => {
                            return <Badge variant="secondary" key={item} className="capitalize">{item}</Badge>
                        })}
                    </div>
                }

                <h3 className="h4">{title}</h3>
                {/* <p className="mt-1 text-muted-foreground text-sm lg:text-base">{description}</p> */}

                <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4 hover:text-primary")} href={link} target="blank">
                    View Live <ExternalLink className="ml-2" />
                </Link>
            </div>

        </article>
    )
}