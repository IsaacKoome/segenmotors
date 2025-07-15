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
    engine?: string;
    year?: string;
    mileage?: string;
    transmission?: string;
    fuelType?: string;
    linkSlug: string; // Changed from optional to REQUIRED
  };
}

export const CarCard = ({ car }: CarCardProps) => {
  // detailLink is now simpler because linkSlug is guaranteed to exist
  const detailLink = `/inventory/${car.linkSlug}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative group">
      <div className="relative w-full h-60">
        <Image
          src={car.imageUrl}
          alt={car.altText}
          fill
          className="object-cover object-center group-hover:opacity-90 transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h3>
        <p className="text-md text-gray-600 mb-3">{car.price}</p>
        {car.year && <p className="text-sm text-gray-500">Year: {car.year}</p>}
        {car.mileage && <p className="text-sm text-gray-500">Mileage: {car.mileage}</p>}
        {car.transmission && <p className="text-sm text-gray-500">Trans: {car.transmission}</p>}
        {car.fuelType && <p className="text-sm text-gray-500">Fuel: {car.fuelType}</p>}
        {car.engine && <p className="text-sm text-gray-500">Engine: {car.engine}</p>} {/* Display engine if available */}
        
        
    <Link href={`/inventory/${car.linkSlug}`}>
  <Button>View Details</Button>
</Link>

      </div>
    </div>
  );
};