"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggleButton from "@/components/other/theme-toggle-button";
import { LogoHorizontal } from "@/components/other/svgs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

export type NavSubItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  varient?: "default";
  subItems?: NavSubItem[];
};


export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Design & Development", href: "/services#website-design-and-development" },
      { label: "Website Update", href: "/services#website-update" },
      { label: "Speed Optimization", href: "/services#speed-optimization" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact Now", href: "/contact", varient: "default" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="relative w-full border-b bg-background text-foreground z-50">
      <div className="mx-auto container px-4 py-2 md:px-16 grid grid-cols-2 lg:grid-cols-3 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-12 w-fit flex gap-2 justify-self-start" aria-label="Go to homepage">
          <LogoHorizontal className="size-full text-primary" />
          <span className="sr-only">Site Name</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex justify-self-center gap-2"
          role="navigation"
          aria-label="Primary Navigation"
        >
          <NavbarNavigationLinks className="hidden lg:flex justify-self-center gap-2" />
        </nav>

        {/* Desktop Actions */}
        <ThemeToggleButton className="hidden lg:block justify-self-end" />


        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden cursor-pointer justify-self-end"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <nav className="lg:hidden p-4 border-t space-y-2" role="navigation" aria-label="Mobile Navigation">
            <NavbarNavigationLinks />

            {/* Mobile Actions */}
            <ThemeToggleButton />
          </nav>
        </>
      )}
    </header>
  );
}

function NavbarNavigationLinks({ className }: { className?: string }) {
  const isMobile = useIsMobile()
  return (
    <NavigationMenu className={className} role="navigation" aria-label="Primary Navigation" viewport={isMobile}>
      <NavigationMenuList className="flex-col items-start lg:flex-row">
        {navItems.map((item) =>
          item.subItems ? (
            <NavigationMenuItem key={item.label + "NavbarOne"}>
              <NavigationMenuTrigger
                className={cn(buttonVariants({ variant: "ghost" }), "px-4!")}
                aria-expanded="false"
                aria-label={`${item.label} navigation options`}
              >
                {item.href
                  ? <NavigationMenuLink className="-mx-2 hover:bg-transparent! data-[active=true]:hover:bg-transparent" role="menuitem" href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                  : <span>{item.label}</span>
                }
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-fit gap-3" role="menu">
                  {item.subItems.map((sub) => (
                    <li key={sub.label + "NavbarOne"} role="none">
                      <NavigationMenuLink asChild role="menuitem">
                        <Link
                          className={cn(buttonVariants({ variant: "ghost" }), "w-full items-start")}
                          href={sub.href}
                        >
                          {sub.label}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.label + "NavbarOne"}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  className={buttonVariants({ variant: (item.varient || "ghost") })}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// function NavbarCtaAction({ className }: { className?: string }) {
//   return (
//     <ul className={className}>
//       <li>
//         <Link
//           className={cn(buttonVariants({ variant: "outline" }), "w-full")}
//           href="#"
//           aria-label="Log in"
//         >
//           Log in
//         </Link>
//       </li>
//       <li>
//         <Link
//           className={cn(buttonVariants(), "w-full")}
//           href="#"
//           aria-label="Sign up"
//         >
//           Sign up
//         </Link>
//       </li>
//     </ul>
//   )
// }