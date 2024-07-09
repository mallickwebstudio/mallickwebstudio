import ServiceIncludeCard from "@/components/cards/ServiceIncludeCard"
import SparkleText from "@/components/helper/SparkleText"
import { SOSIncludes } from "@/lib/const"

export default function Includes() {
    return (
        <section>
            <div className="section-wrapper">
                
                <h2>Let <SparkleText text="Google Rank"/> You</h2>

                <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                    {SOSIncludes.map((item, i) => {
                        return <ServiceIncludeCard key={item.title} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
