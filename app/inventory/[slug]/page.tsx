// app/inventory/[slug]/page.tsx

import { notFound } from "next/navigation";
import { carList } from "@/lib/carData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CarDetailPageProps {
  params: { slug: string };
}

export default function CarDetailPage({ params }: CarDetailPageProps) {
  const car = carList.find((c) => c.linkSlug === params.slug);

  if (!car) return notFound(); // if invalid slug

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">{car.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={car.imageUrl}
          alt={car.altText}
          width={600}
          height={400}
          className="rounded-lg object-cover shadow-md"
        />
        <div>
          <p className="text-xl mb-2"><strong>Price:</strong> {car.price}</p>
          <p className="text-gray-700 mb-2"><strong>Year:</strong> {car.year}</p>
          <p className="text-gray-700 mb-2"><strong>Engine:</strong> {car.engine}</p>
          <p className="text-gray-700 mb-2"><strong>Mileage:</strong> {car.mileage}</p>
          <p className="text-gray-700 mb-2"><strong>Transmission:</strong> {car.transmission}</p>
          <p className="text-gray-700 mb-2"><strong>Fuel Type:</strong> {car.fuelType}</p>
          <p className="text-gray-600 mt-4">{car.description}</p>

          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3">
                Contact Us About This Car 🚗
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/inventory" className="text-blue-600 hover:underline">
          ← Back to Inventory
        </Link>
      </div>
    </div>
  );
}
