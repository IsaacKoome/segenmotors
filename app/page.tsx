// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard";
import { Car, allCars } from "@/lib/carData"; // Import the centralized data and type

export default function HomePage() {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);

  // Fetch cars for the FEATURED VEHICLES GRID section
  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setFeaturedCars(data);
      } catch (error) {
        console.error("Error fetching featured cars:", error);
        // Use the centralized fallback data instead of duplicating car definitions
        setFeaturedCars(allCars);
      }
    }

    fetchCars();
  }, []);

  return (
    <div>
      {/* HERO CAROUSEL SECTION - Now correctly rendering HeroCarousel */}
      <HeroCarousel />

      {/* FEATURED VEHICLES GRID */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Vehicles</h2>
        {featuredCars.length === 0 ? (
          <p className="text-center text-gray-500">Loading cars...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/inventory" passHref>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg"
            >
              View All CARS Available →
            </Button>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="text-center py-16 bg-gray-100 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Segen Motors?</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We pride ourselves on offering <strong>quality cars</strong>,{" "}
          <strong>transparent pricing</strong>, and{" "}
          <strong>exceptional customer service</strong>. Your satisfaction is
          our priority.
        </p>
        <Link href="/about" passHref>
          <Button variant="link" className="text-blue-600 text-lg hover:text-blue-800">
            Learn More About me - SEGEN MOTORS
          </Button>
        </Link>
      </section>

      {/* CONTACT CTA */}
      <section className="text-center py-10 bg-blue-700 text-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Ride?</h2>
        <p className="text-xl mb-6">Contact us today for a personalized experience.</p>
        <Link href="/contact" passHref>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100 transition-colors duration-200 px-8 py-4 text-lg"
          >
            Get in Touch! 📞
          </Button>
        </Link>
      </section>
    </div>
  );
}
