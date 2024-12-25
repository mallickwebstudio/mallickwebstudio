import FadeUp from "@/components/animaitons/FadeUp";
import PricingCard from "@/components/cards/pricing-card";
import SparkleText from "@/components/other/sparkle-text";
import { pricing } from "@/lib/datas/const";

export default function Pricing() {
  return (
    <section className="bg-section-pattern-2" id="pricing">
      <div className="mx-auto section-wrapper">
        <FadeUp tag="h2">
          Quality and Affordable Website <SparkleText text="Pricing" />
        </FadeUp>


        <div className="mt-block grid gap-base sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item, i) => (
            <FadeUp
              transition={{
                type: "spring",
                delay: 0.3 * i
              }}
              key={item.id + "HomePricingCard"}>
              <PricingCard data={item} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
