"use client"
import ProcessVisualBlock, { ProcessCarousel } from "./process-visual-block";

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

        {/* Carousel for cards */}
        <ProcessCarousel />
        <ProcessVisualBlock />
      </div>
    </section>
  );
}


