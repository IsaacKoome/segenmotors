// app/page.tsx
import Image from "next/image";
import Link from "next/link"; // For the Next.js Link component (used with Shadcn Button)
import { Button } from "@/components/ui/button"; // Assuming your Shadcn Button component
import { Suspense } from "react"; // For loading state

// A simple loading spinner component
const ImageSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Find Your Dream Car Today! ✨
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Browse our curated selection of top-quality vehicles at unbeatable prices.
        </p>
        <Link href="/inventory" passHref>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 transition-colors duration-200 shadow-lg px-8 py-4 text-lg">
            View Our Cars
          </Button>
        </Link>
      </section>

      {/* Featured Cars */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Car Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
            <Suspense fallback={<ImageSpinner />}>
              <Image
                src="/premio.jpeg" // Updated path to public/cars
                alt="Toyota Premio"
                width={600} // Increased width for better quality, adjust as needed
                height={400} // Increased height
                className="w-full h-60 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
                priority // Preload important images
              />
            </Suspense>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Toyota Premio</h3>
              <p className="text-md text-gray-600 mb-3">KES 950,000</p>
              <Link href="/inventory/premio" passHref> {/* Example detail link */}
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
            <Suspense fallback={<ImageSpinner />}>
              <Image
                src="/mazda.jpeg" // Updated path
                alt="Mazda Demio"
                width={600}
                height={400}
                className="w-full h-60 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
              />
            </Suspense>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Mazda Demio</h3>
              <p className="text-md text-gray-600 mb-3">KES 650,000</p>
              <Link href="/inventory/demio" passHref>
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
            <Suspense fallback={<ImageSpinner />}>
              <Image
                src="/nissan note.jpeg" // Updated path
                alt="Nissan Note"
                width={600}
                height={400}
                className="w-full h-60 object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
              />
            </Suspense>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Nissan Note</h3>
              <p className="text-md text-gray-600 mb-3">KES 580,000</p>
              <Link href="/inventory/nissan-note" passHref>
                <Button variant="outline" className="w-full">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/inventory" passHref>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg">
              View All Inventory →
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Placeholder) */}
      <section className="text-center py-16 bg-gray-100 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Segen Motors?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We pride ourselves on offering **quality used cars**, **transparent pricing**, and **exceptional customer service**. Your satisfaction is our priority.
        </p>
        <Link href="/about" passHref>
          <Button variant="link" className="text-blue-600 text-lg hover:text-blue-800">
            Learn More About Us
          </Button>
        </Link>
      </section>

      {/* Contact Call to Action */}
      <section className="text-center py-10 bg-blue-700 text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Ride?</h2>
        <p className="text-xl mb-6">Contact us today for a personalized experience.</p>
        <Link href="/contact" passHref>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 transition-colors duration-200 px-8 py-4 text-lg">
            Get in Touch! 📞
          </Button>
        </Link>
      </section>
    </div>
  );
}