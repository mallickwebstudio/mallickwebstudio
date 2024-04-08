"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Form() {
    const { toast } = useToast()
    const [btnDisable, setBtnDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setBtnDisable(true);
        const formData = new FormData(event.target);
        formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        setLoading(false);

        if (!result.success || !response) {
            toast({
                variant: "destructive",
                title: "Something went wrong while submitting the form. Please try again later.",
            });
        } else if (result.success) {
            toast({
                title: "Thank You for Reaching Out!",
                description: "Your message has been successfully sent. I will get back to you as soon as possible",
            });

            setTimeout(() => {
                setBtnDisable(false)
            }, 60000);
        }
    }

    return (
        <form className="p-4 mt-6 mx-auto w-11/12 md:w-1/2 flex flex-col gap-6 rounded-md" onSubmit={handleSubmit}>
            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="fullname">Full Name</Label>
                <Input className="w-full" type="text" name="fullname" id="fullname" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="email">Email</Label>
                <Input className="w-full" type="email" name="email" id="email" required />
            </div>

            <div className="w-full grid gap-2 items-center">
                <Label htmlFor="message">Message</Label>
                <Textarea className="w-full" name="message" id="message" placeholder="Type your message here." required />
            </div>

            <Button className="w-fit mx-auto" variant="secondary" disabled={btnDisable}>{loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Send{loading && "ing"} </Button>
        </form>
    )
}
