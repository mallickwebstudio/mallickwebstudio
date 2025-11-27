import GoBackButton from '@/components/other/go-back-button'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <section>
                <div className="mx-auto container px-6 py-10 md:p-16 lg:py-20">
                    <div className='mx-auto w-full md:w-1/2 text-center grid place-items-center'>
                        <h1 className='text-destructive'>404</h1>
                        <h2 className='mt-4'>Page Doesn&apos;t Exist</h2>

                        <div className='mt-4 flex gap-2'>
                            <GoBackButton />
                            <Link className={`${buttonVariants({ variant: "outline" })} `} href="/">Return Home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}