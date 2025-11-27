"use client"
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import SparkleText from "@/components/other/sparkle-text";
import Link from "next/link";
import Lottie from "lottie-react";
import heroLottie from "@/lottie/hero-three.json";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-background to-secondary overflow-hidden"
      role="region"
      aria-label="Hero section for product introduction"
    >
      <div className="relative mx-auto container px-6 py-12 md:p-16 lg:py-20 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8 md:gap-10">
        {/* Text Content */}
        <header className="relative max-w-2xl w-full">
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-left">
            <span>
              <SparkleText text="Small Business" />
            </span>{" "}
            Websites That Deliver{" "}
            <span>
              <SparkleText text="Big Results" />
            </span>{" "}
          </h1>
          <p className="mt-3 md:mt-4 max-w-lg md:text-lg text-balance">
            I create high-quality, budget-friendly websites for small and medium-sized businesses that want an effective, user-friendly, and visually stunning online presence your customers will love.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button className="cursor-pointer" variant="default" size="lg" aria-label="Get started with the product" asChild>
              <Link href="/contact">
                Hire for project
              </Link>
            </Button>
            <Button className="cursor-pointer" variant="outline" size="lg" aria-label="Learn more about the product" asChild>
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative w-full aspect-square overflow-hidden flex justify-center">
          {/* <Image
            className="w-full min-w-sm max-w-sm aspect-square object-contain rounded-md select-none pointer-events-none"
            src="/images/illustration/hero.svg"
            width={400}
            height={400}
            alt="Illustration of a person working on design and development"
            priority
          /> */}
          <div className="h-[90%] overflow-hidden flex items-start">
            <Lottie animationData={heroLottie} />
          </div>
        </div>
      </div>
    </section>
  );
}
