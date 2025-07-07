import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/Header";

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
          <Toaster richColors />
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-800">
              <p className="font-bold">&copy; {new Date().getFullYear()} CapitalTracker. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
