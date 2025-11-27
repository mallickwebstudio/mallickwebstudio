"use client";

import { useState } from "react";
import GoBackButton from "@/components/other/go-back-button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

const getWithExpiry = (key: string) => {
    if (typeof window === "undefined") return null; // Ensure it's running on the client

    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key);
        return null;
    }

    return item.value;
};

export default function Page() {
    const [userName] = useState(() => getWithExpiry("mwsUserName"));

    if (!userName) return notFound();

    return (
        <main className="flex-1">
            <section>
                <div className="mx-auto container px-6 py-10 md:p-16 lg:py-20">
                    <header className="mx-auto w-full max-w-lg text-center grid place-items-center">
                        <h1 className="h2">
                            Thank You for Reaching Out {userName}!
                        </h1>
                        <h2 className="mt-3 md:mt-4  font-normal">
                            Your message has been sent successfully, We will get back to you as soon as possible.
                        </h2>

                        <div className="mt-4 flex gap-2">
                            <GoBackButton />
                            <Link
                                className={`${buttonVariants({ variant: "outline" })} `}
                                href="/"
                            >
                                Return Home
                            </Link>
                        </div>
                    </header>
                </div>
            </section>
        </main>
    );
}
