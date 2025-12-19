import GoBackButton from '@/components/other/go-back-button'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main
            className="relative bg-background min-h-screen flex justify-center items-center"
            role="region"
            aria-label="Error Page"
        >
            <section className='relative mx-auto container px-6 py-12 md:p-16 lg:py-20'>
                <header className="mx-auto max-w-2xl flex flex-col justify-center items-center text-center">
                    <div className="text-center">
                        <h1 className='text-9xl font-bold md:text-[12rem]' aria-label="Error 404">404</h1>
                        <h2 className='text-2xl font-bold'>Oops!</h2>
                        <p className='mt-3 md:mt-4 max-w-sm mx-auto text-muted-foreground'>
                            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
                        </p>
                    </div>

                    {/* Button group */}
                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <GoBackButton />
                        <Link className={`${buttonVariants({ variant: "outline" })} `} href="/">Return Home</Link>
                    </div>
                </header>
            </section>
        </main>
    )
}