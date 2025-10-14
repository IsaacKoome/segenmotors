// components/HeroCarousel.tsx

"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Car, allCars } from "@/lib/carData"; // Import the centralized data and type

export const HeroCarousel = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("/api/cars");
        if (!res.ok) throw new Error("Failed to fetch cars");
        const data = await res.json();
        setCars(data);
      } catch (err) {
        console.error("Error loading cars:", err);
        // Use the centralized fallback data instead of duplicating car definitions
        setCars(allCars);
      }
    }
    fetchCars();
  }, []);

  // Fixed: Moved functions outside of useEffect and used useCallback to prevent dependency issues
  const nextSlide = useCallback(() => {
    if (isTransitioning || cars.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, cars.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning || cars.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, cars.length]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, currentIndex]);

  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Fixed: Keyboard navigation with proper dependencies
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    // Fixed: Store current ref value to avoid stale closure
    const currentCarouselRef = carouselRef.current;
    
    if (currentCarouselRef) {
      currentCarouselRef.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (currentCarouselRef) {
        currentCarouselRef.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [nextSlide, prevSlide]); // Fixed: Added missing dependencies

  if (cars.length === 0) return null;

  const currentCar = cars[currentIndex];

  return (
    <section 
      ref={carouselRef}
      className="relative w-full h-[70vh] overflow-hidden rounded-xl shadow-lg mb-16 focus:outline-none"
      tabIndex={0}
      role="region"
      aria-label="Vehicle showcase carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          key={`${currentCar.id}-${currentIndex}`}
          src={currentCar.imageUrl}
          alt={currentCar.altText}
          fill
          priority={currentIndex === 0}
          className={`object-cover transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-75 scale-105' : 'opacity-100 scale-100'
          }`}
          sizes="100vw"
          onError={() => {
            console.error(`Failed to load image: ${currentCar.imageUrl}`);
          }}
          onLoad={() => {
            console.log(`Successfully loaded image: ${currentCar.imageUrl}`);
          }}
        />
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-start text-left text-white p-8 md:p-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            {currentCar.name}
          </h1>
          <p className="text-lg md:text-xl mb-2 font-medium opacity-90">
            {currentCar.year} • {currentCar.engine} • {currentCar.transmission}
          </p>
          {currentCar.description && (
            <p className="text-base md:text-lg mb-6 opacity-80 leading-relaxed">
              {currentCar.description}
            </p>
          )}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl md:text-4xl font-bold text-blue-400">
              {currentCar.price}
            </span>
            <span className="text-sm md:text-base opacity-70">
              {currentCar.mileage} • {currentCar.fuelType}
            </span>
          </div>
          {/* ✅ FIXED: Changed from /cars/ to /inventory/ to match the actual route */}
          <Link href={`/inventory/${currentCar.linkSlug}`} passHref>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              View Details →
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous vehicle"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next vehicle"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
            aria-label={`Go to vehicle ${index + 1}: ${cars[index].name}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {cars.length}
      </div>
    </section>
  );
};
