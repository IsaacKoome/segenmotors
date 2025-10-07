// app/inventory/page.tsx
import { CarCard } from "@/components/CarCard"; // Import your CarCard component

// Define your static car data
// NOTE: For better scalability, consider moving this car data to a centralized file (e.g., lib/data/cars.ts)
// and importing it here and in app/inventory/[slug]/page.tsx
const cars = [
  {
    id: "1",
    name: "SUBARU IMPREZA",
    price: "1.25M",
    imageUrl: "/cars/white-subaru.jpeg",
    altText: "White Subaru Impreza",
    year: "2014",
    engine: "2000cc",
    mileage: "Low Mileage", // Standardized casing
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "subaru-impreza-2014", // Lowercase, hyphenated
  },
  {
    id: "2",
    name: "NISSAN ADVAN",
    price: "480K",
    imageUrl: "/cars/nissanadvan.jpeg",
    altText: "Red Nissan Advan van", // Corrected alt text to match car
    year: "2011",
    engine: "1300cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-advan-2011", // Lowercase, hyphenated
  },
  {
    id: "3",
    name: "NISSAN NV350",
    price: "2.8M",
    imageUrl: "/cars/nissan-nv350.jpeg", // Corrected image file name for consistency (was nissan note.jpeg in comment)
    altText: "White Nissan NV350 van", // Corrected alt text
    year: "2018",
    engine: "1500cc",
    mileage: "Low Mileage",
    transmission: "Manual",
    fuelType: "Diesel",
    linkSlug: "nissan-nv350-2018", // Lowercase, hyphenated
  },
  {
    id: "4",
    name: "TOYOTA VITZ",
    price: "1.28M",
    imageUrl: "/cars/vitz-blue.jpeg",
    altText: "Blue Toyota Vitz Compact", // More specific alt text
    engine: "1000cc",
    year: "2018",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "toyota-vitz-2018", // Adjusted year in slug for consistency with data
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
    linkSlug: "daihatsu-mira-2017", // Lowercase, hyphenated
  },
  {
    id: "6",
    name: "NISSAN JUKE",
    price: "1.15M", // Added 'M' for consistency
    imageUrl: "/cars/nissan-juke.jpeg",
    altText: "Black Nissan Juke",
    year: "2018",
    engine: "1200cc", // Added 'cc' for consistency
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "nissan-juke-2018", // Lowercase, hyphenated
  },
  {
    id: "7",
    name: "HONDA FIT",
    price: "1.09M",
    imageUrl: "/cars/honda-fit.jpeg",
    altText: "Black Honda Fit", // Corrected alt text
    year: "2014",
    engine: "1200cc",
    mileage: "Low Mileage",
    transmission: "Automatic",
    fuelType: "Petrol",
    linkSlug: "honda-fit-2014", // Lowercase, hyphenated
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
    linkSlug: "toyota-vitz-2012", // Lowercase, hyphenated
  },
  {
    id: "9",
    name: "SUZUKI",
    price: "570K",
    imageUrl: "/cars/suzuki.jpeg", // Ensure this image exists in public/cars
    altText: "White Suzuki Hatchback", // More descriptive alt text
    engine: "1300cc",
    year: "2011",
    mileage: "Low Mileage", // Added missing field
    transmission: "Manual", // Assuming common for this model, adjust if needed
    fuelType: "Petrol", // Added missing field
    linkSlug: "suzuki-2011", // Added unique, URL-friendly slug
  }
];

export const metadata = {
  title: "Segen Motors - Available Inventory",
  description: "Explore our wide selection of quality used cars for sale.",
};


export default function InventoryPage() {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Available Vehicles 🚗</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}