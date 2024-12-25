import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HomeProjectCard({ data: { title, concept, description, link, imageUrl } }) {
    return (
        <div className="relative rounded overflow-hidden group" aria-labelledby={`project-card-${title}`}>
            {/* Image */}
            <Image
                className="relative w-full aspect-video object-cover object-top md:grayscale border rounded group-hover:grayscale-0 transition-all"
                src={imageUrl}
                width={320}
                height={90}
                alt={`${title} project image`}
            />

            {/* Details */}
            <div className="my-4">
                <header className="flex gap-2 flex-wrap">
                    {concept.map((item, i) => (
                        <Badge className="bg-primary/30" variant="secondary" key={item + i}>{item}</Badge>
                    ))}
                </header>

                <h3 className="mt-xs" id={`project-card-${title}`}>{title}</h3>

                <p className="mt-2 leading-5 line-clamp-2 text-muted-foreground">{description}</p>

                <Link
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }),"mt-4")}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View the live project for ${title}`}
                >
                    View Live <ExternalLink className="ml-2 inline size-4" />
                </Link>
            </div>
        </div>
    );
}
