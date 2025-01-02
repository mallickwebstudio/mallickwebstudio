"use client"

import GoBackButton from "@/components/other/go-back-button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";

const getWithExpiry = (key) => {
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

export default function page() {
    const userName = getWithExpiry("mwsUserName");
    if(!userName) notFound()
    return (
        <main className="flex-1">
            <section>
                <div className="section-wrapper">
                    <div className='mx-auto w-full md:w-1/2 text-center grid place-items-center'>
                        <h1 className='h2'>
                            Thank You for Reaching Out {userName}!
                        </h1>
                        <h2 className='text-base font-normal -mt-base'>
                            Your message has been sent successfully, We will get back to you as soon as possible.
                        </h2>

                        <div className='mt-base flex gap-2'>
                            <GoBackButton />
                            <Link className={`${buttonVariants({ variant: "outline" })} `} href="/">Return Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
