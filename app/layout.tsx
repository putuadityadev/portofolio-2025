import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Nothing_You_Could_Do } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const nothingYouCouldDo = Nothing_You_Could_Do({
  variable: "--font-nothing-you-could-do",
  subsets: ["latin"],
  weight: ["400"]
})

const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/Nohemi-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Nohemi-Black.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: {
    default: "PutuAdityaDev---Portofolio",
    template: "%s | Putu Aditya"
  },
  description: "Creative Developer passionate about crafting seamless digital experiences. Specializing in Next.js, TypeScript, and modern web development.",
  keywords: ["developer", "portfolio", "next.js", "typescript", "web development", "UI/UX"],
  authors: [{ name: "Putu Aditya" }],
  creator: "Putu Aditya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: "Putu Aditya - Creative Developer",
    description: "Creative Developer passionate about crafting seamless digital experiences.",
    siteName: "Putu Aditya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Putu Aditya - Creative Developer",
    description: "Creative Developer passionate about crafting seamless digital experiences.",
    creator: "@tu.aditya_",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${nohemi.variable} ${nothingYouCouldDo.variable} antialiased`}
      >
        <div className="section-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
