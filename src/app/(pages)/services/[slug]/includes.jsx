import ServiceIncludeCard from "@/components/cards/service-include-card"

export default function Includes({ data: { pageTitle, benefits } }) {
    return (
        <section>
            <div className="section-wrapper">

                <h2>{pageTitle}</h2>

                <div className="mt-block grid sm:grid-cols-2 md:grid-cols-3 gap-base">
                    {benefits?.map((item, i) => {
                        return <ServiceIncludeCard key={item.title + "ServiceBenefits" + i} data={item} />
                    })}
                </div>
            </div>
        </section>
    )
}
