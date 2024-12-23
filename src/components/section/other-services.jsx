import FadeUp from "../animaitons/FadeUp"
import ServiceCard from "../cards/service-card"

export default function OtherServices({ data }) {
    return (
        <section>
            <div className="section-wrapper">

                <h2>Other Services I offer</h2>

                <div className="mt-block grid sm:grid-cols-2 gap-base">
                    {data.map((item, i) => {
                        return (
                            <FadeUp key={i + "ServiceServiceCard"} >
                                <ServiceCard data={item} />
                            </FadeUp>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
