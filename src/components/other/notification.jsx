import Link from "next/link";
import SparkleText from "./sparkle-text";

export default function Notification() {
    return (
        <div className="p-base bg-secondary bg-yellow-500 text-black text-center font-bold text-lg">
            <Link className="hover:underline underline-offset-4" href="/#pricing">
                <span> New Year Fresh Start </span><span className="text-2xl">75% OFF</span>
            </Link>
        </div>
    )
}
