import React, { Fragment } from "react";
import Link from "next/link";
import { Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { LogoHorizontal } from "../other/svgs";

const linkList = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Design & Development", href: "/services#website-design-and-development" },
  { label: "Website Update", href: "/services#website-update" },
  { label: "Speed Optimization", href: "/services#speed-optimization" },
]

const socialLinks = [
  { icon: Github, label: "Twitter", href: siteConfig.links.github },
  { icon: Instagram, label: "Twitter", href: siteConfig.links.instagram },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-secondary"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 items-center justify-center">
          {/* Logo */}
          <div className="justify-self-center lg:justify-self-start">
            <Link className="block h-12" href="#" aria-label="Home">
              <LogoHorizontal className="text-primary h-full" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav
            className="justify-self-center lg:justify-self-center"
            aria-label="Footer navigation"
          >
            <ul className="flex flex-col gap-4 sm:flex-row items-center">
              {linkList.map((link) => (
                <li key={link.label + "FooterFour"}>
                  <Link
                    className="text-sm text-nowrap hover:underline underline-offset-4"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Links */}
          <div
            className="justify-self-center lg:justify-self-end"
            aria-label="Social media"
          >
            <ul className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }, index) => (
                <li key={label + index + "FooterFourSocial"}>
                  <Link
                    href={href}
                    aria-label={label}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Services Links */}
        <nav
          className="mt-8 sm:flex sm:justify-center"
          aria-label="Footer navigation"
        >
          <ul className="flex flex-col gap-4 sm:flex-row items-center">
            {servicesLinks.map((link) => (
              <Fragment key={link.label + "FooterFour"}>
                <li>
                  <Link
                    className="text-sm text-nowrap hover:underline underline-offset-4"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>

                <span className="hidden sm:block last:hidden" aria-hidden="true">|</span>
              </Fragment>
            ))}
          </ul>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 md:mt-12 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link
              className="underline underline-offset-2 hover:underline-offset-4"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
