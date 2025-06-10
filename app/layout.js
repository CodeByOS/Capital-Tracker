import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "CapitalTracker",
  description: "Financial tracking app for personal finance management",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          {/* Header */}
          <Header />
          {/* Main content */}
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-gray-800 text-white p-10 text-center">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; {new Date().getFullYear()} CapitalTracker. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
