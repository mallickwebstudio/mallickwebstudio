"use client"
import SparkleText from "@/components/other/sparkle-text";
import ServiceCard from "@/components/cards/service-card";
import { services } from "@/lib/datas/const";

export default function Service() {
    return (
        <section id="service">
            <div className="section-wrapper">
                <h2>
                    What <SparkleText text="Services" /> you get
                </h2>

                <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <ServiceCard data={item} key={i + "HomeServiceCard"} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}