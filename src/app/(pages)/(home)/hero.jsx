"use client";

import { buttonVariants } from "@/components/ui/button";
import SparkleText from "@/components/other/sparkle-text";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeLeft from "@/components/animaitons/FadeLeft";
import ScrollMouse from "@/components/other/ScrollMouse";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { x: -20, y: 20, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="section-wrapper">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Hero Text Content */}
          <motion.article
            className="md:col-span-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={item}
              className="text-2xl font-normal leading-relaxed"
            >
              I&apos;m Mohammad Salman Mallick
            </motion.h1>

            <motion.h2
              variants={item}
              className="h1 my-base leading-[55px] text-left"
            >
              <span>
                <SparkleText text="UI/UX" />
              </span>{" "}
              Designer, <br />
              <span>
                <SparkleText text="Full Stack" />
              </span>{" "}
              Website Developer
            </motion.h2>

            <motion.p
              variants={item}
              className="md:w-4/5 text-muted-foreground"
            >
              Specializing in{" "}
              <span className="font-bold">purpose-driven</span> websites
              tailored for small and medium-sized businesses, we are committed
              to enhancing your{" "}
              <span className="font-bold">market engagement</span> and ensuring
              a positive customer experience.
            </motion.p>

            <motion.div variants={item} className="mt-base">
              <Link className={buttonVariants()} href="/contact">
                Hire Now
              </Link>
            </motion.div>
          </motion.article>

          {/* Hero Image */}
          <FadeLeft className="relative md:col-span-2">
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
          </FadeLeft>
        </div>
        {/* Scroll Indicator */}
        <ScrollMouse />
      </div>
    </section>
  );
}
