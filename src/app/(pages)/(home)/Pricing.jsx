import PricingCard from "@/components/cards/PricingCard";
import SparkleText from "@/components/helper/SparkleText";
import { pricing } from "@/lib/const";

export default function Pricing() {
  return (
    <section className="bg-section-pattern-2">
      <div className="section-wrapper">
        <div className="mx-auto">
          <h2>Quality and Affordable Website <SparkleText text="Pricing" /></h2>


          <div className="mt-block grid gap-base md:grid-cols-2">
            {pricing.map(item => (
              <PricingCard data={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
