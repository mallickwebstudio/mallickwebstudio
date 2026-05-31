"use client";

import Autoplay from "embla-carousel-autoplay"
import { useRef, useState, useEffect, Fragment, RefObject } from "react";
import { motion, useInView } from "motion/react";
import { CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // ensure this exists

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { projectPhases } from "@/lib/datas/const";
import { ProjectPhase } from "@/types/const";
import SparkleText from "@/components/other/sparkle-text";
import Image from "next/image";

// ---- Extract phase type ----
type PhaseSlug = (typeof projectPhases)[number]["slug"];

// ---------------------------------
// Parent Component
// ---------------------------------
export default function ProcessVisualBlock() {
  const [activePhase, setActivePhase] = useState<PhaseSlug>(projectPhases[0].slug);

  return (
    <>
      <div className="hidden lg:grid grid-cols-2 gap-8 md:gap-10">
        <div className="md:sticky top-4 h-screen">
          <SectionHeader />
          <div className="md:mt-12 px-12">
            <motion.div
              className="aspect-square"
              key={activePhase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {/* <Lottie animationData={LOTTIES[activePhase]} /> */}
              <Image
                className='w-full object-contain select-none pointer-events-none'
                src={`/images/illustration/${activePhase}.svg`}
                width={400}
                height={400}
                alt={`${activePhase} illustration`}
              />
            </motion.div>
          </div>
        </div>

        <div>
          {projectPhases.map((item) => (
            <ScrollDetectorCard
              activePhase={activePhase}
              key={item.title}
              item={item}
              setActivePhase={setActivePhase}
            />
          ))}
        </div>
      </div>
    </>
  );
}

// ---------------------------------
// Scroll Detector
// ---------------------------------
interface ScrollDetectorProps {
  item: ProjectPhase;
  activePhase: string;
  setActivePhase: (slug: PhaseSlug) => void;
}

function ScrollDetectorCard({ item, setActivePhase, activePhase }: ScrollDetectorProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActivePhase(item.slug as PhaseSlug);
    }
  }, [isInView, item.slug, setActivePhase]);

  return (
    <Fragment>
      <ProcessCard activePhase={activePhase} ref={ref} item={item} />
      <hr className="my-12 last:hidden" />
    </Fragment>
  );
}

// ---------------------------------
// Card Component
// ---------------------------------
interface ProcessCardProps {
  item: ProjectPhase;
  activePhase: string;
  ref: RefObject<HTMLDivElement | null>
}

function ProcessCard({ item, ref, activePhase }: ProcessCardProps) {
  return (
    <article ref={ref} className="relative flex flex-col rounded-md overflow-hidden group/card">
      <Badge className="rounded-full" variant="secondary">
        Step <strong className="text-primary">{item.phase}</strong>
      </Badge>

      <h3 className="mt-2 h3">
        {activePhase === item.slug
          ? <SparkleText className="capitalize" text={activePhase} />
          : item.title
        }
      </h3>

      <p className="mt-2 text-sm max-w-sm text-muted-foreground flex-1">
        {item.description}
      </p>

      <ul className="mt-4 space-y-xs">
        {item.includes.map((i) => (
          <li className="flex items-center gap-2 group" key={i}>
            <CheckCheck className="size-5 text-muted-foreground group-hover:text-primary" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}


// Process Carousel Component
export function ProcessCarousel() {
  return (
    <div className="lg:hidden">
      <SectionHeader />
      <div className="mt-12">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            })
          ]}
          opts={{
            loop: true,
            align: "start"
          }}
        >
          <CarouselContent className="rounded-md">
            {projectPhases.map((item) => (
              <CarouselItem key={item.phase + "CarouselItem"} className="sm:basis-1/2 lg:basis-1/3">
                <ProcessCarouselCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-12" />
          <CarouselNext className="-right-4 md:-right-12" />
        </Carousel>
      </div>
    </div>
  );
}

// Process Card Component
function ProcessCarouselCard({ item }: {
  item: ProjectPhase;
}) {
  return (
    <article
      className="relative p-4 bg-card h-full flex flex-col border rounded-md overflow-hidden group/card"
      role="listitem"
    >
      <Badge className="rounded-full" variant="secondary">
        Step <strong className="text-primary">{item.phase}</strong>
      </Badge>

      {/* Phase title */}
      <h3 className="mt-2 h3" aria-labelledby={`${item.title}-title`}>
        {item.title}
      </h3>

      {/* Phase description */}
      <p
        className="mt-2 text-xs text-muted-foreground flex-1"
        aria-labelledby={`${item.title}-description`}
      >
        {item.description}
      </p>

      {/* Phase inclusions list */}
      <ul className="mt-4 space-y-xs" role="list">
        {item.includes.map((includeItem) => (
          <li className="flex items-center gap-2 group" key={includeItem + "PhaseDescription"} role="listitem">
            <CheckCheck className="size-5 shrink-0 text-muted-foreground group-hover:text-primary" />
            <span>{includeItem}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}



// Process Card Component
function SectionHeader() {
  return (
    <header>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
        Our Effective <SparkleText text=" Work Strategy" />
      </h2>

      {/* Section description */}
      <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
        Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process
      </p>
    </header>
  );
}