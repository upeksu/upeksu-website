import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import backgroundImage from './assets/ksu.png';
import "./globals.css";
import "./page.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Upsilon Pi Epsilon at Kennesaw State University",
  description: "Official Website of Upsilon Pi Epsilon at Kennesaw State University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="upeBody">
          <Image
            className="background"
            src={backgroundImage}
            alt="Background"
            fill
            quality={100}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
