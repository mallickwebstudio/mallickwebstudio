import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ServiceCard({ data: { icon, title, description, href } }) {
  return (
    <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
      <div className="icon" aria-hidden="true">
        {icon}
      </div>

      <h3 className="my-base" id={`service-title-${title}`}>
        <span className="sr-only">Service: </span>{title}
      </h3>

      <p className="text-muted-foreground" id={`service-description-${title}`}>
        {description}
      </p>

      <Link
        className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-primary-foreground`}
        href={href}
        aria-labelledby={`service-title-${title} service-description-${title}`}
      >
        View More
        <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
      </Link>
    </div>
  );
}
