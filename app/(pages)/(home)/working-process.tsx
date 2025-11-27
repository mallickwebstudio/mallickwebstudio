"use client"
import { CheckCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay"
import ProcessVisualBlock from "./process-visual-block";
import SparkleText from "@/components/other/sparkle-text";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projectPhases } from "@/lib/datas/const";
import { ProjectPhase } from "@/types/const";

export default function WorkingProcess() {
  return (
    <section
      id="working-process"
      className="relative bg-background bg-linear-to-tr from-background to-secondary"
      role="region"
      aria-label="Hero section for product introduction"
    >
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        {/* Section heading */}
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Our Effective <SparkleText text=" Work Strategy" />
          </h2>

          {/* Section description */}
          <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
            Our Seven Phases Structured Approach from Analysis to Deployment in Our Website Building Process
          </p>
        </header>

        {/* Carousel for cards */}
        <ProcessCarousel />
        <ProcessVisualBlock />

      </div>
    </section>
  );
}

// Process Carousel Component
function ProcessCarousel() {
  return (
    <div className="mt-12 md:hidden">
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

