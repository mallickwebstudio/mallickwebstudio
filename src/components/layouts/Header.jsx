"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from "@/components/ui/button"
import ThemeToggleBtn from "@/components/ui/ThemeToggleBtn"
import { Ilogo } from '../svgs/svgs';
import { AlignRight, X } from 'lucide-react';
import { useState } from 'react';
import { navigationLinks } from '@/lib/const';

export default function Header() {
  const path = usePathname();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className='container p-0 w-full bg-background'>
      <nav className="px-[5%] py-2 w-full grid grid-cols-2 justify-center items-center">

        <Link className="w-fit flex-center" href="/">
          <Ilogo className="w-16 h-16" />
        </Link>


        <div className="w-8 h-8 md:hidden justify-self-end flex-center"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? <X /> : <AlignRight />}
        </div>

        <ul className={`link-box relative w-full flex-center justify-center md:justify-end col-span-2 md:col-span-1 flex-col gap-4 justify-self-start  md:justify-self-end md:flex-row md:flex ${isNavbarOpen ? 'flex' : 'hidden'}`}>
          {
            navigationLinks.map((item) => (
              <li key={item.title}>
                <Link className={`${buttonVariants({ variant: item.varient, size: 'sm' })} ${path === item.path && "bg-accent"} capitalize text-muted-foreground`} href={item.path}>
                  {item.title}
                </Link>
              </li>
            ))
          }
          <ThemeToggleBtn />
        </ul>
      </nav>
    </header>
  )
}
