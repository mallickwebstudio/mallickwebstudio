import FadeLeft from "../animaitons/FadeLeft";

export default function ServiceIncludeCard({ data: { icon, title, description } }) {
    return (
        <div className="relative p-4 h-full w-full overflow-hidden transition-all group hover:outline outline-1 outline-secondary rounded">
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.1
                }}>
                <div className="text-muted-foreground">{icon && icon}</div>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.3
                }}>
                <div className="my-xs text-lg font-semibold">{title}</div>
            </FadeLeft>
            <FadeLeft
                transition={{
                    type: "spring",
                    delay: 0.5
                }}>
                <p className="text-muted-foreground">{description}</p>
            </FadeLeft>
        </div>
    )
}
