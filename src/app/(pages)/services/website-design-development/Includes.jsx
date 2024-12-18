import ServiceIncludeCard from "@/components/cards/ServiceIncludeCard"
import SparkleText from "@/components/helper/SparkleText"
import { WDDSIncludes} from "@/lib/datas/const"

export default function Includes() {
    return (
        <section>
            <div className="section-wrapper">
            <h2>Websites <SparkleText text="built"/> & <SparkleText text="designed" /> for <SparkleText text="success"/></h2>

                <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                    {WDDSIncludes.map((item, i) => {
                        return <ServiceIncludeCard key={item.title} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
