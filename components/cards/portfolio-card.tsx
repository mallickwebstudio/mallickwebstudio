import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from "@/types/const";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default async function PortfolioCard({
    data: { title, description, link, imageUrl, concept },
    index
}: {
    data: ProjectItem;
    index: number;
}) {
    const arr = concept;
    const image = imageUrl;

    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 overflow-hidden transition-all group">
            {/* Image */}
            {/* Description */}
            <div className={cn("p-4 order-2",(index % 2 === 0) && "md:order-1")}>
                {arr &&
                    <div className="flex items-center gap-1  flex-wrap">
                        {arr.map(item => {
                            return <Badge variant="secondary" key={item} className="capitalize">{item}</Badge>
                        })}
                    </div>
                }

                <h3 className={cn("h4", arr && "mt-2")}>{title}</h3>
                <p className="mt-1 text-muted-foreground text-sm md:text-base">{description}</p>

                <Link className={cn(buttonVariants({ variant: "outline", size: "sm" }), "mt-4")} href={link} target="blank">
                    Open <ExternalLink className="size-4 ml-2" />
                </Link>
            </div>

            <div className={cn("relative p-4 group-hover:p-0 aspect-video transition-all overflow-hidden grayscale group-hover:grayscale-0 order-1", (index % 2 === 0) && "md:order-2")}>
                <div className={`block size-full bg-cover bg-no-repeat group-hover:bg-bottom transition-all duration-10000 ease-linear rounded-md`} style={{ backgroundImage: `url('${image}')` }} />
            </div>
        </div>
    )
}