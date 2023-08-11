import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import { SidebarProvider } from './contexts/sidebarContext'

const inter = Inter({ subsets: ['latin'] })

 export const metadata: Metadata = {
   title: 'Olive Garden Fanpage',
   description: 'For the chosen ones.',
 }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <SideBar />
          <Navbar />
          <main className='mt-12 h-minus-navbar landscape-sm:h-fit'>{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}
