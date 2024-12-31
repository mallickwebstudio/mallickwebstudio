import Link from "next/link";
import SparkleText from "./sparkle-text";

export default function Notification() {
    return (
        <div className="p-base bg-secondary text-center bg-opacity-5 font-bold text-lg">
            <Link className="hover:underline underline-offset-4" href="/#pricing">
                <span> New Year Fresh Start </span><SparkleText text=" 70% OFF" />
            </Link>
        </div>
    )
}
