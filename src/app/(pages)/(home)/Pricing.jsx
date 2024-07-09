import FadeUp from "@/components/animaitons/FadeUp";
import PricingCard from "@/components/cards/PricingCard";
import SparkleText from "@/components/helper/SparkleText";
import { pricing } from "@/lib/const";

export default function Pricing() {
  return (
    <section className="bg-section-pattern-2">
      <div className="section-wrapper">
        <div className="mx-auto">
          <FadeUp>
            <h2>Quality and Affordable Website <SparkleText text="Pricing" /></h2>
          </FadeUp>


          <div className="mt-block grid gap-base md:grid-cols-2">
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
      </div>
    </section>
  )
}
