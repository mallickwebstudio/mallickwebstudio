import SparkleText from "@/components/other/sparkle-text";
import { services } from "@/lib/datas/const";
import { cn } from "@/lib/utils";
import ServiceIncludes from "./service-includes";
import Contact from "@/components/section/contact/contact";
import { serviceMd } from "@/lib/datas/metaDatas";
import FAQ from "@/components/section/faq";
import Hero from "@/components/other/hero";

export const metadata = serviceMd;

export default function Page() {
  return (
    <main>
      <Hero heading={<><SparkleText text="Services" /></>} />

      {services.map((service, index) => (
        <section
          id={service.slug}
          className={cn("relative bg-background", index == 1 && "border-y")}
          role="region"
          aria-label={`${service.title} Service section`}
          key={service.title + "ServicePage"}
        >
          <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20 grid items-end grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

            {/* ---- Title + Description ---- */}
            <header className={cn("mb-8", index === 1 && "order-1")}>
              <h2 className="h2">
                <SparkleText text={service.title} />
                {/* {service.title} */}
              </h2>
              <p className="mt-3 md:mt-4 text-muted-foreground">
                {service.description}
              </p>
            </header>

            {/* -------- Horizontal Carousel -------- */}
            <ServiceIncludes benefits={service.benefits} />
            {/* ------------------------------------- */}
          </div>
        </section>
      ))}
      <FAQ className="bg-secondary" />
      <Contact />
    </main>
  );
}