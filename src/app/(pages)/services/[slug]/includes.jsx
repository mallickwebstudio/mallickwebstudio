import ServiceIncludeCard from "@/components/cards/service-include-card"
import SparkleText from "@/components/other/sparkle-text"

export default function Includes({ data }) {
    return (
        <section>
            <div className="section-wrapper">

                <h2>Let <SparkleText text="Google Rank" /> You</h2>

                <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                    {data.map(item => {
                        return <ServiceIncludeCard key={item.title+"ServiceBenefits"} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
