
export default function ServiceIncludeCard({ data: { icon, title, description } }) {
    return (
        <div className="relative p-4 h-full w-full overflow-hidden transition-all group rounded">
                {icon}

            <h3 className="my-sm">
                {title}
            </h3>

            <p className="text-muted-foreground">
                {description}
            </p>
        </div>
    )
}
