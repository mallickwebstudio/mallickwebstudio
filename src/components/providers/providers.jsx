"use client"
import { Toaster } from "@/components/ui/toaster"
import { FmaosConfigProvider } from "@/components/providers/FmaosConfigProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

export default function Providers({ children }) {
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