import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'swiper/css';
import 'swiper/css/pagination';
import favicon from "../public/favicon.ico"
import CustomCursor from '@/components/CustomCursor';


const mainFont = localFont({
  src: [
    {
      path: "../fonts/HelveticaNowDisplay-ExtLt.ttf",
      weight: '200',
      style: 'normal',
    },
    {
      path: "../fonts/HelveticaNowDisplay-Light.ttf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../fonts/HelveticaNowDisplay-Regular.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../fonts/HelveticaNowDisplay-Medium.ttf",
      weight: '500',
      style: 'normal',
    }
  ],
})

const secondFont = localFont({
  src: [
    {
      path: "../fonts/Editor'sNote-Extralight.ttf",
      weight: '200',
      style: 'normal',
    },
    {
      path: "../fonts/Editor'sNote-ExtralightItalic.ttf",
      weight: '200',
      style: 'italic',
    },
    {
      path: "../fonts/Editor'sNote-Light.ttf",
      weight: '300',
      style: 'normal',
    },
    {
      path: "../fonts/Editor'sNote-LightItalic.ttf",
      weight: '300',
      style: 'italic',
    },
    {
      path: "../fonts/Editor'sNote-Regular.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../fonts/Editor'sNote-Italic.ttf",
      weight: '400',
      style: 'italic',
    },
    {
      path: "../fonts/Editor'sNote-Medium.ttf",
      weight: '500',
      style: 'normal',
    },
    {
      path: "../fonts/Editor'sNote-MediumItalic.ttf",
      weight: '500',
      style: 'italic',
    },
  ],
  variable:'--second-font'
})



export const metadata: Metadata = {
  title: 'Modern World',
  description: 'Modern World created by Abdellah Moumen El Idrissi',
  icons: [{ rel: 'icon', url: favicon.src }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth scroll-pt-8 ${secondFont.variable}`}>
      <body className={`${mainFont.className}  font-normal relative overflow-x-hidden`} suppressHydrationWarning >
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
