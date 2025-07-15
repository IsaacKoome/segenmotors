// app/inventory/[slug]/page.tsx
// This file handles individual car detail pages dynamically.

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- Centralized Car Data (for demonstration) ---
// In a real application with many cars, this data would ideally come
// from a database, a CMS (like Sanity/Strapi), or an API.
// For now, it's defined here, but if you have a lot of cars,
// consider moving it to a shared file (e.g., lib/data/cars.ts)
// and importing it into both inventory/page.tsx and this file.
const allCars = [
  {
    id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "subaru-impreza-2014",
    description: "A stylish and reliable Subaru Impreza, perfect for city driving and weekend adventures. Features a spacious interior, excellent handling, and renowned Subaru reliability. Ideal for daily commutes and road trips.",
  },
  {
    id: "2",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Red Nissan Advan van",
    year: "2011",
    engine: "1300cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-advan-2011",
    description: "A practical and efficient Nissan Advan van, ideal for small businesses or deliveries. Known for its durability, low running costs, and ample cargo space. A smart choice for commercial needs.",
  },
  {
    id: "3",
    name: "NISSAN NV350",
    price: "2.8M",
    imageUrl: "/cars/nissan-nv350.jpeg",
    altText: "White Nissan NV350 van",
    year: "2018",
    engine: "1500cc",
    mileage: "Low Mileage",
    transmission: "Manual",
    fuelType: "Diesel",
    linkSlug: "nissan-nv350-2018",
    description: "The spacious and powerful Nissan NV350, perfect for commercial use or large family transport. Offers robust performance, excellent fuel efficiency for a diesel, and a comfortable ride for long journeys.",
  },
  {
    id: "4",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg",
    altText: "Blue Toyota Vitz Compact",
    engine: "1000cc",
    year: "2018",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-vitz-2018",
    description: "A popular and fuel-efficient Toyota Vitz, great for urban commuting. Compact yet surprisingly spacious, with renowned Toyota reliability and low maintenance costs. Easy to park and maneuver.",
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
    linkSlug: "daihatsu-mira-2017",
    description: "The nimble and economical Daihatsu Mira, perfect for navigating busy city streets. Very low fuel consumption and easy to park, making it an ideal choice for city dwellers and first-time car owners.",
  },
  {
    id: "6",
    name: "NISSAN JUKE",
    price: "1.15M",
    imageUrl: "/cars/nissan-juke.jpeg",
    altText: "Black Nissan Juke",
    year: "2018",
    engine: "1200cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-juke-2018",
    description: "A distinctive and sporty Nissan Juke, offering a unique blend of hatchback practicality and SUV-like styling. Fun to drive with good fuel efficiency and a comfortable interior.",
  },
  {
    id: "7",
    name: "HONDA FIT",
    price: "1.09M",
    imageUrl: "/cars/honda-fit.jpeg",
    altText: "Black Honda Fit",
    year: "2014",
    engine: "1200cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "honda-fit-2014",
    description: "The versatile Honda Fit, known for its 'magic seats' and impressive interior space, making it highly adaptable for various needs. A reliable and fuel-efficient choice for families and individuals alike.",
  },
  {
    id: "8",
    name: "TOYOTA VITZ",
    price: "630K",
    imageUrl: "/cars/toyota-vitz-2012.jpeg",
    altText: "White Toyota Vitz",
    year: "2012",
    engine: "1000cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-vitz-2012",
    description: "A compact and dependable Toyota Vitz, offering excellent value and legendary Toyota reliability. Perfect for daily commutes, with easy handling and economical running costs.",
  },
  {
    id: "9",
    name: "SUZUKI",
    price: "570K",
    imageUrl: "/cars/suzuki.jpeg", // Ensure this image path is correct and exists
    altText: "White Suzuki Hatchback",
    engine: "1300cc",
    year: "2011",
    mileage: "Low Mileage",
    transmission: "Manual",
    fuelType: "Petrol",
    linkSlug: "suzuki-2011",
    description: "An economical Suzuki, known for its compact size and efficiency. A great choice for first-time car owners or as a second family car, offering reliable performance and low maintenance.",
  },
];

