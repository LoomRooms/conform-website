import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CON/FORM 1.0 - March 20 & April 6, 2026",
  description: "A Cultural System for Conversation, Creation & Continuity. Lagos' first system-building experience.",
  icons: {
    icon: "/conform-icon.svg",
    shortcut: "/conform-icon.svg",
    apple: "/conform-icon.svg",
  },
  openGraph: {
    title: "CON/FORM 1.0 - March 20 & April 6, 2026",
    description: "A Cultural System for Conversation, Creation & Continuity. Lagos' first system-building experience.",
    url: "https://www.conformlagos.com",
    type: "website",
    images: [
      {
        url: "/african-pattern.png",
        width: 1200,
        height: 630,
        alt: "CON/FORM 1.0 - African Pattern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CON/FORM 1.0 - March 20 & April 6, 2026",
    description: "A Cultural System for Conversation, Creation & Continuity. Lagos' first system-building experience.",
    images: ["/african-pattern.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${bebas.variable} ${montserrat.variable} antialiased bg-white text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
