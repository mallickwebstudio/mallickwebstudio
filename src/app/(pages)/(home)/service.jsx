"use client"
import SparkleText from "@/components/other/sparkle-text";
import ServiceCard from "@/components/cards/service-card";
import { services } from "@/lib/datas/const";
import FadeUp from "@/components/animaitons/FadeUp";
import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeRight from "@/components/animaitons/FadeRight";
import { motion } from "framer-motion";

// const serviceData = [
//     {
//         icon: <Shapes className="w-8 h-8 group-hover:text-primary" />,
//         title: "Designing & user interfaces",
//         description: "Crafting visually appealing and user-friendly interfaces.",
//     },
//     {
//         icon: <MonitorSmartphone className="w-8 h-8 group-hover:text-primary" />,
//         title: "Responsive designs",
//         description: "Create designs that work seamlessly across various devices and screen sizes.",
//     },
//     {
//         icon: <TrendingUp className="w-8 h-8 group-hover:text-primary" />,
//         title: "Optimizing performance",
//         description: "Optimizing website speed and performance for better user experiences.",
//     },
//     {
//         icon: <Wrench className="w-8 h-8 group-hover:text-primary" />,
//         title: "Maintenance and Updates",
//         description: "Will provide ongoing support, updates, and maintenance for projects.",
//     },
//     {
//         icon: <Earth className="w-8 h-8 group-hover:text-primary" />,
//         title: "Browser Compatibility",
//         description: "Ensuring that websites work well across different browsers.",
//     },
//     {
//         icon: <PencilRuler className="w-8 h-8 group-hover:text-primary" />,
//         title: "Custom Modification",
//         description: "Open to accommodating custom modifications based on client preferences.",
//     },
// ];

export default function Service() {
    return (
        <section id="service">
            <div className="section-wrapper">
                <FadeUp>
                    <h2>What <span className=""><SparkleText text="Services" /></span> you get</h2>
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