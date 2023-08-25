import './globals.css'
import { Inter } from 'next/font/google'

import Navigation from '@/components/navbar/Navigation'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Craft Shop',
  description: 'Online Shopping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
