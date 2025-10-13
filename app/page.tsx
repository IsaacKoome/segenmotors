// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { CarCard } from "@/components/CarCard"; // Keep CarCard for other sections if needed
import { Car, allCars } from "@/lib/carData"; // Import the centralized data and type

// Import the new sections
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BrowseCategories } from "@/components/BrowseCategories";
import { LatestArrivals } from "@/components/LatestArrivals";
import { CustomerTestimonials } from "@/components/CustomerTestimonials";

export default function HomePage() {
  // This state and useEffect can now be simplified or removed if featuredCars is only for the grid below
  // and the grid will fetch its own data or use allCars directly.
  // For now, keeping it to show how you might still fetch a *subset* of cars for a specific section.
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);

  // Fetch cars for the FEATURED VEHICLES GRID section (if still desired, or replace with LatestArrivals)
  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        // Filter or select a different set of cars for the featured grid if needed
        // For example, if you want to show different cars than the carousel
        setFeaturedCars(data.slice(0, 3)); // Example: show first 3 cars as featured
      } catch (error) {
        console.error("Error fetching featured cars:", error);
        // Fallback to a subset of centralized data if API fails
        setFeaturedCars(allCars.slice(0, 3)); 
      }
    }

    fetchCars();
  }, []);

  return (
    <div>
      {/* HERO CAROUSEL SECTION */}
      <HeroCarousel />

      {/* NEW SECTION: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* NEW SECTION: BROWSE BY CATEGORY */}
      <BrowseCategories />

      {/* NEW SECTION: LATEST ARRIVALS */}
      <LatestArrivals />

      {/* NEW SECTION: CUSTOMER TESTIMONIALS */}
      <CustomerTestimonials />

      {/* Original FEATURED VEHICLES GRID - Consider if still needed or if LatestArrivals replaces it */}
      {/* If you want to keep a 'Featured Vehicles' section with different cars than Latest Arrivals, 
          you would need to adjust the logic to fetch/filter a distinct set of cars. 
          For now, I'm commenting it out as LatestArrivals serves a similar purpose and avoids redundancy. */}
      {/*
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">More Vehicles</h2>
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
      */}

      {/* CONTACT CTA - Keeping this as it's a good general CTA */}
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