// Interface for detailed car properties (including description)
interface CarDetail {
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
  linkSlug: string;
  description?: string; // Optional longer description for the detail page
}

// Function to simulate fetching a single car's data
async function getCarBySlug(slug: string): Promise<CarDetail | undefined> {
  // In a real application, this would be an API call or database query
  // For now, we find it from our static 'allCars' array
  return allCars.find(car => car.linkSlug === slug);
}

// generateStaticParams tells Next.js which paths to pre-render at build time
// This is crucial for Static Site Generation (SSG) of dynamic routes.
export async function generateStaticParams() {
  // In a real app, you'd fetch all possible linkSlugs from your database/CMS
  return allCars.map((car) => ({
    slug: car.linkSlug,
  }));
}

// Generates dynamic metadata (title, description) for each car's detail page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    return {
      title: "Car Not Found - Segen Motors",
      description: "The car you are looking for does not exist or has been sold.",
    };
  }

  return {
    title: `${car.name} - ${car.price} | Segen Motors`,
    description: car.description || `View details for the ${car.name}, available at Segen Motors. Price: ${car.price}.`,
    // You can add more specific meta tags here if needed, e.g., Open Graph for social sharing
    // openGraph: {
    //   images: [car.imageUrl],
    // },
  };
}


// Main component for the individual car detail page
export default async function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    // If car not found, display a user-friendly message and a link back
    return (
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Car Not Found!</h1>
        <p className="text-lg text-gray-700 mb-8">
          The vehicle you are looking for does not exist or has been sold. Please check our other available cars.
        </p>
        <Link href="/inventory" passHref>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            View All Available Cars
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"> {/* Align items to start */}
        {/* Car Image Section */}
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={car.imageUrl}
            alt={car.altText || car.name}
            fill
            className="object-cover object-center"
            priority // Set priority for the main image on the detail page
            sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
          />
        </div>

        {/* Car Details Section */}
        <div>
          <h1 className="text-4xl font-extrabold text-blue-700 mb-3">{car.name}</h1>
          <p className="text-3xl font-bold text-green-600 mb-4">{car.price}</p>

          <div className="space-y-2 text-gray-700 mb-6 border-t border-b py-4"> {/* Added border for visual separation */}
            {car.year && <p className="text-lg"><strong className="font-semibold">Year:</strong> {car.year}</p>}
            {car.engine && <p className="text-lg"><strong className="font-semibold">Engine:</strong> {car.engine}</p>}
            {car.mileage && <p className="text-lg"><strong className="font-semibold">Mileage:</strong> {car.mileage}</p>}
            {car.transmission && <p className="text-lg"><strong className="font-semibold">Transmission:</strong> {car.transmission}</p>}
            {car.fuelType && <p className="text-lg"><strong className="font-semibold">Fuel Type:</strong> {car.fuelType}</p>}
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-3">About this Car</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {car.description || `Discover the full features and detailed specifications of this ${car.name}. This vehicle offers a great balance of performance and comfort. Contact Segen Motors for more information or to schedule a test drive.`}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href={`tel:+254759500436`} className="flex-1">
              <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                📞 Call Us
              </Button>
            </a>
            <a href={`https://wa.me/254759500436?text=I'm interested in the ${car.name} (${car.price}) you have listed with linkSlug: ${car.linkSlug}.`} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white shadow-md">
                💬 WhatsApp Us
              </Button>
            </a>
          </div>

          {/* Back to Inventory Link */}
          <div className="text-center">
            <Link href="/inventory" passHref>
              <Button variant="link" className="text-blue-600 hover:text-blue-800">
                ← Back to Inventory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}