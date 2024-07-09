import ServiceIncludeCard from "@/components/cards/ServiceIncludeCard"
import SparkleText from "@/components/helper/SparkleText"
import { WUSIncludes } from "@/lib/const"

export default function Includes() {
    return (
        <section>
            <div className="section-wrapper">
            <h2><SparkleText text="Feeling aged?"/> time to <SparkleText text="upgrade"/></h2>

                <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                    {WUSIncludes.map((item, i) => {
                        return <ServiceIncludeCard key={item.title} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
