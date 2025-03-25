import "./globals.css";
import { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <Navigation />
          </div>
        </header>
        <main className="flex-grow container mx-auto py-6">{children}</main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>© 2023 My Finance App. All rights reserved.</p>
            <p>
              Follow us on{" "}
              <a href="#" className="hover:underline">
                Twitter
              </a>{" "}
              |{" "}
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
