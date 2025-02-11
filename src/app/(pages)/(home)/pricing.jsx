import PricingCard from "@/components/cards/pricing-card";
import SparkleText from "@/components/other/sparkle-text";
import { pricing } from "@/lib/datas/const";

export default function Pricing() {
  return (
    <section className="bg-section-pattern-2" id="pricing">
      <div className="mx-auto section-wrapper">
        <h2>
          Quality and Affordable Website <SparkleText text="Pricing" />
        </h2>


        <div className="mt-block grid gap-base sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item, i) => (
            <PricingCard data={item} key={item.id + "HomePricingCard"} />
          ))}
        </div>
      </div>
    </section>
  )
}
