// components/CarCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming your Shadcn Button

interface CarCardProps {
  car: {
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    altText: string;
    // Add any other details you want to display on the card
    engine?: string;
    year?: string;
    mileage?: string;
    transmission?: string;
    fuelType?: string;
    linkSlug?: string; // For detail page URL
  };
}

export const CarCard = ({ car }: CarCardProps) => {
  const detailLink = car.linkSlug ? `/inventory/${car.linkSlug}` : `/inventory/${car.id}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
      {/* Suspense is for loading image, though Next.js Image handles a lot */}
      {/* For a more robust spinner, you might need a custom Image component wrapper */}
      <div className="relative w-full h-60"> {/* Added relative and dimensions for image container */}
        <Image
          src={car.imageUrl}
          alt={car.altText}
          fill // Use fill to make image cover its parent div
          className="object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizing
          priority={false} // Only set priority for above-the-fold images on main pages
        />
        {/* Simple overlay for loading, though Image component does much of this */}
        {/* You could add a more elaborate spinner here if Image is still blank */}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h3>
        <p className="text-md text-gray-600 mb-3">{car.price}</p>
        {car.year && <p className="text-sm text-gray-500">Year: {car.year}</p>}
        {car.mileage && <p className="text-sm text-gray-500">Mileage: {car.mileage}</p>}
        {car.transmission && <p className="text-sm text-gray-500">Trans: {car.transmission}</p>}
        {car.fuelType && <p className="text-sm text-gray-500">Fuel: {car.fuelType}</p>}
        
        <Link href={detailLink} passHref className="block mt-4"> {/* Added block and mt-4 for spacing */}
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
};