import SparkleText from "@/components/other/sparkle-text";
import { porjectPhases } from "@/lib/datas/const";
import { CheckCheck, Hash } from "lucide-react";

export default function HowWeWork() {
  return (
    <section className="bg-section-secondary" id="strategy" aria-labelledby="how-we-work-heading">
      <div className="section-wrapper">
        {/* Section heading */}
        <h2 id="how-we-work-heading">
          Our Effective <SparkleText text=" Work Strategy" />
        </h2>

        {/* Section description */}
        <p className="-mt-base mx-auto md:w-2/3 md:text-center text-muted-foreground">
          Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process
        </p>

        {/* Article for the project phases */}
        <div className="mt-block grid sm:grid-cols-2 lg:grid-cols-3 gap-base" role="list">
          {porjectPhases.map((item, i) => (
            <div key={item.phase + "AboutPhaseCard"} role="listitem">
              <div className="p-4 border rounded-md overflow-hidden group/card">
                {/* Phase header */}
                <div className="flex items-center text-muted-foreground/50 group-hover/card:text-muted-foreground">
                  <Hash className="size-4" />
                  <span className="font-xl font-bold">{item.phase}</span>
                </div>

                {/* Phase title */}
                <h3 className="mt-sm" aria-labelledby={`${item.title}-title`}>
                  {item.title}
                </h3>

                {/* Phase description */}
                <p className="mt-xs text-xs text-muted-foreground" aria-labelledby={`${item.title}-description`}>
                  {item.description}
                </p>

                {/* Phase inclusions list */}
                <ul className="mt-base space-y-xs" role="list">
                  {item.includes.map((includeItem, idx) => (
                    <li
                      className="group"
                      key={includeItem + "PhaseDescription"}
                      role="listitem"
                    >
                      <CheckCheck className="inline-block mr-sm size-5 shrink-0 group-hover:text-primary" />
                      <span>{includeItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
