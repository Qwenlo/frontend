import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Qwenlo: Scaling businesses with AI and seamless solutions",
  description: "Qwenlo is a platform for creating and managing your AI-powered lead generation campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen w-full bg-white relative">
          {/* Light Greenish Gradient Grid Background */}
          <div
            className="fixed inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
                radial-gradient(circle 800px at 0% 200px, #c5f0d5, transparent)
              `,
              backgroundSize: "96px 64px, 96px 64px, 100% 100%",
            }}
          />
          
          {/* Content Container */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
