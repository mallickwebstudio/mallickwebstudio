import { Rubik } from "next/font/google";
import { siteMd } from "@/lib/datas/metaDatas";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Providers from "@/hooks/providers";
import "./globals.css";
import "./helper.css";
import { ReactNode } from "react";

const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin"],
});

export const metadata = siteMd;


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">

      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0XZR8ZLRBF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-0XZR8ZLRBF');
            `,
          }}
        />
      </head>
      <body
        className={`${rubik.variable} ${rubik.className} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
