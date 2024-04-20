"use client"
import { useState } from "react";
import { budgetData } from "@/lib/const";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"

const FormSchema = z.object({
    fullname: z.string(),
    email: z.string(),
    isHiring: z.boolean(),
    budget: z.string(),
    message: z.string()
})

export default function FormBox() {
    const [btnDisable, setBtnDisable] = useState(false);
    // REACT HOOK FORM
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            email: "",
            isHiring: false,
            budget: "not defined",
            message: "",
        },
    })
    const { handleSubmit, control, formState: { isSubmitting } } = form;

    //HANDLE SUBMIT
    const onSubmit = async (data) => {
        try {
            setBtnDisable(true)
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                toast({
                    variant: "destructive",
                    title: "Something went wrong while submitting the form. Please try again later.",
                });
                setBtnDisable(false);
                const responseData = await response.json();
                console.error('Form submission failed:', responseData);
            } else if (response.ok) {
                toast({
                    title: "Thank You for Reaching Out!",
                    description: "Your message has been successfully sent. We will get back to you as soon as possible",
                });
                setTimeout(() => {
                    setBtnDisable(false)
                }, 60000);
            }
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <Form {...form}>
            <form
                className="mt-block mx-auto p-4 w-11/12 md:w-1/2 space-y-6 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >

                {/* Full Name */}
                <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="fullname">Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    {...field}
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* email */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    {...field}
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* is Hiring */}
                <FormField
                    control={form.control}
                    name="isHiring"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="isHiring">Hire For Project</FormLabel>
                            <FormControl>
                                <Switch
                                    className="block"
                                    id="isHiring"
                                    name="isHiring"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Budget */}
                {form.watch("isHiring") ? <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Budget (in USD)</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex gap-2 flex-wrap"
                                    value={field.value}
                                >
                                    {budgetData.map(item => (
                                        <FormItem
                                            key={item.id}>
                                            <FormLabel
                                                className={`p-4 space-y-3 block border rounded cursor-pointer font-normal ${item.value === field.value && "border-primary"}`}
                                                htmlFor={item.value}>
                                                <FormControl>
                                                    <RadioGroupItem
                                                        id={item.value}
                                                        name={item.value}
                                                        value={item.value} />
                                                </FormControl>
                                                <div className="pointer-events-none cursor-pointer">
                                                    {item.title}
                                                </div>
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                /> : null}

                {/* Message */}
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    {...field}
                                    placeholder="Type your message here..."
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="flex-center">
                    <Button className="w-fit" variant="secondary" disabled={isSubmitting || btnDisable}>
                        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />} Send{isSubmitting && "ing"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
