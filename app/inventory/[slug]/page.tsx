// app/inventory/[slug]/page.tsx

import { notFound } from "next/navigation";
import Image from "next/image";

// Sample car data (replace this with Firebase or DB fetch later)
const cars = [
  {
    slug: "Subaru-Impreza-2014",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    engine: "2000cc",
    year: "2014",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    description:
      "Sleek design, smooth drive, and great on fuel. A perfect daily driver with a powerful 2000cc engine.",
  },
  {
    slug: "Nissan-Advan-2011",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Nissan Advan red",
    engine: "1300cc",
    year: "2011",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    description:
      "Compact and reliable. Great for personal or business use with low fuel consumption and automatic transmission.",
  },
  {
    slug: "Toyota-Vitz-2017",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg",
    altText: "Blue Toyota Vitz",
    engine: "1000cc",
    year: "2018",
    mileage: "low mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    description:
      "Economical city car with a fresh look. Modern design, perfect for urban driving. Low maintenance and excellent mileage.",
  },
];

export default function CarDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const car = cars.find((c) => c.slug === params.slug);

  if (!car) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">{car.name}</h1>

      <Image
        src={car.imageUrl}
        alt={car.altText}
        width={800}
        height={450}
        className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
      />

      <p className="text-lg text-gray-700 mb-6">{car.description}</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-lg mb-8">
        <li>📅 <strong>Year:</strong> {car.year}</li>
        <li>⚙️ <strong>Transmission:</strong> {car.transmission}</li>
        <li>⛽ <strong>Fuel Type:</strong> {car.fuelType}</li>
        <li>🛞 <strong>Mileage:</strong> {car.mileage}</li>
        <li>🧰 <strong>Engine:</strong> {car.engine}</li>
        <li>💰 <strong>Price:</strong> {car.price}</li>
      </ul>

      <div className="text-center">
        <a
          href="https://wa.me/254759500436"
          target="_blank"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
        >
          Chat with us on WhatsApp 📞
        </a>
      </div>
    </div>
  );
}
