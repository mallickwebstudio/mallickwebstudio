"use client"
import FadeUp from "@/components/animaitons/FadeUp";
import TechCard from "@/components/cards/tech-card";
import SparkleText from "@/components/other/sparkle-text";
import { INext, IShadcn } from "@/components/other/svgs";

const techStackData = [
  {
    href: "https://nextjs.org/",
    icon: <INext className="w-fit h-fit text-foreground" />,
    label: "Next JS"
  },
  {
    href: "https://tailwindcss.com/",
    imageUrl: "./images/icons/tailwindcss.svg",
    label: "Tailwind"
  },
  {
    href: "https://ui.shadcn.com/",
    icon: <IShadcn className="w-fit h-fit text-foreground" />,
    label: "Shadcn-UI"
  },
  {
    href: "https://www.sanity.io/",
    imageUrl: "./images/icons/sanity.svg",
    label: "Sanity.io"
  },
]

export default function TechStack() {
  return (
    <section className="bg-section-pattern-2">
      <div className="section-wrapper">
        <FadeUp>
          <h2 className="mb-2">Go To <SparkleText text="Tech Stack" /></h2>
        </FadeUp>

        <div className="mt-block mx-auto w-fit">
          <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
            {techStackData.map((item, i) => (
              <FadeUp
                transition={{
                  type: "spring",
                  delay: i * 0.3
                }}
                key={item.label + "TechStack"}>
                <TechCard data={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
