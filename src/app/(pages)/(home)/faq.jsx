"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from '@/lib/datas/const';
import FadeUp from "@/components/animaitons/FadeUp";
import { IQuestion } from "@/components/other/svgs";
import SparkleText from "@/components/other/sparkle-text";

export default function FAQ() {
    return (
        <section>
            <div className="section-wrapper">
                <FadeUp>
                    <h2 className="mb-2"><SparkleText text="FAQs" /></h2>
                </FadeUp>
                <FadeUp>
                    <p className="mx-auto md:text-center md:w-2/3">Your Questions, Answered.</p>
                </FadeUp>

                <div className="mt-block w-full grid md:grid-cols-2 gap-block">
                    <Accordion type="single" defaultValue="faq1" collapsible>
                        {faqs.map(item => (
                            <FadeUp key={item.id + "HomeFAQ"}>
                                <AccordionItem value={item.id}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {item.answerJSX ? item.answerJSX : item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </FadeUp>
                        ))}
                    </Accordion>

                    <div className="relative w-full">
                        <FadeUp>
                            <IQuestion className="sticky top-block w-full text-muted-foreground/30 dark:text-muted-foreground/50" />
                        </FadeUp>
                    </div>
                </div>
            </div>
        </section>
    )
}
