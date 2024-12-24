"use client"
import { Mouse } from "lucide-react";
import { smoothScroll } from "@/lib/utils";
import Link from "next/link";

export default function ScrollMouse() {
    return (
        <div className="flex-center">
            <Link href="/#purpose" onClick={() => smoothScroll("service")}>
                <Mouse className="animate-bounce" /> 
                <span className="sr-only">Scroll to service</span>
            </Link>
        </div>
    )
}
