import Link from "next/link";
import { Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { navigationLinks, services } from "@/lib/datas/const";
import { LogoHorizontal } from "@/components/other/svgs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="section-wrapper bg-section-secondary">
        <div className="grid gap-block md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-base">
            <Link className="block" href="/">
              <LogoHorizontal className="text-primary h-16" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>

            <p>
              A full-stack website developer at your service to boost your business growth.
            </p>

            <div className="flex gap-base">
              <Link href={siteConfig.links.instagram}>
                <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Visit my Instagram</span>
              </Link>

              <Link href={siteConfig.links.github}>
                <Github className="w-8 h-8 text-muted-foreground hover:text-primary" />
                <span className="sr-only">Visit my Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-sm font-bold">Quick Links</div>
            <ul>
              {navigationLinks.map((item) => (
                <li key={item.title}>
                  <Link className="text-link" href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="mb-sm font-bold">Services</div>
            <ul>
              {services.map((item) => (
                <li key={item.title}>
                  <Link className="text-link" href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-base">
        <div className="text-muted-foreground md:flex gap-base justify-between">
          <div className="" > &copy;{currentYear} {siteConfig.name}</div>
          <div className="md:flex gap-base">
            <Link className="block hover:text-foreground hover:underline" href="/privacy-policy">Privacy Policy</Link>
            <Link className="block hover:text-foreground hover:underline" href="/credits">Credits</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
