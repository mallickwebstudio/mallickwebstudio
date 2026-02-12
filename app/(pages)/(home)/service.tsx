"use client"
import SparkleText from "@/components/other/sparkle-text";
import HomeServiceCard from "@/components/cards/home-service-card";
import { services } from "@/lib/datas/const";

export default function Service() {
    return (
        <section
            id="services"
            className="relative bg-linear-to-b from-background to-secondary"
            role="region"
            aria-label="service section for introduction"
        >
            <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
                <header className="mx-auto max-w-2xl text-center">
                    <h2 className="h2">
                        <SparkleText text="Services" /> I Offer
                    </h2>
                </header>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((item, i) => {
                        return (
                            <HomeServiceCard data={item} key={i + "HomeServiceCard"} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}