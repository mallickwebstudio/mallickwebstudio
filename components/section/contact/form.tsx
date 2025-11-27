"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

/* -----------------------------------------------------
   TYPED FIELD KEYS (No more magic numeric strings)
----------------------------------------------------- */

export const FORM_KEYS = {
    fullName: "1420423600",
    email: "1312960591",
    isHiring: "1810991679",
    socialPresence: "2072962964",
    howYouGotHere: "2070585770",
    interestedService: "1968061122",
    budget: "1196807936",
    problem: "1735202832",
    successDefinition: "614465234",
    message: "1226837338",
} as const;


/* -----------------------------------------------------
   ZOD SCHEMA (Strictly typed)
----------------------------------------------------- */

const FormSchema = z.object({
    [FORM_KEYS.fullName]: z.string(),
    [FORM_KEYS.email]: z.string().email(),
    [FORM_KEYS.isHiring]: z.boolean(),
    [FORM_KEYS.socialPresence]: z.string().optional(),
    [FORM_KEYS.howYouGotHere]: z.string().optional(),
    [FORM_KEYS.interestedService]: z.string(),
    [FORM_KEYS.budget]: z.string(),
    [FORM_KEYS.problem]: z.string().optional(),
    [FORM_KEYS.successDefinition]: z.string().optional(),
    [FORM_KEYS.message]: z.string().optional(),
});

export type FormValues = z.infer<typeof FormSchema>;

/* -----------------------------------------------------
   FORMAT DATA FOR GOOGLE FORMS
----------------------------------------------------- */
export async function formatData(data: FormValues) {
    const formatted = new FormData();

    Object.entries(data).forEach(([key, value]) => {
        const stringValue = typeof value === "boolean" ? String(value) : value ?? "";
        formatted.append(`entry.${key}`, stringValue);
    });

    return formatted;
}


/* -----------------------------------------------------
   LOCAL STORAGE WITH EXPIRY (FULLY TYPED)
----------------------------------------------------- */
const setWithExpiry = (key: string, value: string, ttl: number): void => {
    const item = {
        value,
        expiry: Date.now() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

/* -----------------------------------------------------
   FORM COMPONENT
----------------------------------------------------- */

export default function FormBox() {
    const [btnDisable, setBtnDisable] = useState<boolean>(false);
    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            [FORM_KEYS.fullName]: "",
            [FORM_KEYS.email]: "",
            [FORM_KEYS.isHiring]: false,
            [FORM_KEYS.socialPresence]: "",
            [FORM_KEYS.howYouGotHere]: "",
            [FORM_KEYS.interestedService]: "",
            [FORM_KEYS.budget]: "",
            [FORM_KEYS.problem]: "",
            [FORM_KEYS.successDefinition]: "",
            [FORM_KEYS.message]: "",
        },
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
        watch,
    } = form;

    /* -----------------------------------------------------
       SUBMIT HANDLER
    ----------------------------------------------------- */

    const onSubmit = async (data: FormValues) => {
        try {
            setBtnDisable(true);

            const userName = data[FORM_KEYS.fullName] || "Guest";
            setWithExpiry("mwsUserName", userName, 24 * 60 * 60 * 1000);

            await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL as string, {
                method: "POST",
                body: await formatData(data),
                mode: "no-cors",
            });

            router.push("/thank-you");

            setTimeout(() => setBtnDisable(false), 60000);
        } catch (error) {
            console.error("Error submitting form", error);
            toast("We couldn't process your request. Please try again later.");
        }
    };

    const isHiring = watch(FORM_KEYS.isHiring);

    /* -----------------------------------------------------
       UI FORM
    ----------------------------------------------------- */

    return (
        <Form {...form}>
            <form
                className="mx-auto px-4 w-full space-y-6 rounded-md"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* Full Name */}
                <FormField
                    control={form.control}
                    name={FORM_KEYS.fullName}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" required {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Email */}
                <FormField
                    control={form.control}
                    name={FORM_KEYS.email}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="doe007@mail.com" required {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Switch - Are you hiring */}
                <FormField
                    control={form.control}
                    name={FORM_KEYS.isHiring}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hire For Project</FormLabel>
                            <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Hiring Section */}
                {isHiring && (
                    <div className="p-4 bg-section-secondary rounded space-y-6">
                        <div className="mb-4 font-semibold text-lg">Inquiry Form</div>

                        {/* Social Presence */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.socialPresence}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website & Social Platforms</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="example.com, @example" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* How You Got Here */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.howYouGotHere}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>What does your business do?</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="We do ... by doing ..." {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Interested Service */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.interestedService}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Which service are you interested in?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="website development / upgrade / optimization"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Budget */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.budget}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Project Budget</FormLabel>
                                    <FormControl>
                                        <Input placeholder="(USD) $100 - ..." {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Problem */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.problem}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>What problems are you hoping to solve?</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="We struggle with ... and want ..."
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        {/* Success Definition */}
                        <FormField
                            control={form.control}
                            name={FORM_KEYS.successDefinition}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>What does success look like?</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="I want to see ..." {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                )}

                {/* Message */}
                <FormField
                    control={form.control}
                    name={FORM_KEYS.message}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Type your message here..."
                                    required
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className="flex justify-center">
                    <Button disabled={isSubmitting || btnDisable}>
                        {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
                        Send
                        {isSubmitting ? "ing" : ""}
                        {!isSubmitting && <Send className="ml-2 size-3 inline" />}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
