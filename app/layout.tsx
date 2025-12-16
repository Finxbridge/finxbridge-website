import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  title: 'Finxbridge - Empowering Financial Innovation with Expert Fintech Solutions',
  description: 'At Finxbridge, we empower banks, NBFCs, and fintechs in India with expert fintech solutions that mitigate risks and ensure successful digital transformation',
  keywords: 'fintech, financial innovation, digital transformation, banks, NBFCs, India',
  authors: [{ name: 'Finxbridge' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Finxbridge - Empowering Financial Innovation',
    description: 'Expert fintech solutions for banks, NBFCs, and fintechs in India',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  )
}
