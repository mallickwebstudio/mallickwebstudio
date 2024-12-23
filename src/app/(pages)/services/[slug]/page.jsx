import Hero from "@/components/other/hero";
import SparkleText from "@/components/other/sparkle-text";
import { services } from "@/lib/datas/const";
import { notFound } from "next/navigation";
import Includes from "./includes";
import OtherServices from "@/components/section/other-services";
import Contact from "@/components/section/contact/contact";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug, // Ensure each slug matches the required parameter
    }));
}

export default async function page({ params }) {
    const { slug } = await params;

    const item = services.find(item => item.slug.toLowerCase() === slug.toLowerCase());

    if (!item) {
        notFound();
        return;
    }

    return (
        <main>
            <Hero heading={item.heading} />
            <Includes data={item.benefits} />
            <Contact className="bg-section-secondary" heading={<>Ready to take the <SparkleText text="next step?" /></>} />
            <OtherServices data={services.filter(item => item.slug !== slug)} />
        </main>
    );
}
