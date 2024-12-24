import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckCheck } from "lucide-react";
import FadeUp from "../animaitons/FadeUp";
import { cn } from "@/lib/utils";
import SparkleText from "../other/sparkle-text";

export default function PricingCard({ data: {
    id,
    title,
    description,
    benefits,
    additionalFeature,
    price,
    offer,
    offerName,
    offerPrice
} }) {
    return (
        <div className={`relative p-4 h-fit border bg-background bg-opacity-5 rounded-md ${id === "advancePricing" ? "border-primary" : ""}`}>
            {/* Recommended */}
            {id === "advancePricing" ? (
                <div className="absolute -top-sm left-0 right-0 w-full flex-center">
                    <div className="py-1 px-3 bg-primary text-background uppercase tracking-wide font-semibold rounded">
                        Recommended
                    </div>
                </div>
            ) : null}

            {/* Heading */}
            <div className="p-4 pt-8 text-center grid place-items-center">
                <FadeUp tag="h3">
                    {title}
                </FadeUp>
                <FadeUp tag="h4" className="mt-base text-sm">
                    {description}
                </FadeUp>
            </div>

            {/* Body */}
            <div className="pb-4 border-t">
                <ul className="mx-auto w-fit">
                    {benefits.map(item => (
                        <FadeUp tag="li" className="mt-4" key={item.id + "PricingCardBenefits"}>
                            <CheckCheck className="inline mr-sm size-5 shrink-0 text-primary" />
                            <span>{item.feature}</span>
                        </FadeUp>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="p-4 border-t grid place-items-center">
                {/* Additional Features */}
                <FadeUp tag="p">
                    <b>Note:</b> {additionalFeature}
                </FadeUp>

                {offer && (
                    <FadeUp className="mt-base">
                        <SparkleText className="italic" text={offerName} />
                    </FadeUp>
                )}

                <FadeUp>
                    <span className="inline-block font-bold">
                        <span className={cn("", offer ? "text-base text-muted-foreground line-through font-normal" : "text-3xl text-primary")}>
                            ${price}
                        </span>
                        {offer && (
                            <span className="text-3xl text-primary">
                                {" "}${offerPrice}
                            </span>
                        )}
                    </span> (USD)
                </FadeUp>

                <Link className={`${buttonVariants()} mt-base hover:scale-105 transition-all`} href="/contact">
                    Get This Website
                </Link>
            </div>
        </div>
    )
}
