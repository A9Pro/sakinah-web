import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sakinah سكينة — Digital Tasbih & Prayer Times',
  description: 'A floating digital tasbih counter with prayer times and Adhan reminders for Android. Find peace, one dhikr at a time.',
  keywords: 'tasbih, dhikr, prayer times, adhan, muslim app, islamic app, sakinah',
  metadataBase: new URL('https://sakinahapp.vercel.app'),
  openGraph: {
    title: 'Sakinah سكينة',
    description: 'Your digital tasbih. Find peace, one dhikr at a time.',
    images: ['/sakinah_icon.jpg'],
  },
  icons: {
    icon: [
      { url: '/sakinah_icon.jpg', type: 'image/jpeg' },
    ],
    apple: '/sakinah_icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ overflowX: 'hidden', background: '#0D0F1E' }}>{children}</body>
    </html>
  )
}