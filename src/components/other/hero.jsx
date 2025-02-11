import { cn } from "@/lib/utils";

export default function Hero({ className, heading, children }) {
    return (
        <section className={cn("bg-section-pattern text-white", className)}>
            <div className="section-wrapper">
                {heading && <h1 className="text-center">{heading}</h1>}
                {children}
            </div>
        </section>
    )
}