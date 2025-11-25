import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bloomgoals Advisory",
  description:
    "Bespoke transactional, operational, and legal advisory services for startups and high-growth ventures in Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Judson:wght@400;700&family=Karla:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-brand-light min-h-screen">{children}</body>
    </html>
  );
}
