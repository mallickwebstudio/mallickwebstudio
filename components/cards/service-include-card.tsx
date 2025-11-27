import { ServiceBenefit } from "@/types/const"

export default function ServiceIncludeCard({
    data: { icon, title, description }
}: {
    data: ServiceBenefit
}) {
    return (
        <div className={"relative bg-secondary p-4 h-full overflow-hidden transition-all group rounded-md border"}>
            <div className="p-1 w-fit flex items-center rounded-full bg-foreground/30" aria-hidden="true">
                <div className="p-2 size-fit bg-background flex items-center rounded-full" aria-hidden="true">
                    {icon}
                </div>
            </div>

            <h3 className="mt-4 h3">
                {title}
            </h3>

            <p className="mt-3 text-muted-foreground">
                {description}
            </p>
        </div>
    )
}
