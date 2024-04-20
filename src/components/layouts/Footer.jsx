import Link from "next/link";
import { Ilogo } from "../svgs/svgs";
import { Github, Instagram } from "lucide-react";

export default function Footer() {

  return (
    <footer className="section border-t">
      <Link className="flex-center" href="/">
        <Ilogo className="size-16 w-fit" />
      </Link>

      <div className="my-base flex-center flex gap-6">
        <Link href="https://www.instagram.com/webdevsalmann/">
          <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary" />
        </Link>

        <Link href="https://github.com/webdevsalmann/">
          <Github className="w-8 h-8 text-muted-foreground hover:text-primary" />
        </Link>
      </div>

      <p className="text-muted-foreground text-sm text-center">
        Copyright&copy;2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}
