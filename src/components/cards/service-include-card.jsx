import FadeLeft from "../animaitons/FadeLeft";

export default function ServiceIncludeCard({ data: { icon, title, description } }) {
    return (
        <div className="relative p-4 h-full w-full overflow-hidden transition-all group rounded">
            <FadeLeft
                className="text-muted-foreground"
                transition={{
                    type: "spring",
                    delay: 0.1
                }}>
                {icon}
            </FadeLeft>

            <FadeLeft
                tag="h3"
                className="my-sm"
                transition={{
                    type: "spring",
                    delay: 0.3
                }}>
                {title}
            </FadeLeft>

            <FadeLeft
                className="text-muted-foreground"
                tag="p"
                transition={{
                    type: "spring",
                    delay: 0.5
                }}>
                {description}
            </FadeLeft>
        </div>
    )
}
