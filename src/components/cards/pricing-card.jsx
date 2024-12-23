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
                    <div className="py-1 px-3 bg-primary text-background uppercase tracking-wide font-semibold rounded">Recommended</div>
                </div>
            ) : null}

            {/* Heading */}
            <div className="p-4 pt-8 text-center grid place-items-center">
                <FadeUp>
                    <h3>{title}</h3>
                </FadeUp>
                <FadeUp>
                    <p className="mt-base text-sm">{description}</p>
                </FadeUp>
            </div>

            {/* Body */}
            <div className="pb-4 border-t">
                <ul className="mx-auto w-fit">
                    {benefits.map(item => (
                        <FadeUp key={item.id + "PricingCardBenefits"}>
                            <li className="mt-4 flex gap-4">
                                <CheckCheck className="mt-[2px] size-5 shrink-0 text-primary" />
                                <div className="">{item.feature}</div>
                            </li>
                        </FadeUp>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="p-4 border-t grid place-items-center">
                {/* Additional Features */}
                <FadeUp>
                    <div><span className="font-bold">Note:</span> {additionalFeature}</div>
                </FadeUp>

                {offer && (
                    <FadeUp className="mt-base">
                        <SparkleText className="italic" text={offerName} />
                    </FadeUp>
                )}

                <FadeUp>
                    <div>
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
                    </div>
                </FadeUp>

                <Link className={`${buttonVariants()} mt-base hover:scale-105 transition-all`} href="/contact">
                    Get This Website
                </Link>
            </div>
        </div>
    )
}
