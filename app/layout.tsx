import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tra Chan Nonprofit School',
  description: 'Created by me',
  images: {
        // 2. Dùng đường dẫn tuyệt đối (bắt đầu bằng '/')
        url: 'public/logo-social.png', // Trỏ đến public/logo-social.png
        width: 800, // Chiều rộng khuyến nghị
        height: 600, // Chiều cao khuyến nghị
      }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
