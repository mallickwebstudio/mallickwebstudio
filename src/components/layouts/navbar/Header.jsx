"use client"
import Link from 'next/link';
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { LogoHorizontal } from '@/components/ui/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import { siteConfig } from '@/lib/datas/metaDatas';

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className={`container p-0 w-full bg-background md:border-0 ${isNavbarOpen && "border-b"}`}>
      <nav className="px-[5%] py-2 w-full h-full grid grid-cols-2 md:grid-cols-7 gap-base justify-center items-center">

        <Link className="block h-16 flex-center w-fit" href="/">
          <LogoHorizontal className="h-16 text-primary" />
          <span className='sr-only'>{siteConfig.name}</span>
        </Link>


        <div className="size-8 md:hidden justify-self-end flex-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        <div className={`col-span-2 md:col-span-5 justify-self-center  ${isNavbarOpen ? 'block' : 'hidden md:block'}`}>
          <ul className={`relative flex-center flex-col gap-xs md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
            <NavigationLinks />
            <li className="md:hidden">
              <ThemeToggleBtn />
            </li>
          </ul>
        </div>

        <ThemeToggleBtn className="hidden md:block justify-self-end" />
      </nav>
    </header>
  )
}
