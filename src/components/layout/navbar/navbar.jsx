"use client";

import Link from "next/link";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/datas/metaDatas";
import { navigationLinks } from "@/lib/datas/const";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggleButton from "@/components/other/theme-toggle-button";
import { LogoHorizontal } from "@/components/other/svgs";

function NavigationLinks({ closeNav }) {
  const path = usePathname();

  return (
    <>
      {navigationLinks.map((item) => (
        <li key={item.title} role="menuitem">
          <Link
            href={item.href}
            className={`${buttonVariants({
              variant: path === item.href ? "secondary" : item.varient,
              size: "sm",
            })} capitalize `}
            onClick={closeNav}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
}

function MobileMenuToggle({ isOpen, onClick }) {
  return (
    <button
      aria-expanded={isOpen}
      aria-controls="main-navigation"
      className="size-8 md:hidden flex-center justify-self-end"
      onClick={onClick}
    >
      {isOpen ? <X /> : <AlignRight />}
    </button>
  );
}

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className={`mx-auto container p-0 w-full bg-background ${isNavbarOpen && "border-b"}`}>
      <nav
        className="px-[5%] py-2 w-full grid grid-cols-2 md:grid-cols-7 gap-base items-center"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link href="/" className="block h-16 flex-center w-fit">
          <LogoHorizontal className="h-16 text-primary" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <MobileMenuToggle isOpen={isNavbarOpen} onClick={() => setIsNavbarOpen(!isNavbarOpen)} />

        {/* Navigation Links */}
        <div
          id="main-navigation"
          className={`col-span-2 md:col-span-5 justify-self-center transition-all duration-300 ${isNavbarOpen ? "flex" : "hidden"
            } md:flex`}
        >
          <ul
            className="relative flex-center flex-col gap-xs md:flex-row"
            role="menu"
          >
            <NavigationLinks closeNav={() => setIsNavbarOpen(false)} />
            <li className="md:hidden">
              <ThemeToggleButton />
            </li>
          </ul>
        </div>

        {/* Theme Toggle Button (Desktop Only) */}
        <ThemeToggleButton className="hidden md:block justify-self-end" />
      </nav>
    </header>
  );
}
