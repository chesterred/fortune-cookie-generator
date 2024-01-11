import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fortune Cookie Generator',
  description: 'Generate you fortune cookie free online. Or custom  fortune cookie with 1 click. FortuneCookieGenerator.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <footer><Footer /></footer>
      </body>
    </html>
  )
}
