import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import CosmicShower from "./cosmic-shower";

export default function Hero({
    className,
    heading,
    children
}: {
    className?: string;
    heading?: string | ReactNode;
    children?: ReactNode;
}) {
    return (
        <section className={cn("relative text-foreground overflow-hidden", className)}>
            <CosmicShower />
            <header className="relative mx-auto container max-w-2xl px-6 py-12 md:p-16 lg:py-20 overflow-hidden">
                {heading && <h1 className="h1 text-center">{heading}</h1>}
                {children}
            </header>
            <div className="relative flex justify-center items-center">
                <div className="absolute top-[calc(100%-16px)] sm:top-[calc(100%-32px)] md:top-[calc(100%-48px)] w-[800vw] aspect-square rounded-full bg-background" />
            </div>
        </section>
    )
}