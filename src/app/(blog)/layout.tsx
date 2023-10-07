import Footer from '@/components/Sections/Footer'
import './../globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Sections/Header'

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
    </html>
  )
}
