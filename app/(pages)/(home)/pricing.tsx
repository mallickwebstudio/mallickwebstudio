import PricingCard from "@/components/cards/pricing-card";
import SparkleText from "@/components/other/sparkle-text";
import { pricing } from "@/lib/datas/const";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-section-pattern-2"
      role="region"
      aria-label="service section for introduction"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <header className="mx-auto max-w-xl text-center">
          <h2 className="h2">
            Quality and Affordable  <SparkleText text="Website Pricing" />
          </h2>
        </header>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item, i) => (
            <PricingCard data={item} key={item.id + "HomePricingCard"} />
          ))}
        </div>
      </div>
    </section>
  )
}
