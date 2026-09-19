import type { Metadata } from 'next'

import './globals.css'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Paras Mahla — Full-stack developer',
  description: 'The portfolio of Paras Mahla, a full-stack developer building clear, useful digital products.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
