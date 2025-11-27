"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from '@/lib/datas/const';
import { IQuestion } from "@/components/other/svgs";
import SparkleText from "@/components/other/sparkle-text";
import { cn } from "@/lib/utils";

export default function FAQ({ className }: { className?: string }) {
    return (
        <section
            id="faq"
            className={cn("relative bg-background",className)}
            role="region"
            aria-label="Hero section for product introduction"
        >
            <div className="mx-auto container px-6 py-12 md:p-16 lg:py-20">
                <header className="mx-auto max-w-2xl text-center">
                    <h2 className="h2">
                        <SparkleText text="FAQs" />
                    </h2>

                    <p className="mt-3 md:mt-4 md:text-lg text-muted-foreground">
                        Questions you might have, Answered.
                    </p>
                </header>

                <div className="mt-12 w-full grid md:grid-cols-2 gap-12">
                    <Accordion type="single" defaultValue="faq1" collapsible>
                        {faqs.map(item => (
                            <AccordionItem className="border-b-foreground/20" value={item.id} key={item.id + "HomeFAQ"}>
                                <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="relative w-full">
                        <IQuestion className="sticky top-12 w-full text-muted-foreground/30 dark:text-muted-foreground/50" />
                    </div>
                </div>
            </div>
        </section>
    )
}
