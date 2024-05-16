import { Rubik } from 'next/font/google'
import './globals.css'
import './helper.css'
import { ThemeProvider } from '@/components/context/ThemeProvider';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { Toaster } from '@/components/ui/toaster';
import { siteMd } from '@/lib/metaData';
import { baseUrl } from '@/lib/config';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteMd.title,
    template: `%s - ${siteMd.title}`
  },
  description: siteMd.description,
  twitter: {
    card: "summary_large_image"
  }
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
