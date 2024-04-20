import PricingCard from "@/components/cards/PricingCard";
import SparkleText from "@/components/helper/SparkleText";
import { pricing } from "@/lib/const";

export default function Pricing() {
  return (
    <section>
      <div className="mx-auto">
        <h2> Affordable Website <SparkleText text="Pricing" /></h2>


        <div className="mt-block grid gap-base md:grid-cols-2">

          {
            pricing.map(item => (
              <PricingCard data={item} key={item.id} />
            ))
          }



          {/* <div className="p-4 relative border rounded-md overflow-hidden"> */}
          {/* Heading */}
          {/* <div className="mx-auto w-full md:w-1/2 my-base text-center flex-center flex-col">
            <h2 className="mb-0 font-semibold">
              All in one <SparkleText text=" Combo package" />
            </h2>

            <div className="mt-base text-3xl font-semibold text-primary">
              <SparkleText text="$249" />
            </div>

            <p>Elevate your online presence and streamline your digital operations in one single package</p>
          </div> */}


          {/* Features */}
          {/* <div className="mt-block grid md:grid-cols-2 lg:grid-cols-3 gap-base">
            {pricingFeatures.map((item, i) => (
              <div key={item.id}>
                <div className="mb-2 font-normal">
                  <span className="text-muted-foreground/40">#{i + 1}</span> {item.category}
                </div>

                <ul className="">
                  {item.features.map((feature, i) => (
                    <li className="flex gap-4 text-muted-foreground hover:text-foreground group" key={item.id + i}>
                      <CheckCheck className="size-4 group-hover:text-green-500 shrink-0" />
                      <div>{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
