// app/layout.tsx
import Link from "next/link"; // Using Next.js Link for navigation
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
      <body className={cn("bg-gray-50 text-gray-900 font-sans")}> {/* Using cn for conditional classes if needed */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-tight mb-3 sm:mb-0">
              Segen Motors
            </Link>
            <nav className="flex space-x-6">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </Link>
              <Link href="/inventory" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Inventory
              </Link>
              <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contact
              </Link>
              {/* Optional: Add About Us link */}
              <Link href="/about" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About Us
              </Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-160px)]"> {/* Added min-height for better layout */}
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