// app/inventory/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, allCars } from "@/lib/carData"; // Import centralized data
import { 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings, 
  DollarSign, 
  Phone, 
  MessageCircle,
  ArrowLeft,
  Star,
  Shield,
  CheckCircle
} from "lucide-react";
import { ImageGallery } from "./ImageGallery"; // We'll create this as a separate Client Component

// ✅ This function tells Next.js to pre-build each car page (SSG)
export async function generateStaticParams() {
  return allCars.map((car) => ({
    slug: car.linkSlug, // Use linkSlug from centralized data
  }));
}

// Helper function to get car by slug
async function getCarBySlug(slug: string): Promise<Car | undefined> {
  // In a real application, this might be an API call or database query
  return allCars.find((car) => car.linkSlug === slug);
}

// ✅ Main page component (Server Component - no useState here)
export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params to get slug
  const car = await getCarBySlug(slug);

  if (!car) return notFound();

  const specifications = [
    { icon: Calendar, label: "Year", value: car.year },
    { icon: Settings, label: "Transmission", value: car.transmission },
    { icon: Fuel, label: "Fuel Type", value: car.fuelType },
    { icon: Gauge, label: "Mileage", value: car.mileage },
    { icon: Settings, label: "Engine", value: car.engine },
    { icon: DollarSign, label: "Price", value: car.price },
  ];

  const features = [
    "Quality Inspected",
    "Transparent Pricing", 
    "Warranty Available",
    "After-Sales Support",
    "Financing Options",
    "Trade-In Accepted",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            <ImageGallery car={car} />
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Car Title and Price */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {car.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-blue-600">
                  {car.price}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">(4.8/5)</span>
                </div>
              </div>
              {car.description && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {car.description}
                </p>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specifications.map((spec, index) => {
                  const IconComponent = spec.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{spec.label}</p>
                        <p className="font-semibold text-gray-900">{spec.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose This Vehicle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Interested in This Vehicle?</h2>
              <p className="mb-6 opacity-90">
                Contact us today to schedule a test drive or get more information about financing options.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/254759500436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold transition-colors duration-200">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
                <a
                  href="tel:+254759500436"
                  className="flex-1"
                >
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 text-lg font-semibold transition-colors duration-200">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCars
              .filter((otherCar) => otherCar.linkSlug !== car.linkSlug)
              .slice(0, 3)
              .map((relatedCar) => (
                <Link
                  key={relatedCar.id}
                  href={`/inventory/${relatedCar.linkSlug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedCar.imageUrl}
                      alt={relatedCar.altText}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedCar.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {relatedCar.price}
                    </p>
                    <p className="text-gray-600">
                      {relatedCar.year} • {relatedCar.engine} • {relatedCar.transmission}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
