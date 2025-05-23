

import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Play, Montserrat } from "next/font/google";
//import MainLayout from "./layouts/MainLayout";
// import "./globals.css";


const MontserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

const DMSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const PlayFont = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Strydent Autonomous Technologies",
  description: "Redefining Underwater Defense with AI-Powered Swarming AUVs",
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
        <link rel="stylesheet" href="/styles/globals.css" />
      </head>
      <body className={`${MontserratFont.variable} ${DMSans.variable} ${PlayFont.variable} custom-cursor`}>
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
