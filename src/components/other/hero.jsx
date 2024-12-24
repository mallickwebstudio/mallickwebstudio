import { cn } from "@/lib/utils";
import ZoomIn from "../animaitons/ZoomIn";

export default function Hero({ className, heading, children }) {
    return (
        <section className={cn("bg-section-pattern text-white", className)}>
            <div className="section-wrapper">
                <ZoomIn>
                {heading && <h1 className="text-center">{heading}</h1>}
                {children}
                </ZoomIn>
            </div>
        </section>
    )
}