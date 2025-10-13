// components/LatestArrivals.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, allCars } from "@/lib/carData";
import { Calendar, Star } from "lucide-react";

export const LatestArrivals = () => {
  const [latestCars, setLatestCars] = useState<Car[]>([]);

  useEffect(() => {
    // For demo purposes, we'll select the last 3 cars from our data
    // In a real application, you might have a "dateAdded" field to sort by
    const latest = allCars.slice(-3).reverse(); // Get last 3 and reverse to show newest first
    setLatestCars(latest);
  }, []);

  if (latestCars.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white rounded-xl shadow-md mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Fresh Inventory
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Arrivals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our newest additions! These vehicles have just arrived 
            and are ready for their next owner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestCars.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group relative"
            >
              {/* New Arrival Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  New Arrival
                </div>
              </div>

              <div className="relative h-60">
                <Image
                  src={car.imageUrl}
                  alt={car.altText}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {car.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {car.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {car.year}
                  </span>
                </div>

                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="font-medium">{car.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission:</span>
                    <span className="font-medium">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel Type:</span>
                    <span className="font-medium">{car.fuelType}</span>
                  </div>
                </div>

                {car.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {car.description}
                  </p>
                )}

                <Link href={`/inventory/${car.linkSlug}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                    View Details →
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/inventory" passHref>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg transition-all duration-200"
            >
              View All New Arrivals →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
