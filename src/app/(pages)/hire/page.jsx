import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/other/sparkle-text";
import Link from "next/link";
import HireCard from "@/components/cards/hire-card";
import { hireMd } from "@/lib/datas/metaDatas";

export const metadata = hireMd;

export default function page() {
    return (
        <section>
            <div className="section-wrapper">
                <h1 className="md:text-center"><SparkleText text="Hire Me" /> For Project</h1>

                <div className="my-block grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
                    <HireCard
                        title="Freelancer.com"
                        link="https://www.freelancer.com/u/Salman3216"
                        imageUrl="/images/hire/freelancer.png"
                    />
                    <HireCard
                        title="fiverr.com"
                        link="https://www.fiverr.com/salman_mallick"
                        imageUrl="/images/hire/fiverr.png"
                    />
                </div>
                <div className="mt-6 w-full flex-center">
                    <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>Contact Now</Link>
                </div>
            </div>
        </section>
    )
}
