import { Rubik } from 'next/font/google'
import Header from '@/components/layouts/navbar/Header';
import Footer from '@/components/layouts/footer/Footer';
import Providers from '@/components/providers/providers';
import './globals.css'
import './helper.css'
import { siteMd } from '@/lib/datas/metaDatas';
import Script from 'next/script';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = siteMd;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className} suppressHydrationWarning="true" suppressContentEditableWarning="true">
        <Providers>
          <Header />
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
