
export default function ServiceIncludeCard({ data: { icon, title, description } }) {
    return (
        <div className="relative p-4 h-full w-full overflow-hidden transition-all group">
            <div className="text-muted-foreground">{icon && icon}</div>
            <div className="my-xs text-lg font-semibold">{title}</div>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}
