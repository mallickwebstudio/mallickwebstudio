import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Image from "next/image";
import Link from "next/link";
import ScrollMouse from "@/components/ui/ScrollMouse";

export default function Hero() {
    return (
        <section>
            <div className="section-wrapper">

                <div className="grid gap-8 md:grid-cols-5">
                    <div className="md:col-span-3 flex-center flex-col">
                        <div>
                            <div className="text-2xl">I&apos;m Salman Mallick</div>
                            <h1 className="my-base leading-[55px]">
                                <span className="clr-p"><SparkleText text="UI/UX" /></span> Designer, <br />
                                <span className="clr-p"><SparkleText text="Full Stack" /></span> Website Developer
                            </h1>

                            <p className="md:w-4/5">
                                Specializing in <span className="font-bold"> purpose-driven </span>  websites tailored for small and medium-sized businesses, we are committed to enhancing your <span className="font-bold"> market engagement </span>  and ensuring a positive customer experience.
                            </p>
                        </div>

                        <div className="mt-base self-start">
                            <Link className={`${buttonVariants()} `} href="/contact">Hire Now</Link>
                        </div>
                    </div>

                    <div className="relative md:col-span-2">
                        <div className="hero-blob" />
                        <div className="relative w-full bg-contain flex-center rounded overflow-hidden" >
                            <Image
                                className="relative object-contain object-center rounded"
                                width={500}
                                height={500}
                                src="/hero.svg"
                                alt="hero image by manypixel"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <ScrollMouse />
            </div>
        </section>
    )
}
