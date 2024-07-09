"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import FadeUp from "@/components/animaitons/FadeUp";

const FormSchema = z.object({
    fullname: z.string(),
    email: z.string().email(),
    isHiring: z.boolean(),
    socialPresence: z.string().optional(),
    businessDescription: z.string().optional(),
    interestedService: z.string(),
    projectBudget: z.string(),
    problemToSolve: z.string().optional(),
    successDefinition: z.string().optional(),
    message: z.string().optional(),
});

export default function FormBox() {
    const [btnDisable, setBtnDisable] = useState(false);

    // REACT HOOK FORM
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            email: "",
            isHiring: false,
            socialPresence: "",
            businessDescription: "",
            interestedService: "",
            projectBudget: "",
            problemToSolve: "",
            successDefinition: "",
            message: "",
        },
    });
    const { handleSubmit, formState: { isSubmitting } } = form;

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
                className="mx-auto px-4 w-full space-y-6 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >

                {/* Full Name */}
                <FadeUp>
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
                </FadeUp>

                {/* email */}
                <FadeUp>
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
                </FadeUp>

                {/* is Hiring */}
                <FadeUp>
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
                </FadeUp>

                {/* Inquiry Form */}
                {form.watch("isHiring") ? <div className="p-4 bg-section-secondary rounded">
                    <div className="mb-base font-semibold text-lg">Inquiry Form</div>
                    <div className="space-y-6">

                        {/* Social Presence */}
                        <FormField
                            control={form.control}
                            name="socialPresence"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="socialPresence">Website & Social Platforms</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="socialPresence"
                                            name="socialPresence"
                                            type="text"
                                            {...field}
                                            placeholder="example.com, @example"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* What and How */}
                        <FormField
                            control={form.control}
                            name="businessDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="businessDescription">What does your business do and how did you get here?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="businessDescription"
                                            name="businessDescription"
                                            type="text"
                                            {...field}
                                            placeholder="we do ... by doing ..."
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Required Service */}
                        <FormField
                            control={form.control}
                            name="interestedService"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="interestedService">Which service are you interested in?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="interestedService"
                                            name="interestedService"
                                            type="text"
                                            {...field}
                                            placeholder="website development / Upgrade / Optimization / Other"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Budget */}
                        <FormField
                            control={form.control}
                            name="projectBudget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="projectBudget">What&apos;s your budget for this project?</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="projectBudget"
                                            name="projectBudget"
                                            type="text"
                                            {...field}
                                            placeholder="(USD) $100 to ..."
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Problem & solution */}
                        <FormField
                            control={form.control}
                            name="problemToSolve"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="problemToSolve">What problems are you hoping to solve by working with us?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="problemToSolve"
                                            name="problemToSolve"
                                            type="text"
                                            {...field}
                                            placeholder="We are distressed with ... and we are hoping to ..."
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Problem & solution */}
                        <FormField
                            control={form.control}
                            name="successDefinition"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="successDefinition">What does success look like for this project?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="successDefinition"
                                            name="successDefinition"
                                            type="text"
                                            {...field}
                                            placeholder="I want to see ..."
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div> : null}


                {/* Message */}
                <FadeUp>
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
                </FadeUp>

                {/* Submit Button */}
                <div className="flex-center">
                    <FadeUp>
                        <Button className="w-fit" disabled={isSubmitting || btnDisable}>
                            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />} Send{isSubmitting && "ing"}
                            {!isSubmitting && <Send className="ml-2 size-3 inline" />}
                        </Button>
                    </FadeUp>
                </div>
            </form>
        </Form>
    )
}
