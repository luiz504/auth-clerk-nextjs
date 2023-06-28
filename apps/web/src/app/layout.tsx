import React from 'react'
import '~/styles/globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { neobrutalism } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR} appearance={{ baseTheme: neobrutalism }}>
      <html lang="en" className="bg-slate-800">
        <body className={inter.className} suppressHydrationWarning={true}>
          <div className="h-screen flex justify-center items-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
