import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ServiceItem } from "@/types/const";

export default function HomeServiceCard({
  data: { slug, icon, title, description }
}: {
  data: ServiceItem
}) {
  return (
    <article className="relative p-4 h-full w-full bg-card flex flex-col border rounded-md hover:-translate-y-2 transition-all hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="p-1 w-fit flex items-center rounded-full bg-secondary" aria-hidden="true">
          <div className="p-2 size-fit bg-background flex items-center rounded-full" aria-hidden="true">
            {icon}
          </div>
        </div>

        <h3 className="mt-2 h3 h-16" id={`service-title-${title}`}>
          <span className="sr-only">Service: </span>{title}
        </h3>
      </div>

      <p className="mt-4 text-muted-foreground flex-1" id={`service-description-${title}`}>
        {description}
      </p>

      <Link
        className={cn(buttonVariants({ variant: "outline" }), "mt-4 hover:bg-primary! hover:text-primary-foreground transition-all group")}
        href={`services/#${slug}`}
        aria-labelledby={`service-title-${title} service-description-${title}`}
      >
        View More
        <ArrowRight className="group-hover:ml-2 transition-all size-4 inline" />
      </Link>
    </article>
  );
}
