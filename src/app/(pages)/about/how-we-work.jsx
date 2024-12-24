import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeRight from "@/components/animaitons/FadeRight";
import FadeUp from "@/components/animaitons/FadeUp";
import SparkleText from "@/components/other/sparkle-text";
import { porjectPhases } from "@/lib/datas/const";
import { CheckCheck, Hash } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-section-secondary" id="strategy">
      <div className="section-wrapper">
        <FadeUp tag="h2">
          Our Effective <SparkleText text=" Work Strategy" />
        </FadeUp>
        <FadeUp tag="p" className="-mt-base mx-auto md:w-2/3 md:text-center text-muted-foreground">
          Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process
        </FadeUp>

        <div className="mt-block grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
          {porjectPhases.map((item, i) => (
            <FadeUp key={item.phase + "AboutPhaseCard"}>
              <div className="p-4 border rounded-md overflow-hidden group/card" >
                <FadeLeft className="flex items-center text-muted-foreground/50 group-hover/card:text-muted-foreground">
                  <Hash className="size-4" />
                  <span className="font- text-xl font-bold">{item.phase}</span>
                </FadeLeft>

                <FadeLeft tag="h3" className="mt-sm">
                  {item.title}
                </FadeLeft>

                <FadeLeft tag="p" className="mt-xs text-xs text-muted-foreground">
                  {item.description}
                </FadeLeft>

                <ul className="mt-base space-y-xs">
                  {item.includes.map((item, i) => (
                    <FadeLeft
                      className="group"
                      tag="li"
                      transition={{
                        type: "spring",
                        delay: i * 0.3
                      }}
                      key={item + "PhaseDescription"}>
                      <CheckCheck className="inline-block mr-sm size-5 shrink-0 group-hover:text-primary" /> <span>{item}</span>
                    </FadeLeft>
                  ))}
                </ul>

              </div>
            </FadeUp>
          ))}

        </div>
      </div>
    </section >
  )
}
