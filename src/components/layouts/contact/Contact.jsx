import Image from "next/image";
import SparkleText from "../../helper/SparkleText";
import FormBox from "./Form";
import { Imail } from "@/components/ui/svgs";
import FadeRight from "@/components/animaitons/FadeRight";

export default function Contact({ className, heading, subTitle }) {
    return (
        <section className={className}>
            <div className="section-wrapper relative grid md:grid-cols-2 gap-block">
                <div className="md:sticky h-fit top-block">
                    <FadeRight>
                        <h2 className="mb-2 text-left">{heading ? heading : <SparkleText text="Get In Touch" />}</h2>
                    </FadeRight>
                    <FadeRight>
                        <p className="">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
                    </FadeRight>
                    <div className="hidden md:block">
                        <FadeRight>
                            <Imail className="w-full text-muted-foreground" />
                        </FadeRight>
                    </div>
                </div>
                <FormBox />
            </div>
        </section>
    )
}
