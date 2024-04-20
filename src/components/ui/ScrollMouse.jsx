"use client"
import { Mouse } from "lucide-react";
import { smoothScroll } from "@/lib/utils";
import Link from "next/link";

export default function ScrollMouse() {
    return (
        <div className="flex-center">
            <Link href="/#service" onClick={() => smoothScroll("service")}>
                <Mouse className="animate-bounce" />
            </Link>
        </div>
    )
}
