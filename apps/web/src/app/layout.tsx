import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'
import { neobrutalism } from '@clerk/themes'

import '~/styles/globals.css'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clerk Igniter',
  description: 'Testing Clerk Authentication with NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider localization={ptBR} appearance={{ baseTheme: neobrutalism }}>
      <html lang="en" className="bg-zinc-800">
        <head>
          <head>
            <link rel="icon" href="/clerk.svg" />
          </head>
        </head>
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
