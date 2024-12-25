import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import FadeLeft from "../animaitons/FadeLeft";

export default function ServiceCard({ data: { icon, title, description, href } }) {
  return (
    <div className="relative p-4 h-full w-full hover:bg-gradient-to-bl from-background to-secondary/55 border border-transparent hover:border-muted rounded-lg overflow-hidden transition-all group">
      <FadeLeft>
        <div className="icon" aria-hidden="true">
          {icon}
        </div>
      </FadeLeft>

      <FadeLeft as="h3" className="my-base" id={`service-title-${title}`}>
        <span className="sr-only">Service: </span>{title}
      </FadeLeft>

      <FadeLeft as="p" className="text-muted-foreground" id={`service-description-${title}`}>
        {description}
      </FadeLeft>

      <FadeLeft>
        <Link 
          className={`${buttonVariants({ variant: "outline" })} mt-base hover:bg-primary hover:text-primary-foreground`} 
          href={href} 
          aria-labelledby={`service-title-${title} service-description-${title}`}
        >
          View More  
          <ArrowRight className="ml-2 group-hover:ml-4 transition-all size-4 inline" />
        </Link>
      </FadeLeft>
    </div>
  );
}
