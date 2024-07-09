import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckCheck } from "lucide-react";
import SparkleText from "../helper/SparkleText";
import FadeUp from "../animaitons/FadeUp";

export default function PricingCard({ data: { id, title, description, benefits, additionalFeature, price } }) {
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
                    <div className="font-semibold text-3xl">
                        {title}
                    </div>
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
                    <div className=""><span className="font-bold">Additional:</span> {additionalFeature}</div>
                </FadeUp>

                <FadeUp>
                    <div className="mt-base">
                        <span className="font-bold text-3xl text-primary">${price}</span> (USD)
                    </div>
                </FadeUp>

                <Link className={`${buttonVariants()} mt-base hover:scale-105 transition-all`} href="/contact">Get This Website</Link>
            </div>
        </div>
    )
}
