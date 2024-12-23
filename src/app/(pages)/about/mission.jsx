import FadeLeft from "@/components/animaitons/FadeLeft";
import FadeUp from "@/components/animaitons/FadeUp";
import { Itarget } from "@/components/other/svgs";

export default function Mission() {
    return (
        <section>
            <div className="section-wrapper">
                <div className="mt-block grid md:grid-cols-7 gap-block">
                    <div className="md:col-span-4">
                        <FadeUp>
                            <h2 className="text-left text-2xl md:text-3xl">My mission is to build websites that users love, appreciate, and understand, helping to grow your business. </h2>
                        </FadeUp>
                        <FadeUp>
                            <p>
                                I&apos;m Salman Mallick. I love creating effective and beautiful websites that its users love to visit, subconsciously appreciate and understand easily, helping your business reach new heights.
                            </p>
                        </FadeUp>
                        <FadeUp>
                            <p className="mt-xs">Here are some common practices in web design that hurt user experience and frustrate users:</p>
                        </FadeUp>
                        <ul className="list-disc mt-xs list-inside text-muted-foreground leading-7">
                            <FadeUp>
                                <li><b>Auto-playing Media:</b> Distracting and disruptive.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Complex Navigation:</b> Confusing and hard to use.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Slow Loading Times:</b> Frustrates and loses users.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Non-Responsive Design:</b> Poor experience on mobile devices.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Overuse of Animations:</b> Can be overwhelming and slow down the site.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Too Much Text:</b> Difficult to read and navigate.</li>
                            </FadeUp>
                            <FadeUp>
                                <li><b>Inconsistent Design Elements:</b> Causes confusion and inconsistency.</li>
                            </FadeUp>
                        </ul >
                        <FadeUp>
                            <p className="mt-xs">I strive to deliver websites that offer not just well-placed sections of text, but also the best user experience.</p>
                        </FadeUp>
                    </div >
                    <div className="relative w-full md:col-span-3">
                        <div className="sticky top-block w-full">
                        <FadeLeft>
                            <Itarget className="w-full text-muted-foreground" />
                        </FadeLeft>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    )
}