import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckCheck } from "lucide-react";
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
        <div
            className={`relative p-4 h-fit border bg-background bg-opacity-5 rounded-md ${id === "advancePricing" ? "border-primary" : ""}`}
            aria-labelledby={`pricing-card-${id}`}
        >
            {id === "advancePricing" ? (
                <div className="absolute -top-sm left-0 right-0 w-full flex-center">
                    <div className="py-1 px-3 bg-primary text-background uppercase tracking-wide font-semibold rounded">
                        Recommended
                    </div>
                </div>
            ) : null}

            <header className="p-4 pt-8 text-center grid place-items-center">
                <h3 id={`pricing-card-${id}-title`}>
                    {title}
                </h3>
                <h4 className="mt-base text-sm">
                    {description}
                </h4>
            </header>

            <ul className="pb-4 border-t mx-auto w-fit">
                {benefits.map(item => (
                    <li className="mt-4" key={item.id + "PricingCardBenefits"}>
                        <CheckCheck className="inline mr-sm size-5 shrink-0 text-primary" />
                        <span>{item.feature}</span>
                    </li>
                ))}
            </ul>

            <div className="p-4 border-t grid place-items-center">
                <p>
                    <b>Note:</b> {additionalFeature}
                </p>

                {offer && (
                    <div className="mt-base">
                        <SparkleText className="italic" text={offerName} />
                    </div>
                )}

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

                <Link
                    className={`${buttonVariants()} mt-base hover:scale-105 transition-all`}
                    href="/contact"
                    aria-label={`Get the ${title} website plan`}
                >
                    Get This Website
                </Link>
            </div>
        </div>
    );
}
