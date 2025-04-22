

import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Wix_Madefor_Display, DM_Sans } from "next/font/google";
import MainLayout from "./layouts/MainLayout";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Styrdent",
  description: "Strydent is developing a fleet of next-generation AUVs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendors/slick/slick.css" />
        <link rel="stylesheet" href="/vendors/animation/animate.min.css" />
        <link rel="stylesheet" href="/vendors/font-awesome/css/all.min.css" />
        <link rel="stylesheet" href="/vendors/icon/font/flaticon_loan.css" />
        <link rel="stylesheet" href="/vendors/nouislider/css/nouislider.min.css" />
        <link rel="stylesheet" href="/vendors/nouislider/css/nouislider.pips.css" />
        <link rel="stylesheet" href="/vendors/youtube-popup/youtube-popup.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </head>
      <body className={`${wixMadeforDisplay.variable} ${DMSans.variable} custom-cursor`}>
        {children}
        <Script src="/vendors/jquery/jquery-3.7.1.min.js" />
        <Script src="/vendors/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="/vendors/slick/slick.min.js" />
        <Script src="/vendors/wow/wow.js" />
        <Script src="/vendors/nouislider/js/nouislider.min.js" />
        <Script src="/vendors/nouislider/js/wNumb.min.js" />
        <Script src="/vendors/youtube-popup/youtube-popup.jquery.js" />
        <Script src="/js/custom.js" />
      </body>
    </html>
  );
}
