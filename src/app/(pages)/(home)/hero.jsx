"use client";

import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/other/sparkle-text";
import Image from "next/image";
import Link from "next/link";
import ScrollMouse from "@/components/other/ScrollMouse";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="section-wrapper">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Hero Text Content */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-normal leading-relaxed">
              I&apos;m Mohammad Salman Mallick
            </h1>

            <h2 className="h1 my-base leading-[55px] text-left">
              <span>
                <SparkleText text="UI/UX" />
              </span>{" "}
              Designer, <br />
              <span>
                <SparkleText text="Full Stack" />
              </span>{" "}
              Website Developer
            </h2>

            <p className="md:w-4/5 text-muted-foreground">
              Specializing in{" "}
              <span className="font-bold">purpose-driven</span> websites
              tailored for small and medium-sized businesses, we are committed
              to enhancing your{" "}
              <span className="font-bold">market engagement</span> and ensuring
              a positive customer experience.
            </p>

            <div className="mt-base">
              <Link className={buttonVariants()} href="/contact">
                Hire Now
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative md:col-span-2">
            <div className="hero-blob" aria-hidden="true" />
            <div className="relative w-full flex-center rounded overflow-hidden">
              <Image
                className="object-contain object-center rounded"
                width={500}
                height={500}
                src="/hero.svg"
                alt="Illustration of a person working on design and development"
                priority
              />
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <ScrollMouse />
      </div>
    </section>
  );
}
