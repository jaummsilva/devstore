import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin-ext'],
  variable: '--font-roboto',
  weight: '300',
})

export const metadata: Metadata = {
  title: {
    template: 'devstore | %s',
    default: 'devstore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={roboto.className}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}
