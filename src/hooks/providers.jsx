import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "./theme-provider"
import { isBrowser } from "framer-motion";

export default function Providers({ children }) {
    if (!isBrowser) {
        return (
            <>
                {children}
                <Toaster />
            </>
        )
    }

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