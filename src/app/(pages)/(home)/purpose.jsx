import SparkleText from "@/components/other/sparkle-text";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BarChart4, MonitorSmartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Purpose() {
  return (
    <section className="bg-section-secondary" id="purpose" aria-labelledby="purpose-heading">
      <div className="relative section-wrapper grid md:grid-cols-2 gap-block">
        {/* Image Gallery */}
        <aside
          className="md:sticky top-block w-full h-fit grid grid-cols-3 gap-base"
          aria-labelledby="project-gallery-heading"
        >
          <h3 id="project-gallery-heading" className="sr-only">
            Featured Projects Gallery
          </h3>
          {[
            { src: "/images/projects/naharayurvedicpharmacy.jpg", alt: "pharmacy website" },
            { src: "/images/projects/zenflex.jpg", alt: "zenflex website" },
            { src: "/images/projects/regalestate.png", alt: "Regalestate website" },
            { src: "/images/projects/foodie.jpg", alt: "Foodie website" },
            { src: "/images/projects/bugbuster.png", alt: "Bugbuster website" },
            { src: "/images/projects/cofeco.jpg", alt: "Cofeco website" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-full"
            >
              <Image
                className="relative w-full aspect-[3/4] object-cover object-top rounded-md overflow-hidden"
                width={150}
                height={150}
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </aside>

        {/* Details */}
        <div>
          <h2 id="purpose-heading" className="text-2xl md:text-3xl md:text-left">
            I focus on <SparkleText text="purpose-driven" /> website creation with a key emphasis on <SparkleText text="user experience" />.
          </h2>

          <div>
            <p className="mb-4 text-muted-foreground">
              Let&apos;s be honest, many websites fail to meet user expectations. My mission is to reverse this trend by crafting purposeful and meaningful websites that ensure an enhanced user experience.
            </p>
            <p className="mb-4 text-muted-foreground">
              I&apos;m committed to adhering to both fundamental and advanced UX design principles to prevent conversion losses, improve usability and clarity, and ultimately maximize effectiveness.
            </p>
            <p className="mb-4 text-muted-foreground">
              <i>With each website I create, my aim is to contribute to a more accessible and visually appealing online environment.</i>
            </p>
          </div>

          <h3 id="key-features-heading" className="sr-only">
            Key Features
          </h3>
          <ul className="mt-base space-y-sm" aria-labelledby="key-features-heading">
            <li>
              <Sparkles className="inline mr-sm size-base text-primary" />
              <span>Beautifully Designed</span>
            </li>
            <li>
              <BarChart4 className="inline mr-sm size-base text-primary" />
              <span>High Conversion</span>
            </li>
            <li>
              <MonitorSmartphone className="inline mr-sm size-base text-primary" />
              <span>Responsive Website</span>
            </li>
          </ul>

          <div className="mt-base">
            <Link
              className={`${buttonVariants({ variant: "outline" })} hover:bg-primary hover:text-primary-foreground group`}
              href="/about"
            >
              About Me & My Approach
              <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
