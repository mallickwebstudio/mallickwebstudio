"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from '@/lib/datas/const';
import { IQuestion } from "@/components/other/svgs";
import SparkleText from "@/components/other/sparkle-text";

export default function FAQ() {
    return (
        <section>
            <div className="section-wrapper">
                <h2>
                    <SparkleText text="FAQs" />
                </h2>

                <p className="-mt-base mx-auto md:text-center text-muted-foreground md:w-2/3">
                    Your Questions, Answered.
                </p>

                <div className="mt-block w-full grid md:grid-cols-2 gap-block">
                    <Accordion type="single" defaultValue="faq1" collapsible>
                        {faqs.map(item => (
                            <AccordionItem value={item.id} key={item.id + "HomeFAQ"}>
                                <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answerJSX ? item.answerJSX : item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="relative w-full">
                        <IQuestion className="sticky top-block w-full text-muted-foreground/30 dark:text-muted-foreground/50" />
                    </div>
                </div>
            </div>
        </section>
    )
}
