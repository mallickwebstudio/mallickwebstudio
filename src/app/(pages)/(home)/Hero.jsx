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
                        <div className="text-2xl">I&apos;m Salman Mallick</div>
                        <h1 className="my-base leading-[55px]">
                            <span className="clr-p"><SparkleText text="UI/UX" /></span> Designer, <br />
                            <span className="clr-p"><SparkleText text="Full Stack" /></span> Website Developer
                        </h1>

                        {/* <p className="md:w-4/5">
                            Specializes in crafting visually striking and <span className="font-bold"> user-friendly </span> websites. I prioritizes clean and <span className="font-bold"> simple content structures</span>, coupled with <span className="font-bold"> thoughtful interactions </span> to enhance the user experience.
                        </p> */}
                        <p className="md:w-4/5">
                            I specialize in creating <span className="font-bold">high-quality, affordable websites</span> tailored for small and medium-sized businesses. These websites are designed to be both visually appealing and<span className="font-bold"> user-friendly</span>, ensuring a positive experience for your customers.
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
