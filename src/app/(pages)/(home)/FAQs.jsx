"use client"
import SparkleText from "@/components/helper/SparkleText";
import { IQuestion } from "@/components/svgs/svgs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from '@/lib/const';

export default function FAQ() {
    return (
        <section>
            <div className="section-wrapper">
                <h2 className="mb-2"><SparkleText text="FAQs" /></h2>
                <p className="mx-auto md:text-center md:w-2/3">Your Questions, Answered.</p>

                <div className="mt-block w-full grid md:grid-cols-2 gap-block">
                    <Accordion type="single" defaultValue="faq1" collapsible>
                        {faqs.map(item => (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
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
