import ServiceCard from "../cards/service-card"

export default function OtherServices({ data }) {
    return (
        <section>
            <div className="section-wrapper">

                <h2>Other Services I offer</h2>

                <div className="mt-block grid sm:grid-cols-2 gap-base">
                    {data.map((item, i) => {
                        return (
                            <ServiceCard data={item} key={i + "ServiceServiceCard"} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
