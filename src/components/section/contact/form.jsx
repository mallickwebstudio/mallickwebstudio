"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
    1420423600: z.string(),
    1312960591: z.string().email(),
    1810991679: z.boolean(),
    2072962964: z.string().optional(),
    2070585770: z.string().optional(),
    1968061122: z.string(),
    1196807936: z.string(),
    1735202832: z.string().optional(),
    614465234: z.string().optional(),
    1226837338: z.string().optional(),
});

export async function formatData(data) {
    const formattedData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        const transformedKey = `entry.${key}`;
        formattedData.append(transformedKey, value);
    });

    return formattedData;
}

// Helper functions to handle localStorage with expiration
const  setWithExpiry = async (key, value, ttl) => {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl, // TTL in milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
};

export default function FormBox() {
    const [btnDisable, setBtnDisable] = useState(false);
    const router = useRouter();

    // REACT HOOK FORM
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            1420423600: "", // Full Name
            1312960591: "", // Emain
            1810991679: false, // Is Hiring
            2072962964: "", // Social Presence
            2070585770: "", // How You Get Here
            1968061122: "", // Interested Service
            1196807936: "", // Project Budget
            1735202832: "", // Problem To Solve
            614465234: "", // Success Defination 
            1226837338: "", // message
        },
    });
    const { handleSubmit, formState: { isSubmitting } } = form;

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            setBtnDisable(true);

            // Store userName in localStorage with 1-day expiration (24 hours)
            const userName = data[1420423600] || "Guest"; // Fallback to "Guest" if not provided
            await setWithExpiry("mwsUserName", userName, 24 * 60 * 60 * 1000);

            // Uncomment this for actual submission logic
            await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL, {
                method: 'POST',
                body: await formatData(data),
                mode: "no-cors",
            });

            router.push("/thank-you");

            // toast({
            //     title: "Thank You for Reaching Out!",
            //     description: `Your message has been sent successfully, ${userName}. We will get back to you as soon as possible.`,
            // });

            // Optionally re-enable the button after some delay
            setTimeout(() => {
                setBtnDisable(false);
            }, 60000);
        } catch (error) {
            console.error("Error submitting form", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };

    return (
        <Form {...form}>
            <form
                className="mx-auto px-4 w-full space-y-6 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >

                {/* Full Name */}
                <FormField
                    control={form.control}
                    name="1420423600"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="1420423600">Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    id="1420423600"
                                    name="1420423600"
                                    type="text"
                                    {...field}
                                    placeholder="John Doe"
                                    required />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* email */}
                <FormField
                    control={form.control}
                    name="1312960591"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="1312960591">Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="1312960591"
                                    name="1312960591"
                                    placeholder="doe007@mail.com"
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
                    name="1810991679"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="1810991679">Hire For Project</FormLabel>
                            <FormControl>
                                <Switch
                                    className="block"
                                    id="1810991679"
                                    name="1810991679"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Inquiry Form */}
                {form.watch("1810991679") ? <div className="p-4 bg-section-secondary rounded">
                    <div className="mb-base font-semibold text-lg">Inquiry Form</div>
                    <div className="space-y-6">

                        {/* Social Presence */}
                        <FormField
                            control={form.control}
                            name="2072962964"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="2072962964">Website & Social Platforms (If Any)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="2072962964"
                                            name="2072962964"
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
                            name="2070585770"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="2070585770">What does your business do and how did you get here?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="2070585770"
                                            name="2070585770"
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
                            name="1968061122"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="1968061122">Which service are you interested in?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="1968061122"
                                            name="1968061122"
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
                            name="1196807936"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="1196807936">What&apos;s your budget for this project?</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="1196807936"
                                            name="1196807936"
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
                            name="1735202832"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="1735202832">What problems are you hoping to solve by working with us?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="1735202832"
                                            name="1735202832"
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
                            name="614465234"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor="614465234">What does success look like for this project?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            id="614465234"
                                            name="614465234"
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
                <FormField
                    control={form.control}
                    name="1226837338"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="1226837338">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    id="1226837338"
                                    name="1226837338"
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
                    <Button className="w-fit" disabled={isSubmitting || btnDisable}>
                        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />} Send{isSubmitting && "ing"}
                        {!isSubmitting && <Send className="ml-2 size-3 inline" />}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
