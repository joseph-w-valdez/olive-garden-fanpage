'use client'
import './globals.css'
import type { Metadata } from 'next'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import SideBar from './components/sidebar'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
        <Navbar handleMenuToggle={handleMenuToggle} />
        <main className='main-content'>{children}</main>
      </body>
    </html>
  )
}
