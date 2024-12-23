import { Imail } from "@/components/other/svgs";
import FormBox from "./form";
import FadeRight from "@/components/animaitons/FadeRight";
import SparkleText from "@/components/other/sparkle-text";

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
