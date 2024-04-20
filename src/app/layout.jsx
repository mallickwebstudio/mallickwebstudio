import { Rubik } from 'next/font/google'
import './globals.css'
import './helper.css'
import { ThemeProvider } from '@/components/context/ThemeProvider';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/const';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html >
  )
}
