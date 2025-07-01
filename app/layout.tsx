// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Segen Motors",
  description: "Affordable cars for sale in your area",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">Segen Motors</Link>
            <nav className="space-x-4">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/inventory" className="hover:text-blue-500">Inventory</Link>
              <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
