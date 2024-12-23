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
        <FadeUp>
          <h2>Our Effective <SparkleText text=" Work Strategy" /></h2>
        </FadeUp>
        <FadeUp>
          <p className="-mt-base mx-auto md:w-2/3 md:text-center">Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process</p>
        </FadeUp>

        <div className="mt-block grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
          {porjectPhases.map((item, i) => (
            <FadeUp key={item.phase + "AboutPhaseCard"}>
              <div className="p-4 border rounded-md overflow-hidden group/card" >
                <FadeLeft>
                  <div className="flex items-center text-muted-foreground/50 group-hover/card:text-muted-foreground">
                    <Hash className="size-4" />
                    <div className="font- text-xl font-bold">{item.phase}</div>
                  </div>
                </FadeLeft>

                <FadeLeft>
                  <div className="mt-sm text-2xl font-bold">{item.title}</div>
                </FadeLeft>

                <FadeLeft>
                  <p className="mt-xs text-xs">{item.description}</p>
                </FadeLeft>

                <ul className="mt-base">
                  {item.includes.map((item, i) => (
                    <FadeLeft
                      transition={{
                        type: "spring",
                        delay: i * 0.3
                      }}
                      key={item + "PhaseDescription"}>
                      <li className="flex gap-2 items-center text-muted-foreground group leading-8">
                        <CheckCheck className="size-5 shrink-0 group-hover:text-primary" /> <div>{item}</div>
                      </li>
                    </FadeLeft>
                  ))}
                </ul>

              </div>
            </FadeUp>
          ))}

        </div>
      </div>
    </section>
  )
}
