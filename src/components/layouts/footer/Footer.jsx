import Link from "next/link";
import { Ilogo } from "@/components/ui/svgs";
import { Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="section-wrapper">
        <Link className="flex-center" href="/">
          <Ilogo className="size-16 w-fit" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <div className="my-base flex-center flex gap-6">
          <Link href={siteConfig.links.instagram}>
            <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Instagram</span>
          </Link>

          <Link href={siteConfig.links.github}>
            <Github className="w-8 h-8 text-muted-foreground hover:text-primary" />
            <span className="sr-only">Visit my Facebook</span>
          </Link>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          &copy;{currentYear} {siteConfig.name} / <Link className="hover:underline" href="/privacy-policy"> privacy-policy</Link> / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href={siteConfig.baseUrl}> {siteConfig.name}</Link> 💖
        </p>
      </div>
    </footer>
  )
}
