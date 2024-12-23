import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import ZoomIn from "../animaitons/ZoomIn";
import FadeLeft from "../animaitons/FadeLeft";
import { delay } from "framer-motion";

export default function ServiceCard({ data: { icon, title, description, href } }) {
    return (
        <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.1
                }}>
                <div>{icon}</div>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.3
                }}>
                <h3 className="my-base">{title}</h3>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.5
                }}>
                <p className="text-muted-foreground">{description}</p>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.7
                }}>
                <Link className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-primary-foreground`} href={href}>View More  <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" /></Link>
            </FadeLeft>
        </div>
    )
}
