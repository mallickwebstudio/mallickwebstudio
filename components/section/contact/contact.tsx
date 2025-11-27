import { Imail } from "@/components/other/svgs";
import FormBox from "./form";
import SparkleText from "@/components/other/sparkle-text";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Contact({
    className,
    heading,
    subTitle
}: {
    className?: string;
    heading?: string | ReactNode;
    subTitle?: string;
}) {
    return (
        <section
            id="contact"
            className={cn("relative bg-background", className)}
            role="region"
            aria-label="Contact us section"
        >
            <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="md:sticky h-fit top-12">
                    <h2 className="mb-2 h2">{heading ? heading : <SparkleText text="Get In Touch" />}</h2>
                    <p className="text-muted-foreground">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                    <div className="hidden md:block">
                        <Imail className="w-full text-muted-foreground" />
                    </div>
                </div>
                <FormBox />
            </div>
        </section>
    )
}
