import Image from "next/image";
import Link from "next/link";

export default function HomeProjectCard({ position, title, concept, desc, link, imageUrl }) {
    return (
        <Link className={`relative w-full md:w-4/5 rounded-md overflow-hidden transition-all group ${position % 2 === 0 ? "self-start" : "self-end"}`} href={link} target="_blank">
            <div className="img-box aspect-video overflow-hidden z-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={1600}
                    height={900}
                />
            </div>
            
            <div className="absolute -bottom-full left-0 right-0 group-hover:bottom-[0%]  py-4 sm:py-8 md:py-12 px-4 md:px-8 bg-muted transition-all">
                <div className="grid grid-cols-2">
                    <div className="">
                        <div className="text-2xl flex-1">{title}</div>
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {concept.map((item, i) => (
                                <div className="p-1  w-fit text-blue-950 bg-blue-300 text-xs font-semibold rounded" key={item + i + 32}>{item}</div>
                            ))}
                        </div>
                    </div>
                    <div className="text-muted-foreground text-sm sm:text-base">{desc}</div>
                </div>
            </div>
        </Link>
    )
}
