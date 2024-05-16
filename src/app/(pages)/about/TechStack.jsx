import TechCard from "@/components/cards/TechCard";
import SparkleText from "@/components/helper/SparkleText";
import { IExpress, INext, IShadcn } from "@/components/svgs/svgs";

export default function TechStack() {
  return (
    <section>
      <div className="section-wrapper bg-section-pattern-2">
        <h2 className="mb-2">Go To <SparkleText text="Tech Stack" /></h2>

        <div className="mt-block mx-auto w-fit">
          <div className="p-2 flex gap-4 flex-center flex-wrap w-fit">
            <TechCard link="https://nextjs.org/" icon={<INext className="w-fit h-fit text-foreground" />} label="Next JS" />
            <TechCard link="https://tailwindcss.com/" img="./images/icons/tailwindcss.svg" label="Tailwind" />
            <TechCard link="https://ui.shadcn.com/" icon={<IShadcn className="w-fit h-fit text-foreground" />} label="Shadcn-UI" />
            <TechCard link="https://www.sanity.io/" img="./images/icons/sanity.svg" label="Sanity" />
          </div>
        </div>
      </div>
    </section>
  )
}
