"use client"
import { Toaster } from "@/components/ui/toaster"
import { FmaosConfigProvider } from "@/hooks/fmaos-config-provider"
import { ThemeProvider } from "./theme-provider"
import { useEffect, useState } from "react";

export default function Providers({ children }) {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // Prevent rendering until hydration is complete
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <FmaosConfigProvider>
                {children}
                <Toaster />
            </FmaosConfigProvider>
        </ThemeProvider>
    )
}