import { Rubik } from 'next/font/google'
import Header from '@/components/layouts/navbar/Header';
import Footer from '@/components/layouts/footer/Footer';
import Providers from '@/components/providers/providers';
import { baseUrl } from '@/lib/config';
import { siteMd } from '@/lib/metaData';
import './globals.css'
import './helper.css'

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html >
  )
}
