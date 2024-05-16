import SparkleText from "@/components/helper/SparkleText";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import { contactMd } from "@/lib/metaData";

export const metadata = {
    title: contactMd.title,
    description: contactMd.description,
}

export default function page() {
    return (
        <>
            <Hero heading={<><SparkleText text="Contact Me" /></>} />
            <Contact />
        </>
    );
}
