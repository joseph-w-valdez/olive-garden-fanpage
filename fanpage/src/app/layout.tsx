'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import SideBar from './components/Sidebar'
import { SidebarProvider } from './contexts/sidebarContext'
import { AuthProvider } from './contexts/AuthContext'
import { getAuth, onAuthStateChanged, browserLocalPersistence, setPersistence } from "firebase/auth";
import app from "./data/firebaseConfig"
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Olive Garden Fanpage',
//   description: 'For the chosen ones.',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  useEffect(() => {
    const auth = getAuth(app);

    // Set session persistence for the entire app
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Persistence was set successfully
      })
      .catch((error) => {
        // An error occurred
      });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider>
            <SideBar />
            <Navbar />
            <main className='mt-12 h-minus-navbar landscape-sm:h-fit'>{children}</main>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
