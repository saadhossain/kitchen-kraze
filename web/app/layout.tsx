import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { AppName } from './config/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${AppName} - Everything for Kitchen`,
  description: 'Everything for Kitchen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className='min-h-[60vh]'>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
