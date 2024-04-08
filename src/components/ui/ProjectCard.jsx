import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./button";

export default async function ProjectCard({ title, desc, link, imageUrl, concept }) {
    const arr = concept;
    const image = await imageUrl;
    console.log(image)
    return (
        <div className="relative bg-card border rounded-lg hover:-translate-y-2 overflow-hidden transition-all group">
            {/* Image */}
            <div className="relative p-4 group-hover:p-0 aspect-video transition-all overflow-hidden">
                <div className={`block size-full bg-cover bg-no-repeat group-hover:bg-bottom transition-all duration-5000 ease-linear`} style={{ backgroundImage: `url('${image}')` }} />
            </div>

            {/* Description */}
            <div className="p-4">
                <div className="flex-between">
                    <div className="font-bold text-foreground">{title}</div>
                    <Link className={buttonVariants({ variant: "link" })} href={link} target="blank">Open</Link>
                </div>
                <div className="text-muted-foreground">{desc}</div>
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