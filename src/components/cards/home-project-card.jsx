import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { ExternalLink } from "lucide-react";

export default function HomeProjectCard({ data: { title, concept, description, link, imageUrl } }) {
    return (
        <div className="relative rounded overflow-hidden group">
            {/* Image */}
            <Image
                className="relative w-full aspect-video object-cover object-top md:grayscale border rounded group-hover:grayscale-0 transition-all"
                src={imageUrl}
                width={320}
                height={90}
                alt={`${title} website image`}
            />

            {/* Details */}
            <div className="my-4">
                <div className="flex gap-2 flex-wrap">
                    {concept.map((item, i) => (
                        <Badge className="bg-primary/30" variant="secondary" key={item + i}>{item}</Badge>
                    ))}
                </div>
                <h3 className="mt-xs">{title}</h3>
                <p className="mt-2 leading-5 line-clamp-2 text-muted-foreground">{description}</p>
                <div className="mt-4 flex gap-4">
                    <Link className={buttonVariants({ variant: "outline", size: "sm" })} href={link} target="_blank">
                        View Live <ExternalLink className="ml-2 inline size-4" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
