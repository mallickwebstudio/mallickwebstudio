"use client"
import SparkleText from "@/components/other/sparkle-text";
import ServiceCard from "@/components/cards/service-card";
import { services } from "@/lib/datas/const";
import FadeUp from "@/components/animaitons/FadeUp";

export default function Service() {
    return (
        <section id="service">
            <div className="section-wrapper">
                <FadeUp tag="h2">
                    What <SparkleText text="Services" /> you get
                </FadeUp>
                
                <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <FadeUp key={i + "HomeServiceCard"} >
                                <ServiceCard data={item} />
                            </FadeUp>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}