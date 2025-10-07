// app/layout.tsx
import Link from "next/link"; // Using Next.js Link for navigation
import Image from "next/image"; // Import the Image component
import "./globals.css";
import { Button } from "@/components/ui/button"; // Assuming your Shadcn Button component
import { cn } from "@/lib/utils"; // If you have a utility for combining class names
import { Poppins } from "next/font/google"; // Example of adding a custom font

// Optional: Configure a custom font (e.g., Poppins for a clean look)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Segen Motors - Your Trusted Car Dealership",
  description: "Browse top-quality used cars for sale in Nairobi. Affordable vehicles with transparent pricing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={cn("bg-gray-50 text-gray-900 font-sans")}>
        {/* REMOVED 'sticky top-0 z-50' from the header */}
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="flex items-center" aria-label="Segen Motors Home">
              <Image
                src="/logo3.jpg" // Path to your logo in the public folder
                alt="Segen Motors Logo"
                height={60} // Adjusted height
                width={120} // Adjusted width
                className="object-contain"
                priority
              />
            </Link>

            <nav className="flex space-x-6 mt-3 sm:mt-0">
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
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-160px)]">
          {children}
        </main>
        {/* Simple Footer - you can expand this later */}
        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Segen Motors. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}