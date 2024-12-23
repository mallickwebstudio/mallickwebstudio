import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ExternalLink, SquareArrowOutUpRight } from 'lucide-react';

export default async function ProjectCard({ data: { title, description, link, imageUrl, concept } }) {
    const arr = concept;
    const image = await imageUrl;
    return (
        <div className="relative bg-card border rounded-lg hover:-translate-y-2 overflow-hidden transition-all group">
            {/* Image */}
            <div className="relative p-4 group-hover:p-0 aspect-video transition-all overflow-hidden">
                <div className={`block size-full bg-cover bg-no-repeat group-hover:bg-bottom transition-all duration-5000 ease-linear rounded-md`} style={{ backgroundImage: `url('${image}')` }} />
            </div>

            {/* Description */}
            <div className="p-4">
                <div className="flex-between">
                    <h3>{title}</h3>
                    <Link className={buttonVariants({ variant: "link" })} href={link} target="blank">
                        Open <ExternalLink className="size-4 ml-2" />
                    </Link>
                </div>
                <div className="text-muted-foreground">{description}</div>
            </div>

            {/* Learnings */}
            {arr &&
                <div className="absolute top-4 left-4 bg-blue-100/40 backdrop-blur-xl font-bold text-blue-950 px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 manage-text max-w-[10rem]"> {
                    arr.map(item => {
                        return <div key={item} className="capitalize">{item}</div>
                    })
                }</div>
            }
        </div>
    )
}