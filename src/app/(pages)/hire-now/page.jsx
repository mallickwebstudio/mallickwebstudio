import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/helper/SparkleText";
import Link from "next/link";
import HireCard from "@/components/ui/HireCard";

export default function page() {
    return (
        <section className="section-padding">
            <h1 className="md:text-center"><SparkleText text="Hire Me" /> For Project</h1>

            <div className="my-10 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))]">
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
        </section>
    )
}
