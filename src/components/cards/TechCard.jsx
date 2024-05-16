import Image from "next/image";
import Link from "next/link";

export default function TechCard({ link, img, icon, label }) {
    return (
        <Link className="relative p-2 size-full max-w-20 bg-background hover:bg-muted self-start flex-center flex-col rounded-md border" href={link} target="_blank">
            <div className="relative size-full p-1 flex-center aspect-square">
                {img ? <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={label}
                /> : icon}
            </div>
            <span className='mt-2 relative text-center text-muted-foreground text-xs'>{label}</span>
        </Link>
    )
}