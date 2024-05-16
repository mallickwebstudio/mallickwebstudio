import SparkleText from "@/components/helper/SparkleText";
import { porjectPhases } from "@/lib/const";
import { CheckCheck, Hash } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-section-secondary" id="strategy">
      <div className="section-wrapper">
        <h2>Our Effective <SparkleText text=" Work Strategy" /></h2>
        <p className="-mt-base mx-auto md:w-2/3 md:text-center">Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process</p>

        <div className="mt-block grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
          {porjectPhases.map((item, i) => (
            <div className="p-4 border rounded-md overflow-hidden group/card" key={"Phase" + item.phase}>
              <div className="flex items-center text-muted-foreground/50 group-hover/card:text-muted-foreground">
                <Hash className="size-4" />
                <div className="font- text-xl font-bold">{item.phase}</div>
              </div>

              <div className="mt-sm text-2xl font-bold">{item.title}</div>

              <p className="mt-xs text-xs">{item.description}</p>

              <ul className="mt-base">
                {item.includes.map(item => (
                  <li className="flex gap-2 items-center text-muted-foreground group leading-8" key={item}>
                    <CheckCheck className="size-5 shrink-0 group-hover:text-primary" /> <div>{item}</div>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
