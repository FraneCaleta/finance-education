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
          <div className="container mx-auto px-4 md:px-0">
            <Navigation />
          </div>
        </header>
        <main className="flex-grow">
          <div className="container mx-auto px-6 md:px-4 py-8">{children}</div>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <p>© 2025 My Finance App. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
                aria-label="Follow us on Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.897 4.897 0 01-2.229-.616v.062a4.916 4.916 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.917 4.917 0 004.588 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
                <span>X</span>
              </a>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.729C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.433a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zM20.452 20.452h-3.56v-5.605c0-1.337-.027-3.06-1.865-3.06-1.865 0-2.15 1.457-2.15 2.963v5.702h-3.56V9h3.42v1.561h.05c.477-.9 1.637-1.846 3.37-1.846 3.605 0 4.27 2.372 4.27 5.457v6.28z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
                aria-label="Follow us on Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="hover:underline flex items-center space-x-2"
                aria-label="Follow us on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.013 7.052.072 5.773.131 4.548.392 3.465 1.475 2.382 2.558 2.121 3.783 2.062 5.062.013 8.332 0 8.756 0 12s.013 3.668.072 4.948c.059 1.279.32 2.504 1.403 3.587 1.083 1.083 2.308 1.344 3.587 1.403 1.28.059 1.704.072 4.948.072s3.668-.013 4.948-.072c1.279-.059 2.504-.32 3.587-1.403 1.083-1.083 1.344-2.308 1.403-3.587.059-1.28.072-1.704.072-4.948s-.013-3.668-.072-4.948c-.059-1.279-.32-2.504-1.403-3.587-1.083-1.083-2.308-1.344-3.587-1.403C15.668.013 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
