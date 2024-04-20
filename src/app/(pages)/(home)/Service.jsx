import SparkleText from "@/components/helper/SparkleText";
import ServiceCard from "@/components/cards/ServiceCard";
import { Earth, MonitorSmartphone, PencilRuler, Shapes, TrendingUp, Wrench } from "lucide-react";

const serviceData = [
    {
        icon: <Shapes className="w-8 h-8 group-hover:text-primary" />,
        title: "Designing & user interfaces",
        desc: "Crafting visually appealing and user-friendly interfaces.",
    },
    {
        icon: <MonitorSmartphone className="w-8 h-8 group-hover:text-primary" />,
        title: "Responsive designs",
        desc: "Create designs that work seamlessly across various devices and screen sizes.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 group-hover:text-primary" />,
        title: "Optimizing performance",
        desc: "Optimizing website speed and performance for better user experiences.",
    },
    {
        icon: <Wrench className="w-8 h-8 group-hover:text-primary" />,
        title: "Maintenance and Updates",
        desc: "Will provide ongoing support, updates, and maintenance for projects.",
    },
    {
        icon: <Earth className="w-8 h-8 group-hover:text-primary" />,
        title: "Browser Compatibility",
        desc: "Ensuring that websites work well across different browsers.",
    },
    {
        icon: <PencilRuler className="w-8 h-8 group-hover:text-primary" />,
        title: "Custom Modification",
        desc: "Open to accommodating custom modifications based on client preferences.",
    },
];

export default function Service() {
    return (
        <section id="service">
            <h2>
                What <span className=""><SparkleText text="Services" /></span> you get?
            </h2>
            <div className="mt-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                {
                    serviceData.map((item, i) => {
                        return <ServiceCard key={i + 1} icon={item.icon} title={item.title} desc={item.desc} />
                    })
                }
            </div>
        </section>
    )
}