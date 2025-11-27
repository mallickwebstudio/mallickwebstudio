import Hero from "@/components/other/hero";
import SparkleText from "@/components/other/sparkle-text";
import Contact from "@/components/section/contact/contact";
import { contactMd } from "@/lib/datas/metaDatas";

export const metadata = contactMd;

export default function page() {
    return (
        <>
            <Hero heading={<><SparkleText text="Contact Me" /></>} />
            <Contact />
        </>
    );
}
