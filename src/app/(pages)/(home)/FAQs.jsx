import React from 'react'
import SparkleText from "@/components/helper/SparkleText";
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
            <h2>
                <SparkleText text="FAQs" /> 
            </h2>

            <div className="mx-auto mt-10 w-full md:w-2/3 lg:w-1/2">
                <Accordion type="single" collapsible>
                    {faqs.map(item => (
                        <AccordionItem value={item.id} key={item.id}>
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answers}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                </Accordion>
            </div>
        </section>
    )
}
