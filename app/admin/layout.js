'use client'
import { Inter } from 'next/font/google'
import { NavbarAdmin } from '@/components/Admin/NavbarAdmin'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <NavbarAdmin />
                {children}
            </body>
        </html>
    )
}


