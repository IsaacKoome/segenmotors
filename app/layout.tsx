// app/layout.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Menu, X } from "lucide-react";

// Configure custom font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <title>Segen Motors - Your Trusted Car Dealership</title>
        <meta name="description" content="Browse top-quality used cars for sale in Nairobi. Affordable vehicles with transparent pricing." />
      </head>
      <body className={cn("bg-gray-50 text-gray-900 font-sans")}>
        {/* Header with responsive navigation */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Segen Motors Home">
              <Image
                src="/logosegen3.jpeg"
                alt="Segen Motors Logo"
                height={60}
                width={120}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="/inventory" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Inventory
              </Link>
              <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contact
              </Link>
              <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <nav className="container mx-auto px-4 py-4 space-y-4">
                <Link 
                  href="/" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link 
                  href="/inventory" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  Inventory
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link 
                  href="/about" 
                  className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-160px)]">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Segen Motors. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
