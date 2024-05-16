import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ServiceCard({ data: { icon, title, description, link } }) {
    return (
        <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <div>{icon}</div>
            <div className="my-base text-lg font-semibold">{title}</div>
            <p className="text-muted-foreground">{description}</p>
            <Link className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-white`} href={link}>View More  <ArrowRight className="ml-2 size-4 inline" /></Link>
        </div>
    )
}
