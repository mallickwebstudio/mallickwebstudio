import './globals.css'
import './helper.css'
import Script from 'next/script';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer/footer';
import Providers from '@/hooks/providers';
import { siteMd } from '@/lib/datas/metaDatas';
import localFont from "next/font/local";
import Notification from '@/components/other/notification';

const rubik = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--rubik",
  weight: "300 400 500 600 700 800 900",
  display: "swap"
});

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} ${rubik.variable}`} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <Providers>
          {/* <Notification /> */}
          <Navbar />
          {children}
          <Footer />
        </Providers>

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0XZR8ZLRBF" />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-0XZR8ZLRBF');
          `}
        </Script>
      </body>
    </html >
  )
}
