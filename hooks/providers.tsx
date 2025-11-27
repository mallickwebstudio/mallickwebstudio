import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/hooks/theme-provider"
import { ReactNode } from "react"

export default function Providers({ children }: { children: ReactNode }) {

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
        >
            {children}
            <Toaster />
        </ThemeProvider>
    )
}