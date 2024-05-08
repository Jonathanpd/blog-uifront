import Footer from '@/components/Sections/Footer'
import Header from '@/components/Sections/Header'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import './../globals.css'

//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog UI Front',
  description: 'Blog UI Front next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-no-repeat">
        <Header />

        {children}

        <Footer />
      </body>
      <GoogleAnalytics gaId="G-768J3DMBXH" />
    </html>
  )
}
