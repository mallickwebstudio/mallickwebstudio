import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeRight from "@/components/animaitons/FadeRight";
import FadeUp from "@/components/animaitons/FadeUp";
import SparkleText from "@/components/other/sparkle-text";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BarChart4, MonitorSmartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Purpose() {
  return (
    <section className="bg-section-secondary">
      <div className="relative section-wrapper grid md:grid-cols-2 gap-block">
        {/* Image */}
        <FadeRight>
          <div className="md:sticky top-block w-full h-fit grid grid-cols-2 gap-base">
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                className="relative w-full aspect-square object-cover object-top rounded"
                width={150}
                height={150}
                src="/images/projects/regalestate.png"
                alt="regalestate website"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                className="relative w-full aspect-square object-cover object-top rounded"
                width={150}
                height={150}
                src="/images/projects/bugbuster.png"
                alt="bugbuster website"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                className="relative w-full aspect-square object-cover object-top rounded"
                width={150}
                height={150}
                src="/images/projects/cofeco.jpg"
                alt="cofeco website"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                className="relative w-full aspect-square object-cover object-top rounded"
                width={150}
                height={150}
                src="/images/projects/foodie.jpg"
                alt="foodie website"
              />
            </div>
          </div>
        </FadeRight>

        {/* Details */}
        <div>
          <FadeUp>
            <h2 className="text-2xl md:text-3xl md:text-left">I focus on <SparkleText text="purpose-driven" />  website creation with a key emphasis on <SparkleText text="user experience" />.</h2>
          </FadeUp>

          <div>
            <FadeUp>
              <p className="mt-4">Let&apos;s be honest, many websites fail to meet user expectations. My mission is to reverse this trend by crafting purposeful and meaningful websites that ensure an enhanced user experience. </p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4">I&apos;m committed to adhering to both fundamental and advanced UX design principles to prevent conversion losses, improve usability and clarity, and ultimately maximize effectiveness.</p>
            </FadeUp>
            <FadeUp>
              <p className="mt-4"><i>With each website I create, my aim is to contribute to a more accessible and visually appealing online environment.</i></p>
            </FadeUp>
          </div>

          <div className="mt-base">
            <FadeRight>
              <div className="flex gap-4 items-center leading-10">
                <Sparkles className="inline size-base text-primary shrink-0" />
                <div>Beautifully Designed</div>
              </div>
            </FadeRight>

            <FadeRight>
              <div className="flex gap-4 items-center leading-10">
                <BarChart4 className="inline size-base text-primary shrink-0" />
                <div>High Conversion</div>
              </div>
            </FadeRight>

            <FadeRight>
              <div className="flex gap-4 items-center leading-10">
                <MonitorSmartphone className="inline size-base text-primary shrink-0" />
                <div>Responsive Website</div>
              </div>
            </FadeRight>
          </div>

          <div className="mt-base">
            <FadeRight>
              <Link className={`${buttonVariants({ variant: "outline" })} hover:bg-primary hover:text-white group`} href="/about">
                About Me & My Approach <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
              </Link>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  )
}
