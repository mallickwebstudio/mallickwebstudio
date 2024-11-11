import { navigationLinks } from "@/lib/datas/const";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

export default function NavigationLinks() {
  const path = usePathname();

    return (
        <>
            {navigationLinks.map((item) => (
                <li key={item.title}>
                    <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.href}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </>
    )
}
