"use client";

import { useRef, useState, useEffect, Fragment, RefObject } from "react";
import { motion, useInView } from "motion/react";
// import Lottie from "lottie-react";
import { CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // ensure this exists

// import analysis from "@/lottie/analysis.json";
// import planning from "@/lottie/planning.json";
// import design from "@/lottie/design.json";
// import content from "@/lottie/content.json";
// import development from "@/lottie/development.json";
// import testing from "@/lottie/testing.json";
// import deployment from "@/lottie/deployment.json";

import { projectPhases } from "@/lib/datas/const";
import { ProjectPhase } from "@/types/const";
import SparkleText from "@/components/other/sparkle-text";
import Image from "next/image";

// ---- Extract phase type ----
type PhaseSlug = (typeof projectPhases)[number]["slug"];

// ---- Lottie mapping ----
// const LOTTIES: Record<PhaseSlug, object> = {
//   analysis,
//   planning,
//   design,
//   content,
//   development,
//   testing,
//   deployment,
// };

// ---------------------------------
// Parent Component
// ---------------------------------
export default function ProcessVisualBlock() {
  const [activePhase, setActivePhase] = useState<PhaseSlug>(projectPhases[0].slug);

  return (
    <div className="mt-12 hidden lg:grid grid-cols-2 gap-8 md:gap-10">
      <div className="my-20">
        {projectPhases.map((item) => (
          <ScrollDetectorCard
            activePhase={activePhase}
            key={item.title}
            item={item}
            setActivePhase={setActivePhase}
          />
        ))}
      </div>

      <div className="md:sticky top-0 p-4 md:p-20 h-screen flex flex-col justify-center">
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
