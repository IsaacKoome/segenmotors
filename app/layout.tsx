// app/layout.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Menu, X, MessageCircle, Mail } from "lucide-react";

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

            {/* Social Media Links - Positioned between logo and navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/254759500436"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="Contact us on WhatsApp"
                title="WhatsApp: +254759500436"
              >
                <MessageCircle size={20} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@segen.motor.deale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="Follow us on TikTok"
                title="Follow us on TikTok"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:segenmotordealers51@gmail.com"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="Send us an email"
                title="Email: segenmotordealers51@gmail.com"
              >
                <Mail size={20} />
              </a>
            </div>

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

                {/* Mobile Social Media Links */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-600 mb-3">Connect with us:</p>
                  <div className="flex space-x-4">
                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/254759500436"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-200"
                      aria-label="Contact us on WhatsApp"
                      onClick={closeMobileMenu}
                    >
                      <MessageCircle size={20} />
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/@segen.motor.deale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-all duration-200"
                      aria-label="Follow us on TikTok"
                      onClick={closeMobileMenu}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:segenmotordealers51@gmail.com"
                      className="flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200"
                      aria-label="Send us an email"
                      onClick={closeMobileMenu}
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
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
