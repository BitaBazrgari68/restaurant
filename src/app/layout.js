import localFont from 'next/font/local'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const yekan = localFont({
  src: [
    {

      path: "../../public/fonts/YekanBakh-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakh-Fat.woff2",
      weight: "700",
      style: "normal",
    },
  ]

})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DATATRADA - دیتاترادا",
  description: " خدمات دیتاترادا شامل طراحی سایت ، سئو ، امنیت ، دیجیتال مارکتینگ ، سخت افزار ",
  keywords: [
    ' طراحی سایت ',
    'سئو',
    'امنیت',
    'دیجیتال مارکتینگ',
    'سخت افزار'
  ].join(', '),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={yekan.className}
      >
        {children}
      </body>
    </html>
  );
}
