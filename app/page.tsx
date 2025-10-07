// app/page.tsx (Updated)
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { CarCard } from "@/components/CarCard"; // Import CarCard

// A simple loading spinner component (retained)
const ImageSpinner = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-10">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Define your featured car data - it can be a subset of the full inventory
const featuredCars = [
  {
   id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "low mireage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Subaru-Impreza-2014",
  },
    {
    id: "5",
    name: "DAIHATSU MIRA",
    price: "630K",
    imageUrl: "/cars/dai-mira.jpeg",
    altText: "White Daihatsu Mira",
    year: "2017",
    engine: "650cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "daihatsu-mira-2017", // Lowercase, hyphenated
  },
   {
    id: "4",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg", // Make sure you have this image
    altText: "Blue Toyota Compact",
    engine: "1000cc",
    year: "2018",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "Toyota-Vitz-2017",
  },
];


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

      {/* Featured Cars - NOW USING CARCARD COMPONENT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/inventory" passHref>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg">
              View All Cars Available →
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section (Placeholder) */}
      <section className="text-center py-16 bg-gray-100 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Segen Motors?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We pride ourselves on offering **quality cars**, **transparent pricing**, and **exceptional customer service**. Your satisfaction is our priority.
        </p>
        <Link href="/about" passHref>
          <Button variant="link" className="text-blue-600 text-lg hover:text-blue-800">
            Learn More About Us - Segen Motors
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