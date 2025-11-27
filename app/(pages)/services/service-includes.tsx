"use client"

import { useState, useRef } from "react"
import type { EmblaCarouselType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

import ServiceIncludeCard from "@/components/cards/service-include-card"
import { ServiceBenefit } from "@/types/const"

export default function ServiceIncludes({ benefits }: { benefits: ServiceBenefit[] }) {
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    })
  )

  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Track slide changes
  const initEvents = (embla: EmblaCarouselType) => {
    embla.on("select", () => {
      setCurrentIndex(embla.selectedScrollSnap())
    })
  }

  // Click → jump to slide
  const goToSlide = (i: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(i)
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplayRef.current]}
      setApi={(embla) => {
        if (!embla) return
        setEmblaApi(embla)
        if (embla) initEvents(embla)
      }}
      className="w-full"
    >
      <CarouselContent>
        {benefits.map((item, i) => (
          <CarouselItem
            key={i}
            className="pl-4 basis-full sm:basis-1/2 md:basis-full xl:basis-1/2"
          >
            <ServiceIncludeCard data={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="cursor-pointer -left-4 md:-left-12" />
      <CarouselNext className="cursor-pointer -right-4 md:-right-12" />

      {/* --- Dot Indicators --- */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {benefits.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-3 w-3 rounded-full
              transition-all cursor-pointer
              ${i === currentIndex ? "bg-primary scale-110" : "bg-muted"}
            `}
          />
        ))}
      </div>
    </Carousel>
  )
}
