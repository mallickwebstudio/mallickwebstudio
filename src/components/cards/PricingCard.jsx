import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CheckCheck } from "lucide-react";
import SparkleText from "../helper/SparkleText";

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
                <div className="font-semibold text-3xl">
                    {title}
                </div>
                <p className="mt-base text-sm">{description}</p>
            </div>

            {/* Body */}
            <div className="pb-4 border-t">
                <ul className="mx-auto w-fit">
                    {benefits.map(item => (
                        <li className="mt-4 flex gap-4" key={item.id}>
                            <CheckCheck className="mt-[2px] size-5 shrink-0 text-primary" />
                            <div className="">{item.feature}</div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer */}
            <div className="p-4 border-t grid place-items-center">
                {/* Additional Features */}
                <div className="">Additional: {additionalFeature}</div>

                <div className="mt-base">
                    <span className="font-bold text-3xl text-primary">${price}</span> (USD)
                </div>

                <Link className={`${buttonVariants()} mt-base`} href="/contact">Get This Website</Link>
            </div>
        </div>
    )
}
