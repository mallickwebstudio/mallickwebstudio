import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Image from "next/image";
import Link from "next/link";
import ScrollMouse from "@/components/ui/ScrollMouse";

export default function Hero() {
    return (
        <section className="md:py-12">
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3 flex-center flex-col">
                    <div>
                        <h1>
                            I&apos;M SALMAN MALLICK <br />
                            A <span className="clr-p"><SparkleText text="FRONTEND" /></span> DEVELOPER
                        </h1>

                        <p className="text-muted-foreground md:w-4/5">
                            Specializes in crafting visually striking and <span className="font-bold"> user-friendly </span> websites. I prioritizes clean and <span className="font-bold"> simple content structures</span>, coupled with <span className="font-bold"> thoughtful interactions </span> to enhance the user experience.
                        </p>
                    </div>
                    <div className="mt-6 self-start">
                        <Link className={`${buttonVariants()} `} href="/hire-now">Hire Now</Link>
                    </div>
                </div>

                <div className="relative md:col-span-2">
                    <div className="hero-blob"></div>
                    <div className="relative w-full bg-contain flex-center rounded overflow-hidden" >
                        <Image
                            className="relative object-contain object-center rounded"
                            width={5000}
                            height={5000}
                            src="/hero.svg"
                            alt="hero"
                        />
                    </div>
                </div>
            </div>

            <ScrollMouse />
        </section>
    )
}
