import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tra Chan Nonprofit School',
  description: 'Created by me',
  // images dùng cho Open Graph / social preview
  images: [
    {
      url: '/logo.png', // đặt file logo.png trong public/
      width: 800,
      height: 600,
    },
  ],
  // icons dùng cho favicon (ảnh trên tab)
  icons: {
    icon: '/favicon.svg',       // SVG favicon bo tròn
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
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

        {/* Thêm link favicon rõ ràng để đảm bảo trình duyệt dùng file bo tròn */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        {/* Safari pinned tab (SVG, đơn sắc) */}
        <link rel="mask-icon" href="/safari-pinned.svg" color="#000000" />
      </head>
      <body>{children}</body>
    </html>
  )
}
