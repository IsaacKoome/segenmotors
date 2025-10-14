// app/inventory/[slug]/ImageGallery.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { Car } from "@/lib/carData";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";

interface ImageGalleryProps {
  car: Car;
}

export function ImageGallery({ car }: ImageGalleryProps) {
  // This line now correctly uses car.images if available, otherwise falls back to imageUrl
  const carImages = car.images && car.images.length > 0 ? car.images : [car.imageUrl];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-gray-100">
        <Image
          src={carImages[currentImageIndex]}
          alt={`${car.name} - Image ${currentImageIndex + 1}`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        
        {/* Navigation Arrows */}
        {carImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {carImages.length}
        </div>

        {/* Quality Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Shield className="w-4 h-4" />
            Quality Inspected
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      {carImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {carImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'ring-2 ring-blue-500 scale-105' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <Image
                src={image}
                alt={`${car.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 25vw, 12.5vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
