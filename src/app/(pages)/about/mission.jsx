import { Itarget } from "@/components/other/svgs";

export default function Mission() {
    return (
        <section aria-labelledby="mission-heading">
            <div className="section-wrapper grid md:grid-cols-7 gap-block">
                {/* Main content */}
                <article className="md:col-span-4">
                    <h2 className="text-left text-2xl md:text-3xl" id="mission-heading">
                        My mission is to build websites that users love, appreciate, and understand, helping to grow your business.
                    </h2>

                    <p>
                        <i>I&apos;m Salman Mallick. I love creating effective and beautiful websites that users love to visit, subconsciously appreciate, and understand easily, helping your business reach new heights.</i>
                    </p>

                    <p className="mt-xs">
                        Here are some common practices in web design that hurt user experience and frustrate users:
                    </p>

                    <ul className="list-disc space-y-xs mt-xs list-inside text-muted-foreground leading-7">
                        <li>
                            <b>Auto-playing Media:</b> Distracting and disruptive.
                        </li>
                        <li>
                            <b>Complex Navigation:</b> Confusing and hard to use.
                        </li>
                        <li>
                            <b>Slow Loading Times:</b> Frustrates and loses users.
                        </li>
                        <li>
                            <b>Non-Responsive Design:</b> Poor experience on mobile devices.
                        </li>
                        <li>
                            <b>Overuse of Animations:</b> Can be overwhelming and slow down the site.
                        </li>
                        <li>
                            <b>Too Much Text:</b> Difficult to read and navigate.
                        </li>
                        <li>
                            <b>Inconsistent Design Elements:</b> Causes confusion and inconsistency.
                        </li>
                    </ul>

                    <p className="mt-xs">
                        I strive to deliver websites that offer not just well-placed sections of text, but also the best user experience.
                    </p>
                </article>

                {/* Aside Section (Image/Illustration) */}
                <aside className="relative w-full md:col-span-3" aria-labelledby="mission-illustration">
                    <div className="sticky top-block w-full">
                        <Itarget className="w-full text-muted-foreground" aria-labelledby="mission-illustration" />
                    </div>
                </aside>
            </div>
        </section>
    );
}
